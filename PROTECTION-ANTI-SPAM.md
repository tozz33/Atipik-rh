# Protection Anti-Spam pour les Formulaires

## Vue d'ensemble

Ce projet intègre maintenant une protection anti-spam professionnelle multi-couches pour tous les formulaires du site. La solution est légère, sans dépendance externe (pas de CAPTCHA), et offre une excellente protection contre les bots et le spam.

## Stratégie de Protection

### 1. **Honeypot** 🍯
Un champ caché invisible pour les humains mais que les bots remplissent automatiquement.
- Champ `website_url` positionné hors écran
- CSS : `display: none` + `position: absolute` + `left: -9999px`
- Tabindex -1 pour éviter la navigation clavier
- Si rempli → rejet immédiat

### 2. **Rate Limiting** ⏱️
Limitation du nombre de soumissions par adresse IP.
- **Maximum** : 3 soumissions par heure par IP
- Stockage en mémoire avec nettoyage automatique
- Réponse HTTP 429 (Too Many Requests) si dépassé
- Header `Retry-After` indiquant le temps d'attente

### 3. **Validation Temporelle** ⏲️
Vérification du temps entre le chargement et la soumission du formulaire.
- **Minimum** : 3 secondes (protection contre soumission automatique)
- **Maximum** : 24 heures (protection contre timestamps frauduleux)
- Timestamp enregistré au chargement du formulaire

### 4. **Détection de Patterns Suspects** 🔍
Analyse du contenu pour détecter le spam.
- Email invalide (regex strict)
- Contenu répétitif (même caractère > 10 fois)
- Mots-clés spam courants (viagra, casino, etc.)
- **Patterns spam commerciaux** (ajouté) :
  - Visibilité Google / Google Maps
  - SEO / référencement / backlinks
  - Augmenter revenus / premier sur Google
  - Audit gratuit / améliorer positionnement

## Architecture des Fichiers

```
├── lib/
│   └── antiSpam.js              # Middleware réutilisable
├── components/
│   └── HoneypotField.js         # Composant honeypot
├── pages/
│   ├── contact.js               # Formulaire contact (modifié)
│   ├── s-inscrire.js            # Formulaire inscription (modifié)
│   └── bilan-de-competences/
│       └── quiz.js              # Formulaire quiz (modifié)
└── pages/api/
    ├── contact.js               # API contact (protégée)
    ├── inscription-reunion.js   # API inscription (protégée)
    └── send-quiz-brevo.js       # API quiz (protégée)
```

## Utilisation

### Côté Frontend (formulaires)

```javascript
import { useState, useEffect } from 'react'
import HoneypotField from '../components/HoneypotField'

export default function MonFormulaire() {
  const [honeypot, setHoneypot] = useState('')
  const [formTimestamp, setFormTimestamp] = useState(null)

  useEffect(() => {
    // Enregistrer le timestamp de chargement
    setFormTimestamp(Date.now())
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Vérification honeypot côté client
    if (honeypot) {
      console.log('Honeypot déclenché')
      return
    }
    
    const response = await fetch('/api/mon-endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        honeypot,
        timestamp: formTimestamp
      })
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <HoneypotField value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      {/* Vos champs de formulaire */}
    </form>
  )
}
```

### Côté Backend (API routes)

```javascript
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

  // Traitement normal du formulaire
  // ...
}
```

## Formulaires Protégés

Tous les formulaires du site sont maintenant protégés :

1. ✅ **Formulaire de Contact** (`/contact`)
   - API : `/api/contact`
   - Protection complète activée

2. ✅ **Formulaire d'Inscription aux Réunions** (`/s-inscrire`)
   - API : `/api/inscription-reunion`
   - Protection complète activée

3. ✅ **Quiz Bilan de Compétences** (`/bilan-de-competences/quiz`)
   - API : `/api/send-quiz-brevo`
   - Protection complète activée

## Configuration

### Paramètres du Rate Limiting

Dans `lib/antiSpam.js` :

```javascript
const RATE_LIMIT_MAX = 3              // 3 soumissions max
const RATE_LIMIT_WINDOW = 60 * 60 * 1000  // 1 heure
const MIN_SUBMISSION_TIME = 3000      // 3 secondes minimum
```

### Patterns Spam Spécifiques

Les regex suivantes détectent les messages commerciaux non sollicités :

