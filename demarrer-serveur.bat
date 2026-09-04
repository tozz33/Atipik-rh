@echo off
echo ========================================
echo   Demarrage du serveur Atipik RH
echo ========================================
echo.

REM Nettoyer le cache
if exist .next (
    echo Nettoyage du cache...
    rmdir /s /q .next
)

REM Essayer de trouver Node.js
where node >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js trouve dans le PATH
    goto :start_server
)

REM Essayer les emplacements communs de Node.js
set "NODE_FOUND=0"

if exist "%ProgramFiles%\nodejs\node.exe" (
    set "NODE_PATH=%ProgramFiles%\nodejs\node.exe"
    set "NPM_PATH=%ProgramFiles%\nodejs\npm.cmd"
    set "PATH=%ProgramFiles%\nodejs;%PATH%"
    echo [OK] Node.js trouve: %NODE_PATH%
    set "NODE_FOUND=1"
    goto :start_server
)

if exist "%ProgramFiles(x86)%\nodejs\node.exe" (
    set "NODE_PATH=%ProgramFiles(x86)%\nodejs\node.exe"
    set "NPM_PATH=%ProgramFiles(x86)%\nodejs\npm.cmd"
    set "PATH=%ProgramFiles(x86)%\nodejs;%PATH%"
    echo [OK] Node.js trouve: %NODE_PATH%
    set "NODE_FOUND=1"
    goto :start_server
)

if exist "%LOCALAPPDATA%\Programs\nodejs\node.exe" (
    set "NODE_PATH=%LOCALAPPDATA%\Programs\nodejs\node.exe"
    set "NPM_PATH=%LOCALAPPDATA%\Programs\nodejs\npm.cmd"
    set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%"
    echo [OK] Node.js trouve: %NODE_PATH%
    set "NODE_FOUND=1"
    goto :start_server
)

REM Chercher dans le dossier utilisateur
if exist "%USERPROFILE%\AppData\Roaming\npm\node.exe" (
    set "NODE_PATH=%USERPROFILE%\AppData\Roaming\npm\node.exe"
    set "NPM_PATH=%USERPROFILE%\AppData\Roaming\npm\npm.cmd"
    set "PATH=%USERPROFILE%\AppData\Roaming\npm;%PATH%"
    echo [OK] Node.js trouve: %NODE_PATH%
    set "NODE_FOUND=1"
    goto :start_server
)

if %NODE_FOUND% EQU 0 (
    echo.
    echo [ERREUR] Node.js n'est pas trouve!
    echo.
    echo Veuillez installer Node.js depuis: https://nodejs.org/
    echo Version recommandee: LTS (Long Term Support)
    echo.
    echo Apres l'installation, redemarrez ce script.
    echo.
    pause
    exit /b 1
)

:start_server
echo.
echo Verification des dependances...
if not exist "node_modules" (
    echo Installation des dependances...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo ERREUR: Impossible d'installer les dependances
        pause
        exit /b 1
    )
)

echo.
echo Demarrage du serveur sur http://localhost:3000...
echo Appuyez sur Ctrl+C pour arreter le serveur
echo.

REM Variables d'environnement
set FAST_REFRESH=false
set NEXT_TELEMETRY_DISABLED=1

REM Demarrer le serveur
echo.
echo [INFO] Demarrage en cours...
echo [INFO] Le serveur sera accessible sur http://localhost:3000
echo [INFO] Appuyez sur Ctrl+C pour arreter le serveur
echo.

REM Essayer avec npm directement
where npm >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    call npm run dev
) else (
    REM Si npm n'est pas trouve, utiliser le chemin complet
    if defined NPM_PATH (
        call "%NPM_PATH%" run dev
    ) else (
        echo [ERREUR] npm n'est pas accessible
        echo [INFO] Tentative avec node directement...
        if defined NODE_PATH (
            "%NODE_PATH%" node_modules\.bin\next dev -p 3000
        ) else (
            echo [ERREUR] Impossible de demarrer le serveur
            echo [INFO] Verifiez que les dependances sont installees: npm install
            pause
            exit /b 1
        )
    )
)

pause

