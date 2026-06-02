import { getServerEnv } from './env'

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'
const BREVO_CONTACTS_API_URL = 'https://api.brevo.com/v3/contacts'

export function getBrevoConfig() {
  const env = getServerEnv()
  if (!env.brevoApiKey) {
    return null
  }
  return {
    apiKey: env.brevoApiKey,
    senderEmail: env.brevoSenderEmail,
    recipientEmail: env.brevoRecipientEmail,
  }
}

export const SERVER_CONFIG_ERROR = {
  message: 'Configuration serveur manquante',
  success: false,
}

export const SEND_EMAIL_ERROR = {
  message: "Erreur lors de l'envoi des emails",
  success: false,
}

async function sendBrevoEmail({
  apiKey,
  senderEmail,
  senderName,
  toEmail,
  toName,
  subject,
  textContent,
}) {
  return fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: toEmail,
          name: toName,
        },
      ],
      subject,
      textContent,
    }),
  })
}

/**
 * Envoie une notification interne + un email de confirmation utilisateur.
 */
export async function sendDualBrevoEmails({
  notificationSubject,
  notificationContent,
  notificationSenderName = 'Site Web Atipik RH',
  confirmationToEmail,
  confirmationToName,
  confirmationSubject,
  confirmationContent,
  confirmationSenderName = 'Atipik RH',
}) {
  const config = getBrevoConfig()
  if (!config) {
    console.error('[Brevo] BREVO_API_KEY non configurée')
    return { ok: false, missingConfig: true }
  }

  const { apiKey, senderEmail, recipientEmail } = config

  const notificationResponse = await sendBrevoEmail({
    apiKey,
    senderEmail,
    senderName: notificationSenderName,
    toEmail: recipientEmail,
    toName: 'Équipe Atipik RH',
    subject: notificationSubject,
    textContent: notificationContent,
  })

  const confirmationResponse = await sendBrevoEmail({
    apiKey,
    senderEmail,
    senderName: confirmationSenderName,
    toEmail: confirmationToEmail,
    toName: confirmationToName,
    subject: confirmationSubject,
    textContent: confirmationContent,
  })

  if (notificationResponse.ok && confirmationResponse.ok) {
    const notificationResult = await notificationResponse.json()
    const confirmationResult = await confirmationResponse.json()
    console.log('[Brevo] Emails envoyés', {
      notification: notificationResult.messageId,
      confirmation: confirmationResult.messageId,
    })
    return {
      ok: true,
      messageIds: {
        notification: notificationResult.messageId,
        confirmation: confirmationResult.messageId,
      },
    }
  }

  if (!notificationResponse.ok) {
    const body = await notificationResponse.text()
    console.error(
      '[Brevo] Erreur notification',
      notificationResponse.status,
      body
    )
  }

  if (!confirmationResponse.ok) {
    const body = await confirmationResponse.text()
    console.error(
      '[Brevo] Erreur confirmation',
      confirmationResponse.status,
      body
    )
  }

  return { ok: false, missingConfig: false }
}

/**
 * Crée ou met à jour un contact dans Brevo.
 */
export async function upsertBrevoContact({
  email,
  nom,
  prenom,
  telephone,
  statut,
  formation,
}) {
  const config = getBrevoConfig()
  if (!config) {
    console.error('[Brevo] BREVO_API_KEY non configurée (sync contact)')
    return { ok: false, missingConfig: true }
  }

  const response = await fetch(BREVO_CONTACTS_API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'api-key': config.apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [30],
      updateEnabled: true,
      attributes: {
        NOM: nom,
        PRENOM: prenom,
        TELEPHONE: telephone || '',
        STATUT: statut || '',
        FORMATION: formation,
      },
    }),
  })

  if (response.ok) {
    return { ok: true, missingConfig: false }
  }

  const body = await response.text()
  console.error('[Brevo] Erreur sync contact', response.status, body)
  return {
    ok: false,
    missingConfig: false,
    statusCode: response.status,
  }
}
