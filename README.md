# Atipik RH - Site Web

Site web de Atipik RH - Centre de formation, bilan de compétences & VAE à Lormont.

## 🚀 Technologies

- **Next.js 16** - Framework React
- **Tailwind CSS** - Styling
- **React 18** - Bibliothèque UI

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement local

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Réactiver Autoprefixer (PostCSS)

Si le build échoue avec une erreur liée à Autoprefixer, celui-ci est désactivé dans `postcss.config.js`. Pour le réactiver plus tard :

1. Arrêter le serveur de dev (Ctrl+C dans le terminal).
2. Supprimer le dossier `node_modules` (et éventuellement `package-lock.json`).
3. Exécuter `npm install`.
4. Dans `postcss.config.js`, décommenter la ligne `autoprefixer: {},`.

Sous Windows, fermer tous les terminaux/IDE utilisant le projet avant de supprimer `node_modules` si la suppression échoue (fichier verrouillé).

## 🏗️ Build de production

```bash
npm run build
npm start
```

## 🌐 Déploiement

### Option 1 : Vercel (Recommandé pour Next.js)

1. Connectez-vous à [Vercel](https://vercel.com)
2. Importez le dépôt GitHub `atipikrh/Atipik-rh-1`
3. Vercel détectera automatiquement Next.js et configurera le déploiement
4. Le site sera déployé automatiquement à chaque push sur la branche principale

**Configuration automatique :**
- Framework : Next.js
- Build Command : `npm run build`
- Output Directory : `.next`
- Install Command : `npm install`

### Option 2 : Netlify

1. Connectez-vous à [Netlify](https://netlify.com)
2. Importez le dépôt GitHub
3. Configurez :
   - Build command : `npm run build`
   - Publish directory : `.next`

### Variables d'environnement

Copiez [`.env.example`](.env.example) vers `.env.local` et renseignez les valeurs.

| Variable | Obligatoire (prod) | Description |
|----------|-------------------|-------------|
| `BREVO_API_KEY` | Oui | Clé API Brevo (serveur uniquement) |
| `BREVO_SENDER_EMAIL` | Non | Expéditeur validé (défaut : `contact@atipikrh.com`) |
| `BREVO_RECIPIENT_EMAIL` | Non | Destinataire interne (défaut : `contact@atipikrh.com`) |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Non* | Clé site reCAPTCHA v3 — contact, quiz (*avec `RECAPTCHA_SECRET_KEY`) |
| `RECAPTCHA_SECRET_KEY` | Non* | Clé secrète reCAPTCHA v3 (*paire obligatoire) |
| `NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY` | Non* | Clé site reCAPTCHA v2 invisible — inscriptions `/s-inscrire` (*avec `RECAPTCHA_V2_SECRET_KEY`) |
| `RECAPTCHA_V2_SECRET_KEY` | Non* | Clé secrète reCAPTCHA v2 (*paire obligatoire) |
| `AKISMET_API_KEY` | Non* | Clé Akismet (*avec `AKISMET_SITE_URL`) |
| `AKISMET_SITE_URL` | Non* | URL du site pour Akismet |

Validation centralisée : [`lib/env.ts`](lib/env.ts). Guide Vercel : [`docs/VERCEL_ENV.md`](docs/VERCEL_ENV.md).

- Brevo : [`CONFIGURATION_BREVO.md`](CONFIGURATION_BREVO.md)
- Anti-spam : [`PROTECTION-ANTI-SPAM.md`](PROTECTION-ANTI-SPAM.md)

## 📝 Branches

- `team-content-update` - Branche de développement actuelle
- `main` / `master` - Branche de production

## 🔗 Liens

- **GitHub** : https://github.com/atipikrh/Atipik-rh-1
- **Site de production** : (à configurer après déploiement)

## 📄 Licence

Propriétaire - Atipik RH
