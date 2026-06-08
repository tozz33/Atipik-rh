// Middleware anti-spam pour les formulaires
// Approche multi-couches : rate limiting, honeypot, validation temporelle, patterns suspects

import {
  getServerEnv,
  isAkismetActive,
  isProductionRuntime,
  isRecaptchaActive,
} from './env'

const rateLimitStore = new Map()
const RATE_LIMIT_MAX = 3 // 3 soumissions max
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 heure en millisecondes
const MIN_SUBMISSION_TIME = 3000 // 3 secondes minimum
const RECAPTCHA_MIN_SCORE_DEFAULT = 0.5

// Nettoyage automatique des entrées expirées (toutes les 10 minutes)
setInterval(() => {
  const now = Date.now()
  for (const [key, data] of rateLimitStore.entries()) {
    if (now - data.firstSubmission > RATE_LIMIT_WINDOW) {
      rateLimitStore.delete(key)
    }
  }
}, 10 * 60 * 1000)

// Obtenir l'IP du client
const getClientIP = (req) => {
  return req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 
         req.headers['x-real-ip'] || 
         req.socket.remoteAddress || 
         'unknown'
}

// Vérifier le rate limiting
const checkRateLimit = (ip) => {
  const now = Date.now()
  const userData = rateLimitStore.get(ip)

  if (!userData) {
    rateLimitStore.set(ip, {
      count: 1,
      firstSubmission: now
    })
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 }
  }

  // Vérifier si la fenêtre temporelle est expirée
  if (now - userData.firstSubmission > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, {
      count: 1,
      firstSubmission: now
    })
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 }
  }

  // Incrémenter le compteur
  userData.count++
  
  if (userData.count > RATE_LIMIT_MAX) {
    return { 
      allowed: false, 
      remaining: 0,
      retryAfter: Math.ceil((RATE_LIMIT_WINDOW - (now - userData.firstSubmission)) / 1000)
    }
  }

  return { allowed: true, remaining: RATE_LIMIT_MAX - userData.count }
}

// Vérifier le honeypot
const checkHoneypot = (honeypotValue) => {
  // Le honeypot doit être vide ou undefined
  return !honeypotValue || honeypotValue.trim() === ''
}

// Vérifier le temps de soumission
const checkSubmissionTime = (timestamp) => {
  if (!timestamp) return false
  
  const now = Date.now()
  const loadTime = parseInt(timestamp, 10)
  
  if (isNaN(loadTime)) return false
  
  const timeDiff = now - loadTime
  
  // Trop rapide (moins de 3 secondes) ou timestamp futur
  if (timeDiff < MIN_SUBMISSION_TIME || timeDiff < 0) {
    return false
  }
  
  // Trop ancien (plus de 24 heures)
  if (timeDiff > 24 * 60 * 60 * 1000) {
    return false
  }
  
  return true
}

// Vérifier les patterns suspects dans le contenu
const checkSuspiciousPatterns = (data) => {
  const { email, message, nom, prenom, motivations } = data
  
  // Vérifier email valide
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { suspicious: true, reason: 'invalid_email' }
    }
  }
  
  // Vérifier contenu répétitif
  const textFields = [message, motivations, nom, prenom].filter(Boolean)
  for (const text of textFields) {
    if (typeof text === 'string') {
      // Détecter même caractère répété plus de 10 fois
      if (/(.)\1{10,}/.test(text)) {
        return { suspicious: true, reason: 'repetitive_content' }
      }
      
      // Détecter mots-clés spam courants
      const spamKeywords = [
        'viagra', 'cialis', 'casino', 'lottery', 'prize', 'winner',
        'click here', 'buy now', 'limited offer', 'act now',
        'free money', 'million dollars', 'weight loss'
      ]
      
      const lowerText = text.toLowerCase()
      for (const keyword of spamKeywords) {
        if (lowerText.includes(keyword)) {
          return { suspicious: true, reason: 'spam_keyword' }
        }
      }
      
      // Détecter patterns spam spécifiques (SEO, marketing non sollicité, etc.)
      const spamRegex = [
        /visibilit[eé].*google/i,
        /google\s?maps/i,
        /seo|référencement|backlinks/i,
        /augmenter.*revenus/i,
        /audit.*gratuit/i,
        /premier.*google/i,
        /classement.*google/i,
        /améliorer.*positionnement/i
      ]
      
      for (const regex of spamRegex) {
        if (regex.test(text)) {
          return { suspicious: true, reason: 'spam_pattern_detected' }
        }
      }
    }
  }
  
  return { suspicious: false }
}

