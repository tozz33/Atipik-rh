import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const BREVO_FORM_URL =
  'https://31d6ce3a.sibforms.com/v2/serve/MUIFAF1nk8ZvFmz9VmYxCRoqwTZqOJRo19k3DEJgXJdYm4Szpltv55_0EO2y9yTUg4Li0Vait4AH5QhFcU3Rv3uQ0Xv4NI0DYu47gxLIYSaanp3p8F_evrQilrE9l_xpiFKrHilApWq8Lc6RJegBain-miula9u9PM0xQTI_St_F0wfMo1TDrWFZM5U1begN2zaUXDDRfgFJBbEo'

const BREVO_ORIGIN_SUFFIX = 'sibforms.com'
const MIN_IFRAME_HEIGHT = 320
const DEFAULT_IFRAME_HEIGHT = 520
const MAX_IFRAME_HEIGHT = 1200

function extractBrevoIframeHeight(data) {
  if (typeof data === 'number' && Number.isFinite(data)) return data

  if (typeof data === 'string') {
    if (data.startsWith('[iframeResize]')) {
      const parsed = Number.parseInt(data.replace('[iframeResize]', ''), 10)
      if (Number.isFinite(parsed)) return parsed
    }

    try {
      return extractBrevoIframeHeight(JSON.parse(data))
    } catch {
      return null
    }
  }

  if (!data || typeof data !== 'object') return null

  const candidates = [data.height, data.frameHeight, data.value, data.scrollHeight]
  for (const candidate of candidates) {
    const parsed = Number(candidate)
    if (Number.isFinite(parsed) && parsed > 0) return parsed
  }

  return null
}

function clampIframeHeight(height) {
  return Math.min(MAX_IFRAME_HEIGHT, Math.max(MIN_IFRAME_HEIGHT, Math.round(height)))
}

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

function GuideBrevoForm() {
  const containerRef = useRef(null)
  const [containerHeight, setContainerHeight] = useState(DEFAULT_IFRAME_HEIGHT)
  const [contentHeight, setContentHeight] = useState(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || typeof ResizeObserver === 'undefined') return undefined

    const syncContainerHeight = () => {
      const nextHeight = container.clientHeight
      if (nextHeight > 0) {
        setContainerHeight(clampIframeHeight(nextHeight))
      }
    }

    syncContainerHeight()
    const observer = new ResizeObserver(syncContainerHeight)
    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onMessage = (event) => {
      if (!event.origin.includes(BREVO_ORIGIN_SUFFIX)) return

      const nextHeight = extractBrevoIframeHeight(event.data)
      if (nextHeight) {
        setContentHeight(clampIframeHeight(nextHeight))
      }
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  const iframeHeight = clampIframeHeight(
    Math.max(contentHeight ?? 0, containerHeight, DEFAULT_IFRAME_HEIGHT)
  )

  return (
    <div ref={containerRef} className="guide-modal__form-card guide-modal__form-card--iframe">
      <iframe
        width="540"
        height={iframeHeight}
        src={BREVO_FORM_URL}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        title="Formulaire d'inscription au guide pratique"
        className="guide-modal__iframe"
      />
    </div>
  )
}

function GuideModal({ isOpen, onClose }) {
  const [isClosing, setIsClosing] = useState(false)

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

  if (!isOpen) return null

  return (
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
