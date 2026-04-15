import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

// Date limite d'affichage: 05 mai 2026 à 18h30 (heure locale).
const EVENT_END_DATE = new Date(2026, 4, 5, 18, 30, 0)

export default function DarwinEventPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const now = new Date()
    if (now >= EVENT_END_DATE) return

    const timer = window.setTimeout(() => {
      setIsVisible(true)
    }, 1200)

    return () => window.clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[10000] bg-black/45 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 md:p-7">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 transition-colors"
          aria-label="Fermer la popup"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-5">
          <h3 className="text-3xl md:text-4xl font-brittany text-[#013F63] leading-tight">
            Et si vos talents
          </h3>
          <h4 className="text-xl md:text-2xl font-semibold text-[#013F63] leading-tight mt-1">
            étaient là où vous ne regardez pas ?
          </h4>
        </div>

        <p className="text-sm md:text-base text-neutral-900 leading-relaxed text-center mb-4">
          Soirée d'échange dédiée au recrutement inclusif, pensée comme un temps de réflexion entre entreprises.
        </p>

        <p className="text-sm md:text-base text-accent-500 font-semibold text-center mb-4">
          RDV : mardi 05 mai de 18h30 à 21h00 à Darwin Eco-système
        </p>

        <div className="mb-6">
          <p className="text-sm md:text-base font-semibold text-[#013F63] mb-2">Au programme :</p>
          <ul className="space-y-2 text-sm md:text-base text-neutral-900">
            <li>• Une table ronde collaborative entre entreprises</li>
            <li>• Un témoignage concret d'un RH d'entreprise engagée</li>
            <li>• Un moment convivial pour échanger librement</li>
          </ul>
        </div>

        <a
          href="https://forms.gle/3Tcs941QpcegRCMA7"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-accent-500 hover:bg-accent-600 text-white font-bold py-3.5 px-6 rounded-2xl transition-colors duration-300"
        >
          S'inscrire juste ici
        </a>
      </div>
    </div>
  )
}
