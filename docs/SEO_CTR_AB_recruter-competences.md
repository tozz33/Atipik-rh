# Test CTR SERP — Recruter par les compétences

**URL :** https://www.atipikrh.com/blog/recruter-par-les-competences-penurie-talents  
**Mot-clé principal :** recruter par les compétences  
**Durée de test recommandée :** 4 à 6 semaines par variante

## Variantes Title (meta title)

| Variante | Texte | ~Car. | Angle CTR |
|----------|-------|-------|-----------|
| **A (contrôle)** | Pénurie de talents : recruter par compétences \| Atipik RH | 54 | Problème marché → solution |
| **B (active en prod)** | Recruter par les compétences : méthode RH 2026 \| Atipik RH | 56 | Requête exacte en tête + promesse méthode |

**Variante C (backup)** : `Recrutement par compétences : vivier et qualité RH | Atipik RH` (52 car.) — bénéfices doubles, moins « année ».

## Variantes Meta description

| Variante | Texte | ~Car. | Angle CTR |
|----------|-------|-------|-----------|
| **A (contrôle)** | Guide RH concret : comment recruter par les compétences pour élargir le vivier, réduire les tensions de recrutement et sécuriser les embauches. | 128 | Pédagogique, complet |
| **B (active en prod)** | Méthode RH concrète : recruter par les compétences, grille d'évaluation, entretiens structurés. Élargissez le vivier et réduisez le turnover. | 130 | Outils nommés + bénéfices |

**Variante C (backup)** : `Pénurie de talents en 2026 ? Passez au recrutement par les compétences : méthode, KPI et erreurs à éviter pour DRH et recruteurs.` (118 car.)

## KPI à suivre dans Google Search Console

Filtre : page exacte ci-dessus, période glissante 28 jours.

| Métrique | Objectif |
|----------|----------|
| CTR | +0,5 à +2 pts vs variante précédente |
| Impressions | Stable ou en hausse |
| Position moyenne | Stable (pas de chute > 2 positions) |
| Clics | Hausse nette si impressions stables |

Requêtes à isoler : `recruter par les compétences`, `recrutement par les compétences`, `pénurie de talents recrutement`, `méthode recrutement compétences`.

## Protocole A/B (manuel)

1. **Semaines 1-4** : variante B (title + description) — état actuel après déploiement.
2. Noter CTR, clics, impressions dans un tableur (date de bascule = jour du déploiement).
3. **Semaines 5-8** : repasser sur variante A dans `pages/blog/[slug].js` et `pages/blog.js` (champs `seo.metaTitle` / `seo.metaDescription`), redéployer.
4. Comparer les deux fenêtres ; conserver la variante gagnante au CTR à impressions comparables.

## Fichiers à modifier pour basculer

- `pages/blog/[slug].js` — objet article `recruter-par-les-competences-penurie-talents`
- `pages/blog.js` — même slug (liste blog)

Puis : `npx vercel --prod --yes`

## Après le test

- Demander une réindexation de l’URL dans Search Console (Inspection d’URL → Demander l’indexation).
- Lancer `npm run seo:post-deploy` pour ping sitemap.
