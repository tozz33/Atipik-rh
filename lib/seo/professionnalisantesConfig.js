/**
 * Source unique pour les formations courtes professionnalisantes (SEO, cartes, CTA).
 */

const BASE_URL = 'https://www.atipikrh.com'

export const PROFESSIONNALISANTES_SLUGS = [
  'developper-relation-entreprise',
  'renforcer-relation-entreprise',
  'recruter-insertion-entreprises',
  'renforcer-pratique-recrutement-inclusif',
  'renforcer-pratique-recrutement-diversite',
]

export const professionnalisantesBySlug = {
  'developper-relation-entreprise': {
    slug: 'developper-relation-entreprise',
    path: '/formations/professionnalisantes/developper-relation-entreprise',
    titreAffichage: 'Développer la relation entreprise en insertion professionnelle',
    titreCarte: 'DÉVELOPPER LA RELATION ENTREPRISE EN INSERTION PROFESSIONNELLE',
    titreMenu: 'Développer la relation entreprise en insertion professionnelle',
    sousTitreCarte: "De l'accompagnement à la relation entreprise",
    metaTitle:
      'Formation relation entreprise en insertion professionnelle | Atipik RH Lormont',
    description:
      "Formation professionnalisante (21 h) pour développer la relation entreprise en insertion : accompagnement, prospection et coopération avec les employeurs. Bordeaux métropole, Lormont.",
    keywords:
      'formation relation entreprise, insertion professionnelle, conseiller insertion, CIP, accompagnement employeur, Bordeaux, Lormont, Atipik RH',
    twitterTitle: 'Relation entreprise & insertion professionnelle | Atipik RH',
    courseCode: 'REL-ENT-INS-PRO',
    timeRequired: 'PT21H',
    price: '1365',
    jsonLdDescription:
      "Formation professionnalisante pour développer la relation entreprise en insertion professionnelle. 21 heures, Bordeaux - Lormont.",
    sujetContact: 'Demande formation — Développer la relation entreprise en insertion professionnelle',
  },
  'renforcer-relation-entreprise': {
    slug: 'renforcer-relation-entreprise',
    path: '/formations/professionnalisantes/renforcer-relation-entreprise',
    titreAffichage: 'Renforcer le partenariat avec les entreprises en insertion',
    titreCarte: 'RENFORCER LE PARTENARIAT AVEC LES ENTREPRISES EN INSERTION',
    titreMenu: 'Renforcer le partenariat avec les entreprises en insertion',
    sousTitreCarte: 'De la prospection à la valorisation de votre offre',
    metaTitle:
      'Formation partenariat entreprises en insertion professionnelle | Atipik RH',
    description:
      "Formation professionnalisante (21 h) : structurer l'offre, prospection et valorisation auprès des entreprises en insertion. Bordeaux - Lormont.",
    keywords:
      'formation relation entreprise, partenariat entreprise, prospection insertion, valorisation offre, CIP, Bordeaux, Lormont, Atipik RH',
    twitterTitle: 'Partenariat entreprises & insertion | Atipik RH',
    courseCode: 'PART-ENT-INS',
    timeRequired: 'PT21H',
    price: '1365',
    jsonLdDescription:
      "Formation pour renforcer le partenariat avec les entreprises en insertion : prospection et valorisation de l'offre. 21 heures.",
    sujetContact: 'Demande formation — Renforcer le partenariat avec les entreprises en insertion',
  },
  'recruter-insertion-entreprises': {
    slug: 'recruter-insertion-entreprises',
    path: '/formations/professionnalisantes/recruter-insertion-entreprises',
    titreAffichage:
      'Recruter en insertion : méthodes et outils pour travailler avec les entreprises',
    titreCarte:
      'RECRUTER EN INSERTION : MÉTHODES ET OUTILS POUR TRAVAILLER AVEC LES ENTREPRISES',
    titreMenu:
      'Recruter en insertion : méthodes et outils pour travailler avec les entreprises',
    sousTitreCarte: "De la co-construction à l'accompagnement stratégique RH",
    metaTitle:
      'Formation recruter en insertion avec les entreprises | Atipik RH Lormont',
    description:
      "Formation professionnalisante (21 h) : recrutement en insertion, co-construction avec les employeurs et accompagnement RH stratégique. Bordeaux - Lormont.",
    keywords:
      'formation recrutement insertion, méthodes recrutement, entreprises, accompagnement RH, CIP, Bordeaux, Lormont, Atipik RH',
    twitterTitle: 'Recruter en insertion & entreprises | Atipik RH',
    courseCode: 'REC-INS-ENT',
    timeRequired: 'PT21H',
    price: '1365',
    jsonLdDescription:
      "Formation pour recruter en insertion avec les entreprises : méthodes, outils et accompagnement stratégique RH. 21 heures.",
    sujetContact:
      'Demande formation — Recruter en insertion : méthodes et outils pour travailler avec les entreprises',
  },
  'renforcer-pratique-recrutement-inclusif': {
    slug: 'renforcer-pratique-recrutement-inclusif',
    path: '/formations/professionnalisantes/renforcer-pratique-recrutement-inclusif',
    titreAffichage:
      'Prévenir les discriminations dans le recrutement',
    titreCarte:
      'PRÉVENIR LES DISCRIMINATIONS DANS LE RECRUTEMENT',
    titreMenu:
      'Prévenir les discriminations dans le recrutement',
    sousTitreCarte: 'Du cadre légal aux pratiques professionnelles responsables',
    carteBadge: 'Formation obligatoire',
    metaTitle:
      'Formation prévenir discriminations au recrutement (obligatoire) | Atipik RH',
    description:
      "Formation professionnelle obligatoire (11 h) : cadre légal, biais cognitifs et recrutement objectif. Mixed learning, Bordeaux - Lormont.",
    keywords:
      'formation discriminations recrutement, formation obligatoire RH, non-discrimination, recrutement équitable, Bordeaux, Lormont, Atipik RH',
    twitterTitle: 'Prévenir les discriminations au recrutement | Atipik RH',
    courseCode: 'PREC-DISC-REC',
    timeRequired: 'PT11H',
    price: '990',
    jsonLdDescription:
      "Formation pour prévenir les discriminations dans le recrutement. 11 heures en mixed learning.",
    sujetContact:
      'Demande formation — Prévenir les discriminations dans le recrutement',
  },
  'renforcer-pratique-recrutement-diversite': {
    slug: 'renforcer-pratique-recrutement-diversite',
    path: '/formations/professionnalisantes/renforcer-pratique-recrutement-diversite',
    titreAffichage:
      "Recruter par les compétences : techniques pour professionnels de l'insertion",
    titreCarte:
      "RECRUTER PAR LES COMPÉTENCES : TECHNIQUES POUR PROFESSIONNELS DE L'INSERTION",
    titreMenu:
      "Recruter par les compétences : techniques pour professionnels de l'insertion",
    sousTitreCarte: 'De la diversité à la performance RH',
    metaTitle:
      'Formation recruter par les compétences — insertion & RH | Atipik RH',
    description:
      "Formation professionnalisante (11 h) : recrutement par les compétences, inclusion et performance RH en mixed learning. Bordeaux - Lormont.",
    keywords:
      'formation recrutement compétences, insertion professionnelle, diversité RH, recrutement inclusif, Bordeaux, Lormont, Atipik RH',
    twitterTitle: 'Recruter par les compétences — insertion | Atipik RH',
    courseCode: 'RECRUT-DIVERSITE',
    timeRequired: 'PT11H',
    price: '715',
    jsonLdDescription:
      "Formation pour recruter par les compétences : techniques pour professionnels de l'insertion. 11 h en mixed learning.",
    sujetContact:
      "Demande formation — Recruter par les compétences : techniques pour professionnels de l'insertion",
  },
}

