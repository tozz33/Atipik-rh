import { FINANCEMENT_DISCLAIMER } from '../lib/tarifs/tarifsCopy'

/**
 * Mention légale à placer à proximité des dispositifs de financement.
 * @param {{ className?: string, variant?: 'default' | 'compact' }} props
 */
export default function FinancementDisclaimer({ className = '', variant = 'default' }) {
  const isCompact = variant === 'compact'

  const baseClasses = isCompact
    ? 'text-xs text-[#013F63]/80 leading-relaxed bg-blue-50/50 border border-blue-100/60 rounded-lg px-3 py-2'
    : 'text-sm text-[#013F63] leading-relaxed bg-blue-50 border border-blue-100 rounded-xl px-4 py-3'

  return (
    <p
      className={`${baseClasses} ${className}`.trim()}
      role="note"
    >
      {isCompact ? FINANCEMENT_DISCLAIMER : <strong>{FINANCEMENT_DISCLAIMER}</strong>}
    </p>
  )
}
