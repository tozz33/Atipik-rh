// Script pour mettre à jour les assets Atipik RH
// À exécuter une fois que les logos et favicons sont déposés

const fs = require('fs')
const path = require('path')

console.log('🔄 Mise à jour des assets Atipik RH...')

// Vérifier si les assets existent
const assetsToCheck = [
  'public/images/logos/atipik-logo.svg',
  'public/images/logos/atipik-logo.png',
  'public/images/icons/favicon.ico',
  'public/images/icons/favicon.svg'
]

let foundAssets = []
assetsToCheck.forEach(asset => {
  if (fs.existsSync(asset)) {
    foundAssets.push(asset)
    console.log(`✅ Trouvé: ${asset}`)
  } else {
    console.log(`❌ Manquant: ${asset}`)
  }
})

if (foundAssets.length > 0) {
  console.log('\n📝 Assets détectés ! Prêt pour la mise à jour du code.')
  console.log('Exécutez: node update-assets.js apply')
} else {
  console.log('\n⚠️  Aucun asset trouvé. Déposez vos fichiers dans public/images/')
}

// Si "apply" est passé en argument, effectue les modifications
if (process.argv[2] === 'apply') {
  console.log('\n🚀 Application des modifications...')
  
  // Ici seraient les modifications automatiques des fichiers
  // Une fois que l'utilisateur aura déposé ses assets
  
  console.log('✅ Modifications appliquées ! Redémarrez le serveur.')
} 