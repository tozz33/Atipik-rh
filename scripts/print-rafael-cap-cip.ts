/**
 * Affiche les blocs de la fiche CIP Rafael Cap prêts à coller.
 * Usage :
 *   npm run seo:rafael-cip              — tout afficher
 *   npm run seo:rafael-cip -- --list    — champs disponibles
 *   npm run seo:rafael-cip -- --field resume
 *   npm run seo:rafael-cip -- --copy titre   — copie dans le presse-papiers (Windows / macOS)
 */
import { execSync } from 'node:child_process'
import { platform } from 'node:os'
import { RAFAEL_CAP_CIP } from '../lib/seo/rafaelCapCip'

const SEP = '\n' + '─'.repeat(72) + '\n'

/** Champs copiables : clé CLI → { libellé back-office, contenu } */
const FIELDS: Record<string, { label: string; body: string }> = {
  meta: {
    label: 'Métadonnées (référence, URLs)',
    body: [
      `Référence : ${RAFAEL_CAP_CIP.reference}`,
      `Fiche : ${RAFAEL_CAP_CIP.ficheUrl}`,
      `Site organisme (UTM) : ${RAFAEL_CAP_CIP.organismeSiteUrl}`,
    ].join('\n'),
  },
  titre: { label: 'Titre (long)', body: RAFAEL_CAP_CIP.titre },
  titreCourt: { label: 'Titre (court)', body: RAFAEL_CAP_CIP.titreCourt },
  lePlus: { label: 'Le + de cette formation', body: RAFAEL_CAP_CIP.lePlus },
  resume: { label: 'Description / résumé', body: RAFAEL_CAP_CIP.resume },
  objectifs: { label: 'Objectif', body: RAFAEL_CAP_CIP.objectifs },
  public: { label: 'Public visé', body: RAFAEL_CAP_CIP.public },
  prerequis: { label: 'Prérequis', body: RAFAEL_CAP_CIP.prerequis },
  competences: {
    label: 'Compétences visées',
    body: RAFAEL_CAP_CIP.competencesVisees,
  },
  debouches: { label: 'Débouchés professionnels', body: RAFAEL_CAP_CIP.debouches },
  motsCles: { label: 'Mots-clés', body: RAFAEL_CAP_CIP.motsCles },
  modalites: {
    label: "Modalités d'enseignement",
    body: RAFAEL_CAP_CIP.modalitesEnseignement,
  },
  conditions: {
    label: "Conditions d'admission (intro + détail)",
    body: `${RAFAEL_CAP_CIP.conditionsAdmissionIntro}\n\n${RAFAEL_CAP_CIP.conditionsAdmissionDetail}`,
  },
  conditionsIntro: {
    label: "Conditions d'admission — intro prescripteurs",
    body: RAFAEL_CAP_CIP.conditionsAdmissionIntro,
  },
  conditionsDetail: {
    label: "Conditions d'admission — détail",
    body: RAFAEL_CAP_CIP.conditionsAdmissionDetail,
  },
  sessions: {
    label: 'Sessions CARIF (libellés recommandés)',
    body: RAFAEL_CAP_CIP.sessions
      .map(
        (s) =>
          `CARIF ${s.carif}\n  ${s.libelleSession}\n  ${formatDateFr(s.dateDebut)} → ${formatDateFr(s.dateFin)}\n  ${s.adresse}`
      )
      .join('\n\n'),
  },
}

function formatDateFr(iso: string): string {
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

function printBlock(key: string): void {
  const field = FIELDS[key]
  if (!field) return
  process.stdout.write(`${SEP}[${key}] ${field.label}\n\n${field.body}\n`)
}

function copyToClipboard(text: string): void {
  const plat = platform()
  try {
    if (plat === 'win32') {
      const b64 = Buffer.from(text, 'utf8').toString('base64')
      execSync(
        `powershell -NoProfile -Command "[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String('${b64}')) | Set-Clipboard"`,
        { stdio: 'pipe' }
      )
    } else if (plat === 'darwin') {
      execSync('pbcopy', { input: text, stdio: ['pipe', 'ignore', 'inherit'] })
    } else {
      execSync('xclip -selection clipboard', { input: text, stdio: ['pipe', 'ignore', 'inherit'] })
    }
    console.error(`✓ Copié dans le presse-papiers (${plat}).`)
  } catch {
    console.error('⚠ Copie presse-papiers impossible — le texte reste affiché ci-dessous.')
  }
}

function parseArgs(argv: string[]): { list: boolean; field?: string; copy?: string; all: boolean } {
  let list = false
  let field: string | undefined
  let copy: string | undefined
  let all = true

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--list' || a === '-l') list = true
    else if ((a === '--field' || a === '-f') && argv[i + 1]) {
      field = argv[++i]
      all = false
    } else if ((a === '--copy' || a === '-c') && argv[i + 1]) {
      copy = argv[++i]
      all = false
    }
  }

  return { list, field, copy, all }
}

function main(): void {
  const { list, field, copy, all } = parseArgs(process.argv.slice(2))

  if (list) {
    console.log('Champs disponibles (--field ou --copy) :\n')
    for (const [key, { label }] of Object.entries(FIELDS)) {
      console.log(`  ${key.padEnd(18)} ${label}`)
    }
    console.log('\nExemples :')
    console.log('  npm run seo:rafael-cip -- --field resume')
    console.log('  npm run seo:rafael-cip -- --copy objectifs')
    return
  }

  if (copy) {
    const keys = copy === 'all' ? Object.keys(FIELDS) : [copy]
    const parts: string[] = []
    for (const key of keys) {
      const f = FIELDS[key]
      if (!f) {
        console.error(`Champ inconnu : "${key}". Utilisez --list.`)
        process.exit(1)
      }
      parts.push(`=== ${f.label} ===\n\n${f.body}`)
    }
    const text = parts.join('\n\n')
    copyToClipboard(text)
    if (keys.length === 1) printBlock(keys[0])
    else {
      for (const key of keys) printBlock(key)
    }
    return
  }

  if (field) {
    const f = FIELDS[field]
    if (!f) {
      console.error(`Champ inconnu : "${field}". Utilisez --list.`)
      process.exit(1)
    }
    printBlock(field)
    return
  }

  if (all) {
    console.log(
      `Fiche Rafael Cap CIP — réf. ${RAFAEL_CAP_CIP.reference}\n` +
        `Coller chaque bloc dans le back-office CMaFormation.\n` +
        `Copie rapide : npm run seo:rafael-cip -- --copy <champ>\n`
    )
    for (const key of Object.keys(FIELDS)) printBlock(key)
  }
}

main()
