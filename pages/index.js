import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomePage() {

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

        {/* Hero Section - Full Height Three Column Layout */}
        <section className="h-screen flex relative">
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

        {/* Section Présentation de l'entreprise */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight tracking-tight">
                À propos d'<span className="text-orange-500 font-brittany">Atipik RH</span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
                Depuis plus de 5 ans, Atipik RH accompagne les particuliers et les entreprises 
                dans leur développement professionnel. Notre équipe d'experts certifiés vous guide 
                avec <span className="text-orange-500 font-medium">bienveillance et professionnalisme</span> vers la réussite de vos projets.
              </p>
              
              <Link 
                href="/notre-histoire" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
              >
                En savoir plus sur notre histoire
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
} 