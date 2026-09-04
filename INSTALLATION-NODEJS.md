# Installation de Node.js - Guide rapide

## Pourquoi Node.js est nécessaire ?

Next.js nécessite Node.js pour fonctionner. C'est l'environnement d'exécution JavaScript qui permet de démarrer le serveur de développement.

## Installation rapide (5 minutes)

### Étape 1 : Télécharger Node.js

1. Allez sur : **https://nodejs.org/**
2. Cliquez sur le bouton **"LTS"** (Long Term Support) - version recommandée
3. Le téléchargement commence automatiquement

### Étape 2 : Installer Node.js

1. Double-cliquez sur le fichier téléchargé (ex: `node-v20.x.x-x64.msi`)
2. Suivez l'assistant d'installation
3. **IMPORTANT** : Cochez la case **"Add to PATH"** si elle est proposée
4. Cliquez sur "Install" et attendez la fin de l'installation

### Étape 3 : Vérifier l'installation

1. Ouvrez un **nouveau** PowerShell ou CMD
2. Tapez :
   ```powershell
   node --version
   npm --version
   ```
3. Vous devriez voir les numéros de version (ex: v20.x.x et 10.x.x)

### Étape 4 : Installer les dépendances du projet

Dans le dossier du projet, exécutez :
```powershell
npm install
```

Cette commande peut prendre quelques minutes la première fois.

### Étape 5 : Démarrer le serveur

```powershell
npm run dev
```

Ou utilisez le script :
```powershell
.\demarrer-serveur.bat
```

## Accès au site

Une fois le serveur démarré, ouvrez votre navigateur et allez sur :
**http://localhost:3000**

## Problèmes courants

### "node n'est pas reconnu"
- Redémarrez PowerShell/CMD après l'installation
- Vérifiez que Node.js est bien installé : `where node`
- Ajoutez manuellement Node.js au PATH si nécessaire

### "npm install" échoue
- Vérifiez votre connexion Internet
- Essayez : `npm install --verbose` pour voir les détails
- Vérifiez que vous êtes dans le bon dossier du projet

### Le port 3000 est déjà utilisé
- Fermez les autres applications qui utilisent le port 3000
- Ou changez le port : `npm run dev -- -p 3001`

## Besoin d'aide ?

Si vous rencontrez des problèmes, vérifiez :
1. Node.js est bien installé : `node --version`
2. Vous êtes dans le bon dossier : `pwd` (PowerShell) ou `cd` (CMD)
3. Les dépendances sont installées : le dossier `node_modules` existe

