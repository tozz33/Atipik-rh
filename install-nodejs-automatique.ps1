# Script PowerShell pour installer Node.js automatiquement
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Installation automatique de Node.js" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier les privilèges administrateur
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    Write-Host "[ATTENTION] Les privilèges administrateur sont nécessaires pour installer Node.js" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Tentative d'élévation des privilèges..." -ForegroundColor Cyan
    
    # Relancer avec privilèges administrateur
    $scriptPath = $MyInvocation.MyCommand.Path
    Start-Process powershell -Verb RunAs -ArgumentList "-NoExit", "-File", "`"$scriptPath`""
    exit
}

Write-Host "[OK] Privilèges administrateur obtenus" -ForegroundColor Green
Write-Host ""

# URL de téléchargement Node.js LTS
$nodeVersion = "20.11.0"
$nodeUrl = "https://nodejs.org/dist/v$nodeVersion/node-v$nodeVersion-x64.msi"
$downloadPath = "$env:TEMP\nodejs-installer.msi"

Write-Host "[1/3] Téléchargement de Node.js LTS v$nodeVersion..." -ForegroundColor Yellow
Write-Host "URL: $nodeUrl" -ForegroundColor Gray

try {
    # Télécharger Node.js
    Invoke-WebRequest -Uri $nodeUrl -OutFile $downloadPath -UseBasicParsing
    Write-Host "[OK] Téléchargement terminé" -ForegroundColor Green
} catch {
    Write-Host "[ERREUR] Échec du téléchargement: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "Téléchargement manuel:" -ForegroundColor Yellow
    Write-Host "1. Allez sur https://nodejs.org/" -ForegroundColor White
    Write-Host "2. Téléchargez la version LTS" -ForegroundColor White
    Write-Host "3. Installez en cochant 'Add to PATH'" -ForegroundColor White
    exit 1
}

Write-Host ""
Write-Host "[2/3] Installation de Node.js..." -ForegroundColor Yellow
Write-Host "Cela peut prendre quelques minutes..." -ForegroundColor Gray

try {
    # Installer Node.js silencieusement avec ajout au PATH
    $arguments = "/i `"$downloadPath`" /quiet /norestart ADDLOCAL=ALL"
    $process = Start-Process msiexec.exe -ArgumentList $arguments -Wait -PassThru
    
    if ($process.ExitCode -eq 0) {
        Write-Host "[OK] Installation terminée" -ForegroundColor Green
    } else {
        Write-Host "[ERREUR] Code de sortie: $($process.ExitCode)" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "[ERREUR] Échec de l'installation: $_" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "[3/3] Mise à jour du PATH..." -ForegroundColor Yellow

# Rafraîchir le PATH
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Attendre un peu pour que l'installation se termine
Start-Sleep -Seconds 3

# Vérifier l'installation
Write-Host ""
Write-Host "Vérification de l'installation..." -ForegroundColor Yellow

try {
    $nodePath = "$env:ProgramFiles\nodejs\node.exe"
    if (Test-Path $nodePath) {
        $env:Path = "$env:ProgramFiles\nodejs;$env:Path"
        $nodeVersion = & $nodePath --version
        Write-Host "[OK] Node.js installé: $nodeVersion" -ForegroundColor Green
        
        $npmVersion = & "$env:ProgramFiles\nodejs\npm.cmd" --version
        Write-Host "[OK] npm installé: $npmVersion" -ForegroundColor Green
    } else {
        Write-Host "[ATTENTION] Node.js installé mais pas trouvé au chemin attendu" -ForegroundColor Yellow
        Write-Host "[INFO] Redémarrez PowerShell pour utiliser Node.js" -ForegroundColor Yellow
    }
} catch {
    Write-Host "[ATTENTION] Impossible de vérifier l'installation" -ForegroundColor Yellow
    Write-Host "[INFO] Redémarrez PowerShell et vérifiez avec: node --version" -ForegroundColor Yellow
}

# Nettoyer
if (Test-Path $downloadPath) {
    Remove-Item $downloadPath -Force
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Installation terminée!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Prochaines étapes:" -ForegroundColor Yellow
Write-Host "1. Redémarrez PowerShell (fermez et rouvrez)" -ForegroundColor White
Write-Host "2. Allez dans le dossier du projet" -ForegroundColor White
Write-Host "3. Exécutez: npm install" -ForegroundColor White
Write-Host "4. Exécutez: npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Ou utilisez: .\installer-et-demarrer.ps1" -ForegroundColor Cyan
Write-Host ""

