# Script PowerShell pour installer Node.js et démarrer le serveur
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Installation et démarrage du serveur" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Node.js est déjà installé
$nodeFound = $false
$nodePath = $null

# Vérifier dans le PATH
try {
    $result = Get-Command node -ErrorAction Stop
    $nodePath = $result.Source
    $nodeFound = $true
    Write-Host "[OK] Node.js trouvé: $nodePath" -ForegroundColor Green
    $nodeVersion = & node --version
    Write-Host "[OK] Version: $nodeVersion" -ForegroundColor Green
} catch {
    # Chercher dans les emplacements communs
    $commonPaths = @(
        "$env:ProgramFiles\nodejs\node.exe",
        "${env:ProgramFiles(x86)}\nodejs\node.exe",
        "$env:LOCALAPPDATA\Programs\nodejs\node.exe"
    )
    
    foreach ($path in $commonPaths) {
        if (Test-Path $path) {
            $nodePath = $path
            $nodeFound = $true
            Write-Host "[OK] Node.js trouvé: $nodePath" -ForegroundColor Green
            $nodeVersion = & $nodePath --version
            Write-Host "[OK] Version: $nodeVersion" -ForegroundColor Green
            # Ajouter au PATH pour cette session
            $env:Path = "$([System.IO.Path]::GetDirectoryName($nodePath));$env:Path"
            break
        }
    }
}

if (-not $nodeFound) {
    Write-Host "[ATTENTION] Node.js n'est pas installé" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Je vais ouvrir la page de téléchargement de Node.js..." -ForegroundColor Cyan
    Write-Host ""
    
    # Ouvrir la page de téléchargement
    Start-Process "https://nodejs.org/"
    
    Write-Host "Instructions:" -ForegroundColor Yellow
    Write-Host "1. Téléchargez la version LTS (Long Term Support)" -ForegroundColor White
    Write-Host "2. Installez Node.js en cochant 'Add to PATH'" -ForegroundColor White
    Write-Host "3. Redémarrez PowerShell après l'installation" -ForegroundColor White
    Write-Host "4. Relancez ce script: .\installer-et-demarrer.ps1" -ForegroundColor White
    Write-Host ""
    Write-Host "Ou installez manuellement depuis: https://nodejs.org/" -ForegroundColor Cyan
    Write-Host ""
    
    $response = Read-Host "Avez-vous installé Node.js maintenant ? (O/N)"
    if ($response -eq "O" -or $response -eq "o") {
        Write-Host ""
        Write-Host "Vérification de l'installation..." -ForegroundColor Yellow
        # Rafraîchir le PATH
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
        
        try {
            $result = Get-Command node -ErrorAction Stop
            $nodeFound = $true
            Write-Host "[OK] Node.js trouvé!" -ForegroundColor Green
        } catch {
            Write-Host "[ERREUR] Node.js toujours introuvable. Redémarrez PowerShell et réessayez." -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host ""
        Write-Host "Installation annulée. Installez Node.js manuellement et relancez ce script." -ForegroundColor Yellow
        exit 1
    }
}

# Vérifier npm
Write-Host ""
Write-Host "[2/4] Vérification de npm..." -ForegroundColor Yellow
try {
    $npmVersion = & npm --version
    Write-Host "[OK] npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERREUR] npm n'est pas accessible" -ForegroundColor Red
    exit 1
}

# Installer les dépendances si nécessaire
Write-Host ""
Write-Host "[3/4] Vérification des dépendances..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] Installation des dépendances (cela peut prendre quelques minutes)..." -ForegroundColor Cyan
    & npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERREUR] Échec de l'installation des dépendances" -ForegroundColor Red
        exit 1
    }
    Write-Host "[OK] Dépendances installées" -ForegroundColor Green
} else {
    Write-Host "[OK] Dépendances déjà installées" -ForegroundColor Green
}

# Vérifier le port 3000
Write-Host ""
Write-Host "[4/4] Vérification du port 3000..." -ForegroundColor Yellow
$portInUse = netstat -ano | findstr :3000
if ($portInUse) {
    Write-Host "[ATTENTION] Le port 3000 est déjà utilisé" -ForegroundColor Yellow
    Write-Host "[INFO] Fermez l'application qui utilise ce port ou changez le port" -ForegroundColor Yellow
    $response = Read-Host "Voulez-vous continuer quand même ? (O/N)"
    if ($response -ne "O" -and $response -ne "o") {
        exit 1
    }
} else {
    Write-Host "[OK] Le port 3000 est disponible" -ForegroundColor Green
}

# Démarrer le serveur
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Démarrage du serveur..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Le serveur sera accessible sur: http://localhost:3000" -ForegroundColor Green
Write-Host "Appuyez sur Ctrl+C pour arrêter le serveur" -ForegroundColor Yellow
Write-Host ""

# Ouvrir le navigateur après 5 secondes
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 5
    Start-Process "http://localhost:3000"
} | Out-Null

# Démarrer le serveur
& npm run dev

