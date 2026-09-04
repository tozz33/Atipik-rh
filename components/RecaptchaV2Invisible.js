import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import Script from 'next/script'

const SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY?.trim() || ''

/**
 * Widget reCAPTCHA v2 invisible avec badge Google visible.
 * @type {import('react').ForwardRefExoticComponent<
 *   import('react').RefAttributes<{ execute: () => Promise<string|null>, isActive: () => boolean, reset: () => void }>
 * >}
 */
const RecaptchaV2Invisible = forwardRef(function RecaptchaV2Invisible(
  _props,
  ref
) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const pendingResolveRef = useRef(null)
  const [scriptReady, setScriptReady] = useState(false)

  useEffect(() => {
    if (!SITE_KEY || !scriptReady || !containerRef.current) return
    if (widgetIdRef.current !== null) return

    const grecaptcha = window.grecaptcha
    if (!grecaptcha) return

    grecaptcha.ready(() => {
      if (!containerRef.current || widgetIdRef.current !== null) return

      widgetIdRef.current = grecaptcha.render(containerRef.current, {
        sitekey: SITE_KEY,
        size: 'invisible',
        callback: (token) => {
          pendingResolveRef.current?.(token)
          pendingResolveRef.current = null
        },
        'error-callback': () => {
          pendingResolveRef.current?.(null)
          pendingResolveRef.current = null
        },
        'expired-callback': () => {
          if (widgetIdRef.current !== null) {
            grecaptcha.reset(widgetIdRef.current)
          }
        },
      })
    })
  }, [scriptReady])

  useImperativeHandle(ref, () => ({
    isActive() {
      return Boolean(SITE_KEY)
    },
    reset() {
      if (widgetIdRef.current !== null && window.grecaptcha) {
        window.grecaptcha.reset(widgetIdRef.current)
      }
    },
    execute() {
      if (!SITE_KEY || widgetIdRef.current === null) {
        return Promise.resolve(null)
      }

      return new Promise((resolve) => {
        pendingResolveRef.current = resolve
        try {
          window.grecaptcha.execute(widgetIdRef.current)
        } catch {
          pendingResolveRef.current = null
          resolve(null)
        }
      })
    },
  }))

  if (!SITE_KEY) return null

  return (
    <>
      <Script
        id="recaptcha-v2"
        strategy="afterInteractive"
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        onLoad={() => setScriptReady(true)}
      />
      <div ref={containerRef} aria-hidden="true" />
    </>
  )
})

export default RecaptchaV2Invisible
