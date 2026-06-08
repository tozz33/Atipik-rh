
# Atipik RH – SEO & Content Rules (v3, sans vidéo)

> **Objectif :** garantir que chaque page générée par Cursor respecte les meilleures pratiques SEO 2025, **sans intégrer de contenu vidéo**.

---

## 1. Structure d'URL
- Slug en kebab-case, sans accents.
- Profondeur max : 2 dossiers (`/services/bilan-de-competences-bordeaux`).

## 2. Front-matter MDX obligatoire
```yaml
---
title: "{{title}}"            # ≤ 60 car.
description: "{{meta_description}}"  # ≤ 155 car.
keywords: {{keywords}}
canonical: "https://www.atipikrh.com{{slug}}"
schema: {{schema}}            # ["LocalBusiness", "FAQPage", …]
layout: "{{layout}}"          # Pilier / Cluster / Blog
published: "{{today}}"
updated: "{{today}}"
---
```

## 3. Contenu & médias (images uniquement)
| Élement | Règles minimales |
|---------|------------------|
| **Longueur** | Pilier ≥ 2 500 mots • Cluster 800-1 200 mots |
| **Images** | Format WebP ou AVIF • poids ≤ 200 KB • attribut `alt` descriptif contenant mot-clé ou synonyme |
| **CTA** | Bouton "Prendre RDV gratuit" visible sans scroll |
| **FAQ** | ≥ 4 questions/réponses (extraites de People Also Ask) section `## FAQ` |

## 4. Maillage interne
- **Pilier** : 4-6 liens internes vers clusters + 1 lien cross-pilier.  
- **Cluster** : 2-3 liens vers pilier parent + 1 autre cluster.

## 5. JSON-LD obligatoire
Insérer un `<script type="application/ld+json">` avant `</body>`.

| Type | Quand l'injecter | Champs requis |
|------|------------------|---------------|
| `LocalBusiness` | Pages locales (Bilan, VAE, Formations Bordeaux) | `@id`, `name`, `url`, `address`, `geo`, `sameAs` |
| `Course` / `Event` | Pages formation CIP/FPA | `name`, `description`, `provider`, `location`, `startDate` |
| `FAQPage` | Toute page contenant une FAQ | `mainEntity`, `question`, `acceptedAnswer` (texte brut) |

### Validation
- Après build, arrêter la CI si `npm run schema-test` retourne une erreur.

## 6. Performance (Core Web Vitals)
| KPI | Seuil cible |
|-----|-------------|
| LCP | < 2,5 s |
| CLS | < 0,1 |
| INP | < 200 ms |

## 7. Interdictions
- Pas de keyword-stuffing ni de liens PBN.  
- Chaque page générée par l'IA doit être relue manuellement avant publication.  
- Pas d'images sans `alt`.

## 8. Module SEO automatisé (`lib/seo/`)

Avant toute génération de contenu par IA :

1. Charger le brief via `getSeoContextForAI(briefId)` (voir [`docs/SEO_MODULE.md`](docs/SEO_MODULE.md)).
2. Utiliser les prompts fournis (`prompts.page`, `prompts.meta`, etc.) — ne pas réinventer titres/meta hors brief.
3. Briefs disponibles : `formation-cip`, `formation-fpa`, `bilan-competences-local`, `reconversion-bordeaux`, etc.
4. Requêtes prospects : `getSeoRecommendationFromProspectQuery()` dans `lib/seo/index.ts`.
5. Canonical de production : `https://www.atipikrh.com` (voir `lib/seo/site.ts`).

**Interdit** : inventer dates de session, tarifs ou statistiques non présentes dans le brief.

---

*Dernière mise à jour : 23 mai 2026 – v3.1 (module lib/seo).*
