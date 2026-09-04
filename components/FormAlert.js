/**
 * Message de retour formulaire (erreur ou succès) accessible et en français.
 */
export default function FormAlert({ type = 'error', message, onDismiss }) {
  if (!message) return null

  const styles =
    type === 'error'
      ? 'bg-red-50 border-red-200 text-red-800'
      : 'bg-green-50 border-green-200 text-green-800'

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`mb-4 rounded-lg border px-4 py-3 text-sm ${styles}`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="flex-1">{message}</p>
        {onDismiss ? (
          <button
            type="button"
            onClick={onDismiss}
            className="shrink-0 font-semibold opacity-70 hover:opacity-100"
            aria-label="Fermer le message"
          >
            ×
          </button>
        ) : null}
      </div>
    </div>
  )
}