```javascript
const spamRegex = [
  /visibilit[eé].*google/i,        // "visibilité sur Google", "visibilite google"
  /google\s?maps/i,                 // "Google Maps", "googlemaps"
  /seo|référencement|backlinks/i,   // SEO, référencement naturel, backlinks
  /augmenter.*revenus/i,            // "augmenter vos revenus"
  /audit.*gratuit/i,                // "audit gratuit", "audit SEO gratuit"
  /premier.*google/i,               // "premier sur Google"
  /classement.*google/i,            // "classement Google"
  /améliorer.*positionnement/i      // "améliorer votre positionnement"
]
```

Ces patterns ciblent spécifiquement les messages spam SEO/marketing qui sont courants sur les formulaires de contact professionnels.

### Ajuster les Limites

Pour modifier les limites, éditez ces constantes dans `lib/antiSpam.js` :

- **Plus strict** : Réduire `RATE_LIMIT_MAX` à 2 ou augmenter `MIN_SUBMISSION_TIME` à 5000ms
- **Plus permissif** : Augmenter `RATE_LIMIT_MAX` à 5 ou réduire `MIN_SUBMISSION_TIME` à 2000ms

## Messages d'Erreur

Les messages d'erreur sont volontairement génériques pour ne pas révéler les mécanismes de protection :

- **Honeypot déclenché** : "Erreur de validation du formulaire" (400)
- **Rate limit dépassé** : "Trop de tentatives. Veuillez réessayer plus tard." (429)
- **Timing invalide** : "Erreur de validation du formulaire" (400)
- **Contenu suspect** : "Erreur de validation du formulaire" (400)

## Monitoring et Logs

Tous les événements anti-spam sont loggés côté serveur :

```javascript
// Exemples de logs
[Anti-Spam] Honeypot déclenché - IP: 192.168.1.1
[Anti-Spam] Rate limit dépassé - IP: 192.168.1.1, retry après 3600s
[Anti-Spam] Validation temporelle échouée - IP: 192.168.1.1
[Anti-Spam] Pattern suspect détecté - IP: 192.168.1.1, raison: spam_keyword
[Anti-Spam] Validation réussie - IP: 192.168.1.1, soumissions restantes: 2
```

## Statistiques

Pour obtenir des statistiques en temps réel (utile pour le monitoring) :

```javascript
import { getAntiSpamStats } from '../../lib/antiSpam'

const stats = getAntiSpamStats()
// Retourne :
// {
//   totalIPs: 5,
//   entries: [
//     { ip: '192.168.1.1', count: 2, firstSubmission: '2025-12-17T10:30:00.000Z' }
//   ]
// }
```

## Avantages de cette Approche

✅ **Sans dépendance externe** - Pas de services tiers (reCAPTCHA, Cloudflare, etc.)  
✅ **Expérience utilisateur optimale** - Invisible pour les utilisateurs légitimes  
✅ **Performance** - Stockage en mémoire, très rapide  
✅ **Confidentialité** - Pas de tracking externe  
✅ **Gratuit** - Aucun coût supplémentaire  
✅ **Scalable** - Facile à adapter à tous les formulaires  
✅ **Professionnel** - Approche utilisée en production par de nombreuses entreprises  

## Tests

### Tester la Protection Honeypot

Utilisez les DevTools pour remplir le champ honeypot :

```javascript
document.getElementById('website_url').value = 'spam'
// Soumettez le formulaire → devrait être rejeté
```

### Tester le Rate Limiting

1. Soumettez le formulaire 3 fois en 1 heure
2. La 4ème tentative devrait retourner une erreur 429
3. Attendez 1 heure ou redémarrez le serveur pour reset

### Tester la Validation Temporelle

Modifiez le timestamp dans les DevTools avant soumission :

```javascript
// Dans la console avant de soumettre
formTimestamp = Date.now() - 1000 // Moins de 3 secondes
// ou
formTimestamp = Date.now() + 10000 // Timestamp futur
```

## Maintenance

### Nettoyage Automatique

Le système nettoie automatiquement les entrées expirées toutes les 10 minutes. Aucune maintenance manuelle n'est requise.

### Redémarrage du Serveur

En cas de redémarrage, le stockage en mémoire est réinitialisé. Pour une persistance entre redémarrages, vous pouvez :

1. Utiliser Redis ou une base de données
2. Persister dans un fichier JSON
3. Utiliser une solution comme Vercel KV (pour déploiement Vercel)

## Support

Pour toute question ou problème :
- Consultez les logs serveur dans la console
- Vérifiez que tous les champs requis sont présents
- Testez avec une IP différente si bloqué par le rate limiting

---

**Date de mise en place** : 17 Décembre 2025  
**Version** : 1.0  
**Maintenance** : Automatique (nettoyage mémoire)

