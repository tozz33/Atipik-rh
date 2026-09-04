# Google Search Console — automatisation API (sans interface)



Une fois configuré, `npm run seo:gsc-sync` :



- supprime les anciens sitemaps (`sitemap_index.xml`, entrées en erreur),

- resoumet `https://www.atipikrh.com/sitemap.xml`.



## 1. Google Cloud (5 min)



1. [Google Cloud Console](https://console.cloud.google.com/) → projet `atipik-rh-498120`

2. **API et services** → **Bibliothèque** → activer **Google Search Console API** (état : Activé)

3. Pour un **compte de service** (option B) : **IAM** → **Comptes de service** → **Créer** → clé JSON



## 2. Donner accès à Search Console



### Option A — OAuth (recommandé si « adresse introuvable »)



Bug Google connu (depuis ~avril 2026) : les **nouveaux** comptes de service (`*@*.iam.gserviceaccount.com`) ne peuvent pas être ajoutés dans Search Console — message **« adresse mail introuvable »** alors que l’email est correct dans Cloud Console.



**Contournement** : utiliser le **compte Google personnel** qui possède déjà la propriété GSC.



1. [Identifiants OAuth](https://console.cloud.google.com/apis/credentials?project=atipik-rh-498120) → **Créer des identifiants** → **ID client OAuth** → **Application de bureau**

2. Copier ID et secret dans `.env.local` :



```env

GSC_OAUTH_CLIENT_ID=....apps.googleusercontent.com

GSC_OAUTH_CLIENT_SECRET=...

```



3. Une fois :



```bash

npm run seo:gsc-oauth-setup

```



(Ouvre le navigateur — se connecter avec le compte **propriétaire** de `atipikrh.com` dans Search Console.)



4. Puis :



```bash

npm run seo:gsc-sync

```



Le jeton est stocké dans `secrets/gsc-oauth-token.json` (gitignored).



### Option B — Compte de service (quand Google corrige le bug)



1. [Search Console](https://search.google.com/search-console) → propriété **Domaine** `atipikrh.com`

2. **Paramètres** → **Utilisateurs et autorisations** → **Ajouter un utilisateur**

3. Email exact depuis le JSON (`client_email`), ex. `cursor@atipik-rh-498120.iam.gserviceaccount.com`

4. Permission : **Complet**

5. Fichier : `secrets/gsc-service-account.json`



Copier l’email via le bouton **copier** dans [Comptes de service](https://console.cloud.google.com/iam-admin/serviceaccounts?project=atipik-rh-498120) (éviter espaces invisibles).



## 3. Stocker les secrets (ne jamais committer)



```text

secrets/gsc-oauth-token.json          ← Option A

secrets/gsc-service-account.json      ← Option B

```



**Vercel**



- Option A : `GSC_OAUTH_REFRESH_TOKEN` + `GSC_OAUTH_CLIENT_ID` + `GSC_OAUTH_CLIENT_SECRET`

- Option B : `GSC_SERVICE_ACCOUNT_JSON` (JSON sur une ligne)



## 4. Exécuter



```bash

npm run seo:gsc-sync

```



Forcer le mode : `GSC_AUTH=oauth` ou `GSC_AUTH=service_account`.



Intégré aussi après `npm run seo:post-deploy` si les variables sont définies.



## Dépannage



| Symptôme | Cause | Action |

|----------|--------|--------|

| « Adresse introuvable » dans GSC | Bug Google (comptes de service récents) | Option A OAuth |

| API 403 « insufficient permission » | Compte non invité dans GSC | Option A ou inviter le compte de service |

| Auth OK dans Cloud mais pas dans GSC | Normal pendant le bug | `npm run seo:gsc-oauth-setup` |



Soumission manuelle : [Sitemaps GSC](https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Aatipikrh.com) → `https://www.atipikrh.com/sitemap.xml`



Discussion Google : [thread Search Central](https://support.google.com/webmasters/thread/431407723)

