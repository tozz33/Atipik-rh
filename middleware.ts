import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/** Paramètres WordPress legacy à retirer. */
const LEGACY_QUERY_PARAMS = ['page_id', 'mailpoet_page', 's', 'trk']

/** Paramètres UTM : redirection 301 vers l'URL propre (évite doublons canoniques GSC). */
const UTM_QUERY_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

/** PDFs wp-content migrés vers de nouvelles destinations. */
const WP_CONTENT_REDIRECTS: Record<string, string> = {
  '/wp-content/uploads/2021/03/Cadre-legal-du-Bilan-de-competences.pdf':
    '/documents/Cadre-legal-du-Bilan-de-competences.pdf',
  '/wp-content/uploads/2022/02/Programme-de-formation-VAE-ATIPIK-RH.pdf': '/vae',
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname } = url

  // SEO : forcer une seule version d'URL publique pour éviter les doublons.
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? ''
  if (host === 'atipikrh.com') {
    url.hostname = 'www.atipikrh.com'
    return NextResponse.redirect(url, 301)
  }

  const specificRedirect = WP_CONTENT_REDIRECTS[pathname]
  if (specificRedirect) {
    return NextResponse.redirect(new URL(specificRedirect, request.url), 301)
  }

  if (pathname.startsWith('/wp-content/')) {
    return NextResponse.redirect(new URL('/', request.url), 301)
  }

  const hasLegacyParam = LEGACY_QUERY_PARAMS.some((p) => request.nextUrl.searchParams.has(p))
  if (hasLegacyParam) {
    const cleanUrl = request.nextUrl.clone()
    LEGACY_QUERY_PARAMS.forEach((p) => cleanUrl.searchParams.delete(p))
    return NextResponse.redirect(cleanUrl, 301)
  }

  const hasUtmParam = UTM_QUERY_PARAMS.some((p) => request.nextUrl.searchParams.has(p))
  if (hasUtmParam) {
    const cleanUrl = request.nextUrl.clone()
    UTM_QUERY_PARAMS.forEach((p) => cleanUrl.searchParams.delete(p))
    return NextResponse.redirect(cleanUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|images|documents|fonts).*)'],
}
