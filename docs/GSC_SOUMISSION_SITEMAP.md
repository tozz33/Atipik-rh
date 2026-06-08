# Soumission sitemap — Google Search Console

## Automatisé (sans compte Google)

```bash
npm run seo:post-deploy
npm run seo:validate-rich-results
```

- Vérifie le sitemap (≥ 72 URLs), `robots.txt`, JSON-LD FAQ/Course sur CIP, FPA et bilan
- Vérifie la redirection `/equipe/martine-beaudon` → `martine-baudon` (page doublon supprimée)
- Affiche les liens [Rich Results Test](https://search.google.com/test/rich-results) par URL

Après déploiement Vercel : `npx vercel deploy --prod --yes` puis relancer les commandes ci-dessus.

## Redirections sitemap legacy (WordPress)

En production, les anciennes URLs sont redirigées en 301 vers `/sitemap.xml` :

- `/sitemap_index.xml`
- `/sitemap-index.xml`
- `/wp-sitemap.xml` et `/wp-sitemap*.xml`

Dans GSC, supprimer l’entrée `https://atipikrh.com/sitemap_index.xml` puis ne conserver que `sitemap.xml` sur `www`.

## GSC — synchronisation automatique (recommandé)

Après configuration **unique** du compte de service ([`docs/GSC_API_SETUP.md`](GSC_API_SETUP.md)) :

```bash
npm run seo:gsc-sync
```

Le script supprime les entrées legacy / en erreur et resoumet `https://www.atipikrh.com/sitemap.xml`.

Variables : `GSC_SERVICE_ACCOUNT_JSON` (Vercel) ou `secrets/gsc-service-account.json` (local).

Sans ces identifiants, **aucun outil externe** (y compris ce dépôt) ne peut modifier GSC : l’API exige un compte de service invité sur la propriété ou une session Google.

## Action manuelle (si pas d’API)

1. [Search Console — Sitemaps](https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Aatipikrh.com)
2. Supprimer `https://www.atipikrh.com/sitemap.xml` (erreur) et `https://atipikrh.com/sitemap_index.xml`
3. Saisir `sitemap.xml` ou l’URL complète `https://www.atipikrh.com/sitemap.xml` → Envoyer

## Bing Webmaster Tools (optionnel)

https://www.bing.com/webmasters — même URL de sitemap.

## Prérequis

Le site en production doit servir le **sitemap dynamique** (≥ 60 URLs). Si `seo:post-deploy` affiche ~28 URLs, déployer d’abord la version avec `app/sitemap.ts` et `lib/seo/page-registry.ts`.
