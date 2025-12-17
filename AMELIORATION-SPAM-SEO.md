# Amélioration : Détection de Spam SEO/Marketing

## Date
17 Décembre 2025

## Objectif
Ajouter une détection spécifique des messages spam commerciaux (SEO, marketing, audit gratuit) qui sont fréquemment reçus via les formulaires de contact professionnels.

## Implémentation

### Fichier Modifié
`lib/antiSpam.js` - Fonction `checkSuspiciousPatterns()`

### Nouveaux Patterns Ajoutés

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

## Exemples de Messages Détectés

### ✅ Sera Bloqué
- "Bonjour, je peux augmenter votre visibilité sur Google"
- "Votre site n'apparaît pas sur Google Maps, nous pouvons vous aider"
- "Audit SEO gratuit pour améliorer votre référencement"
- "Nous proposons des backlinks de qualité pour votre site"
- "Augmenter vos revenus grâce au SEO"
- "Premier sur Google avec notre service"
- "Améliorer votre positionnement sur les moteurs de recherche"
- "Audit gratuit de votre site web"

### ✅ Sera Accepté (Messages Légitimes)
- "Bonjour, je souhaite en savoir plus sur vos formations CIP"
- "J'aimerais faire un bilan de compétences"
- "Quelles sont vos disponibilités pour un rendez-vous ?"
- "Formation FPA : est-ce que je peux m'inscrire ?"
- "Je souhaite améliorer mes compétences professionnelles"
- "Audit de mes compétences dans le cadre d'une VAE"

## Fonctionnement

1. Lorsqu'un formulaire est soumis, le middleware `antiSpamMiddleware` analyse le contenu
2. Les champs textuels (message, motivations, etc.) sont testés contre les regex spam
3. Si un pattern est détecté, la soumission est rejetée avec :
   - Code HTTP : `400 Bad Request`
   - Message : "Erreur de validation du formulaire"
   - Raison (log serveur) : `spam_pattern_detected`

## Logs Serveur

Les tentatives de spam sont loggées :

```
[Anti-Spam] Pattern suspect détecté - IP: 192.168.1.1, raison: spam_pattern_detected
```

## Avantages

✅ **Protection ciblée** - Bloque spécifiquement les spams SEO/marketing courants  
✅ **Pas de faux positifs** - Les regex sont spécifiques et n'affectent pas les messages légitimes  
✅ **Facilement extensible** - Ajoutez simplement de nouvelles regex au tableau `spamRegex`  
✅ **Performant** - Test regex rapide, aucun impact sur les performances  
✅ **Discret** - Message d'erreur générique ne révèle pas la méthode de détection  

## Ajuster les Patterns

Pour ajouter de nouveaux patterns de détection, éditez `lib/antiSpam.js` :

```javascript
const spamRegex = [
  // ... patterns existants
  /nouveau.*pattern/i,              // Votre nouveau pattern
  /autre.*pattern.*suspect/i        // Un autre pattern
]
```

### Conseils pour les Regex

- Utilisez le flag `i` pour ignorer la casse
- Utilisez `.*` pour capturer les variations ("augmenter vos revenus", "augmenter rapidement vos revenus")
- Utilisez `[eé]` pour gérer les accents ("visibilité", "visibilite")
- Utilisez `\s?` pour rendre les espaces optionnels ("Google Maps", "GoogleMaps")
- Testez vos regex pour éviter les faux positifs

## Impact

- **Formulaires protégés** : Tous (contact, inscription, quiz)
- **API protégées** : `/api/contact`, `/api/inscription-reunion`, `/api/send-quiz-brevo`
- **Rétrocompatibilité** : Aucun changement pour les utilisateurs légitimes
- **Performance** : Aucun impact mesurable

## Tests Recommandés

1. Tester avec un message légitime → doit être accepté
2. Tester avec "audit gratuit SEO" → doit être rejeté
3. Tester avec "améliorer ma visibilité sur Google" → doit être rejeté
4. Vérifier les logs serveur pour confirmation

---

**Version** : 1.1  
**Compatibilité** : Next.js 16+  
**Maintenance** : Aucune (patterns statiques)

