# Configuration Brevo (100% Gratuit)

Brevo (ex-Sendinblue) : **300 emails/jour gratuits**.

## Étape 1 : Clé API

1. [Brevo](https://app.brevo.com/) → **Compte** → **Clés API SMTP & API**
2. Générer une clé (ex. `Site Atipik RH`)
3. Format : `xkeysib-...`

## Étape 2 : Expéditeur validé

1. **Paramètres** → **Expéditeurs et IP**
2. Valider `contact@atipikrh.com` (ou l’adresse utilisée dans `BREVO_SENDER_EMAIL`)

## Étape 3 : Variables d'environnement

Configurer dans `.env.local` (local) et **Vercel** (Production + Preview) — voir [`.env.example`](.env.example) :

```env
BREVO_API_KEY=xkeysib-votre-cle
BREVO_SENDER_EMAIL=contact@atipikrh.com
BREVO_RECIPIENT_EMAIL=contact@atipikrh.com
```

L’envoi est géré côté serveur par :

- [`lib/brevo.js`](lib/brevo.js)
- [`pages/api/contact.js`](pages/api/contact.js)
- [`pages/api/inscription-reunion.js`](pages/api/inscription-reunion.js)
- [`pages/api/send-quiz-brevo.js`](pages/api/send-quiz-brevo.js)

**Ne jamais** mettre la clé API dans un fichier client ou `quiz.js`.

## Synchronisation contacts CRM

À chaque soumission réussie des formulaires **inscription réunion** (`/s-inscrire`) et **contact** (`/contact`), le site crée ou met à jour le contact dans Brevo via `POST /v3/contacts` :

- **Liste d'entrée** : `#30` (« Inscrits Site Web ») — point d'entrée de l'automatisation Brevo
- **`updateEnabled: true`** : met à jour le contact s'il existe déjà (même e-mail)

### Attributs personnalisés (MAJUSCULES)

Créer ces attributs dans Brevo (**Contacts** → **Paramètres** → **Attributs**) s'ils n'existent pas :

| Attribut Brevo | Source inscription réunion | Source contact |
|----------------|---------------------------|----------------|
| `NOM` | champ nom | champ nom |
| `PRENOM` | champ prenom | champ prenom |
| `TELEPHONE` | champ telephone | champ telephone |
| `STATUT` | label statut (salarié, demandeur d'emploi…) | chaîne vide |
| `FORMATION` | `CIP` ou `FPA` | `CIP` / `FPA` si sujet formation, sinon vide |

### Routage automatisation Brevo (liste #30)

| Valeur `FORMATION` | Branche attendue |
|--------------------|------------------|
| `CIP` | Liste #28 |
| `FPA` | Liste #29 |
| vide | Liste #31 (contact site web générique) |

En cas d'échec de la synchro CRM, l'e-mail de confirmation est tout de même envoyé ; l'erreur est journalisée côté serveur (`[Brevo] Erreur sync contact`).

## Étape 4 : Tester

```bash
npm run dev
```

- Formulaire contact : `/contact`
- Inscription réunion : `/s-inscrire`
- Quiz : `/bilan-de-competences/quiz`

## Dépannage

| Problème | Cause probable |
|----------|----------------|
| `Configuration serveur manquante` | `BREVO_API_KEY` absente |
| Erreur 401/400 Brevo | Expéditeur non validé dans Brevo |
| « Needs Attention » sur Vercel | Variable vide — voir [`docs/VERCEL_ENV.md`](docs/VERCEL_ENV.md) |

## Support

[Documentation Brevo](https://help.brevo.com/)
