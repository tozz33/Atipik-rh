/**
 * Registre des droits d’usage des visuels liés au blog (vignettes, contenus).
 *
 * Rôle : traçabilité (source, type de licence, articles concernés).
 * Ne remplace pas une preuve juridique : conserver factures / captures hors dépôt si besoin.
 *
 * Fichiers sources des listes d’articles : pages/blog.js, pages/blog/[slug].js
 */

/** Licence générale Unsplash (toutes les URLs images.unsplash.com du site). */
export const unsplashLicense = {
  nom: 'Unsplash License',
  url: 'https://unsplash.com/license',
  note:
    'Usage du site conforme à la licence Unsplash au moment du téléchargement. Créditer le photographe reste une bonne pratique (fiche de chaque photo sur unsplash.com).',
};

/**
 * Photos Unsplash référencées par le blog (segment = partie après /photo- dans l’URL CDN).
 * retrouverLaFiche : rechercher le segment sur unsplash.com pour photographe et lien canonique.
 */
export const unsplashPhotosBlog = [
  {
    segment: '1524178232363-1fb2b075b655',
    slugsArticles: [
      'location-salle-formation-lormont-proche-bordeaux',
      'devenir-formateur-adultes-sans-etudes-longues-reconversion',
    ],
  },
  {
    segment: '1522202176988-66273c2fd55f',
    slugsArticles: [
      'financer-reconversion-professionnelle-2026-cpf-aides-regionales',
      'financer-bilan-competences-2026-cpf-france-travail-employeur',
    ],
  },
  {
    segment: '1454165804606-c3d57bc86b40',
    slugsArticles: ['valoriser-competences-cv-parcours-atypique'],
    remarque:
      'Même fichier utilisé en vignette et dans le corps HTML (balise img) pour cet article.',
  },
  {
    segment: '1544723795-3fb6469f5b39',
    slugsArticles: ['bilan-competences-cadres-plus-40-ans-reconversion'],
  },
  {
    segment: '1521737604893-d14cc237f11d',
    slugsArticles: ['atipik-rh-espace-emploi-projets-partenariat-mem-wejob-lormont'],
  },
];

/**
 * Fichiers servis depuis public/ — documenter l’origine (création interne, achat, banque avec licence).
 * statutDocumentaire : "complet" lorsqu’une preuve est archivée hors dépôt ou contrat interne clair.
 */
export const imagesLocalesBlog = [
  {
    chemin: '/images/hero/formations.jpg',
    slugsArticles: [
      'comment-ameliorer-pratiques-recrutement-rh-2026',
      'prevenir-discriminations-recrutement-methodes-obligations-outils-rh',
      'recrutement-competences-methode-complete-rh-2026',
      'financer-bilan-vae-formation-atipik-rh',
      'difficultes-recrutement-pratiques-marche',
      'formation-conseiller-insertion-professionnelle-lormont',
      'centre-formation-lormont-rive-droite-bordeaux',
    ],
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/hero/',
  },
  {
    chemin: '/images/hero/bilan-competences.jpg',
    slugsArticles: [
      'pourquoi-externaliser-bilan-competences-lormont-cabinet-specialise',
      'vae-ou-bilan-competences-que-choisir-selon-parcours',
      'portefeuille-competences-insertion-reconversion-employabilite',
      'bilan-competences-lormont-5-etapes-reconversion',
      'soft-skills-competences-difference',
      'reconversion-professionnelle-comment-reussir-changement-carriere',
    ],
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/hero/',
  },
  {
    chemin: '/images/hero/vae.jpg',
    slugsArticles: ['vae-valoriser-experience-obtenir-diplome', 'preparer-entretien-embauche-conseils-experts'],
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/hero/',
  },
  {
    chemin: '/images/blog/bilan-competences-signaux-2026.jpg',
    slugsArticles: ['5-signes-temps-faire-bilan-competences'],
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/blog/',
  },
  {
    chemin: '/images/blog/formateur-fpa-cta.jpg',
    slugsArticles: ['devenir-formateur-adultes-sans-etudes-longues-reconversion'],
    usage: 'Image inline dans le contenu HTML (CTA formation FPA), pas seulement vignette.',
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/blog/',
  },
  {
    chemin: '/images/decorations/3 lignes orange.svg',
    slugsArticles: [],
    usage: 'Décoration liste des articles (pages/blog.js), pas vignette article.',
    statutDocumentaire: 'a_completer',
    dossierPublic: 'public/images/decorations/',
  },
];

/**
 * Candidats analysés hors dépôt (copies Cursor / brouillons) — ne pas publier sans provenance.
 * Décisions issues de l’audit qualitatif (style, risque typique de banque payante).
 */
export const candidatsWorkspaceNonValides = [
  {
    id: 'vector-equipe-engrenage-reseau',
    description: 'Illustration vectorielle type icône (équipe, engrenage, nœuds).',
    risque: 'Banques type Flaticon / Freepik : licence par ressource (abonnement ou attribution).',
    decision: 'Ne pas intégrer sans lien source + licence. Remplacer par Unsplash Illustrations, Pexels, ou création interne.',
  },
  {
    id: 'seminaire-tableau-infographies',
    description: 'Scène séminaire / tableau de bord, illustration très « stock premium ».',
    risque: 'Profil Getty / Adobe Stock / Freepik premium si origine inconnue.',
    decision: 'Ne pas utiliser sans achat ou licence traçable. Préférer équivalent librement licencié.',
  },
  {
    id: 'photo-addie-tableau',
    description: 'Photo bureau avec schéma ADDIE au tableau blanc.',
    risque: 'Photo corporate banque d’images sans preuve d’achat.',
    decision: 'Remplacer par photo Unsplash/Pexels avec même thème ou photo interne.',
  },
  {
    id: 'mains-carnet-stylo',
    description: 'Gros plan mains / écriture sur carnet.',
    risque: 'Doublons possibles entre sites libres et banques payantes — recherche inverse nécessaire.',
    decision: 'Ne retenir qu’après confirmation sur la page source (licence explicite).',
  },
  {
    id: 'deux-femmes-entretien-wocintech',
    description: 'Deux femmes en entretien (souvent série #WOCinTech).',
    risque: 'Creative Commons souvent CC BY : attribution obligatoire (ex. wocintechchat.com selon la fiche).',
    decision:
      'Réutiliser uniquement la version officielle (Unsplash/Flickr) et appliquer le texte d’attribution indiqué sur la fiche.',
  },
];

/** Réexport pratique pour outils ou tests futurs. */
export const blogImageRegistryVersion = '1.0.0';

export default {
  version: blogImageRegistryVersion,
  unsplashLicense,
  unsplashPhotosBlog,
  imagesLocalesBlog,
  candidatsWorkspaceNonValides,
};
