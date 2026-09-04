@echo off
echo ========================================
echo   Verification de l'installation Node.js
echo ========================================
echo.

echo [1/4] Verification de Node.js...
where node >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js trouve dans le PATH
    node --version
) else (
    echo [ERREUR] Node.js n'est pas dans le PATH
    echo.
    echo Recherche dans les emplacements communs...
    
    set NODE_FOUND=0
    
    if exist "%ProgramFiles%\nodejs\node.exe" (
        echo [OK] Node.js trouve dans Program Files
        "%ProgramFiles%\nodejs\node.exe" --version
        echo.
        echo [INFO] Ajoutez ce chemin au PATH pour utiliser Node.js partout
        set NODE_FOUND=1
        goto :node_found
    )
    
    set "PROGFILES86=%ProgramFiles(x86)%"
    if exist "%PROGFILES86%\nodejs\node.exe" (
        echo [OK] Node.js trouve dans Program Files x86
        "%PROGFILES86%\nodejs\node.exe" --version
        echo.
        echo [INFO] Ajoutez ce chemin au PATH pour utiliser Node.js partout
        set NODE_FOUND=1
        goto :node_found
    )
    
    if exist "%LOCALAPPDATA%\Programs\nodejs\node.exe" (
        echo [OK] Node.js trouve dans AppData Local
        "%LOCALAPPDATA%\Programs\nodejs\node.exe" --version
        echo.
        echo [INFO] Ajoutez ce chemin au PATH pour utiliser Node.js partout
        set NODE_FOUND=1
        goto :node_found
    )
    
    :node_found
    if %NODE_FOUND%==0 (
        echo [ERREUR] Node.js n'est pas installe
        echo.
        echo Veuillez installer Node.js depuis: https://nodejs.org/
        echo Voir le fichier INSTALLATION-NODEJS.md pour les instructions detaillees
    )
)

echo.
echo [2/4] Verification de npm...
where npm >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] npm trouve dans le PATH
    npm --version
) else (
    echo [ERREUR] npm n'est pas dans le PATH
)

echo.
echo [3/4] Verification des dependances du projet...
if exist "node_modules" (
    echo [OK] Le dossier node_modules existe
    echo [INFO] Les dependances sont installees
) else (
    echo [ATTENTION] Le dossier node_modules n'existe pas
    echo [INFO] Executez: npm install
)

echo.
echo [4/4] Verification du port 3000...
netstat -ano | findstr :3000 >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [ATTENTION] Le port 3000 est deja utilise
    echo [INFO] Fermez l'application qui utilise ce port ou changez le port
) else (
    echo [OK] Le port 3000 est disponible
)

echo.
echo ========================================
echo   Verification terminee
echo ========================================
echo.
pause

