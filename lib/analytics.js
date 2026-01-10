// Utilitaire pour gérer Google Analytics avec respect du consentement RGPD

const GA_MEASUREMENT_ID = 'G-0T6JYZBLQN'

// Vérifier si le consentement analytique a été donné
export const isConsentGiven = () => {
  if (typeof window === 'undefined') return false
  
  try {
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) return false
    
    const consent = JSON.parse(cookieConsent)
    return consent.analytics === true
  } catch (error) {
    console.error('[Analytics] Erreur lors de la vérification du consentement:', error)
    return false
  }
}

// Initialiser Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return false
  
  // Vérifier le consentement avant d'initialiser
  if (!isConsentGiven()) {
    console.log('[Analytics] Consentement non donné, GA non initialisé')
    return false
  }
  
  // Vérifier si GA est déjà initialisé
  if (window.gtag && window.dataLayer) {
    console.log('[Analytics] Google Analytics déjà initialisé')
    return true
  }
  
  // Initialiser le dataLayer s'il n'existe pas
  window.dataLayer = window.dataLayer || []
  
  // Définir la fonction gtag si elle n'existe pas
  window.gtag = function() {
    window.dataLayer.push(arguments)
  }
  
  // Configurer Google Analytics
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true, // Anonymiser les IPs pour le RGPD
    cookie_flags: 'SameSite=None;Secure'
  })
  
  console.log('[Analytics] Google Analytics initialisé avec ID:', GA_MEASUREMENT_ID)
  return true
}

// Suivre une page vue
export const trackPageView = (url) => {
  if (typeof window === 'undefined') return
  
  if (!isConsentGiven()) {
    console.log('[Analytics] Consentement non donné, page vue non suivie')
    return
  }
  
  if (!window.gtag) {
    console.warn('[Analytics] gtag non disponible, initialisation...')
    initGA()
    return
  }
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    anonymize_ip: true
  })
  
  console.log('[Analytics] Page vue suivie:', url)
}

// Suivre un événement
export const trackEvent = (action, category, label, value) => {
  if (typeof window === 'undefined') return
  
  if (!isConsentGiven()) {
    console.log('[Analytics] Consentement non donné, événement non suivi')
    return
  }
  
  if (!window.gtag) {
    console.warn('[Analytics] gtag non disponible, initialisation...')
    initGA()
    return
  }
  
  const eventParams = {
    event_category: category,
    anonymize_ip: true
  }
  
  if (label) eventParams.event_label = label
  if (value !== undefined) eventParams.value = value
  
  window.gtag('event', action, eventParams)
  
  console.log('[Analytics] Événement suivi:', { action, category, label, value })
}
