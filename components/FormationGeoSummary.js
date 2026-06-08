import Link from 'next/link'
import { MapPin, BookOpen, Clock, CreditCard, ArrowRight } from 'lucide-react'
import { getCertifianteGeoByBrief } from '../lib/seo/certifiantesConfig'

/**
 * Bloc « réponse directe » pour moteurs génératifs (GEO).
 * @param {{ briefId: string }} props
 */
export default function FormationGeoSummary({ briefId }) {
  const geo = getCertifianteGeoByBrief(briefId)
  if (!geo) return null

  const rows = [
    { icon: MapPin, label: 'Où', value: geo.ou },
    { icon: BookOpen, label: 'Quoi', value: geo.quoi },
    { icon: Clock, label: 'Durée', value: geo.duree },
    { icon: CreditCard, label: 'Financement', value: geo.financement },
  ]

  return (
    <aside
      className="max-w-4xl mx-auto mb-8 rounded-2xl border-2 border-[#013F63]/15 bg-white/90 p-6 shadow-md"
      aria-label="Informations essentielles sur la formation"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-[#013F63]/70 mb-4">
        En bref
      </p>
      <dl className="space-y-3 text-[#013F63]">
        {rows.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex gap-3 text-sm md:text-base">
            <Icon className="w-5 h-5 shrink-0 text-orange-500 mt-0.5" aria-hidden />
            <div>
              <dt className="font-bold inline">{label} : </dt>
              <dd className="inline font-light">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
      <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-3">
        <Link
          href={geo.prochaineEtape.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#013F63] hover:text-orange-500 transition-colors"
        >
          {geo.prochaineEtape.label}
          <ArrowRight className="w-4 h-4" />
        </Link>
        {geo.rafaelCap?.ficheUrl ? (
          <a
            href={geo.rafaelCap.ficheUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#013F63]/80 hover:text-orange-500 transition-colors"
          >
            {geo.rafaelCap.label}
            <ArrowRight className="w-4 h-4" aria-hidden />
          </a>
        ) : null}
      </div>
    </aside>
  )
}
