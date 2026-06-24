import { z } from 'zod'

const DEFAULT_BREVO_EMAIL = 'contact@atipikrh.com'

function trimOrUndefined(value: string | undefined): string | undefined {
  const trimmed = value?.trim()
  return trimmed || undefined
}

const rawEnvSchema = z
  .object({
    BREVO_API_KEY: z.string().optional(),
    BREVO_SENDER_EMAIL: z.string().optional(),
    BREVO_RECIPIENT_EMAIL: z.string().optional(),
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().optional(),
    RECAPTCHA_SECRET_KEY: z.string().optional(),
    NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY: z.string().optional(),
    RECAPTCHA_V2_SECRET_KEY: z.string().optional(),
    AKISMET_API_KEY: z.string().optional(),
    AKISMET_SITE_URL: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const hasSiteKey = Boolean(data.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
    const hasSecret = Boolean(data.RECAPTCHA_SECRET_KEY)
    if (hasSiteKey !== hasSecret) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          'reCAPTCHA : NEXT_PUBLIC_RECAPTCHA_SITE_KEY et RECAPTCHA_SECRET_KEY doivent être définies ensemble',
        path: ['RECAPTCHA_SECRET_KEY'],
      })
    }

    const hasV2SiteKey = Boolean(data.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY)
    const hasV2Secret = Boolean(data.RECAPTCHA_V2_SECRET_KEY)
    if (hasV2SiteKey !== hasV2Secret) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          'reCAPTCHA v2 : NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY et RECAPTCHA_V2_SECRET_KEY doivent être définies ensemble',
        path: ['RECAPTCHA_V2_SECRET_KEY'],
      })
    }

    const hasAkismetKey = Boolean(data.AKISMET_API_KEY)
    const hasAkismetUrl = Boolean(data.AKISMET_SITE_URL)
    if (hasAkismetKey && !hasAkismetUrl) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          'Akismet : AKISMET_SITE_URL est requis lorsque AKISMET_API_KEY est défini',
        path: ['AKISMET_SITE_URL'],
      })
    }
  })

export type ServerEnv = {
  brevoApiKey: string | undefined
  brevoSenderEmail: string
  brevoRecipientEmail: string
  recaptchaSiteKey: string | undefined
  recaptchaSecretKey: string | undefined
  recaptchaV2SiteKey: string | undefined
  recaptchaV2SecretKey: string | undefined
  akismetApiKey: string | undefined
  akismetSiteUrl: string | undefined
}

let cachedServerEnv: ServerEnv | null = null

function readRawEnv() {
  return {
    BREVO_API_KEY: trimOrUndefined(process.env.BREVO_API_KEY),
    BREVO_SENDER_EMAIL: trimOrUndefined(process.env.BREVO_SENDER_EMAIL),
    BREVO_RECIPIENT_EMAIL: trimOrUndefined(process.env.BREVO_RECIPIENT_EMAIL),
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: trimOrUndefined(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    ),
    RECAPTCHA_SECRET_KEY: trimOrUndefined(process.env.RECAPTCHA_SECRET_KEY),
    NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY: trimOrUndefined(
      process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY
    ),
    RECAPTCHA_V2_SECRET_KEY: trimOrUndefined(process.env.RECAPTCHA_V2_SECRET_KEY),
    AKISMET_API_KEY: trimOrUndefined(process.env.AKISMET_API_KEY),
    AKISMET_SITE_URL: trimOrUndefined(process.env.AKISMET_SITE_URL),
  }
}

function toServerEnv(
  parsed: z.infer<typeof rawEnvSchema>
): ServerEnv {
  const sender = parsed.BREVO_SENDER_EMAIL ?? DEFAULT_BREVO_EMAIL
  const recipient = parsed.BREVO_RECIPIENT_EMAIL ?? DEFAULT_BREVO_EMAIL

  z.string().email().parse(sender)
  z.string().email().parse(recipient)

  return {
    brevoApiKey: parsed.BREVO_API_KEY,
    brevoSenderEmail: sender,
    brevoRecipientEmail: recipient,
    recaptchaSiteKey: parsed.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    recaptchaSecretKey: parsed.RECAPTCHA_SECRET_KEY,
    recaptchaV2SiteKey: parsed.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY,
    recaptchaV2SecretKey: parsed.RECAPTCHA_V2_SECRET_KEY,
    akismetApiKey: parsed.AKISMET_API_KEY,
    akismetSiteUrl: parsed.AKISMET_SITE_URL,
  }
}

export function getServerEnv(): ServerEnv {
  if (cachedServerEnv) {
    return cachedServerEnv
  }

  const parsed = rawEnvSchema.parse(readRawEnv())
  cachedServerEnv = toServerEnv(parsed)
  return cachedServerEnv
}

export function getPublicEnv() {
  return {
    recaptchaSiteKey:
      trimOrUndefined(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) ?? '',
  }
}

export function isRecaptchaActive(): boolean {
  const env = getServerEnv()
  return Boolean(env.recaptchaSiteKey && env.recaptchaSecretKey)
}

export function isRecaptchaV2Active(): boolean {
  const env = getServerEnv()
  return Boolean(env.recaptchaV2SiteKey && env.recaptchaV2SecretKey)
}

export function getPublicRecaptchaV2SiteKey(): string {
  return trimOrUndefined(process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY) ?? ''
}

export function isAkismetActive(): boolean {
  const env = getServerEnv()
  return Boolean(env.akismetApiKey && env.akismetSiteUrl)
}

export function isProductionRuntime(): boolean {
  if (process.env.VERCEL_ENV === 'production') {
    return true
  }
  return (
    process.env.NODE_ENV === 'production' &&
    process.env.VERCEL_ENV !== 'preview' &&
    process.env.VERCEL_ENV !== 'development'
  )
}

function logEnvStatus(): void {
  console.log(
    `[Env] brevo=${getServerEnv().brevoApiKey ? 'ok' : 'missing'} recaptcha=${
      isRecaptchaActive() ? 'active' : 'inactive'
    } recaptcha_v2=${isRecaptchaV2Active() ? 'active' : 'inactive'} akismet=${
      isAkismetActive() ? 'active' : 'inactive'
    }`
  )
}

export function assertEnvForBuild(): void {
  try {
    getServerEnv()
  } catch (error) {
    if (error instanceof z.ZodError) {
      const messages = error.issues.map((i) => i.message).join('; ')
      throw new Error(`[Env] Configuration invalide : ${messages}`)
    }
    throw error
  }

  const env = getServerEnv()
  const isVercelProduction = process.env.VERCEL_ENV === 'production'

  if (isVercelProduction && !env.brevoApiKey) {
    throw new Error(
      '[Env] BREVO_API_KEY est obligatoire pour les déploiements Vercel Production'
    )
  }

  if (!isVercelProduction && !env.brevoApiKey) {
    console.warn(
      '[Env] BREVO_API_KEY absente — build autorisé ; les envois email échoueront sans cette clé'
    )
  }

  logEnvStatus()
}
