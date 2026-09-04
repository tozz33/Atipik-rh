/** Constantes et règles pures anti-spam (testables sans effets de bord). */

export const MIN_SUBMISSION_TIME_MS = 3000
export const MAX_SUBMISSION_AGE_MS = 24 * 60 * 60 * 1000

export function checkHoneypot(honeypotValue) {
  return !honeypotValue || honeypotValue.trim() === ''
}

export function checkSubmissionTime(timestamp, now = Date.now()) {
  if (!timestamp) return false

  const loadTime = parseInt(timestamp, 10)
  if (Number.isNaN(loadTime)) return false

  const timeDiff = now - loadTime
  if (timeDiff < MIN_SUBMISSION_TIME_MS || timeDiff < 0) return false
  if (timeDiff > MAX_SUBMISSION_AGE_MS) return false

  return true
}

export function checkSuspiciousPatterns(data) {
  const { email, message, nom, prenom, motivations } = data

  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { suspicious: true, reason: 'invalid_email' }
    }
  }

  const textFields = [message, motivations, nom, prenom].filter(Boolean)
  for (const text of textFields) {
    if (typeof text !== 'string') continue

    if (/(.)\1{10,}/.test(text)) {
      return { suspicious: true, reason: 'repetitive_content' }
    }

    const spamKeywords = [
      'viagra', 'cialis', 'casino', 'lottery', 'prize', 'winner',
      'click here', 'buy now', 'limited offer', 'act now',
      'free money', 'million dollars', 'weight loss',
    ]

    const lowerText = text.toLowerCase()
    for (const keyword of spamKeywords) {
      if (lowerText.includes(keyword)) {
        return { suspicious: true, reason: 'spam_keyword' }
      }
    }

    const spamRegex = [
      /visibilit[eé].*google/i,
      /google\s?maps/i,
      /seo|référencement|backlinks/i,
      /augmenter.*revenus/i,
      /audit.*gratuit/i,
      /premier.*google/i,
      /classement.*google/i,
      /améliorer.*positionnement/i,
    ]

    for (const regex of spamRegex) {
      if (regex.test(text)) {
        return { suspicious: true, reason: 'spam_pattern_detected' }
      }
    }
  }

  return { suspicious: false }
}
