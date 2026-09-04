// Composant Honeypot pour la protection anti-spam
// Champ caché que les bots remplissent mais pas les humains

export default function HoneypotField({ value, onChange }) {
  return (
    <div 
      style={{
        position: 'absolute',
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      <label htmlFor="website_url">
        Site web (ne pas remplir)
      </label>
      <input
        type="text"
        id="website_url"
        name="website_url"
        value={value || ''}
        onChange={onChange}
        tabIndex="-1"
        autoComplete="off"
      />
    </div>
  )
}

