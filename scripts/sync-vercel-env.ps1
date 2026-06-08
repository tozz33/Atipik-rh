# Synchronisation Vercel — secrets depuis .env.local (sans affichage)
$ErrorActionPreference = 'Stop'
Set-Location (Join-Path $PSScriptRoot '..')

function Get-EnvValue($name) {
  $line = Get-Content .env.local -Encoding UTF8 -ErrorAction SilentlyContinue |
    Where-Object { $_ -match "^$name=" } |
    Select-Object -First 1
  if (-not $line) { return $null }
  return ($line -replace "^$name=", '').Trim().Trim('"')
}

function Set-VercelEnvFromFile($name, $value, $target, $gitBranch) {
  $tmp = Join-Path $PWD ".env-sync.tmp"
  [System.IO.File]::WriteAllText($tmp, $value, [System.Text.UTF8Encoding]::new($false))
  try {
    if ($gitBranch) {
      Get-Content $tmp -Raw | vercel env add $name $target $gitBranch --yes 2>&1 | Out-Null
    } else {
      Get-Content $tmp -Raw | vercel env add $name $target --yes 2>&1 | Out-Null
    }
  } finally {
    Remove-Item $tmp -Force -ErrorAction SilentlyContinue
  }
}

Write-Host '[Vercel] Suppression reCAPTCHA/Akismet invalides (si presents)...'
foreach ($n in @('RECAPTCHA_SECRET_KEY', 'AKISMET_API_KEY', 'NEXT_PUBLIC_RECAPTCHA_SITE_KEY')) {
  vercel env rm $n -y 2>$null | Out-Null
}

$brevo = Get-EnvValue 'BREVO_API_KEY'
if (-not $brevo) { throw 'BREVO_API_KEY manquant dans .env.local' }

Write-Host '[Vercel] Re-injection BREVO_API_KEY (production, development, preview team-content-update)...'
vercel env rm BREVO_API_KEY production -y 2>$null | Out-Null
vercel env rm BREVO_API_KEY development -y 2>$null | Out-Null
vercel env rm BREVO_API_KEY preview team-content-update -y 2>$null | Out-Null
Set-VercelEnvFromFile 'BREVO_API_KEY' $brevo 'production' $null
Set-VercelEnvFromFile 'BREVO_API_KEY' $brevo 'development' $null
Set-VercelEnvFromFile 'BREVO_API_KEY' $brevo 'preview' 'team-content-update'

Write-Host '[Vercel] AKISMET_SITE_URL (sans cle API = Akismet inactif)...'
vercel env rm AKISMET_SITE_URL production -y 2>$null | Out-Null
Set-VercelEnvFromFile 'AKISMET_SITE_URL' 'https://atipikrh.fr' 'production' $null

Write-Host '[Vercel] Termine. Ajoutez les paires reCAPTCHA/Akismet dans le dashboard si vous avez les vraies cles Google/Akismet.'
Write-Host '[Vercel] Puis: vercel deploy --prod --yes'
