#!/bin/bash

echo "🚀 Démarrage du serveur Atipik RH (mode stable)..."
echo ""

# Nettoyer le cache
rm -rf .next

# Vérifier et arrêter tout serveur existant
pkill -f "next dev" 2>/dev/null || true

# Attendre un peu
sleep 2

echo "📍 Démarrage du serveur..."

# Variables d'environnement pour la stabilité
export FAST_REFRESH=false
export NEXT_TELEMETRY_DISABLED=1

# Lancer le serveur sur le port 3000 spécifiquement
npx next dev -p 3000 