# Script pour vérifier Node.js et démarrer le serveur automatiquement
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Vérification et démarrage automatique" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Fonction pour vérifier si Node.js est disponible
function Test-NodeJS {
    try {
        $nodeVersion = & node --version 2>$null
        $npmVersion = & npm --version 2>$null
        if ($nodeVersion -and $npmVersion) {
            return @{
                Available = $true
                NodeVersion = $nodeVersion
                NpmVersion = $npmVersion
            }
        }
    } catch {
        # Chercher Node.js dans les emplacements standards
        $programFilesX86 = ${env:ProgramFiles(x86)}
        $nodePaths = @(
            "$env:ProgramFiles\nodejs\node.exe",
            "$programFilesX86\nodejs\node.exe",
            "$env:LOCALAPPDATA\Programs\nodejs\node.exe"
        )
        
        foreach ($path in $nodePaths) {
            if (Test-Path $path) {
                $nodeDir = Split-Path $path -Parent
                $env:Path = "$nodeDir;$env:Path"
                try {
                    $nodeVersion = & node --version 2>$null
                    $npmVersion = & npm --version 2>$null
                    if ($nodeVersion -and $npmVersion) {
                        return @{
                            Available = $true
                            NodeVersion = $nodeVersion
                            NpmVersion = $npmVersion
                        }
                    }
                } catch {
                    continue
                }
            }
        }
    }
    
    return @{ Available = $false }
}

# Vérifier Node.js
Write-Host "🔍 Vérification de Node.js..." -ForegroundColor Yellow
$nodeCheck = Test-NodeJS

if (-not $nodeCheck.Available) {
    Write-Host "❌ Node.js n'est pas encore installé ou n'est pas dans le PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "📥 Veuillez installer Node.js depuis: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "   - Téléchargez la version LTS" -ForegroundColor Yellow
    Write-Host "   - Cochez 'Add to PATH' pendant l'installation" -ForegroundColor Yellow
    Write-Host "   - Redémarrez PowerShell après l'installation" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "⏳ Attente de l'installation de Node.js..." -ForegroundColor Cyan
    Write-Host "   (Ce script vérifiera toutes les 5 secondes)" -ForegroundColor Gray
    Write-Host ""
    
    # Attendre que Node.js soit installé
    $maxAttempts = 60  # 5 minutes maximum
    $attempt = 0
    
    while ($attempt -lt $maxAttempts) {
        Start-Sleep -Seconds 5
        $attempt++
        
        Write-Host "   Vérification #$attempt..." -ForegroundColor Gray -NoNewline
        $nodeCheck = Test-NodeJS
        
        if ($nodeCheck.Available) {
            Write-Host " ✅ Node.js trouvé!" -ForegroundColor Green
            break
        } else {
            Write-Host " ❌ Pas encore disponible" -ForegroundColor Red
        }
    }
    
    if (-not $nodeCheck.Available) {
        Write-Host ""
        Write-Host "⏱️  Temps d'attente écoulé. Veuillez installer Node.js et relancer ce script." -ForegroundColor Red
        exit 1
    }
}

# Node.js est disponible
Write-Host "✅ Node.js trouvé!" -ForegroundColor Green
Write-Host "   Version Node.js: $($nodeCheck.NodeVersion)" -ForegroundColor Green
Write-Host "   Version npm: $($nodeCheck.NpmVersion)" -ForegroundColor Green
Write-Host ""

# Vérifier les dépendances
Write-Host "📦 Vérification des dépendances..." -ForegroundColor Yellow
if (-not (Test-Path "node_modules")) {
    Write-Host "⚠️  Les dépendances ne sont pas installées" -ForegroundColor Yellow
    Write-Host "📥 Installation des dépendances..." -ForegroundColor Cyan
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Erreur lors de l'installation des dépendances" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Dépendances installées" -ForegroundColor Green
} else {
    Write-Host "✅ Dépendances déjà installées" -ForegroundColor Green
}
Write-Host ""

# Vérifier le port 3000
Write-Host "🔍 Vérification du port 3000..." -ForegroundColor Yellow
$portInUse = netstat -ano | findstr :3000
if ($portInUse) {
    Write-Host "⚠️  Le port 3000 est déjà utilisé" -ForegroundColor Yellow
    Write-Host "   Arrêt des processus existants..." -ForegroundColor Yellow
    $existingProcess = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
    if ($existingProcess) {
        $processId = $existingProcess.OwningProcess
        Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 2
    }
}
Write-Host ""

# Ouvrir le navigateur après 5 secondes
Write-Host "🌐 Le navigateur s'ouvrira automatiquement dans 5 secondes..." -ForegroundColor Cyan
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 5
    Start-Process "http://localhost:3000"
} | Out-Null

# Démarrer le serveur
Write-Host "🚀 Démarrage du serveur sur http://localhost:3000..." -ForegroundColor Green
Write-Host "   Appuyez sur Ctrl+C pour arrêter le serveur" -ForegroundColor Yellow
Write-Host ""

# Variables d'environnement pour la stabilité
$env:FAST_REFRESH = "false"
$env:NEXT_TELEMETRY_DISABLED = "1"

# Démarrer le serveur
npm run dev
