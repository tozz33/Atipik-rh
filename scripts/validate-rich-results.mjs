#!/usr/bin/env node
/**
 * Vérifie le JSON-LD (FAQPage, Course, LocalBusiness) sur les pages money en production.
 * Usage : node scripts/validate-rich-results.mjs [baseUrl]
 */
const BASE = process.argv[2] || process.env.SITE_URL || 'https://www.atipikrh.com'
/** URL canonique du site (indépendante de BASE lors des tests locaux). */
const CANONICAL_BASE = process.env.SITE_URL || 'https://www.atipikrh.com'

const PAGES = [
  {
    path: '/formations/cip',
    label: 'CIP',
    requiredTypes: ['FAQPage', 'Course'],
    titleIncludes: 'CIP',
  },
  {
    path: '/formations/fpa',
    label: 'FPA',
    requiredTypes: ['FAQPage', 'Course'],
    titleIncludes: 'FPA',
  },
  {
    path: '/bilan-de-competences',
    label: 'Bilan',
    requiredTypes: ['FAQPage'],
    titleIncludes: 'Bilan',
  },
]

function extractJsonLd(html) {
  const blocks = []
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  let m
  while ((m = re.exec(html)) !== null) {
    try {
      blocks.push(JSON.parse(m[1].trim()))
    } catch {
      blocks.push({ parseError: true })
    }
  }
  return blocks
}

function collectTypes(node, types = new Set()) {
  if (!node || typeof node !== 'object') return types
  if (Array.isArray(node)) {
    node.forEach((n) => collectTypes(n, types))
    return types
  }
  if (node['@type']) {
    const t = node['@type']
    if (Array.isArray(t)) t.forEach((x) => types.add(x))
    else types.add(t)
  }
  if (node['@graph']) collectTypes(node['@graph'], types)
  Object.values(node).forEach((v) => {
    if (v && typeof v === 'object') collectTypes(v, types)
  })
  return types
}

function getTitle(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i)
  return m ? m[1].trim() : ''
}

async function checkSitemap() {
  const url = `${BASE}/sitemap.xml`
  const res = await fetch(url)
  const text = await res.text()
  const count = (text.match(/<loc>/g) || []).length
  const hasMartineBeaudon = text.includes('/equipe/martine-beaudon')
  return { ok: res.ok, count, hasMartineBeaudon, url }
}

const LEGACY_SITEMAP_REDIRECTS = [
  ['/sitemap_index.xml', '/sitemap.xml'],
  ['/sitemap-index.xml', '/sitemap.xml'],
  ['/wp-sitemap.xml', '/sitemap.xml'],
]

const WP_CONTENT_PDF_REDIRECTS = [
  [
    '/wp-content/uploads/2021/03/Cadre-legal-du-Bilan-de-competences.pdf',
    '/documents/Cadre-legal-du-Bilan-de-competences.pdf',
  ],
  ['/wp-content/uploads/2022/02/Programme-de-formation-VAE-ATIPIK-RH.pdf', '/vae'],
]

const LEGACY_QUERY_REDIRECTS = [
  ['/?page_id=3328', '/'],
  ['/?mailpoet_page=captcha', '/'],
]

async function checkRedirect(fromPath, expectedLocationPart) {
  const url = `${BASE}${fromPath}`
  const res = await fetch(url, { redirect: 'manual' })
  const loc = res.headers.get('location') || ''
  const ok =
    (res.status === 301 || res.status === 308 || (res.status >= 300 && res.status < 400)) &&
    loc.replace(/\/$/, '').endsWith(expectedLocationPart.replace(/\/$/, ''))
  return { ok, status: res.status, location: loc, url }
}

