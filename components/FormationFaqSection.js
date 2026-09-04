import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { getBriefById } from '../lib/seo/content-briefs'

/**
 * FAQ visible (contenu aligné sur le JSON-LD du brief).
 * @param {{ briefId: string, title?: string }} props
 */
export default function FormationFaqSection({ briefId, title = 'Questions fréquentes' }) {
  const brief = getBriefById(briefId)
  const [openIndex, setOpenIndex] = useState(null)

  if (!brief?.faq?.length) return null

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section className="py-12 bg-white/60" aria-labelledby={`faq-${briefId}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 id={`faq-${briefId}`} className="text-2xl font-bold text-[#013F63] text-center mb-8">
            {title}
          </h2>
          <div className="space-y-3">
            {brief.faq.map((item, index) => (
              <div
                key={item.question}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-4 text-left text-[#013F63] font-semibold hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span>{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 shrink-0 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 shrink-0 text-orange-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-[#013F63]/90 text-sm leading-relaxed border-t border-gray-50">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
