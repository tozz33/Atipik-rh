/**
 * Routes affichant la mention légale financement (Arrêté 26/05/2026).
 * Source unique pour l'affichage automatique dans le Footer.
 */

/** Chemins exacts (sans slash final). */
export const FORMATION_LEGAL_EXACT_PATHS = [
  '/formations/cip',
  '/formations/fpa',
  '/formations/fpa/ccp1',
  '/formations/fpa/ccp2',
  '/formations/fpa/ccp3',
  '/formations/fpa/ccp4',
  '/formations/ccp1',
  '/formations/ccp2',
  '/formations/ccp3',
  '/formations/courtes-professionnalisantes',
  '/bilan-de-competences',
  '/vae',
  '/financement',
]

/**
 * Préfixes : toute nouvelle page sous ces chemins est couverte automatiquement
 * (ex. nouvelle formation professionnalisante).
 */
export const FORMATION_LEGAL_PATH_PREFIXES = [
  '/formations/professionnalisantes/',
  '/bilan-de-competences/',
  '/vae/',
]

/**
 * @param {string | undefined} pathname - ex. router.pathname
 * @returns {boolean}
 */
export function isFormationLegalDisclaimerPath(pathname) {
  if (!pathname || typeof pathname !== 'string') return false

  const path = pathname.split('?')[0].split('#')[0].replace(/\/$/, '') || '/'

  if (FORMATION_LEGAL_EXACT_PATHS.includes(path)) return true

  return FORMATION_LEGAL_PATH_PREFIXES.some((prefix) => path.startsWith(prefix))
}
