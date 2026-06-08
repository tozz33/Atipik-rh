/**
 * Données SEO / GEO des formations certifiantes (source unique durées, lieux, CTA).
 * Aligné sur le contenu affiché dans pages/formations/*.js
 */

import { RAFAEL_CAP_CIP } from './rafaelCapCip'

export const CERTIFIANTES_GEO_BY_BRIEF = {
  'formation-cip': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont (Bordeaux Métropole, rive droite)',
    quoi: 'Titre professionnel Conseiller en Insertion Professionnelle (niveau 5, RNCP 37274)',
    duree: '8 mois — 948 h en centre — stages 11 semaines (7 + 4)',
    financement: 'CPF, France Travail (AIF), transition pro, employeur, OPCO — selon profil',
    prochaineEtape: { label: "Réunion d'information gratuite", href: '/s-inscrire' },
    contactCampaign: 'formation_cip',
    sujetContact: 'Demande formation — CIP',
    rafaelCap: {
      label: 'Fiche Rafael Cap Métiers (Nouvelle-Aquitaine)',
      ficheUrl: RAFAEL_CAP_CIP.ficheUrl,
      reference: RAFAEL_CAP_CIP.reference,
    },
  },
  'formation-fpa': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont (Gironde, Nouvelle-Aquitaine)',
    quoi: 'Titre professionnel Formateur Professionnel pour Adultes (niveau 5, RNCP)',
    duree: '7 mois — 934 h de formation',
    financement: 'CPF, employeur, France Travail — selon votre profil',
    prochaineEtape: { label: "Réunion d'information gratuite", href: '/s-inscrire' },
    contactCampaign: 'formation_fpa',
    sujetContact: 'Demande formation — FPA',
  },
  'formation-ccp3': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP3 — relation entreprise et recrutement (titre CIP niveau 5)',
    duree: '371 h — parcours orienté employeurs et médiation',
    financement: 'CPF et dispositifs selon profil — page financement',
    prochaineEtape: { label: 'Comparer avec le parcours CIP complet', href: '/formations/cip' },
    contactCampaign: 'formation_ccp3',
    sujetContact: 'Demande formation — CCP3',
  },
}

/**
 * @param {string} briefId
 */
export function getCertifianteGeoByBrief(briefId) {
  return CERTIFIANTES_GEO_BY_BRIEF[briefId] ?? null
}

/**
 * Lien contact avec UTM (piliers certifiantes).
 * @param {string} briefId
 */
export function getCertifianteContactHref(briefId) {
  const geo = CERTIFIANTES_GEO_BY_BRIEF[briefId]
  if (!geo) return '/contact'
  const params = new URLSearchParams()
  params.set('sujet', geo.sujetContact)
  params.set('utm_source', 'site')
  params.set('utm_medium', 'formation_page')
  params.set('utm_campaign', geo.contactCampaign)
  return `/contact?${params.toString()}`
}
