#!/usr/bin/env node
import { promises as fs } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const ROOT_DIR = process.cwd()
const LOGOS_DIR = path.join(ROOT_DIR, 'public', 'images', 'logos')

const MAX_FILE_SIZE_KB = 1024

const expectedFiles = [
  {
    path: 'atipik-logo.svg',
    type: 'svg',
    required: true,
    maxKb: 500,
    minWidth: 300,
    minHeight: 80,
  },
  {
    path: 'atipik-logo-white.svg',
    type: 'svg',
    required: true,
    maxKb: 500,
    minWidth: 300,
    minHeight: 80,
  },
  {
    path: 'atipik-logo.png',
    type: 'png',
    required: true,
    maxKb: MAX_FILE_SIZE_KB,
    minWidth: 900,
    minHeight: 250,
  },
  {
    path: 'atipik-logo-white.png',
    type: 'png',
    required: true,
    maxKb: MAX_FILE_SIZE_KB,
    minWidth: 900,
    minHeight: 250,
  },
  {
    path: 'favicon.png',
    type: 'png',
    required: true,
    maxKb: 256,
    minWidth: 32,
    minHeight: 32,
  },
]

function formatKb(bytes) {
  return (bytes / 1024).toFixed(1)
}

function parseSvgDimension(value) {
  if (!value) return null
  const numericValue = Number.parseFloat(String(value).replace(/[^\d.]/g, ''))
  return Number.isFinite(numericValue) ? numericValue : null
}

async function readPngDimensions(filePath) {
  const buffer = await fs.readFile(filePath)
  if (buffer.length < 24) {
    throw new Error('fichier PNG trop court')
  }

  const signature = buffer.subarray(0, 8)
  const expectedSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  if (!signature.equals(expectedSignature)) {
    throw new Error('signature PNG invalide')
  }

  const chunkType = buffer.toString('ascii', 12, 16)
  if (chunkType !== 'IHDR') {
    throw new Error('chunk IHDR introuvable')
  }

  const width = buffer.readUInt32BE(16)
  const height = buffer.readUInt32BE(20)
  return { width, height }
}

async function readSvgDimensions(filePath) {
  const content = await fs.readFile(filePath, 'utf8')
  const svgOpenTag = content.match(/<svg\b[^>]*>/is)?.[0]
  if (!svgOpenTag) {
    throw new Error('balise svg introuvable')
  }

  const widthMatch = svgOpenTag.match(/(?:^|\s)width=["']([^"']+)["']/i)
  const heightMatch = svgOpenTag.match(/(?:^|\s)height=["']([^"']+)["']/i)
  const viewBoxMatch = svgOpenTag.match(/(?:^|\s)viewBox=["']([^"']+)["']/i)

  let width = parseSvgDimension(widthMatch?.[1])
  let height = parseSvgDimension(heightMatch?.[1])

  if ((!width || !height) && viewBoxMatch?.[1]) {
    const parts = viewBoxMatch[1].trim().split(/\s+/)
    if (parts.length === 4) {
      const vbWidth = Number.parseFloat(parts[2])
      const vbHeight = Number.parseFloat(parts[3])
      if (!width && Number.isFinite(vbWidth)) width = vbWidth
      if (!height && Number.isFinite(vbHeight)) height = vbHeight
    }
  }

  if (!width || !height) {
    throw new Error('dimensions SVG introuvables')
  }

  return { width, height }
}

async function verifyFile(rule) {
  const absolutePath = path.join(LOGOS_DIR, rule.path)
  let stat

  try {
    stat = await fs.stat(absolutePath)
  } catch {
    if (rule.required) {
      return { ok: false, file: rule.path, reason: 'fichier manquant' }
    }
    return { ok: true, file: rule.path, skipped: true }
  }

  const sizeKb = Number(formatKb(stat.size))
  if (sizeKb > rule.maxKb) {
    return {
      ok: false,
      file: rule.path,
      reason: `poids trop eleve (${sizeKb} KB > ${rule.maxKb} KB)`,
    }
  }

  try {
    const dimensions =
      rule.type === 'png'
        ? await readPngDimensions(absolutePath)
        : await readSvgDimensions(absolutePath)

    if (dimensions.width < rule.minWidth || dimensions.height < rule.minHeight) {
      return {
        ok: false,
        file: rule.path,
        reason: `dimensions insuffisantes (${Math.round(dimensions.width)}x${Math.round(
          dimensions.height
        )}, minimum ${rule.minWidth}x${rule.minHeight})`,
      }
    }

    return {
      ok: true,
      file: rule.path,
      sizeKb,
      width: Math.round(dimensions.width),
      height: Math.round(dimensions.height),
    }
  } catch (error) {
    return {
      ok: false,
      file: rule.path,
      reason: `lecture invalide: ${error.message}`,
    }
  }
}

async function main() {
  console.log('--- Verification logos pre-deploiement ---')
  console.log(`Dossier cible: ${LOGOS_DIR}\n`)

  const results = await Promise.all(expectedFiles.map(verifyFile))
  const failures = results.filter((result) => !result.ok)
  const successes = results.filter((result) => result.ok)

  for (const result of successes) {
    if (result.skipped) {
      console.log(`- ${result.file}: ignore`)
      continue
    }
    console.log(`✅ ${result.file}: ${result.width}x${result.height}, ${result.sizeKb} KB`)
  }

  for (const result of failures) {
    console.log(`❌ ${result.file}: ${result.reason}`)
  }

  console.log('\nChecklist:')
  console.log('- Presence fichiers requis')
  console.log('- Taille maximale par fichier')
  console.log('- Dimensions minimales (qualite HD)')

  if (failures.length > 0) {
    console.log(`\nResultat: ECHEC (${failures.length} erreur(s))`)
    process.exit(1)
  }

  console.log('\nResultat: OK')
}

main().catch((error) => {
  console.error(`Erreur inattendue: ${error.message}`)
  process.exit(1)
})
