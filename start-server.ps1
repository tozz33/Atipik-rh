# Script PowerShell pour démarrer le serveur Next.js
Write-Host "🚀 Démarrage du serveur Atipik RH..." -ForegroundColor Green
Write-Host ""

# Nettoyer le cache
if (Test-Path ".next") {
    Write-Host "🧹 Nettoyage du cache..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
}

# Vérifier et arrêter tout serveur existant sur le port 3000
Write-Host "🔍 Vérification des processus existants..." -ForegroundColor Yellow
$existingProcess = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($existingProcess) {
    Write-Host "⚠️  Arrêt des processus existants sur le port 3000..." -ForegroundColor Yellow
    $processId = $existingProcess.OwningProcess
    Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 2
}

# Essayer de trouver Node.js dans différents emplacements
$programFilesX86 = ${env:ProgramFiles(x86)}
$nodePaths = @(
    "node",
    "$env:ProgramFiles\nodejs\node.exe",
    "$programFilesX86\nodejs\node.exe",
    "$env:LOCALAPPDATA\Programs\nodejs\node.exe",
    "$env:USERPROFILE\AppData\Roaming\npm\node.exe"
)

$nodeFound = $false
$nodePath = $null

foreach ($path in $nodePaths) {
    if ($path -eq "node") {
        try {
            $result = Get-Command node -ErrorAction Stop
            $nodePath = $result.Source
            $nodeFound = $true
            Write-Host "✅ Node.js trouvé: $nodePath" -ForegroundColor Green
            break
        } catch {
            continue
        }
    } else {
        if (Test-Path $path) {
            $nodePath = $path
            $nodeFound = $true
            Write-Host "✅ Node.js trouvé: $nodePath" -ForegroundColor Green
            break
        }
    }
}

if (-not $nodeFound) {
    Write-Host "❌ Node.js n'est pas trouvé dans le système." -ForegroundColor Red
    Write-Host ""
    Write-Host "Veuillez installer Node.js depuis: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Ou ajoutez Node.js au PATH de votre système." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Une fois Node.js installé, exécutez:" -ForegroundColor Cyan
    Write-Host "  npm run dev" -ForegroundColor White
    exit 1
}

# Vérifier npm
Write-Host "🔍 Vérification de npm..." -ForegroundColor Yellow
try {
    $npmVersion = & $nodePath -e "console.log(require('child_process').execSync('npm --version', {encoding: 'utf8'}).trim())"
    Write-Host "✅ npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "⚠️  npm n'est pas accessible" -ForegroundColor Yellow
}

# Variables d'environnement pour la stabilité
$env:FAST_REFRESH = "false"
$env:NEXT_TELEMETRY_DISABLED = "1"

Write-Host ""
Write-Host "📍 Démarrage du serveur sur http://localhost:3000..." -ForegroundColor Cyan
Write-Host ""

# Trouver npm
$npmPath = $null
$npmDir = Split-Path $nodePath -Parent
if (Test-Path "$npmDir\npm.cmd") {
    $npmPath = "$npmDir\npm.cmd"
} elseif (Test-Path "$npmDir\node_modules\npm\bin\npm-cli.js") {
    $npmPath = "$nodePath $npmDir\node_modules\npm\bin\npm-cli.js"
}

# Vérifier les dépendances
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installation des dépendances..." -ForegroundColor Yellow
    if ($npmPath) {
        & cmd /c "$npmPath install"
    } else {
        Write-Host "⚠️  npm non trouvé, tentative avec node..." -ForegroundColor Yellow
    }
}

# Lancer le serveur
Write-Host "🚀 Démarrage du serveur..." -ForegroundColor Green
try {
    if ($npmPath) {
        & cmd /c "$npmPath run dev"
    } elseif (Test-Path "node_modules\.bin\next.cmd") {
        & "node_modules\.bin\next.cmd" dev -p 3000
    } else {
        & $nodePath "node_modules\.bin\next" dev -p 3000
    }
} catch {
    Write-Host "❌ Erreur lors du démarrage du serveur" -ForegroundColor Red
    Write-Host "Assurez-vous que les dépendances sont installées: npm install" -ForegroundColor Yellow
    exit 1
}

