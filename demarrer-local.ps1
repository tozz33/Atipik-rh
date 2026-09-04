# Script simple pour démarrer le serveur local
$env:Path = "$env:ProgramFiles\nodejs;$env:Path"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Démarrage du serveur Atipik RH" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier Node.js
try {
    $nodeVersion = & node --version
    Write-Host "[OK] Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERREUR] Node.js non trouvé" -ForegroundColor Red
    exit 1
}

# Vérifier les dépendances
if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] Installation des dépendances..." -ForegroundColor Yellow
    npm install
}

# Vérifier le port 3000
$portInUse = netstat -ano | findstr :3000
if ($portInUse) {
    Write-Host "[ATTENTION] Le port 3000 est déjà utilisé" -ForegroundColor Yellow
    Write-Host "[INFO] Arrêtez l'application qui utilise ce port" -ForegroundColor Yellow
}

# Ouvrir le navigateur après 5 secondes
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 5
    Start-Process "http://localhost:3000"
} | Out-Null

Write-Host ""
Write-Host "Le serveur démarre sur http://localhost:3000" -ForegroundColor Green
Write-Host "Le navigateur s'ouvrira automatiquement..." -ForegroundColor Cyan
Write-Host "Appuyez sur Ctrl+C pour arrêter le serveur" -ForegroundColor Yellow
Write-Host ""

# Démarrer le serveur
npm run dev

