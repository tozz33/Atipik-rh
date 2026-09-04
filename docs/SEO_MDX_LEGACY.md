# Fichiers MDX legacy (non servis)

## Contexte

Les dossiers suivants contiennent des fichiers `.mdx` **non compilés** par Next.js : le projet n’inclut pas `@next/mdx` dans `package.json`. Ces pages ne sont donc **pas accessibles** en production.

- `pages/formations/certifiantes/*.mdx`
- `pages/bilan-de-competences/*.mdx` (sauf `quiz.js` qui est une page JS active)

## URLs remplacées

Des redirections 301 sont configurées dans `next.config.ts` :

| Ancienne URL visée | Redirection |
|--------------------|-------------|
| `/formations/certifiantes` | `/formations` |
| `/formations/certifiantes/cip` | `/formations/cip` |
| `/formations/certifiantes/fpa` | `/formations/fpa` |
| `/formations/certifiantes/cpf` | `/financement` |
| `/bilan-de-competences/cpf` | `/financement` |

## Pages actives à utiliser

- Formations certifiantes : `/formations/cip`, `/formations/fpa`, `/formations/ccp3`
- Hub : `/formations`, `/formations/courtes-professionnalisantes`
- Bilan : `/pages/bilan-de-competences.js` → `/bilan-de-competences`
- SEO : briefs dans `lib/seo/content-briefs.ts` + `ServicePageSeoHead`

## Ne pas réactiver sans migration

Pour réutiliser le contenu MDX : installer et configurer `@next/mdx`, ou migrer le contenu vers des pages `.js` / briefs SEO.
