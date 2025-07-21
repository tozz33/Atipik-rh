# Option SDK Brevo (Plus complexe)


Si vous préférez utiliser le SDK officiel Brevo, voici les étapes :

## 1. Installer le SDK

```bash
npm install sib-api-v3-sdk
```

## 2. Créer une API route

Créez `pages/api/send-quiz-email.js` :

```javascript
var SibApiV3Sdk = require('sib-api-v3-sdk');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Configuration du client Brevo
    var defaultClient = SibApiV3Sdk.ApiClient.instance;
    var apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY; // Dans .env.local

    // Instance pour emails transactionnels
    var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const { userInfo, quizResult, answers, questions } = req.body;

    // Préparer le contenu
    const scoreTotal = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const scoreMoyen = (scoreTotal / questions.length).toFixed(1);
    
    const reponsesSynthese = questions.map((q, index) => {
      const answer = answers[q.id];
      const selectedOption = q.options.find(opt => opt.score === answer);
      return `${index + 1}. ${q.question}\n   Réponse : ${selectedOption ? selectedOption.text : 'Non répondu'} (Score: ${answer}/4)`;
    }).join('\n\n');

    const emailContent = `NOUVEAU LEAD QUALIFIÉ - QUIZ BILAN DE COMPÉTENCES
================================================

INFORMATIONS CONTACT :
- Prénom : ${userInfo.name}
- Email : ${userInfo.email}
- Téléphone : ${userInfo.phone || 'Non renseigné'}

DIAGNOSTIC :
- Type de profil : ${quizResult.type}
- Titre : ${quizResult.title}
- Niveau d'urgence : ${quizResult.urgency}
- Recommandation : ${quizResult.recommendation}

DESCRIPTION :
${quizResult.description}

SYNTHÈSE DES RÉPONSES :
${reponsesSynthese}

SCORE TOTAL : ${scoreTotal}/${questions.length * 4}
SCORE MOYEN : ${scoreMoyen}/4

---
Email généré automatiquement depuis le quiz bilan de compétences
Date : ${new Date().toLocaleString('fr-FR')}`;

    // Configurer l'email
    var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.subject = `🎯 NOUVEAU LEAD QUALIFIÉ - Quiz Bilan ${userInfo.name}`;
    sendSmtpEmail.textContent = emailContent;
    sendSmtpEmail.sender = {
      "name": "Quiz Atipik RH",
      "email": "noreply@atipikrh.fr"
    };
    sendSmtpEmail.to = [{
      "email": "contact@atipikrh.fr",
      "name": "Équipe Atipik RH"
    }];

    // Envoyer l'email
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email envoyé via SDK Brevo:', data);

    res.status(200).json({ success: true, messageId: data.messageId });
  } catch (error) {
    console.error('Erreur SDK Brevo:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi' });
  }
}
```

## 3. Modifier le quiz

Dans `pages/bilan-de-competences/quiz.js`, remplacez la fonction `handleUserInfoSubmit` :

```javascript
const handleUserInfoSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/send-quiz-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userInfo,
        quizResult,
        answers,
        questions
      }),
    });

    if (response.ok) {
      console.log('Email envoyé avec succès via SDK Brevo');
    } else {
      console.error('Erreur lors de l\'envoi de l\'email');
    }
  } catch (error) {
    console.error('Erreur:', error);
  }
  
  setShowResults(true);
};
```

## 4. Variables d'environnement

Créez `.env.local` :

```
BREVO_API_KEY=xkeysib-votre-cle-ici
```

## Pourquoi cette approche est plus complexe

- Nécessite une API route côté serveur
- Plus de code à maintenir
- Dépendance supplémentaire
- Variables d'environnement à gérer

## Recommandation

L'approche REST directe que j'ai implémentée est plus simple et tout aussi fiable pour votre cas d'usage. 