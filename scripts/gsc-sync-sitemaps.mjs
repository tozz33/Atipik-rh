#!/usr/bin/env node
/**
 * Synchronise les sitemaps dans Google Search Console (API Webmasters v3).
 *
 * Authentification (par priorité) :
 * 1. OAuth utilisateur : secrets/gsc-oauth-token.json (npm run seo:gsc-oauth-setup)
 * 2. Compte de service : secrets/gsc-service-account.json ou variables GSC_SERVICE_ACCOUNT_*
 *
 * Usage : npm run seo:gsc-sync
 */
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { GoogleAuth, OAuth2Client } from 'google-auth-library'

const SITE_URL = process.env.GSC_SITE_URL || 'sc-domain:atipikrh.com'
const BASE = process.env.SITE_URL || 'https://www.atipikrh.com'
const SITEMAP_TO_SUBMIT = `${BASE}/sitemap.xml`

/** Sitemaps à retirer de GSC (legacy WordPress + entrée en erreur à nettoyer). */
const SITEMAPS_TO_DELETE = [
  `${BASE}/sitemap.xml`,
  'https://atipikrh.com/sitemap_index.xml',
  `${BASE}/sitemap_index.xml`,
  'https://atipikrh.com/sitemap.xml',
]

const WEBMASTERS_SCOPE = 'https://www.googleapis.com/auth/webmasters'

const OAUTH_TOKEN_PATH = resolve(process.cwd(), 'secrets/gsc-oauth-token.json')
const SERVICE_ACCOUNT_DEFAULT = resolve(process.cwd(), 'secrets/gsc-service-account.json')

function loadOAuthTokenFile() {
  if (!existsSync(OAUTH_TOKEN_PATH)) return null
  return JSON.parse(readFileSync(OAUTH_TOKEN_PATH, 'utf8'))
}

function loadServiceAccount() {
  if (process.env.GSC_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON)
  }
  const pathEnv = process.env.GSC_SERVICE_ACCOUNT_JSON_PATH
  if (pathEnv) {
    const p = resolve(pathEnv)
    if (!existsSync(p)) throw new Error(`Fichier introuvable : ${p}`)
    return JSON.parse(readFileSync(p, 'utf8'))
  }
  if (existsSync(SERVICE_ACCOUNT_DEFAULT)) {
    return JSON.parse(readFileSync(SERVICE_ACCOUNT_DEFAULT, 'utf8'))
  }
  return null
}

/** @returns {Promise<import('google-auth-library').GoogleAuth | OAuth2Client>} */
async function createAuth() {
  const preferOAuth = process.env.GSC_AUTH === 'oauth'
  const preferServiceAccount = process.env.GSC_AUTH === 'service_account'
  const oauthData = loadOAuthTokenFile()
  const serviceAccount = loadServiceAccount()

  if ((preferOAuth || (!preferServiceAccount && oauthData)) && oauthData?.refresh_token) {
    const oauth2 = new OAuth2Client(
      oauthData.client_id,
      oauthData.client_secret,
      'http://localhost:4321/oauth2callback'
    )
    oauth2.setCredentials({ refresh_token: oauthData.refresh_token })
    console.log('Auth : compte Google (OAuth) — propriétaire Search Console\n')
    return oauth2
  }

  if (serviceAccount) {
    console.log(`Auth : compte de service ${serviceAccount.client_email}\n`)
    return new GoogleAuth({
      credentials: serviceAccount,
      scopes: [WEBMASTERS_SCOPE],
    })
  }

  return null
}

function encodeFeedPath(feedUrl) {
  return encodeURIComponent(feedUrl)
}

async function getBearerToken(auth) {
  if (auth instanceof OAuth2Client) {
    const t = await auth.getAccessToken()
    return t.token
  }
  const client = await auth.getClient()
  const t = await client.getAccessToken()
  return t.token
}

