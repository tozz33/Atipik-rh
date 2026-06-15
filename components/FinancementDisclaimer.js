import { FINANCEMENT_DISCLAIMER } from '../lib/tarifs/tarifsCopy'

/**
 * Mention légale à placer à proximité des dispositifs de financement.
 */
export default function FinancementDisclaimer({ className = '' }) {
  return (
    <p
      className={`text-sm text-[#013F63] leading-relaxed bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 ${className}`.trim()}
      role="note"
    >
      <strong>{FINANCEMENT_DISCLAIMER}</strong>
    </p>
  )
}
