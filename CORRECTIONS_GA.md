# Corrections apportées à Google Analytics

## Problèmes identifiés et résolus

### ❌ Problème 1 : Chargement inconditionnel des scripts GA
**Avant** : Les scripts Google Analytics étaient chargés dans `_app.js` de manière inconditionnelle, même sans consentement utilisateur.

**Impact** : Non conforme RGPD - les scripts étaient téléchargés avant le consentement.

**Solution** : 
- Suppression des scripts statiques dans `_app.js`
- Création d'une fonction `loadGAScripts()` dans `lib/analytics.js` qui charge les scripts dynamiquement
- Les scripts ne sont chargés que si `isConsentGiven()` retourne `true`

### ✅ Correction appliquée

**Fichier modifié** : `pages/_app.js`
- Supprimé les composants `<Script>` pour Google Analytics
- Ajout d'un commentaire expliquant que les scripts sont chargés dynamiquement

**Fichier modifié** : `lib/analytics.js`
- Ajout de la fonction `loadGAScripts()` qui charge les scripts de manière asynchrone
- Amélioration de `initGA()` pour utiliser `async/await` et gérer les promesses
- Meilleure gestion des erreurs lors du chargement

## Fonctionnement actuel

### 1. Sans consentement
- Les scripts GA ne sont **pas** chargés
- Aucune requête réseau vers Google Analytics
- `window.gtag` est `undefined`
- Conforme RGPD ✅

### 2. Avec consentement analytique
- Les scripts sont chargés dynamiquement via `loadGAScripts()`
- `initGA()` est appelé après acceptation
- Les scripts sont injectés dans le `<head>`
- `window.gtag` devient disponible
- Les pages sont trackées automatiquement

### 3. Changement de consentement
- Si l'utilisateur refuse après avoir accepté : les scripts restent chargés mais ne sont plus utilisés
- Si l'utilisateur accepte après avoir refusé : les scripts sont chargés dynamiquement

## Tests à effectuer

### Test 1 : Vérifier que GA ne se charge pas sans consentement
```javascript
// En navigation privée, avant d'accepter les cookies
console.log(typeof window.gtag) // Doit retourner "undefined"
console.log(document.querySelector('script[src*="gtag/js"]')) // Doit retourner null
```

### Test 2 : Vérifier le chargement après consentement
```javascript
// Après avoir accepté les cookies analytiques
setTimeout(() => {
  console.log(typeof window.gtag) // Doit retourner "function"
  console.log(document.querySelector('script[src*="gtag/js"]')) // Doit retourner l'élément script
}, 2000)
```

### Test 3 : Vérifier le tracking des pages
```javascript
// Naviguer entre les pages et vérifier dans la console
window.dataLayer.filter(e => Array.isArray(e) && e[0] === 'config')
// Doit contenir les événements de configuration pour chaque page
```

## Avantages de la correction

1. **Conformité RGPD** : Les scripts ne sont chargés qu'après consentement explicite
2. **Performance** : Pas de téléchargement inutile des scripts si l'utilisateur refuse
3. **Flexibilité** : Chargement dynamique permet de gérer les changements de consentement
4. **Robustesse** : Meilleure gestion des erreurs avec async/await

## Fichiers modifiés

- ✅ `lib/analytics.js` - Ajout de `loadGAScripts()` et amélioration de `initGA()`
- ✅ `pages/_app.js` - Suppression des scripts statiques GA
- ✅ `components/CookieBanner.js` - Déjà correct (appelle `initGA()` après consentement)
- ✅ `hooks/useGoogleAnalytics.js` - Déjà correct (utilise `initGA()`)

## Prochaines étapes

1. Tester en production après déploiement
2. Vérifier dans Google Analytics Real-Time que les données arrivent
3. Vérifier que les scripts ne se chargent pas sans consentement (onglet Network)
4. Vérifier la conformité RGPD avec un outil de test
