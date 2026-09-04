# Configuration des variables d'environnement sur Vercel

## Statut « Needs Attention »

Ce badge apparaît souvent lorsque :

1. La variable est **vide** (`""`) — souvent après `vercel env add --sensitive --value` (bug CLI : valeur stockée vide malgré le succès)
2. La valeur est un **placeholder** (ex. `RECAPTCHA_SECRET_KEY` contenant littéralement le texte `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`)
3. La variable n'est pas définie pour **Preview** ou **Production**
4. Une **paire** est incomplète (ex. `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` sans `RECAPTCHA_SECRET_KEY`)
5. La clé a été **révoquée** chez Brevo, Google ou Akismet

### Contournement CLI (réinjection fiable)

```powershell
# Écrire la valeur sans retour ligne, puis stdin (évite BREVO_API_KEY="")
[System.IO.File]::WriteAllText(".brevo.tmp", $valeur, [System.Text.UTF8Encoding]::new($false))
Get-Content .brevo.tmp -Raw | vercel env add BREVO_API_KEY production --yes
Remove-Item .brevo.tmp
vercel env pull .env.check --environment=production --yes
# Vérifier : BREVO_API_KEY ne doit pas être vide
```

Script automatisé : [`scripts/sync-vercel-env.ps1`](../scripts/sync-vercel-env.ps1)

## Variables à marquer « Sensitive »

- `BREVO_API_KEY`
- `RECAPTCHA_SECRET_KEY`
- `AKISMET_API_KEY`

## Procédure de correction

1. Dashboard Vercel → Projet → **Settings** → **Environment Variables**
2. Pour chaque variable signalée : **Edit** → ressaisir la valeur complète → cocher **Production** et **Preview** → **Sensitive**
3. Vérifier `BREVO_SENDER_EMAIL` et `BREVO_RECIPIENT_EMAIL` (`contact@atipikrh.com` par défaut)
4. **Redéployer** (un nouveau déploiement est requis pour appliquer les changements)

## Vérification en local

```powershell
vercel env pull .env.local --environment=production
# Vérifier qu'aucune ligne critique n'est NOM=""
```

## Checklist post-déploiement

- [ ] Badge « Needs Attention » disparu
- [ ] Formulaire contact : HTTP 200 + emails reçus
- [ ] Logs Functions : `[Env] brevo=ok recaptcha=active akismet=active` (selon config)