async function main() {
  console.log(`--- Validation rich results — ${BASE} ---\n`)
  const errors = []

  const sitemap = await checkSitemap()
  console.log(
    `${sitemap.ok ? '✅' : '❌'} Sitemap: ${sitemap.count} URLs${sitemap.hasMartineBeaudon ? ' (⚠ martine-beaudon présent)' : ''}`
  )
  if (sitemap.hasMartineBeaudon) {
    errors.push('martine-beaudon ne doit pas figurer dans le sitemap')
  }

  const redir = await checkRedirect('/equipe/martine-beaudon', 'martine-baudon')
  console.log(
    `${redir.ok ? '✅' : '❌'} Redirect martine-beaudon → ${redir.status} ${redir.location || '(pas de Location)'}`
  )
  if (!redir.ok) errors.push('Redirect 301 martine-beaudon manquant ou incorrect')

  for (const [from, to] of LEGACY_SITEMAP_REDIRECTS) {
    const r = await checkRedirect(from, to)
    console.log(
      `${r.ok ? '✅' : '❌'} Redirect legacy ${from} → ${r.status} ${r.location || ''}`
    )
    if (!r.ok) errors.push(`Redirect legacy ${from} → ${to} manquant`)
  }

  for (const [from, to] of WP_CONTENT_PDF_REDIRECTS) {
    const r = await checkRedirect(from, to)
    console.log(
      `${r.ok ? '✅' : '❌'} Redirect PDF wp-content ${from} → ${r.status} ${r.location || ''}`
    )
    if (!r.ok) errors.push(`Redirect PDF wp-content ${from} → ${to} manquant`)
  }

  for (const [from, to] of LEGACY_QUERY_REDIRECTS) {
    const r = await checkRedirect(from, to)
    console.log(
      `${r.ok ? '✅' : '❌'} Redirect query legacy ${from} → ${r.status} ${r.location || ''}`
    )
    if (!r.ok) errors.push(`Redirect query legacy ${from} → ${to} manquant`)
  }

  const histoireRes = await fetch(`${BASE}/notre-histoire`)
  const histoireHtml = await histoireRes.text()
  const histoireCanon = histoireHtml.match(/rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
  const histoireTitle = getTitle(histoireHtml)
  const histoireOk =
    histoireRes.ok &&
    histoireCanon?.[1] === `${CANONICAL_BASE}/notre-histoire` &&
    !histoireTitle.includes('Test')
  console.log(
    `${histoireOk ? '✅' : '❌'} Notre-histoire: canonical + titre (${histoireCanon?.[1] || 'absent'})`
  )
  if (!histoireOk) errors.push('notre-histoire: canonical ou titre incorrect')

  for (const page of PAGES) {
    const url = `${BASE}${page.path}`
    const res = await fetch(url)
    const html = await res.text()
    if (!res.ok) {
      console.log(`❌ ${page.label}: HTTP ${res.status} ${url}`)
      errors.push(`${page.label}: HTTP ${res.status}`)
      continue
    }

    const title = getTitle(html)
    const ld = extractJsonLd(html)
    const types = new Set()
    ld.forEach((b) => collectTypes(b, types))

    const missing = page.requiredTypes.filter((t) => !types.has(t))
    const titleOk = !page.titleIncludes || title.includes(page.titleIncludes)

    const faqBlock = ld.find((b) => collectTypes(b).has('FAQPage'))
    const faqCount =
      faqBlock?.mainEntity?.length ??
      (Array.isArray(faqBlock) ? 0 : 0)

    console.log(`\n${missing.length === 0 && titleOk ? '✅' : '❌'} ${page.label} (${url})`)
    console.log(`   Title: ${title.slice(0, 80)}${title.length > 80 ? '…' : ''}`)
    console.log(`   JSON-LD types: ${[...types].sort().join(', ') || '(aucun)'}`)
    if (types.has('FAQPage')) {
      const faq = ld.flatMap((b) => {
        if (b['@type'] === 'FAQPage') return b.mainEntity || []
        if (b['@graph']) {
          return b['@graph'].filter((g) => g['@type'] === 'FAQPage').flatMap((g) => g.mainEntity || [])
        }
        return []
      })
      console.log(`   FAQ questions: ${faq.length}`)
    }

    if (missing.length) errors.push(`${page.label}: types manquants ${missing.join(', ')}`)
    if (!titleOk) errors.push(`${page.label}: title ne contient pas "${page.titleIncludes}"`)
    if (page.requiredTypes.includes('FAQPage') && !types.has('FAQPage')) {
      errors.push(`${page.label}: pas de FAQPage`)
    }
  }

  console.log('\n--- Rich Results Test (liens manuels / navigateur) ---')
  for (const page of PAGES) {
    const u = encodeURIComponent(`${BASE}${page.path}`)
    console.log(
      `${page.label}: https://search.google.com/test/rich-results?url=${u}`
    )
  }

  console.log('\n--- Google Search Console — sitemap ---')
  console.log(
    'Soumission: https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Aatipikrh.com'
  )
  console.log(`URL à saisir: ${BASE}/sitemap.xml`)

  if (errors.length) {
    console.log('\n❌ Échecs:')
    errors.forEach((e) => console.log(`  - ${e}`))
    process.exit(1)
  }
  console.log('\n✅ Validation rich results OK')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
