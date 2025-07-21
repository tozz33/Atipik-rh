import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Header({ isFixed = false, isHomePage = false }) {
  const [isFormationsOpen, setIsFormationsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  
  useEffect(() => {
    if (!isHomePage) return
    
    const handleScroll = () => {
      const header = document.getElementById('main-header')
      if (!header) return
      
      const scrollPosition = window.scrollY
      
      if (scrollPosition > window.innerHeight * 0.1) {
        header.style.transform = 'translateY(0)'
        header.style.opacity = '1'
      } else {
        header.style.transform = 'translateY(-100%)'
        header.style.opacity = '0'
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerClasses = isFixed 
    ? "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 transition-all duration-500"
    : isHomePage 
    ? "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 transform -translate-y-full opacity-0 transition-all duration-500"
    : "bg-stone-50/80 backdrop-blur-sm"

  return (
    <header id={isHomePage ? "main-header" : undefined} className={headerClasses}>
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logos/atipik-logo.png" 
              alt="Atipik RH"
              width={150}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation centrale */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/bilan-de-competences" className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors">
              Bilan de compétences
            </Link>
            <Link href="/vae" className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors">
              VAE
            </Link>
            
            {/* Menu déroulant Formations */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsFormationsOpen(true)}
              onMouseLeave={() => setIsFormationsOpen(false)}
            >
              <Link href="/formations" className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors flex items-center">
                Formations
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Menu déroulant */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                isFormationsOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <div className="py-2">
                  <Link 
                    href="/formations/cip" 
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    <div className="font-medium">Formation CIP</div>
                    <div className="text-xs text-gray-500">Conseiller en Insertion Professionnelle</div>
                  </Link>
                  <Link 
                    href="/formations/courtes" 
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors border-t border-gray-100"
                  >
                    <div className="font-medium">Formations courtes</div>
                    <div className="text-xs text-gray-500">Montée en compétences rapide</div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Menu déroulant À propos */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors flex items-center">
                À propos
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Menu déroulant */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                isAboutOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <div className="py-2">
                  <Link 
                    href="/qui-sommes-nous" 
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    <div className="font-medium">Qui sommes-nous ?</div>
                    <div className="text-xs text-gray-500">Notre histoire et nos valeurs</div>
                  </Link>
                  <Link 
                    href="/equipe" 
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors border-t border-gray-100"
                  >
                    <div className="font-medium">L'équipe</div>
                    <div className="text-xs text-gray-500">Rencontrez nos experts</div>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/financement" className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors">
              Financement
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}