# Script pour demarrer le serveur dans une fenetre visible
$env:Path = "C:\Program Files\nodejs;$env:Path"

Write-Host "Demarrage du serveur dans une nouvelle fenetre..." -ForegroundColor Green

# Creer un script temporaire
$tempScript = Join-Path $env:TEMP "start-nextjs-fixe.ps1"
$currentDir = $PWD.Path
$scriptContent = @"
`$env:Path = "C:\Program Files\nodejs;`$env:Path"
`$env:FAST_REFRESH = "false"
`$env:NEXT_TELEMETRY_DISABLED = "1"
cd "`"$currentDir`""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Serveur Next.js (sans Turbopack)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Demarrage sur http://localhost:3000" -ForegroundColor Green
Write-Host ""
& "C:\Program Files\nodejs\npm.cmd" run dev
"@

$scriptContent | Out-File -FilePath $tempScript -Encoding UTF8

# Ouvrir le navigateur apres 15 secondes
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 15
    Start-Process "http://localhost:3000"
} | Out-Null

# Demarrer dans une nouvelle fenetre
Start-Process powershell -ArgumentList "-NoExit", "-File", "`"$tempScript`""

Write-Host "Une nouvelle fenetre PowerShell a ete ouverte" -ForegroundColor Green
Write-Host "Le navigateur s'ouvrira automatiquement dans 15 secondes" -ForegroundColor Cyan
