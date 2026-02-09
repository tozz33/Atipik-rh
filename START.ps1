# Script simple pour demarrer le serveur (sans Turbopack)
$env:Path = "C:\Program Files\nodejs;$env:Path"
$env:FAST_REFRESH = "false"
$env:NEXT_TELEMETRY_DISABLED = "1"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Demarrage du serveur (Webpack)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Nettoyer le cache
Write-Host "Nettoyage du cache..." -ForegroundColor Yellow
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# Ouvrir le navigateur apres 20 secondes
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 20
    Start-Process "http://localhost:3000"
} | Out-Null

Write-Host "Le serveur demarre sur http://localhost:3000" -ForegroundColor Green
Write-Host "Le navigateur s'ouvrira automatiquement dans 20 secondes" -ForegroundColor Cyan
Write-Host "Appuyez sur Ctrl+C pour arreter le serveur" -ForegroundColor Yellow
Write-Host ""

# Utiliser le script dev-no-hmr.js qui evite Turbopack
node dev-no-hmr.js
