# Configuration Brevo (100% Gratuit)

## ✅ Vous avez déjà le compte Brevo - Parfait !

Brevo (ex-Sendinblue) est une excellente solution avec **300 emails/jour gratuits** (9000/mois).

## Étape 1 : Obtenir votre clé API

1. Connectez-vous à votre compte [Brevo](https://app.brevo.com/)
2. Allez dans **Compte** → **Clés API SMTP & API**
3. Cliquez sur **Générer une nouvelle clé API**
4. Nommez-la : `Quiz Atipik RH`
5. Copiez votre clé API (format : `xkeysib-xxxxx...`)

## Étape 2 : Configurer un email expéditeur

1. Dans Brevo, allez dans **Paramètres** → **Expéditeurs et IP**
2. Ajoutez un expéditeur : `noreply@atipikrh.fr`
3. Validez-le via l'email de confirmation
4. Si vous n'avez pas de domaine, utilisez votre email principal

## Étape 3 : Configurer le code

Dans `pages/bilan-de-competences/quiz.js`, remplacez :

```javascript
const BREVO_API_KEY = 'xkeysib-xxxxx...'           // Votre clé API Brevo
const BREVO_SENDER_EMAIL = 'noreply@atipikrh.fr'   // Email expéditeur validé
const BREVO_RECIPIENT_EMAIL = 'contact@atipikrh.fr' // Votre email de réception
```

## Étape 4 : Tester

1. Redémarrez votre serveur Next.js : `npm run dev`
2. Faites le quiz complet sur `http://localhost:3000/bilan-de-competences/quiz`
3. Vérifiez votre boîte mail !

## ✅ Avantages de Brevo

- **300 emails/jour gratuits** (vs 200/mois avec EmailJS)
- **Plateforme marketing complète** - analytics, contacts, campaigns
- **Meilleure délivrabilité** - emails arrivent mieux en boîte principale
- **Interface française** - support en français
- **Pas de limite de temps** - gratuit à vie

## 🔧 Dépannage

### Email expéditeur non validé
Si vous obtenez une erreur, vérifiez que l'email expéditeur est validé dans Brevo.

### Limite de quota
Le plan gratuit offre 300 emails/jour. Si vous dépassez, les emails seront mis en file d'attente.

### Problème d'API
Vérifiez que votre clé API a les permissions d'envoi d'emails.

## 📊 Monitoring

Dans votre dashboard Brevo, vous pourrez voir :
- Nombre d'emails envoyés
- Taux de délivrabilité  
- Statistiques détaillées

## 🚀 Évolutions possibles

Avec Brevo, vous pouvez ensuite :
- Créer des campagnes de relance automatiques
- Segmenter vos contacts selon les profils de quiz
- Analyser les conversions

## Support

En cas de problème : [Documentation Brevo](https://help.brevo.com/) 