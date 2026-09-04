import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  checkHoneypot,
  checkSubmissionTime,
  checkSuspiciousPatterns,
  MIN_SUBMISSION_TIME_MS,
} from '../lib/antiSpamRules.js'

describe('checkHoneypot', () => {
  it('accepte un champ vide', () => {
    assert.equal(checkHoneypot(''), true)
    assert.equal(checkHoneypot(undefined), true)
  })

  it('rejette un champ rempli', () => {
    assert.equal(checkHoneypot('bot'), false)
  })
})

describe('checkSubmissionTime', () => {
  const now = 1_700_000_000_000

  it('rejette une soumission trop rapide', () => {
    assert.equal(checkSubmissionTime(now - 1000, now), false)
  })

  it('accepte une soumission dans la fenêtre valide', () => {
    assert.equal(checkSubmissionTime(now - MIN_SUBMISSION_TIME_MS, now), true)
  })

  it('rejette un timestamp futur ou trop ancien', () => {
    assert.equal(checkSubmissionTime(now + 1000, now), false)
    assert.equal(checkSubmissionTime(now - 25 * 60 * 60 * 1000, now), false)
  })
})

describe('checkSuspiciousPatterns', () => {
  it('accepte un email valide', () => {
    assert.deepEqual(
      checkSuspiciousPatterns({ email: 'contact@atipikrh.com' }),
      { suspicious: false }
    )
  })

  it('rejette un email invalide', () => {
    const result = checkSuspiciousPatterns({ email: 'pas-un-email' })
    assert.equal(result.suspicious, true)
    assert.equal(result.reason, 'invalid_email')
  })

  it('détecte les mots-clés spam', () => {
    const result = checkSuspiciousPatterns({ message: 'Offre casino exclusive' })
    assert.equal(result.suspicious, true)
    assert.equal(result.reason, 'spam_keyword')
  })
})
