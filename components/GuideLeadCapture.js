import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import { X } from 'lucide-react'

const BREVO_FORM_ACTION =
  'https://31d6ce3a.sibforms.com/v2/serve/MUIFAF1nk8ZvFmz9VmYxCRoqwTZqOJRo19k3DEJgXJdYm4Szpltv55_0EO2y9yTUg4Li0Vait4AH5QhFcU3Rv3uQ0Xv4NI0DYu47gxLIYSaanp3p8F_evrQilrE9l_xpiFKrHilApWq8Lc6RJegBain-miula9u9PM0xQTI_St_F0wfMo1TDrWFZM5U1begN2zaUXDDRfgFJBbEo'

const SECTEUR_OPTIONS = [
  { value: '1', label: 'Cabinet de recrutement' },
  { value: '2', label: 'Entreprise de 300 employés et plus' },
  { value: '3', label: "Agence d'intérim" },
  { value: '4', label: 'Particulier' },
  { value: '5', label: 'Autre' },
]

const GUIDE_BULLETS = [
  {
    title: "Le ROI de l'Inclusion",
    text: 'Les chiffres (McKinsey, BCG) qui prouvent comment la diversité booste votre rentabilité jusqu\'à +41%.',
  },
  {
    title: 'Le Plan d\'Action',
    text: 'La méthode express prête à l\'emploi pour engager et fidéliser vos talents à 360°.',
  },
  {
    title: 'La Checklist Anti-Biais',
    text: '4 étapes rapides pour auditer vos annonces et attirer les meilleurs profils.',
  },
  {
    title: 'Le Cas Pratique Choc',
    text: 'Comment une usine a fait exploser la productivité de ses 180 salariés en s\'arrêtant 3 jours.',
  },
]

function initBrevoFormGlobals() {
  if (typeof window === 'undefined') return
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Veuillez choisir un code pays'
  window.LOCALE = 'fr'
  window.EMAIL_INVALID_MESSAGE = 'Il semble y avoir une petite erreur de frappe. Pouvez-vous vérifier ce champ ?'
  window.SMS_INVALID_MESSAGE = window.EMAIL_INVALID_MESSAGE
  window.REQUIRED_ERROR_MESSAGE = 'Cette information est nécessaire pour recevoir le guide.'
  window.GENERIC_INVALID_MESSAGE = 'Il semble y avoir une petite erreur de frappe. Pouvez-vous vérifier ce champ ?'
  window.INVALID_NUMBER = window.GENERIC_INVALID_MESSAGE
  window.INVALID_DATE = 'Veuillez saisir une date valide'
  window.REQUIRED_MULTISELECT_MESSAGE = 'Veuillez choisir au moins une option'
  window.translation = {
    common: {
      selectedOption: '{quantity} sélectionné',
      selectedOptions: '{quantity} sélectionnés',
      selectedOptionFeminine: '{quantity} sélectionnée',
      selectedOptionsFeminine: '{quantity} sélectionnées',
      clickHereToReply: 'Cliquez ici pour répondre',
    },
  }
}

