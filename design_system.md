# Design System – Atipik RH (v2025)

> Ce document résume la charte graphique transposée pour le site Next.js + Tailwind utilisé dans Cursor.

## 1. Palette de couleurs

| Rôle | Nom variable | Hex | Exemple Tailwind |
|------|--------------|-----|------------------|
| **Primary 600** | `--color-primary-600` | `#013F63` | `bg-primary-600` |
| **Accent 500** | `--color-accent-500` | `#FE6400` | `bg-accent-500` |
| **Accent 300** | `--color-accent-300` | `#FFBC82` | `bg-accent-300` |
| **Neutral 900** | `--color-neutral-900` | `#2E2E2E` | `text-neutral-900` |
| **Neutral 100** | `--color-neutral-100` | `#FFDEC1` | `bg-neutral-100` |
| **Muted Blue 200** | `--color-muted-blue-200` | `#9AB4BF` | `border-muted-blue-200` |
| **Accent 600 (alt)** | `--color-accent-600` | `#EAA93D` | `text-accent-600` |
| **White** | `--color-white` | `#FFFFFF` | `bg-white` |

> Toutes les variables couleur sont déclarées dans `tailwind.config.js` (palette extend).fileciteturn3file0

---

## 2. Typographie

| Usage | Police | Fallback | Poids | Exemple classe |
|-------|--------|----------|-------|----------------|
| **Titres (H1‑H2)** | Wonderful Branding (display) | `cursive` | 400 | `font-brand` |
| **Corps de texte** | Montserrat | `sans-serif` | 400 / 600 | `font-sans` |

### Hiérarchie et tailles par défaut

| Élément | Taille mobile | Taille desktop |
|---------|---------------|----------------|
| H1 | `text-3xl` | `lg:text-5xl` |
| H2 | `text-2xl` | `lg:text-4xl` |
| H3 | `text-xl` | `lg:text-2xl` |
| Body | `text-base` | `lg:text-lg` |

---

## 3. Spacing & Layout

| Token | Valeur px | Usage |
|-------|-----------|-------|
| `--space-section` | 96 px (`py-24`) | Padding vertical section |
| `--space-grid-gutter` | 32 px | Colonnes 12‑cols |
| `--radius-card` | 16 px (`rounded-xl`) | Cartes, input |

---

## 4. Composants de base

### Bouton primaire
```html
<button class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold shadow-sm transition">Prendre RDV gratuit</button>
```

### Carte “Service”
```html
<article class="rounded-xl border bg-white p-6 shadow-lg hover:shadow-xl transition">
  <h3 class="text-primary-600 text-xl font-semibold mb-2">Bilan de compétences</h3>
  <p class="text-neutral-900 mb-4">Un accompagnement sur‑mesure pour définir votre projet professionnel.</p>
  <a href="/services/bilan-de-competences-bordeaux" class="text-accent-500 font-medium inline-flex items-center gap-1">En savoir plus →</a>
</article>
```

---

## 5. Iconographie & Illustrations

- **Icônes** : Lucide React, taille 24 px, trait 1.5 px, couleur `currentColor`.
- **Illustrations / photos** : style réaliste, tons neutres ou accent #FE6400.

---

## 6. Ton & style rédactionnel

| Axe | Positionnement* |
|-----|-----------------|
| Formal ↔ Détendu | **Intermédiaire‑confiant** |
| Moderne ↔ Classique | **Moderne** |

> *Référence page ton de la charte graphique* fileciteturn3file0

---

### Maintenance
- Vérifier contraste WCAG AA (≥ 4,5:1) pour tous composants.
- Mettre à jour ce document en parallèle de tout changement dans `tailwind.config.js`.

