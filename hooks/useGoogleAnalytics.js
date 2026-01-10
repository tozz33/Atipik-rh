import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { initGA, trackPageView, isConsentGiven } from '../lib/analytics'

// Hook pour gérer Google Analytics avec Next.js
export const useGoogleAnalytics = () => {
  const router = useRouter()

  // Initialiser GA au montage si le consentement est donné
  useEffect(() => {
    if (isConsentGiven()) {
      initGA()
    }
  }, [])

  // Écouter les changements de consentement dans localStorage
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'cookieConsent') {
        try {
          const consent = JSON.parse(e.newValue)
          if (consent && consent.analytics === true) {
            initGA()
            // Suivre la page actuelle après initialisation
            setTimeout(() => {
              trackPageView(router.asPath)
            }, 100)
          }
        } catch (error) {
          console.error('[Analytics] Erreur lors du traitement du changement de consentement:', error)
        }
      }
    }

    // Écouter les changements de localStorage
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange)
      
      // Écouter aussi les changements dans le même onglet (via custom event)
      const handleCustomStorageChange = () => {
        if (isConsentGiven()) {
          initGA()
          setTimeout(() => {
            trackPageView(router.asPath)
          }, 100)
        }
      }
      
      window.addEventListener('cookieConsentChanged', handleCustomStorageChange)

      return () => {
        window.removeEventListener('storage', handleStorageChange)
        window.removeEventListener('cookieConsentChanged', handleCustomStorageChange)
      }
    }
  }, [router.asPath])

  // Suivre les changements de route Next.js
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (isConsentGiven()) {
        trackPageView(url)
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
