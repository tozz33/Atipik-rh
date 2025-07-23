# Guide pour modifier le bandeau d'annonce

## 📍 Localisation du fichier
Le fichier de configuration se trouve dans : `public/banner-config.json`

## 🎛️ Configuration disponible

### ✅ Activer/Désactiver le bandeau
```json
"active": true   // true = affiché, false = masqué
```

### 📝 Textes
```json
"title": "🎓 Prochaines sessions de formation",
"subtitle": "Inscriptions ouvertes - Places limitées"
```

### 🔗 Boutons
```json
"primaryButton": {
  "text": "Voir les formations",
  "link": "/formations"
},
"secondaryButton": {
  "text": "Nous contacter", 
  "link": "/contact"
}
```

### 🎨 Couleurs de fond disponibles
```json
"backgroundColor": "from-orange-500 to-orange-600"  // Orange (défaut)
"backgroundColor": "from-blue-500 to-blue-600"     // Bleu
"backgroundColor": "from-green-500 to-green-600"   // Vert
"backgroundColor": "from-red-500 to-red-600"       // Rouge
"backgroundColor": "from-purple-500 to-purple-600" // Violet
```

### 🔍 Icônes disponibles
```json
"icon": "clock"     // Horloge (défaut)
"icon": "star"      // Étoile
"icon": "megaphone" // Mégaphone
```

## 📋 Exemples de configurations

### Exemple 1 : Nouvelle session de formation
```json
{
  "active": true,
  "title": "🎓 Nouvelle session CIP - Mars 2024",
  "subtitle": "Dernières places disponibles",
  "primaryButton": {
    "text": "S'inscrire",
    "link": "/formations/cip"
  },
  "secondaryButton": {
    "text": "Programme détaillé",
    "link": "/formations/cip"
  },
  "backgroundColor": "from-orange-500 to-orange-600",
  "icon": "clock"
}
```

### Exemple 2 : Journée portes ouvertes
```json
{
  "active": true,
  "title": "🚪 Journée Portes Ouvertes - 15 Février",
  "subtitle": "Découvrez nos formations et rencontrez l'équipe",
  "primaryButton": {
    "text": "Réserver ma place",
    "link": "/contact"
  },
  "secondaryButton": {
    "text": "Programme",
    "link": "/evenements"
  },
  "backgroundColor": "from-blue-500 to-blue-600",
  "icon": "star"
}
```

### Exemple 3 : Désactiver le bandeau
```json
{
  "active": false,
  "title": "",
  "subtitle": "",
  "primaryButton": {
    "text": "",
    "link": ""
  },
  "secondaryButton": {
    "text": "",
    "link": ""
  },
  "backgroundColor": "from-orange-500 to-orange-600",
  "icon": "clock"
}
```

## 🔄 Application des changements

1. Modifiez le fichier `public/banner-config.json`
2. Sauvegardez le fichier
3. Actualisez la page d'accueil du site
4. Les changements apparaissent immédiatement !

## ⚠️ Important
- Respectez la syntaxe JSON (guillemets, virgules, accolades)
- Les liens doivent commencer par `/` pour les pages internes
- Testez toujours après modification 