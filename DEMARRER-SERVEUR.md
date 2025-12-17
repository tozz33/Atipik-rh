# Guide pour démarrer le serveur en local

## Méthode 1 : Via PowerShell (Recommandé)

1. Ouvrez PowerShell dans le dossier du projet
2. Exécutez le script :
   ```powershell
   .\start-server.ps1
   ```

## Méthode 2 : Via npm directement

Si Node.js est installé et accessible :

1. Installez les dépendances (première fois uniquement) :
   ```powershell
   npm install
   ```

2. Démarrez le serveur :
   ```powershell
   npm run dev
   ```

## Méthode 3 : Si Node.js n'est pas installé

1. Téléchargez et installez Node.js depuis : https://nodejs.org/
   - Version recommandée : LTS (Long Term Support)
   - Assurez-vous de cocher l'option "Add to PATH" lors de l'installation

2. Redémarrez PowerShell après l'installation

3. Vérifiez l'installation :
   ```powershell
   node --version
   npm --version
   ```

4. Installez les dépendances :
   ```powershell
   npm install
   ```

5. Démarrez le serveur :
   ```powershell
   npm run dev
   ```

## Accès au site

Une fois le serveur démarré, ouvrez votre navigateur et accédez à :
**http://localhost:3000**

## Arrêter le serveur

Appuyez sur `Ctrl + C` dans le terminal PowerShell

