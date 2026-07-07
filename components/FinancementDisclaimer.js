import Link from 'next/link'
import { FINANCEMENT_DISCLAIMER } from '../lib/tarifs/tarifsCopy'

const CONTACT_MARKER = 'ATIPIK RH'

/**
 * Mention légale à placer à proximité des dispositifs de financement.
 * @param {{ className?: string, variant?: 'default' | 'compact' | 'subtle' }} props
 */
export default function FinancementDisclaimer({ className = '', variant = 'default' }) {
  const isCompact = variant === 'compact'
  const isSubtle = variant === 'subtle'

  const baseClasses = isSubtle
    ? 'text-xs text-gray-500 leading-relaxed'
    : isCompact
      ? 'text-xs text-[#013F63]/80 leading-relaxed bg-blue-50/50 border border-blue-100/60 rounded-lg px-3 py-2'
      : 'text-sm text-[#013F63] leading-relaxed bg-blue-50 border border-blue-100 rounded-xl px-4 py-3'

  const [beforeContact, afterContact = ''] = FINANCEMENT_DISCLAIMER.split(CONTACT_MARKER)

  const content = isSubtle ? (
    <>
      {beforeContact}
      <Link
        href="/contact"
        className="underline-offset-2 hover:underline hover:text-gray-600"
      >
        {CONTACT_MARKER}
      </Link>
      {afterContact}
    </>
  ) : isCompact ? (
    FINANCEMENT_DISCLAIMER
  ) : (
    <strong>{FINANCEMENT_DISCLAIMER}</strong>
  )

  return (
    <p
      className={`${baseClasses} ${className}`.trim()}
      role="note"
    >
      {content}
    </p>
  )
}
