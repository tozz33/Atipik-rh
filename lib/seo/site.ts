/**
 * Source unique des constantes organisation ATIPIK RH.
 * À garder aligné avec pages/_document.js (LocalBusiness).
 */

export const BASE_URL = 'https://www.atipikrh.com'

export const ORGANIZATION = {
  name: 'Atipik RH',
  legalName: 'Atipik RH',
  url: BASE_URL,
  id: `${BASE_URL}/#organization`,
  telephone: '+33500000000', // Remplacer par le numéro affiché sur le site si différent
  email: 'contact@atipikrh.com',
  sameAs: [
    'https://www.linkedin.com/company/atipik-rh',
    'https://www.facebook.com/atipikrh',
  ],
} as const

export const ADDRESS = {
  streetAddress: '8 Rue du Courant',
  addressLocality: 'Lormont',
  postalCode: '33310',
  addressRegion: 'Nouvelle-Aquitaine',
  addressCountry: 'FR',
} as const

export const GEO = {
  '@type': 'GeoCoordinates' as const,
  latitude: 44.8764,
  longitude: -0.5212,
}

export const GEO_ZONES = [
  'Lormont',
  'Bordeaux',
  'Bordeaux Métropole',
  'Gironde',
  'Nouvelle-Aquitaine',
] as const

export const CERTIFICATIONS = [
  'Organisme certifié Qualiopi',
  'Formations éligibles CPF',
  'Accompagnement insertion et reconversion professionnelle',
] as const

export const SERVICES_SUMMARY = [
  'Formation Conseiller en Insertion Professionnelle (CIP)',
  'Formation Formateur Professionnel pour Adultes (FPA)',
  'Bilans de compétences',
  'Formations courtes professionnalisantes',
  'VAE',
  'Accompagnement demandeurs d’emploi et publics QPV',
] as const

export function buildPostalAddressJsonLd() {
  return {
    '@type': 'PostalAddress',
    ...ADDRESS,
  }
}
