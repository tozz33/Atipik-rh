# Script pour demarrer le serveur dans une fenetre visible
$env:Path = "C:\Program Files\nodejs;$env:Path"

Write-Host "Demarrage du serveur dans une nouvelle fenetre..." -ForegroundColor Green

# Creer le script pour la nouvelle fenetre
$scriptContent = @'
$env:Path = "C:\Program Files\nodejs;$env:Path"
$env:FAST_REFRESH = "false"
$env:NEXT_TELEMETRY_DISABLED = "1"
cd "C:\Users\cnoah\Documents\GitHub\Atipik-rh-1"
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Serveur Next.js" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Demarrage sur http://localhost:3000" -ForegroundColor Green
Write-Host ""
& "node_modules\.bin\next.cmd" dev --no-turbo
'@

$tempFile = Join-Path $env:TEMP "nextjs-server.ps1"
$scriptContent | Out-File -FilePath $tempFile -Encoding UTF8

# Ouvrir le navigateur apres 20 secondes
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 20
    Start-Process "http://localhost:3000"
} | Out-Null

# Demarrer dans une nouvelle fenetre
Start-Process powershell -ArgumentList "-NoExit", "-File", "`"$tempFile`""

Write-Host "Une nouvelle fenetre PowerShell a ete ouverte avec le serveur" -ForegroundColor Green
Write-Host "Le navigateur s'ouvrira automatiquement dans 20 secondes" -ForegroundColor Cyan
Write-Host ""
Write-Host "Si le serveur ne demarre pas, verifiez les erreurs dans la nouvelle fenetre" -ForegroundColor Yellow