// Vérification reCAPTCHA v3 (appel serveur → Google)
const verifyRecaptcha = async ({ token, ip, action, minScore }) => {
  if (!isRecaptchaActive()) {
    return { ok: true, skipped: true, reason: 'inactive' }
  }

  const { recaptchaSecretKey: secret } = getServerEnv()

  if (!token) {
    return { ok: false, reason: 'missing_token' }
  }

  const failOnError = isProductionRuntime()

  try {
    const params = new URLSearchParams()
    params.append('secret', secret)
    params.append('response', token)
    if (ip && ip !== 'unknown') {
      params.append('remoteip', ip)
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    })

    const data = await response.json()

    if (!data.success) {
      console.warn('[Anti-Spam] Échec API reCAPTCHA', data)
      return { ok: false, reason: 'api_failure', data }
    }

    const expectedAction = action
    if (expectedAction && data.action && data.action !== expectedAction) {
      return { ok: false, reason: 'action_mismatch', data }
    }

    const score = typeof data.score === 'number' ? data.score : 1
    const threshold = typeof minScore === 'number' ? minScore : RECAPTCHA_MIN_SCORE_DEFAULT

    if (score < threshold) {
      return { ok: false, reason: 'low_score', score, threshold }
    }

    return { ok: true, score }
  } catch (error) {
    console.error('[Anti-Spam] Erreur reCAPTCHA:', error)
    if (failOnError) {
      return { ok: false, reason: 'exception' }
    }
    return { ok: true, skipped: true, reason: 'exception' }
  }
}

// Vérification Akismet (optionnelle)
const checkAkismet = async ({ ip, userAgent, referrer, formData, type }) => {
  if (!isAkismetActive()) {
    return { ok: true, skipped: true, reason: 'inactive' }
  }

  const { akismetApiKey: apiKey, akismetSiteUrl: siteUrl } = getServerEnv()
  const failOnError = isProductionRuntime()

  const endpoint = `https://${apiKey}.rest.akismet.com/1.1/comment-check`
  const body = new URLSearchParams()

  body.append('blog', siteUrl)
  body.append('user_ip', ip || '')
  body.append('user_agent', userAgent || '')
  body.append('referrer', referrer || '')
  body.append('comment_type', type || 'contact-form')

  const { email, message, motivations, nom, prenom } = formData

  if (email) {
    body.append('comment_author_email', email)
  }

  const author = [prenom, nom].filter(Boolean).join(' ')
  if (author) {
    body.append('comment_author', author)
  }

  const contentParts = []
  if (message) contentParts.push(message)
  if (motivations) contentParts.push(motivations)
  const commentContent =
    contentParts.join('\n\n') || JSON.stringify(formData).slice(0, 2000)

  body.append('comment_content', commentContent)

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'AtipikRH-Website/1.0 | Akismet/1.1'
      },
      body: body.toString()
    })

    const text = (await response.text()).trim()

    if (text === 'true') {
      return { ok: false, reason: 'akismet_spam' }
    }

    if (text !== 'false') {
      console.warn('[Anti-Spam] Réponse Akismet inattendue:', text)
    }

    return { ok: true }
  } catch (error) {
    console.error('[Anti-Spam] Erreur Akismet:', error)
    if (failOnError) {
      return { ok: false, reason: 'exception' }
    }
    return { ok: true, skipped: true, reason: 'exception' }
  }
}

