/**
 * Textes canoniques tarifs et financement ATIPIK RH (source unique).
 */

export const TARIF_SELON_PROFIL_COMPLET =
  "Tarif selon profil : salariés, demandeurs d'emploi, travailleurs indépendants, employeurs : se rapprocher du centre ATIPIK RH pour une étude personnalisée."

export const TARIF_SELON_PROFIL_COURT =
  'Tarif selon profil : se rapprocher du centre ATIPIK RH pour une étude personnalisée.'

export const FINANCEMENT_DISCLAIMER =
  "L'obtention d'un financement public ou mutualisé pour une action de formation professionnelle répond à des règles et conditions spécifiques qui vous engagent. Pour plus d'informations, contactez ATIPIK RH."

/**
 * Formate un montant numérique ou chaîne en libellé tarif public.
 * @param {string|number} montant - ex. 8950, "8950", "8 950"
 * @param {{ suffix?: string }} [options] - ex. { suffix: '/ stagiaire' }
 * @returns {string}
 */
export function formatTarifPublic(montant, options = {}) {
  const { suffix = '' } = options
  const raw = String(montant).replace(/\s/g, '').replace(/€/g, '')
  const num = parseInt(raw, 10)
  const formatted = Number.isNaN(num)
    ? String(montant)
    : num.toLocaleString('fr-FR')
  const base = `${formatted} € TTC`
  return suffix ? `${base} ${suffix}` : base
}

/**
 * Libellé court pour affichage dans les cartes (montant seul + TTC).
 * @param {string|number} montant
 * @param {{ suffix?: string }} [options]
 */
export function formatTarifPublicDisplay(montant, options = {}) {
  const { suffix = '' } = options
  const raw = String(montant).replace(/\s/g, '').replace(/€/g, '')
  const num = parseInt(raw, 10)
  const formatted = Number.isNaN(num)
    ? String(montant)
    : num.toLocaleString('fr-FR')
  return { amount: formatted, suffix }
}
