# Script pour demarrer le serveur et afficher les erreurs
$env:Path = "C:\Program Files\nodejs;$env:Path"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Demarrage du serveur Atipik RH" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verifier Node.js
try {
    $nodeVersion = & node --version
    Write-Host "[OK] Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERREUR] Node.js non trouve" -ForegroundColor Red
    Write-Host "Ajout de Node.js au PATH..." -ForegroundColor Yellow
    $env:Path = "C:\Program Files\nodejs;$env:Path"
    try {
        $nodeVersion = & node --version
        Write-Host "[OK] Node.js: $nodeVersion" -ForegroundColor Green
    } catch {
        Write-Host "[ERREUR] Impossible de trouver Node.js" -ForegroundColor Red
        exit 1
    }
}

# Verifier npm
try {
    $npmVersion = & npm --version
    Write-Host "[OK] npm: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERREUR] npm non trouve" -ForegroundColor Red
    exit 1
}

# Verifier les dependances
Write-Host ""
Write-Host "Verification des dependances..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] Installation des dependances..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERREUR] Echec de l'installation des dependances" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "[OK] Dependances deja installees" -ForegroundColor Green
}

# Verifier le port 3000
Write-Host ""
Write-Host "Verification du port 3000..." -ForegroundColor Yellow
$portInUse = netstat -ano | findstr ":3000" | findstr "LISTENING"
if ($portInUse) {
    Write-Host "[ATTENTION] Le port 3000 est deja utilise" -ForegroundColor Yellow
    Write-Host "Arret des processus existants..." -ForegroundColor Yellow
    $existingProcess = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
    if ($existingProcess) {
        $processId = $existingProcess.OwningProcess
        Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 2
        Write-Host "[OK] Processus arrete" -ForegroundColor Green
    }
}

# Ouvrir le navigateur apres 10 secondes
Write-Host ""
Write-Host "Le navigateur s'ouvrira automatiquement dans 10 secondes..." -ForegroundColor Cyan
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 10
    Start-Process "http://localhost:3000"
} | Out-Null

# Demarrer le serveur
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Demarrage du serveur..." -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Le serveur demarre sur http://localhost:3000" -ForegroundColor Green
Write-Host "Appuyez sur Ctrl+C pour arreter le serveur" -ForegroundColor Yellow
Write-Host ""

# Variables d'environnement pour la stabilite
$env:FAST_REFRESH = "false"
$env:NEXT_TELEMETRY_DISABLED = "1"

# Demarrer le serveur (cette commande bloque jusqu'a Ctrl+C)
npm run dev
