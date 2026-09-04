# Script pour demarrer le serveur sans Turbopack
$env:Path = "C:\Program Files\nodejs;$env:Path"
$env:FAST_REFRESH = "false"
$env:NEXT_TELEMETRY_DISABLED = "1"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Demarrage du serveur (sans Turbopack)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verifier Node.js
try {
    $nodeVersion = & node --version
    Write-Host "[OK] Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERREUR] Node.js non trouve" -ForegroundColor Red
    exit 1
}

# Nettoyer le cache
Write-Host "Nettoyage du cache..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# Ouvrir le navigateur apres 15 secondes
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 15
    Start-Process "http://localhost:3000"
} | Out-Null

Write-Host ""
Write-Host "Le serveur demarre sur http://localhost:3000" -ForegroundColor Green
Write-Host "Le navigateur s'ouvrira automatiquement dans 15 secondes" -ForegroundColor Cyan
Write-Host "Appuyez sur Ctrl+C pour arreter le serveur" -ForegroundColor Yellow
Write-Host ""

# Demarrer avec --no-turbo explicitement
& "C:\Program Files\nodejs\npm.cmd" run dev
