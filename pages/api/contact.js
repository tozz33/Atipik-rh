import { antiSpamMiddleware } from '../../lib/antiSpam'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }

  // Vérification anti-spam
  const spamCheck = antiSpamMiddleware(req)
  if (!spamCheck.success) {
    if (spamCheck.statusCode === 429) {
      res.setHeader('Retry-After', spamCheck.retryAfter)
    }
    return res.status(spamCheck.statusCode).json({ 
      message: spamCheck.message,
      error: spamCheck.error
    })
  }

  const { nom, prenom, email, telephone, sujet, message } = req.body

  // Validation des données requises
  if (!nom || !prenom || !email || !sujet || !message) {
    return res.status(400).json({ message: 'Données manquantes' })
  }

  try {
    // Configuration Brevo depuis les variables d'environnement
    const BREVO_API_KEY = process.env.BREVO_API_KEY
    const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'contact@atipikrh.com'
    const BREVO_RECIPIENT_EMAIL = process.env.BREVO_RECIPIENT_EMAIL || 'contact@atipikrh.com'

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY n\'est pas configurée')
      return res.status(500).json({ error: 'Configuration serveur manquante' })
    }

    // Mapping des sujets pour l'affichage
    const sujetsMapping = {
      'bilan-competences': 'Bilan de compétences',
      'vae': 'VAE (Validation des acquis)',
      'formation-cip': 'Formation CIP',
      'formation-fpa': 'Formation FPA',
      'formation-courte': 'Formation courte',
      'location-salle': 'Location de salle',
      'information': 'Demande d\'information',
      'autre': 'Autre'
    }

    const sujetAffiche = sujetsMapping[sujet] || sujet

    // Contenu de l'email de notification interne
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

    // Contenu de l'email de confirmation pour le contact
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

    // Envoyer l'email de notification interne
    const notificationResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: 'Site Web Atipik RH',
          email: BREVO_SENDER_EMAIL
        },
        to: [{
          email: BREVO_RECIPIENT_EMAIL,
          name: 'Équipe Atipik RH'
        }],
        subject: `Nouveau message de contact - ${sujetAffiche}`,
        textContent: emailContent
      })
    })

    // Envoyer l'email de confirmation au contact
    const confirmationResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: 'Atipik RH',
          email: BREVO_SENDER_EMAIL
        },
        to: [{
          email: email,
          name: `${prenom} ${nom}`
        }],
        subject: `Confirmation de réception de votre message - Atipik RH`,
        textContent: confirmationContent
      })
    })

    // Vérifier que les deux emails ont été envoyés avec succès
    if (notificationResponse.ok && confirmationResponse.ok) {
      const notificationResult = await notificationResponse.json()
      const confirmationResult = await confirmationResponse.json()
      console.log('Emails de contact envoyés avec succès via Brevo:', {
        notification: notificationResult.messageId,
        confirmation: confirmationResult.messageId
      })
      return res.status(200).json({ 
        message: 'Message envoyé avec succès',
        success: true,
        messageIds: {
          notification: notificationResult.messageId,
          confirmation: confirmationResult.messageId
        }
      })
    } else {
      // Gérer les erreurs
      let errorMessage = 'Erreur lors de l\'envoi des emails'
      let errorDetails = {}

      if (!notificationResponse.ok) {
        const notificationError = await notificationResponse.text()
        console.error('Erreur notification contact Brevo:', notificationResponse.status, notificationError)
        errorDetails.notification = notificationError
      }

      if (!confirmationResponse.ok) {
        const confirmationError = await confirmationResponse.text()
        console.error('Erreur confirmation contact Brevo:', confirmationResponse.status, confirmationError)
        errorDetails.confirmation = confirmationError
      }

      return res.status(500).json({ 
        error: errorMessage,
        details: errorDetails 
      })
    }

  } catch (error) {
    console.error('Erreur lors de l\'envoi du message de contact:', error)
    console.error('Stack trace:', error.stack)
    console.error('BREVO_API_KEY présente:', !!process.env.BREVO_API_KEY)
    console.error('IP du serveur:', req.headers['x-forwarded-for'] || req.connection.remoteAddress)
    console.error('Données reçues:', { nom, prenom, email, telephone, sujet })
    res.status(500).json({ 
      message: 'Erreur lors de l\'envoi du message',
      success: false,
      details: error.message,
      error: error.toString()
    })
  }
}
