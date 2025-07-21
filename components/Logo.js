import Image from 'next/image'
import { useState } from 'react'

export default function Logo({ 
  variant = 'default', // 'default', 'white'
  className = '',
  size = 'medium' // 'small', 'medium', 'large'
}) {
  const [useText, setUseText] = useState(false)

  // Tailles définies
  const sizes = {
    small: { width: 120, height: 40 },
    medium: { width: 180, height: 60 },
    large: { width: 240, height: 80 }
  }

  // Chemins des logos
  const logoPath = variant === 'white' 
    ? '/images/logos/atipik-logo-white.svg'
    : '/images/logos/atipik-logo.svg'

  const pngFallback = variant === 'white'
    ? '/images/logos/atipik-logo-white.png'
    : '/images/logos/atipik-logo.png'

  // Si pas d'image disponible, utilise le texte
  if (useText) {
    return (
      <div className={`text-2xl font-brand text-primary-600 ${variant === 'white' ? 'text-white' : ''} ${className}`}>
        Atipik RH
      </div>
    )
  }

  return (
    <Image
      src={logoPath}
      alt="Atipik RH - Formation et accompagnement professionnel"
      width={sizes[size].width}
      height={sizes[size].height}
      className={className}
      onError={() => {
        // Essaie le PNG en fallback
        const img = new window.Image()
        img.onload = () => setUseText(false)
        img.onerror = () => setUseText(true)
        img.src = pngFallback
      }}
      priority={true}
    />
  )
} 