import { antiSpamMiddleware } from '../../lib/antiSpam'
import {
  sendDualBrevoEmails,
  upsertBrevoContact,
  mapSujetToFormation,
  SERVER_CONFIG_ERROR,
  SEND_EMAIL_ERROR,
} from '../../lib/brevo'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }

  const spamCheck = await antiSpamMiddleware(req, {
    recaptcha: {
      enabled: true,
      action: 'contact_form',
      minScore: 0.5,
    },
    akismet: {
      enabled: true,
      type: 'contact-form',
    },
  })
  if (!spamCheck.success) {
    if (spamCheck.statusCode === 429) {
      res.setHeader('Retry-After', spamCheck.retryAfter)
    }
    return res.status(spamCheck.statusCode).json({
      message: spamCheck.message,
      error: spamCheck.error,
    })
  }

  const { nom, prenom, email, telephone, sujet, message } = req.body

  if (!nom || !prenom || !email || !sujet || !message) {
    return res.status(400).json({ message: 'Données manquantes' })
  }

  try {
    const maskEmail = (value) => {
      if (!value || typeof value !== 'string') return 'inconnu'
      const [localPart = '', domainPart = ''] = value.split('@')
      const maskedLocal = localPart.length > 2
        ? `${localPart.slice(0, 2)}***`
        : '***'
      return domainPart ? `${maskedLocal}@${domainPart}` : maskedLocal
    }

    const sujetsMapping = {
      'bilan-competences': 'Bilan de compétences',
      vae: 'VAE (Validation des acquis)',
      'formation-cip': 'Formation CIP',
      'formation-fpa': 'Formation FPA',
      'formation-courte': 'Formation courte',
      'location-salle': 'Location de salle',
      information: "Demande d'information",
      autre: 'Autre',
    }

    const sujetAffiche = sujetsMapping[sujet] || sujet

    const emailContent = `NOUVEAU MESSAGE DE CONTACT - SITE WEB ATIPIK RH
================================================

Bonjour,

Un nouveau message de contact a été envoyé via le site web Atipik RH.

📌 INFORMATIONS DU CONTACT :
- Nom : ${nom}
- Prénom : ${prenom}
- Email : ${email}
- Téléphone : ${telephone || 'Non renseigné'}
- Sujet : ${sujetAffiche}

💬 MESSAGE :
${message}

---
Notification automatique - Site web Atipik RH
Date : ${new Date().toLocaleString('fr-FR')}`

    const confirmationContent = `Bonjour ${prenom},

Merci pour votre message !

Nous avons bien reçu votre demande concernant : ${sujetAffiche}

Notre équipe va étudier votre demande et vous répondra dans les plus brefs délais (généralement sous 24h ouvrées).

En attendant, n'hésitez pas à nous appeler directement au 07 83 01 99 55 si votre demande est urgente.

📝 Récapitulatif de votre message :
Sujet : ${sujetAffiche}
Message : ${message}

Nous avons hâte d'échanger avec vous sur votre projet !

Cordialement,
L'équipe Atipik RH

---
📧 contact@atipikrh.com | 📞 07 83 01 99 55
8 Rue du Courant, 33310 Lormont`

    const result = await sendDualBrevoEmails({
      notificationSubject: `Nouveau message de contact - ${sujetAffiche}`,
      notificationContent: emailContent,
      confirmationToEmail: email,
      confirmationToName: `${prenom} ${nom}`,
      confirmationSubject:
        'Confirmation de réception de votre message - Atipik RH',
      confirmationContent,
    })

    if (result.missingConfig) {
      return res.status(500).json(SERVER_CONFIG_ERROR)
    }

    if (result.ok) {
      const contactSync = await upsertBrevoContact({
        email,
        nom,
        prenom,
        telephone,
        statut: '',
        formation: mapSujetToFormation(sujet),
      })

      if (!contactSync.ok && !contactSync.missingConfig) {
        console.error('[Contact] Contact non synchronisé dans Brevo', {
          email: maskEmail(email),
          sujet,
          statusCode: contactSync.statusCode || 'inconnu',
        })
      }

      return res.status(200).json({
        message: 'Message envoyé avec succès',
        success: true,
        messageIds: result.messageIds,
      })
    }

    return res.status(500).json(SEND_EMAIL_ERROR)
  } catch (error) {
    console.error("[Contact] Erreur lors de l'envoi:", error)
    return res.status(500).json({
      message: "Erreur lors de l'envoi du message",
      success: false,
    })
  }
}
