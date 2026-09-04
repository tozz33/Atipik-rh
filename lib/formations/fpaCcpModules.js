/**
 * Blocs CCP du titre FPA (RNCP37275) — source unique menu, pages et SEO.
 */

export const FPA_CCP_MODULES = [
  {
    id: 1,
    slug: 'ccp1',
    path: '/formations/fpa/ccp1',
    briefId: 'formation-fpa-ccp1',
    codeRncp: 'RNCP37275BC01',
    labelCourt: 'CCP1',
    titreMenu: 'CCP1 FPA',
    titre: 'Concevoir et Préparer une Formation',
    titreOfficiel: 'Concevoir et préparer la formation',
    heroAccent: 'Concevoir & préparer',
    accroche: 'Élaborez des parcours multimodaux et des scénarios pédagogiques adaptés aux adultes.',
    heuresTotal: 350,
    heuresCentre: 245,
    heuresStage: 105,
    tarifTtc: '3560',
    dureeLabel: '350 h — 245 h centre + 105 h stage',
    contexte: [
      'Concevoir une formation à partir d’une demande, bâtir la progression pédagogique et intégrer la multimodalité : le CCP1 FPA est le premier bloc du titre Formateur Professionnel d’Adultes.',
      'Ce module certifiant vous prépare à concevoir scénarios, activités d’apprentissage et d’évaluation pour des publics adultes.',
    ],
    ctaCapitalisation: 'Validez le CCP1 FPA et capitalisez vers le titre FPA complet !',
    competences: [
      'Élaborer la progression pédagogique d’une formation multimodale à partir d’une demande',
      'Concevoir un scénario pédagogique et d’accompagnement en intégrant la multimodalité',
      'Concevoir des activités d’apprentissage et d’évaluation en intégrant la multimodalité',
    ],
  },
  {
    id: 2,
    slug: 'ccp2',
    path: '/formations/fpa/ccp2',
    briefId: 'formation-fpa-ccp2',
    codeRncp: 'RNCP37275BC02',
    labelCourt: 'CCP2',
    titreMenu: 'CCP2 FPA',
    titre: 'Animer une Formation et Évaluer les Acquis',
    titreOfficiel: 'Animer une formation et évaluer les acquis des apprenants',
    heroAccent: 'Animer & évaluer',
    accroche: 'Animez des sessions efficaces et mesurez les acquis pour faire progresser chaque apprenant.',
    heuresTotal: 280,
    heuresCentre: 175,
    heuresStage: 105,
    tarifTtc: '2545',
    dureeLabel: '280 h — 175 h centre + 105 h stage',
    contexte: [
      'Animer une formation, faciliter les apprentissages et évaluer les acquis : le CCP2 FPA est le bloc centré sur la face-à-face pédagogique et la remédiation.',
      'Ce module certifiant vous prépare à piloter une session selon différentes modalités et à traiter les difficultés individuelles d’apprentissage.',
    ],
    ctaCapitalisation: 'Validez le CCP2 FPA et capitalisez vers le titre FPA complet !',
    competences: [
      'Animer une formation et faciliter les apprentissages selon différentes modalités',
      'Évaluer les acquis de formation des apprenants',
      'Remédier aux difficultés individuelles d’apprentissage',
    ],
  },
  {
    id: 3,
    slug: 'ccp3',
    path: '/formations/fpa/ccp3',
    briefId: 'formation-fpa-ccp3',
    codeRncp: 'RNCP37275BC03',
    labelCourt: 'CCP3',
    titreMenu: 'CCP3 FPA',
    titre: 'Accompagner les Apprenants en Formation',
    titreOfficiel: 'Accompagner les apprenants en formation',
    heroAccent: 'Accompagner',
    accroche: 'Accueillez, tutorez et accompagnez le développement professionnel des apprenants.',
    heuresTotal: 210,
    heuresCentre: 105,
    heuresStage: 105,
    tarifTtc: '2228',
    dureeLabel: '210 h — 105 h centre + 105 h stage',
    contexte: [
      'Accueillir un apprenant, co-construire son parcours et le tutorat à distance : le CCP3 FPA couvre l’accompagnement individualisé tout au long de la formation.',
      'Ce module certifiant vous prépare à soutenir le développement professionnel des adultes en formation.',
    ],
    ctaCapitalisation: 'Validez le CCP3 FPA et capitalisez vers le titre FPA complet !',
    competences: [
      'Accompagner les apprenants dans leur parcours de formation',
      'Accueillir un apprenant en formation et co-construire son parcours',
      'Tutorer les apprenants à distance',
      'Accompagner le développement professionnel des apprenants',
    ],
  },
  {
    id: 4,
    slug: 'ccp4',
    path: '/formations/fpa/ccp4',
    briefId: 'formation-fpa-ccp4',
    codeRncp: 'RNCP37275BC04',
    labelCourt: 'CCP4',
    titreMenu: 'CCP4 FPA',
    titre: 'Qualité, Réglementation et RSE en Formation',
    titreOfficiel:
      'Inscrire sa pratique professionnelle dans une démarche de qualité et de responsabilité sociale des entreprises',
    heroAccent: 'Qualité & RSE',
    accroche: 'Inscrivez votre pratique dans la réglementation, la veille et la responsabilité sociale.',
    heuresTotal: 161,
    heuresCentre: 91,
    heuresStage: 70,
    tarifTtc: '1931',
    dureeLabel: '161 h — 91 h centre + 70 h stage',
    contexte: [
      'Respecter la réglementation, maintenir son expertise et analyser ses pratiques : le CCP4 FPA ancre le métier de formateur dans une démarche qualité et RSE.',
      'Ce module certifiant vous prépare à exercer avec exigence professionnelle et responsabilité sociale.',
    ],
    ctaCapitalisation: 'Validez le CCP4 FPA et capitalisez vers le titre FPA complet !',
    competences: [
      'Respecter et faire respecter la règlementation en vigueur en formation et dans sa spécialité',
      'Réaliser une veille pour maintenir son expertise de formateur et de professionnel dans sa spécialité',
      'Analyser ses pratiques professionnelles',
    ],
  },
]

/**
 * @param {number|string} idOrSlug
 */
export function getFpaCcpModule(idOrSlug) {
  return (
    FPA_CCP_MODULES.find(
      (m) => m.id === Number(idOrSlug) || m.slug === idOrSlug || m.briefId === idOrSlug
    ) ?? null
  )
}
