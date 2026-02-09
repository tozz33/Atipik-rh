$env:Path = "C:\Program Files\nodejs;$env:Path"
$env:FAST_REFRESH = "false"
$env:NEXT_TELEMETRY_DISABLED = "1"
cd "C:\Users\cnoah\Documents\GitHub\Atipik-rh-1"
Write-Host "Demarrage du serveur..." -ForegroundColor Green
npm run dev
