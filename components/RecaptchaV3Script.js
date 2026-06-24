import Script from 'next/script'

/**
 * Charge reCAPTCHA v3 sur les pages qui en ont besoin (contact, quiz).
 */
export default function RecaptchaV3Script() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() || ''
  if (!siteKey) return null

  return (
    <Script
      id="recaptcha-v3"
      strategy="afterInteractive"
      src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
    />
  )
}
