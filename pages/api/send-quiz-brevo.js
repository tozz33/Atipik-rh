import { antiSpamMiddleware } from '../../lib/antiSpam'
import {
  sendDualBrevoEmails,
  SERVER_CONFIG_ERROR,
  SEND_EMAIL_ERROR,
} from '../../lib/brevo'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // Vérification anti-spam
  const spamCheck = await antiSpamMiddleware(req, {
    recaptcha: {
      enabled: true,
      action: 'quiz_bilan',
      minScore: 0.5
    },
    akismet: {
      enabled: true,
      type: 'lead-quiz'
    }
  })
  if (!spamCheck.success) {
    if (spamCheck.statusCode === 429) {
      res.setHeader('Retry-After', spamCheck.retryAfter)
    }
    return res.status(spamCheck.statusCode).json({ 
      message: spamCheck.message,
      error: spamCheck.error
    })
  }

  const { userInfo, answers, questions } = req.body

  // Validation des données requises
  if (!userInfo || !userInfo.name || !userInfo.email) {
    return res.status(400).json({ error: 'Informations utilisateur manquantes' })
  }

  if (!answers || !questions) {
    return res.status(400).json({ error: 'Données du quiz manquantes' })
  }

  try {
    // Préparer le contenu de l'email
    const scoreTotal = Object.values(answers).reduce((sum, score) => sum + score, 0)
    const scoreMoyen = (scoreTotal / questions.length).toFixed(1)
    
    const reponsesSynthese = questions.map((q, index) => {
      const answer = answers[q.id]
      const selectedOption = q.options.find(opt => opt.score === answer)
      return `${index + 1}. ${q.question}\n   Réponse : ${selectedOption ? selectedOption.text : 'Non répondu'} (Score: ${answer}/4)`
    }).join('\n\n')

    // Contenu de l'email de notification interne
    const emailContent = `NOUVEAU LEAD QUALIFIÉ - QUIZ BILAN DE COMPÉTENCES
================================================

INFORMATIONS CONTACT :
- Prénom : ${userInfo.name}
- Email : ${userInfo.email}
- Téléphone : ${userInfo.phone || 'Non renseigné'}

SYNTHÈSE DES RÉPONSES :
${reponsesSynthese}

SCORE TOTAL : ${scoreTotal}/${questions.length * 4}
SCORE MOYEN : ${scoreMoyen}/4

---
Email généré automatiquement depuis le quiz bilan de compétences
Date : ${new Date().toLocaleString('fr-FR')}`

    // Contenu de l'email de confirmation pour le prospect
    const getConseilPersonnalise = (scoreMoyen) => {
      if (scoreMoyen >= 3.5) {
        return `🎯 EXCELLENT ! Votre score de ${scoreMoyen}/4 indique que vous êtes très motivé(e) pour faire un bilan de compétences. C'est le moment idéal pour vous accompagner dans votre projet professionnel !`
      } else if (scoreMoyen >= 2.5) {
        return `👍 BON POTENTIEL ! Votre score de ${scoreMoyen}/4 montre que vous avez des questionnements légitimes sur votre carrière. Un bilan de compétences pourrait vous aider à y voir plus clair.`
      } else if (scoreMoyen >= 1.5) {
        return `🤔 À RÉFLÉCHIR ! Votre score de ${scoreMoyen}/4 suggère que vous êtes encore en phase d'exploration. Prenez le temps de réfléchir à vos besoins avant de vous engager.`
      } else {
        return `💭 PREMIÈRE RÉFLEXION ! Votre score de ${scoreMoyen}/4 indique que vous commencez tout juste à vous interroger sur votre carrière. C'est un bon début !`
      }
    }

    const confirmationContent = `Bonjour ${userInfo.name},

Merci d'avoir participé à notre quiz d'orientation professionnelle !

📊 VOS RÉSULTATS :
- Score total : ${scoreTotal}/${questions.length * 4}
- Score moyen : ${scoreMoyen}/4

${getConseilPersonnalise(scoreMoyen)}

🎯 PROCHAINES ÉTAPES :
Si vous souhaitez aller plus loin, nous vous proposons :

1. 📞 Un échange téléphonique gratuit avec un de nos conseillers
2. 📅 Une réunion d'information pour découvrir nos accompagnements
3. 💼 Un bilan de compétences personnalisé

📞 CONTACTEZ-NOUS :
- Téléphone : 07 83 01 99 55
- Email : contact@atipikrh.com
- Adresse : 8 Rue du Courant, 33310 Lormont

Nous sommes là pour vous accompagner dans votre évolution professionnelle !

Cordialement,
L'équipe Atipik RH

---
📧 contact@atipikrh.com | 📞 07 83 01 99 55
8 Rue du Courant, 33310 Lormont`

    const result = await sendDualBrevoEmails({
      notificationSubject: `🎯 NOUVEAU LEAD QUALIFIÉ - Quiz Bilan ${userInfo.name}`,
      notificationContent: emailContent,
      notificationSenderName: 'Quiz Atipik RH',
      confirmationToEmail: userInfo.email,
      confirmationToName: userInfo.name,
      confirmationSubject:
        "🎯 Vos résultats du quiz d'orientation professionnelle - Atipik RH",
      confirmationContent,
    })

    if (result.missingConfig) {
      return res.status(500).json(SERVER_CONFIG_ERROR)
    }

    if (result.ok) {
      return res.status(200).json({
        success: true,
        messageIds: result.messageIds,
      })
    }

    return res.status(500).json(SEND_EMAIL_ERROR)
  } catch (error) {
    console.error('[Quiz] Erreur lors de l\'envoi Brevo:', error)
    return res.status(500).json({
      message: 'Erreur serveur',
      success: false,
    })
  }
} 