async function apiRequest(auth, method, path) {
  const token = await getBearerToken(auth)
  if (!token) throw new Error('Impossible d’obtenir un token OAuth')

  const url = `https://www.googleapis.com/webmasters/v3${path}`
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${token}` },
  })

  const text = await res.text()
  let body = null
  try {
    body = text ? JSON.parse(text) : null
  } catch {
    body = text
  }

  return { ok: res.ok, status: res.status, body }
}

async function listSitemaps(auth) {
  const site = encodeURIComponent(SITE_URL)
  const { ok, status, body } = await apiRequest(auth, 'GET', `/sites/${site}/sitemaps`)
  if (!ok) throw new Error(`Liste sitemaps échouée (${status}): ${JSON.stringify(body)}`)
  return body.sitemap || []
}

async function deleteSitemap(auth, feedUrl) {
  const site = encodeURIComponent(SITE_URL)
  const feed = encodeFeedPath(feedUrl)
  const { ok, status, body } = await apiRequest(
    auth,
    'DELETE',
    `/sites/${site}/sitemaps/${feed}`
  )
  if (ok || status === 404) return { feedUrl, status, deleted: ok }
  return { feedUrl, status, deleted: false, error: body }
}

async function submitSitemap(auth, feedUrl) {
  const site = encodeURIComponent(SITE_URL)
  const feed = encodeFeedPath(feedUrl)
  const { ok, status, body } = await apiRequest(
    auth,
    'PUT',
    `/sites/${site}/sitemaps/${feed}`
  )
  if (!ok) throw new Error(`Soumission échouée (${status}): ${JSON.stringify(body)}`)
  return { feedUrl, status }
}

function printPermissionHelp(errMessage) {
  const is403 = /403|permission|forbidden/i.test(errMessage)
  const isEmailBug = /sufficient permission/i.test(errMessage)

  if (is403 && isEmailBug) {
    console.error(`
⚠️  Le compte de service est valide dans Google Cloud, mais Search Console refuse l’accès.

Si l’ajout de l’email dans GSC affiche « adresse introuvable », c’est un bug Google connu
(synchronisation IAM ↔ Search Console pour les comptes de service créés récemment).
Voir : https://support.google.com/webmasters/thread/431407723

Contournement immédiat (compte Google personnel propriétaire de GSC) :
  1. Créer un client OAuth « Application de bureau » (voir docs/GSC_API_SETUP.md)
  2. npm run seo:gsc-oauth-setup
  3. npm run seo:gsc-sync

Soumission manuelle : https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Aatipikrh.com
`)
    return
  }

  console.error(`
❌ Authentification Search Console manquante.

Option A — OAuth (recommandé si « adresse introuvable ») : npm run seo:gsc-oauth-setup
Option B — Compte de service : secrets/gsc-service-account.json + invité dans GSC

Guide : docs/GSC_API_SETUP.md
`)
}

function printSetupHelp() {
  console.error(`
❌ Aucune authentification GSC configurée.

Option A (recommandée si compte de service « introuvable » dans GSC) :
  npm run seo:gsc-oauth-setup   → secrets/gsc-oauth-token.json

Option B — Compte de service :
  secrets/gsc-service-account.json + utilisateur « Complet » dans Search Console

Guide : docs/GSC_API_SETUP.md
`)
}

async function main() {
  const auth = await createAuth()
  if (!auth) {
    printSetupHelp()
    process.exit(1)
  }

  console.log('--- GSC sync sitemaps ---')
  console.log(`Propriété : ${SITE_URL}`)
  console.log(`Soumission cible : ${SITEMAP_TO_SUBMIT}\n`)

  let existing
  try {
    existing = await listSitemaps(auth)
  } catch (e) {
    printPermissionHelp(e.message || String(e))
    throw e
  }
  console.log(`Sitemaps actuels dans GSC (${existing.length}) :`)
  for (const s of existing) {
    console.log(`  - ${s.path} (${s.lastSubmitted || '—'})`)
  }
  console.log()

  const toDelete = new Set(SITEMAPS_TO_DELETE)
  for (const s of existing) {
    if (s.path?.includes('sitemap_index')) toDelete.add(s.path)
  }

  for (const feedUrl of toDelete) {
    const r = await deleteSitemap(auth, feedUrl)
    const icon = r.deleted ? '✅' : r.status === 404 ? 'ℹ️' : '❌'
    console.log(`${icon} Suppression ${feedUrl} → HTTP ${r.status}`)
    if (r.error) console.log('   ', JSON.stringify(r.error))
  }

  console.log()
  const submitted = await submitSitemap(auth, SITEMAP_TO_SUBMIT)
  console.log(`✅ Soumis : ${submitted.feedUrl} (HTTP ${submitted.status})`)

  const after = await listSitemaps(auth)
  const found = after.find((s) => s.path === SITEMAP_TO_SUBMIT || s.path?.includes('sitemap.xml'))
  console.log('\nÉtat final :')
  if (found) {
    console.log(`  ${found.path}`)
    console.log(`  Dernière soumission : ${found.lastSubmitted || '—'}`)
    console.log(`  Dernier téléchargement : ${found.lastDownloaded || 'en attente'}`)
  }

  console.log('\n✅ GSC sync terminé')
}

main().catch((err) => {
  console.error('❌', err.message || err)
  process.exit(1)
})
