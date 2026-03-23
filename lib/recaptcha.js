// Helper minimaliste pour reCAPTCHA v3 côté client

export async function getRecaptchaToken(action) {
  if (typeof window === 'undefined') {
    return null
  }

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  if (!siteKey) {
    return null
  }

  const grecaptcha = window.grecaptcha
  if (!grecaptcha || !grecaptcha.execute) {
    return null
  }

  return new Promise((resolve) => {
    try {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(siteKey, { action })
          .then((token) => resolve(token))
          .catch(() => resolve(null))
      })
    } catch {
      resolve(null)
    }
  })
}