/**
 * @param {string} slug
 */
export function getProfessionnelleConfigBySlug(slug) {
  return professionnalisantesBySlug[slug] ?? null
}

/**
 * Lien contact avec sujet prérempli et UTM pour GTM / GA4.
 * @param {string} slug
 */
export function getFormationContactHref(slug) {
  const c = professionnalisantesBySlug[slug]
  if (!c) return '/contact'
  const params = new URLSearchParams()
  params.set('sujet', c.sujetContact)
  params.set('utm_source', 'site')
  params.set('utm_medium', 'formation_page')
  params.set('utm_campaign', slug)
  return `/contact?${params.toString()}`
}

/** Objet JSON-LD Course pour schema.org */
export function buildJsonLdCourse(c) {
  const url = `${BASE_URL}${c.path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: c.titreAffichage,
    description: c.jsonLdDescription,
    provider: {
      '@type': 'Organization',
      name: 'Atipik RH',
      url: BASE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lormont',
        postalCode: '33310',
        addressRegion: 'Nouvelle-Aquitaine',
        addressCountry: 'FR',
      },
    },
    courseCode: c.courseCode,
    educationalLevel: 'Formation continue',
    timeRequired: c.timeRequired,
    offers: {
      '@type': 'Offer',
      price: c.price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    url,
  }
}

export const FORMATION_PRO_LIST = PROFESSIONNALISANTES_SLUGS.map((slug) => ({
  slug,
  ...professionnalisantesBySlug[slug],
}))
