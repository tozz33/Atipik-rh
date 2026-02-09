# Script pour demarrer le serveur dans une nouvelle fenetre
$env:Path = "C:\Program Files\nodejs;$env:Path"

Write-Host "Demarrage du serveur..." -ForegroundColor Green

# Verifier Node.js
try {
    $nodeVersion = & node --version
    Write-Host "Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js non trouve" -ForegroundColor Red
    exit 1
}

# Verifier les dependances
if (-not (Test-Path "node_modules")) {
    Write-Host "Installation des dependances..." -ForegroundColor Yellow
    npm install
}

# Ouvrir le navigateur apres 8 secondes
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 8
    Start-Process "http://localhost:3000"
} | Out-Null

Write-Host ""
Write-Host "Le serveur demarre sur http://localhost:3000" -ForegroundColor Cyan
Write-Host "Le navigateur s'ouvrira automatiquement..." -ForegroundColor Cyan
Write-Host ""

# Demarrer le serveur dans une nouvelle fenetre PowerShell
$scriptPath = Join-Path $PSScriptRoot "demarrer-serveur-window.ps1"
$currentDir = $PWD.Path
$scriptContent = '$env:Path = "C:\Program Files\nodejs;$env:Path"' + "`r`n" + "cd `"$currentDir`"" + "`r`n" + "npm run dev"
$scriptContent | Out-File -FilePath $scriptPath -Encoding ASCII

Start-Process powershell -ArgumentList "-NoExit", "-File", "`"$scriptPath`""

Write-Host "Le serveur demarre dans une nouvelle fenetre PowerShell" -ForegroundColor Green
