#!/usr/bin/env node
/**
 * Configuration OAuth unique (compte Google personnel propriétaire GSC).
 * Contournement du bug Google « adresse introuvable » pour les comptes de service récents.
 *
 * Prérequis : client OAuth « Application de bureau » dans le projet GCP.
 * Variables : GSC_OAUTH_CLIENT_ID, GSC_OAUTH_CLIENT_SECRET (ou .env.local)
 *
 * Usage : npm run seo:gsc-oauth-setup
 */
import { createServer } from 'node:http'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { OAuth2Client } from 'google-auth-library'

const WEBMASTERS_SCOPE = 'https://www.googleapis.com/auth/webmasters'
const REDIRECT_PORT = 4321
const REDIRECT_URI = `http://localhost:${REDIRECT_PORT}/oauth2callback`
const TOKEN_PATH = resolve(process.cwd(), 'secrets/gsc-oauth-token.json')

function loadEnvLocal() {
  const p = resolve(process.cwd(), '.env.local')
  if (!existsSync(p)) return
  for (const line of readFileSync(p, 'utf8').split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const i = t.indexOf('=')
    if (i < 1) continue
    const key = t.slice(0, i).trim()
    const val = t.slice(i + 1).trim().replace(/^["']|["']$/g, '')
    if (!process.env[key]) process.env[key] = val
  }
}

function openBrowser(url) {
  const start =
    process.platform === 'win32'
      ? `start "" "${url}"`
      : process.platform === 'darwin'
        ? `open "${url}"`
        : `xdg-open "${url}"`
  import('node:child_process').then(({ exec }) => exec(start))
}

async function main() {
  loadEnvLocal()
  const clientId = process.env.GSC_OAUTH_CLIENT_ID
  const clientSecret = process.env.GSC_OAUTH_CLIENT_SECRET
  if (!clientId || !clientSecret) {
    console.error(`
❌ Définir GSC_OAUTH_CLIENT_ID et GSC_OAUTH_CLIENT_SECRET

1. https://console.cloud.google.com/apis/credentials?project=atipik-rh-498120
2. Créer des identifiants → ID client OAuth → Application de bureau
3. Copier ID et secret dans .env.local :

GSC_OAUTH_CLIENT_ID=....apps.googleusercontent.com
GSC_OAUTH_CLIENT_SECRET=....

4. Relancer : npm run seo:gsc-oauth-setup
`)
    process.exit(1)
  }

  const oauth2 = new OAuth2Client(clientId, clientSecret, REDIRECT_URI)
  const authUrl = oauth2.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: [WEBMASTERS_SCOPE],
  })

  const code = await new Promise((resolvePromise, reject) => {
    const server = createServer((req, res) => {
      const url = new URL(req.url || '/', `http://localhost:${REDIRECT_PORT}`)
      if (url.pathname !== '/oauth2callback') {
        res.writeHead(404)
        res.end('Not found')
        return
      }
      const err = url.searchParams.get('error')
      if (err) {
        res.writeHead(400)
        res.end(`Erreur OAuth : ${err}`)
        reject(new Error(err))
        server.close()
        return
      }
      const c = url.searchParams.get('code')
      if (!c) {
        res.writeHead(400)
        res.end('Code manquant')
        return
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(
        '<p>Autorisation OK. Vous pouvez fermer cette fenêtre et revenir au terminal.</p>'
      )
      resolvePromise(c)
      server.close()
    })
    server.listen(REDIRECT_PORT, () => {
      console.log('Ouvrez ce lien dans le navigateur (compte propriétaire Search Console) :\n')
      console.log(authUrl)
      console.log('\nEn attente du retour OAuth sur localhost:4321 …\n')
      openBrowser(authUrl)
    })
    server.on('error', reject)
  })

  const { tokens } = await oauth2.getToken(code)
  if (!tokens.refresh_token) {
    console.error(
      '❌ Pas de refresh_token. Révoquez l’accès dans https://myaccount.google.com/permissions puis relancez.'
    )
    process.exit(1)
  }

  writeFileSync(
    TOKEN_PATH,
    JSON.stringify(
      {
        type: 'authorized_user',
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: tokens.refresh_token,
      },
      null,
      2
    ),
    'utf8'
  )

  console.log(`✅ Jetons enregistrés : ${TOKEN_PATH}`)
  console.log('Lancez : npm run seo:gsc-sync')
}

main().catch((e) => {
  console.error('❌', e.message || e)
  process.exit(1)
})
