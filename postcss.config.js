module.exports = {
  plugins: {
    tailwindcss: {},
    // autoprefixer désactivé temporairement (erreur "Invalid token" avec Node 24 / module corrompu)
    // Réactiver après: arrêter le serveur dev, supprimer node_modules, npm install
    // autoprefixer: {},
  },
} 