function GuideBrevoForm() {
  return (
    <div className="guide-modal__form-card">
      <div className="sib-form guide-modal__brevo-root">
        <div id="sib-form-container" className="sib-form-container">
          <div id="error-message" className="sib-form-message-panel guide-modal__brevo-alert guide-modal__brevo-alert--error">
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <span className="sib-form-message-panel__inner-text">
                Oups, un problème technique est survenu. N&apos;hésitez pas à nous contacter directement.
              </span>
            </div>
          </div>
          <div id="success-message" className="sib-form-message-panel guide-modal__brevo-alert guide-modal__brevo-alert--success">
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <span className="sib-form-message-panel__inner-text">
                Ouverture de votre Guide Pratique en cours... (Vérifiez également votre boîte de réception !)
              </span>
            </div>
          </div>

          <form
            id="sib-form"
            method="POST"
            action={BREVO_FORM_ACTION}
            data-type="subscription"
            className="guide-modal__form"
          >
            <div className="guide-modal__field">
              <label htmlFor="PRENOM" className="guide-modal__label">
                Prénom<span className="guide-modal__required">*</span>
              </label>
              <input
                type="text"
                id="PRENOM"
                name="PRENOM"
                className="guide-modal__input"
                placeholder="Ex: Camille"
                maxLength={200}
                autoComplete="given-name"
                required
                data-required="true"
              />
            </div>

            <div className="guide-modal__field">
              <label htmlFor="NOM" className="guide-modal__label">
                Nom<span className="guide-modal__required">*</span>
              </label>
              <input
                type="text"
                id="NOM"
                name="NOM"
                className="guide-modal__input"
                placeholder="Ex: Dupont"
                maxLength={200}
                autoComplete="family-name"
                required
                data-required="true"
              />
            </div>

            <div className="guide-modal__field">
              <label htmlFor="EMAIL" className="guide-modal__label">
                E-mail professionnel<span className="guide-modal__required">*</span>
              </label>
              <input
                type="email"
                id="EMAIL"
                name="EMAIL"
                className="guide-modal__input"
                placeholder="Ex: c.dupont@entreprise.com"
                autoComplete="email"
                required
                data-required="true"
              />
            </div>

            <div className="guide-modal__field">
              <label htmlFor="FEUILLE_SHEETS_SECTEUR" className="guide-modal__label">
                Secteur d&apos;activité<span className="guide-modal__required">*</span>
              </label>
              <select
                id="FEUILLE_SHEETS_SECTEUR"
                name="FEUILLE_SHEETS_SECTEUR"
                className="guide-modal__input guide-modal__select"
                required
                data-required="true"
                defaultValue=""
              >
                <option value="" disabled>
                  Choisissez une valeur
                </option>
                {SECTEUR_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="guide-modal__consent">
              <label className="guide-modal__consent-label">
                <input
                  type="checkbox"
                  id="OPT_IN"
                  name="OPT_IN"
                  value="1"
                  className="guide-modal__checkbox"
                  required
                />
                <span className="guide-modal__consent-text">
                  J&apos;accepte de recevoir vos e-mails et confirme avoir pris connaissance de votre{' '}
                  <Link
                    href="/rgpd"
                    className="guide-modal__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    politique de confidentialité
                  </Link>{' '}
                  et{' '}
                  <Link
                    href="/mentions-legales"
                    className="guide-modal__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    mentions légales
                  </Link>
                  .
                </span>
              </label>
              <p className="guide-modal__consent-hint">
                Vous pouvez vous désinscrire à tout moment en cliquant sur le lien présent dans nos e-mails.
              </p>
            </div>

            <button type="submit" className="guide-modal__submit">
              ACCÉDER À MON GUIDE PRATIQUE
            </button>

            <input type="text" name="email_address_check" defaultValue="" className="guide-modal__honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <input type="hidden" name="locale" value="fr" />
          </form>
        </div>
      </div>
    </div>
  )
}

function GuideModal({ isOpen, onClose }) {
  const [isClosing, setIsClosing] = useState(false)
  const [brevoScriptReady, setBrevoScriptReady] = useState(false)
  const brevoInitialized = useRef(false)

  const handleClose = useCallback(
    (e) => {
      if (e) e.stopPropagation()
      setIsClosing(true)
      setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, 300)
    },
    [onClose]
  )

  useEffect(() => {
    if (!isOpen) return undefined
    initBrevoFormGlobals()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, handleClose])

  useEffect(() => {
    if (!isOpen || !brevoScriptReady || brevoInitialized.current) return
    brevoInitialized.current = true
    initBrevoFormGlobals()
  }, [isOpen, brevoScriptReady])

  if (!isOpen) return null

  return (
    <>
      {isOpen && (
        <Script
          id="brevo-guide-form-script"
          src="https://sibforms.com/forms/end-form/build/main.js"
          strategy="afterInteractive"
          onLoad={() => setBrevoScriptReady(true)}
        />
      )}

      <div
        className="guide-modal__overlay"
        role="presentation"
        onClick={handleClose}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="guide-modal-title"
          className={`guide-modal ${isClosing ? 'guide-modal--closing' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={handleClose}
            className="guide-modal__close"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" strokeWidth={2.5} />
          </button>

          <header className="guide-modal__header">
            <h2 id="guide-modal-title" className="guide-modal__title">
              <span>Le Recrutement Inclusif :</span>
              <span>Votre Nouveau Levier de Performance.</span>
            </h2>
          </header>

          <div className="guide-modal__body">
            <div className="guide-modal__slot-book">
              <div className="guide-modal__book-wrap">
                <Image
                  src="/images/guide/couverture-recrutement-inclusif.png"
                  alt="Couverture du guide Le Recrutement Inclusif"
                  width={200}
                  height={230}
                  className="guide-modal__book"
                  priority
                />
              </div>
            </div>

            <div className="guide-modal__slot-form">
              <GuideBrevoForm />
            </div>

            <ul className="guide-modal__bullets guide-modal__slot-bullets">
              {GUIDE_BULLETS.map((item) => (
                <li key={item.title} className="guide-modal__bullet">
                  <span className="guide-modal__bullet-dot" aria-hidden="true" />
                  <span>
                    <strong>{item.title} :</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default function GuideLeadCapture() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#guide') {
        setIsModalOpen(true)
      }
    }

    checkHash()
    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [])

  return (
    <>
      <div className="h-11" aria-hidden="true" />

      <button
        type="button"
        onClick={openModal}
        className="fixed top-20 left-0 right-0 z-[9997] bg-primary-600 py-2 sm:py-2.5 cursor-pointer hover:bg-[#012a4a] transition-colors"
        aria-label="Voir le guide Le Recrutement Inclusif"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-3">
          <span className="font-sans text-neutral-100 text-xs sm:text-sm leading-snug text-left truncate">
            🎁 Le Recrutement Inclusif : Votre Nouveau Levier de Performance.
          </span>
          <span className="flex-shrink-0 rounded-md bg-neutral-100 px-3 py-1 font-sans text-xs sm:text-sm font-semibold text-primary-600 whitespace-nowrap">
            Voir le Guide
          </span>
        </div>
      </button>

      <GuideModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
