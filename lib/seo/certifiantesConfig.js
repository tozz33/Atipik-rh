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
  'formation-fpa-ccp1': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP1 FPA — Concevoir et Préparer une Formation (titre FPA niveau 5, RNCP37275BC01)',
    duree: '350 h — 245 h centre + 105 h stage',
    financement: 'CPF et dispositifs selon profil — page financement',
    prochaineEtape: { label: 'Comparer avec le parcours FPA complet', href: '/formations/fpa' },
    contactCampaign: 'formation_fpa_ccp1',
    sujetContact: 'Demande formation — FPA CCP1',
  },
  'formation-fpa-ccp2': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP2 FPA — Animer une Formation et Évaluer les Acquis (titre FPA niveau 5, RNCP37275BC02)',
    duree: '280 h — 175 h centre + 105 h stage',
    financement: 'CPF et dispositifs selon profil — page financement',
    prochaineEtape: { label: 'Comparer avec le parcours FPA complet', href: '/formations/fpa' },
    contactCampaign: 'formation_fpa_ccp2',
    sujetContact: 'Demande formation — FPA CCP2',
  },
  'formation-fpa-ccp3': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP3 FPA — Accompagner les Apprenants en Formation (titre FPA niveau 5, RNCP37275BC03)',
    duree: '210 h — 105 h centre + 105 h stage',
    financement: 'CPF et dispositifs selon profil — page financement',
    prochaineEtape: { label: 'Comparer avec le parcours FPA complet', href: '/formations/fpa' },
    contactCampaign: 'formation_fpa_ccp3',
    sujetContact: 'Demande formation — FPA CCP3',
  },
  'formation-fpa-ccp4': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP4 FPA — Qualité, Réglementation et RSE en Formation (titre FPA niveau 5, RNCP37275BC04)',
    duree: '161 h — 91 h centre + 70 h stage',
    financement: 'CPF et dispositifs selon profil — page financement',
    prochaineEtape: { label: 'Comparer avec le parcours FPA complet', href: '/formations/fpa' },
    contactCampaign: 'formation_fpa_ccp4',
    sujetContact: 'Demande formation — FPA CCP4',
  },
  'formation-ccp1': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP1 — accueil et diagnostic partagé (titre CIP niveau 5)',
    duree: '220 h — 150 h centre + 70 h stage',
    financement: 'CPF et dispositifs selon profil — page financement',
    prochaineEtape: { label: 'Comparer avec le parcours CIP complet', href: '/formations/cip' },
    contactCampaign: 'formation_ccp1',
    sujetContact: 'Demande formation — CCP1',
  },
  'formation-ccp2': {
    ou: 'Atipik RH — 8 rue du Courant, 33310 Lormont',
    quoi: 'Module certifiant CCP2 — accompagnement de parcours (titre CIP niveau 5)',
    duree: '435 h — 175 h centre + 260 h stage',
    financement: 'CPF et dispositifs selon profil — page financement',
    prochaineEtape: { label: 'Comparer avec le parcours CIP complet', href: '/formations/cip' },
    contactCampaign: 'formation_ccp2',
    sujetContact: 'Demande formation — CCP2',
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