// Middleware principal anti-spam
export const antiSpamMiddleware = async (req, options = {}) => {
  const ip = getClientIP(req)
  const { honeypot, timestamp, recaptchaToken, ...formData } = req.body
  
  // 1. Vérifier le honeypot
  if (!checkHoneypot(honeypot)) {
    console.log(`[Anti-Spam] Honeypot déclenché - IP: ${ip}`)
    return {
      success: false,
      error: 'validation_failed',
      message: 'Erreur de validation du formulaire',
      statusCode: 400
    }
  }
  
  // 2. Vérifier le rate limiting
  const rateLimitResult = checkRateLimit(ip)
  if (!rateLimitResult.allowed) {
    console.log(`[Anti-Spam] Rate limit dépassé - IP: ${ip}, retry après ${rateLimitResult.retryAfter}s`)
    return {
      success: false,
      error: 'rate_limit_exceeded',
      message: 'Trop de tentatives. Veuillez réessayer plus tard.',
      statusCode: 429,
      retryAfter: rateLimitResult.retryAfter
    }
  }
  
  // 3. Vérifier le timestamp de soumission
  if (!checkSubmissionTime(timestamp)) {
    console.log(`[Anti-Spam] Validation temporelle échouée - IP: ${ip}`)
    return {
      success: false,
      error: 'invalid_timing',
      message: 'Erreur de validation du formulaire',
      statusCode: 400
    }
  }
  
  // 4. Vérifier les patterns suspects
  const patternCheck = checkSuspiciousPatterns(formData)
  if (patternCheck.suspicious) {
    console.log(`[Anti-Spam] Pattern suspect détecté - IP: ${ip}, raison: ${patternCheck.reason}`)
    return {
      success: false,
      error: 'suspicious_content',
      message: 'Erreur de validation du formulaire',
      statusCode: 400
    }
  }

  const { recaptcha, akismet } = options

  // 5. reCAPTCHA v3 (actif seulement si la paire de clés est complète)
  if (recaptcha && recaptcha.enabled && isRecaptchaActive()) {
    const recaptchaResult = await verifyRecaptcha({
      token: recaptchaToken,
      ip,
      action: recaptcha.action,
      minScore: recaptcha.minScore
    })

    if (!recaptchaResult.ok) {
      console.log(
        `[Anti-Spam] reCAPTCHA rejeté - IP: ${ip}, raison: ${recaptchaResult.reason || 'unknown'}`
      )
      return {
        success: false,
        error: 'validation_failed',
        message: 'Erreur de validation du formulaire',
        statusCode: 400
      }
    }
  }

  // 6. Akismet (actif seulement si clé + URL sont configurées)
  if (akismet && akismet.enabled && isAkismetActive()) {
    const akismetResult = await checkAkismet({
      ip,
      userAgent: req.headers['user-agent'] || '',
      referrer: req.headers.referer || req.headers.referrer || '',
      formData,
      type: akismet.type
    })

    if (!akismetResult.ok) {
      console.log(`[Anti-Spam] Akismet a classé la requête comme spam - IP: ${ip}`)
      return {
        success: false,
        error: 'suspicious_content',
        message: 'Erreur de validation du formulaire',
        statusCode: 400
      }
    }
  }

  // Tout est OK
  console.log(
    `[Anti-Spam] Validation réussie - IP: ${ip}, soumissions restantes: ${rateLimitResult.remaining}`
  )
  return {
    success: true,
    ip,
    remaining: rateLimitResult.remaining
  }
}

// Fonction utilitaire pour obtenir des stats (pour monitoring)
export const getAntiSpamStats = () => {
  return {
    totalIPs: rateLimitStore.size,
    entries: Array.from(rateLimitStore.entries()).map(([ip, data]) => ({
      ip,
      count: data.count,
      firstSubmission: new Date(data.firstSubmission).toISOString()
    }))
  }
}

