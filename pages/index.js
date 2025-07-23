import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomePage() {
  const [bannerConfig, setBannerConfig] = useState(null)

  useEffect(() => {
    // Charger la configuration du bandeau
    fetch('/banner-config.json')
      .then(response => response.json())
      .then(data => setBannerConfig(data))
      .catch(error => console.log('Configuration du bandeau non disponible'))
  }, [])

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'clock':
        return (
          <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'star':
        return (
          <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        )
      case 'megaphone':
        return (
          <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        )
      default:
        return (
          <svg className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
    }
  }

  return (
    <>
      <Head>
        <title>Atipik RH - Formation, Bilan de compétences & VAE à Lormont</title>
        <meta name="description" content="Centre de formation à Lormont (33) : bilan de compétences, VAE, formations certifiantes CPF. Accompagnement personnalisé pour votre évolution professionnelle." />
        <meta name="keywords" content="Atipik RH, formation Lormont, bilan de compétences, VAE, CPF, Gironde" />
        <link rel="canonical" href="https://atipikrh.fr/" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header isHomePage={true} />

        {/* Hero Section - Reduced Height Three Column Layout */}
        <section className="h-[85vh] flex relative">
          {/* Logo central en haut */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
            <Link href="/" className="block">
              <Image 
                src="/images/logos/atipik-logo.png" 
                alt="Atipik RH"
                width={250}
                height={83}
                className="h-16 w-auto filter brightness-0 invert"
                priority
              />
            </Link>
            <p className="text-white text-center mt-2 text-sm font-light tracking-wide">
              Votre guide au quotidien
            </p>
          </div>

          {/* Bilan de compétences */}
          <Link href="/bilan-de-competences" className="flex-1 hero-card relative overflow-hidden cursor-pointer transition-all duration-700 hover:flex-[1.1] hover:scale-105 group">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image 
                src="/images/hero/bilan-competences.jpg" 
                alt="Bilan de compétences"
                fill
                className="object-cover transition-all duration-700"
              />
              {/* Overlay bleu */}
              <div className="absolute inset-0 bg-[#013F63] opacity-60 group-hover:opacity-0 transition-all duration-700"></div>
              {/* Overlay dégradé pour la lisibilité au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-end items-center text-white p-8">
              <div className="text-center">
                <h2 className="text-xl lg:text-2xl font-bold tracking-tight mb-4">
                  BILAN DE COMPÉTENCES
                </h2>
                
                <div className="w-16 h-1 bg-accent-500 mx-auto mb-6 group-hover:w-24 transition-all duration-500"></div>
                
                {/* Sous-texte affiché seulement au hover */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-base lg:text-lg leading-relaxed max-w-md mb-6">
                    Faites le point sur vos compétences et définissez votre projet professionnel
                  </p>
                  
                  <div className="inline-flex text-orange-400 font-semibold">
                    <span>Découvrir</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Formations */}
          <Link href="/formations" className="flex-1 hero-card relative overflow-hidden cursor-pointer transition-all duration-700 hover:flex-[1.1] hover:scale-105 group">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image 
                src="/images/hero/vae.jpg" 
                alt="Formations"
                fill
                className="object-cover transition-all duration-700"
              />
              {/* Overlay orange */}
              <div className="absolute inset-0 bg-[#FE6400] opacity-60 group-hover:opacity-0 transition-all duration-700"></div>
              {/* Overlay dégradé pour la lisibilité au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-end items-center text-white p-8">
              <div className="text-center">
                <h2 className="text-xl lg:text-2xl font-bold tracking-tight mb-4">
                  FORMATIONS
                </h2>
                
                <div className="w-16 h-1 bg-accent-500 mx-auto mb-6 group-hover:w-24 transition-all duration-500"></div>
                
                {/* Sous-texte affiché seulement au hover */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-base lg:text-lg leading-relaxed max-w-md mb-6">
                    Développez vos compétences avec nos formations certifiantes
                  </p>
                  
                  <div className="inline-flex text-orange-400 font-semibold">
                    <span>Voir nos formations</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* VAE */}
          <Link href="/vae" className="flex-1 hero-card relative overflow-hidden cursor-pointer transition-all duration-700 hover:flex-[1.1] hover:scale-105 group">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image 
                src="/images/hero/formations.jpg" 
                alt="VAE"
                fill
                className="object-cover transition-all duration-700"
              />
              {/* Overlay bleu foncé */}
              <div className="absolute inset-0 bg-[#013F63] opacity-60 group-hover:opacity-0 transition-all duration-700"></div>
              {/* Overlay dégradé pour la lisibilité au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <div className="relative h-full flex flex-col justify-end items-center text-white p-8">
              <div className="text-center">
                <h2 className="text-xl lg:text-2xl font-bold tracking-tight mb-4">
                  VAE
                </h2>
                
                <div className="w-16 h-1 bg-accent-500 mx-auto mb-6 group-hover:w-24 transition-all duration-500"></div>
                
                {/* Sous-texte affiché seulement au hover */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-base lg:text-lg leading-relaxed max-w-md mb-6">
                    Transformez votre expérience en diplôme officiel reconnu
                  </p>
                  
                  <div className="inline-flex text-orange-400 font-semibold">
                    <span>Explorer</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Bandeau d'annonce dynamique */}
        {bannerConfig && bannerConfig.active && (
          <section className={`bg-gradient-to-r ${bannerConfig.backgroundColor} text-white py-8`}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-6">
                <div className="flex items-center space-x-3">
                  {getIcon(bannerConfig.icon)}
                  <div>
                    <h3 className="font-bold text-xl lg:text-2xl">
                      {bannerConfig.title}
                    </h3>
                    <p className="text-orange-100 text-lg">
                      {bannerConfig.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <Link href={bannerConfig.primaryButton.link} className="bg-white text-orange-600 px-6 py-3 rounded-full text-base font-medium hover:bg-orange-50 transition-colors shadow-lg">
                    {bannerConfig.primaryButton.text}
                  </Link>
                  <Link href={bannerConfig.secondaryButton.link} className="border-2 border-white text-white px-6 py-3 rounded-full text-base font-medium hover:bg-white hover:text-orange-600 transition-colors">
                    {bannerConfig.secondaryButton.text}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  )
} 