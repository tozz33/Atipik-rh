import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {

    // Animation timeline au scroll - slide-in une seule fois, slide-out à chaque sortie
    let observer = null
    const animatedElements = new Set() // Suivre les éléments qui ont déjà été animés

    const setupTimelineAnimation = () => {
      const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.dataset.timelineId || entry.target.className
          
          if (entry.isIntersecting) {
            // Élément entre dans la vue
            entry.target.classList.remove('animate-slide-out-left', 'animate-slide-out-right')
            
            // Si l'élément n'a jamais été animé, faire le slide-in
            if (!animatedElements.has(elementId)) {
              entry.target.classList.add('animate-slide-in')
              animatedElements.add(elementId)
            } else {
              // Déjà animé - juste remettre en position normale
              entry.target.classList.remove('animate-slide-in')
              entry.target.classList.add('position-normal')
            }
          } else {
            // Élément sort de la vue - animation slide-out dans le sens inverse
            entry.target.classList.remove('animate-slide-in', 'position-normal')
            
            // Détecter le sens original pour faire l'animation inverse
            if (entry.target.classList.contains('slide-left')) {
              entry.target.classList.add('animate-slide-out-left')
            } else if (entry.target.classList.contains('slide-right')) {
              entry.target.classList.add('animate-slide-out-right')
            }
          }
        })
      }, observerOptions)

      // Observer tous les éléments de timeline avec des IDs uniques
      const timelineItems = document.querySelectorAll('.timeline-item')
      timelineItems.forEach((item, index) => {
        item.dataset.timelineId = `timeline-${index}`
        observer.observe(item)
      })
    }

    // Attendre que le DOM soit prêt avant de configurer l'observer
    const timer = setTimeout(setupTimelineAnimation, 100)
    
    // Navigation des témoignages
    let currentIndex = 0
    const testimonialsScroll = document.getElementById('testimonials-scroll')
    const prevBtn = document.getElementById('testimonials-prev')
    const nextBtn = document.getElementById('testimonials-next')
    
    if (testimonialsScroll && prevBtn && nextBtn) {
      const cards = testimonialsScroll.querySelectorAll('.testimonial-card')
      const totalCards = cards.length
      
             // Calculer combien de cartes sont visibles
       const getVisibleCards = () => {
         const containerWidth = testimonialsScroll.parentElement.clientWidth
         // Largeur de carte + gap selon la CSS
         const cardWidth = 320 + 20 // 1.25rem = 20px
         return Math.floor((containerWidth - 160) / cardWidth) // -160px pour les boutons, marges et padding
       }
      
      const updateNavigation = () => {
        const visibleCards = getVisibleCards()
        const maxIndex = Math.max(0, totalCards - visibleCards)
        
        prevBtn.disabled = currentIndex <= 0
        nextBtn.disabled = currentIndex >= maxIndex
        
                 // Déplacer le conteneur
         const cardWidth = 320 + 20 // Largeur + gap
         const translateX = currentIndex * cardWidth
         testimonialsScroll.style.transform = `translateX(-${translateX}px)`
      }
      
      const scrollPrev = () => {
        if (currentIndex > 0) {
          currentIndex--
          updateNavigation()
        }
      }
      
      const scrollNext = () => {
        const visibleCards = getVisibleCards()
        const maxIndex = Math.max(0, totalCards - visibleCards)
        if (currentIndex < maxIndex) {
          currentIndex++
          updateNavigation()
        }
      }
      
      prevBtn.addEventListener('click', scrollPrev)
      nextBtn.addEventListener('click', scrollNext)
      
      // Initialiser la navigation
      updateNavigation()
      
      // Mettre à jour lors du redimensionnement
      const handleResize = () => {
        const visibleCards = getVisibleCards()
        const maxIndex = Math.max(0, totalCards - visibleCards)
        if (currentIndex > maxIndex) {
          currentIndex = maxIndex
        }
        updateNavigation()
      }
      
      window.addEventListener('resize', handleResize)
      
      // Cleanup pour les témoignages
      const cleanupTestimonials = () => {
        prevBtn.removeEventListener('click', scrollPrev)
        nextBtn.removeEventListener('click', scrollNext)
        window.removeEventListener('resize', handleResize)
      }
      
      // Stocker la fonction de cleanup
      window.testimonialsCleanup = cleanupTestimonials
    }
    
    return () => {
      clearTimeout(timer)
      if (observer) {
        observer.disconnect()
      }
      // Nettoyer les témoignages
      if (window.testimonialsCleanup) {
        window.testimonialsCleanup()
        delete window.testimonialsCleanup
      }
    }
  }, [])
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

        {/* Hero Section - Full Screen Three Column Layout */}
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

        {/* Section Storytelling Moderne */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
          {/* Éléments décoratifs en arrière-plan */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          
          <div className="relative z-10 container mx-auto px-4 pt-16 pb-16">
            
            {/* Accroche - Hero Central */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h1 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
                Un jour, tout semble <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">flou</span>.<br/>
                Le travail perd de son <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">sens</span>.
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed font-light">
                L'envie de changer est là… <br className="hidden lg:block"/>
                <span className="text-orange-500 font-medium">mais par où commencer ?</span>
              </p>
            </div>

            {/* Timeline avec ligne centrale */}
            <div className="max-w-6xl mx-auto relative">
              {/* Ligne centrale droite */}
              <div className="timeline-line hidden lg:block"></div>
              
              {/* Le vécu */}
              <div className="timeline-item slide-left relative grid lg:grid-cols-2 gap-16 items-center mb-32">
                <div className="timeline-dot bg-blue-500"></div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-30"></div>
                  <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">Le vécu</h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                      <p>
                        Des années d'expérience. Une routine bien installée. Et pourtant, une impression persistante : 
                        <strong className="text-blue-600"> celle de passer à côté de quelque chose</strong>.
                      </p>
                      <p>
                        L'idée d'une reconversion, d'une VAE ou d'un nouveau projet commence à germer… 
                        <span className="text-gray-500 italic">mais le flou persiste</span>.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex justify-center">
                  <div className="w-64 h-64 flex items-center justify-center">
                    <Image 
                      src="/images/graphique/vecu.png" 
                      alt="Le vécu - Illustration"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Le déclic */}
              <div className="timeline-item slide-right relative grid lg:grid-cols-2 gap-16 items-center mb-32">
                <div className="timeline-dot bg-orange-500"></div>
                <div className="hidden lg:flex justify-center order-2 lg:order-1">
                  <div className="w-64 h-64 flex items-center justify-center">
                    <Image 
                      src="/images/graphique/declic.png" 
                      alt="Le déclic - Illustration"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="relative order-1 lg:order-2">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-lg opacity-50"></div>
                  <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">Le déclic</h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                      <p>
                        Ce jour-là, en tombant sur un webinaire ou un simple article, une prise de conscience : 
                        <strong className="text-orange-600 text-xl"> il existe des solutions</strong>. 
                        Des accompagnements concrets, humains, adaptés à chaque histoire.
                      </p>
                      <p>
                        Il ne s'agit plus de rêver d'un changement, mais de 
                        <strong className="text-orange-600 text-xl"> l'engager réellement</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* L'accompagnement */}
              <div className="timeline-item slide-left relative grid lg:grid-cols-2 gap-16 items-center mb-32">
                <div className="timeline-dot bg-blue-500"></div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-30"></div>
                  <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-blue-100">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">L'accompagnement</h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                      <p>
                        C'est souvent là que commence le vrai tournant : un premier échange, un bilan de compétences, 
                        un accompagnement à la VAE ou une formation certifiante comme le <strong className="text-blue-600">Titre CIP</strong>.
                      </p>
                      <p>
                        Une méthode <strong className="text-blue-600">bienveillante</strong>, <strong className="text-blue-600">cadrée</strong>, 
                        portée par une équipe à taille humaine.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex justify-center">
                  <div className="w-64 h-64 flex items-center justify-center">
                    <Image 
                      src="/images/graphique/accompagnement.png" 
                      alt="L'accompagnement - Illustration"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* La transformation */}
              <div className="timeline-item slide-right relative grid lg:grid-cols-2 gap-16 items-center mb-32">
                <div className="timeline-dot bg-orange-500"></div>
                <div className="hidden lg:flex justify-center order-2 lg:order-1">
                  <div className="w-64 h-64 flex items-center justify-center">
                    <Image 
                      src="/images/graphique/Transformation.png" 
                      alt="La transformation - Illustration"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="relative order-1 lg:order-2">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-lg opacity-50"></div>
                  <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-gray-100">

                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">La transformation</h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                      <p>
                        Au fil des semaines, les choses s'éclaircissent : un projet prend forme. 
                        Des compétences sont reconnues. De nouveaux horizons professionnels deviennent atteignables.
                      </p>
                      <p>
                        Ce n'est plus seulement une reconversion. 
                        <strong className="text-orange-600 text-xl"> C'est un alignement</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Appel à l'action final - Style épuré */}
            <div className="text-center mt-16 mb-16 max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
                Chaque parcours est <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">différent</span>.<br/>
                Le vôtre commence peut-être <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">aujourd'hui</span>.
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-12">
                Prenez le temps d'un premier échange pour clarifier vos objectifs<br className="hidden lg:block"/>
                <span className="text-gray-500">et découvrir les solutions qui vous correspondent.</span>
              </p>
              
              <div className="space-y-6">
                <button className="bg-[#013F63] hover:bg-[#012a4a] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg">
                  Premier entretien gratuit
                </button>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                  <span>• Sans engagement</span>
                  <span>• Réponse sous 24h</span>
                  <span>• À distance ou en présentiel</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section Témoignages avec navigation manuelle */}
        <section className="pt-12 pb-24 bg-gray-50">
          <div className="container mx-auto px-4 mb-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight">
                Ils nous ont fait <span className="text-orange-500 font-brittany text-6xl lg:text-7xl">confiance</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Découvrez les témoignages de nos participants qui ont transformé leur parcours professionnel
              </p>
            </div>
          </div>

          {/* Conteneur avec navigation manuelle */}
          <div className="testimonials-container bg-gray-50 pt-8 pb-12">
            
            {/* Bouton précédent */}
            <button 
              id="testimonials-prev"
              className="testimonials-nav-btn testimonials-prev"
              aria-label="Témoignage précédent"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Bouton suivant */}
            <button 
              id="testimonials-next"
              className="testimonials-nav-btn testimonials-next"
              aria-label="Témoignage suivant"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div id="testimonials-scroll" className="testimonials-scroll">
              {/* Vrais avis Google */}
              <div className="testimonial-card bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-yellow-400 text-lg">
                    ★★★★★
                  </div>
                  <div className="text-xs text-gray-500">il y a un an</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm line-clamp-4">
                  "Merci Atipik RH ! Merci Vanessa et toute son équipe ! J'ai suivi la formation CIP et la touche Atipik RH au programme pédagogique permet une réelle mise en pratique des connaissances et des savoir-faire vus en cours. Un métier passionnant appris par une équipe passionnante !"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    M
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900 text-sm">Marie Giraud</div>
                    <div className="text-xs text-gray-500">Formation CIP</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-yellow-400 text-lg">
                    ★★★★★
                  </div>
                  <div className="text-xs text-gray-500">il y a 2 ans</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm line-clamp-4">
                  "Souhaitant une reconversion, Vanessa a su me diriger, à poser des mots sur ce que je souhaitais, ma donné des contacts et des sites pour encore plus en apprendre sur les métiers en question. Maintenant grâce à tout cela, à tout ce travail, nous avons pu cibler le métier qui me convient et qui est en tout point à ce que j'ai demandé au début du bilan. Grâce à Vanessa, une nouvelle aventure m'attend."
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    E
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900 text-sm">Emma Sanchez</div>
                    <div className="text-xs text-gray-500">Bilan de compétences</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-yellow-400 text-lg">
                    ★★★★★
                  </div>
                  <div className="text-xs text-gray-500">il y a un an</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm line-clamp-4">
                  "Formation de Conseiller en Insertion Professionnelle de 9 mois dispensée par Atipik RH. Un centre de formation qui porte très bien son nom, doté d'une équipe pédagogique hors pair et d'une direction à l'écoute, attentive et attentionnée ! Je recommande à 300%."
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    F
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900 text-sm">Frédérique Dosne</div>
                    <div className="text-xs text-gray-500">Formation CIP</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-yellow-400 text-lg">
                    ★★★★★
                  </div>
                  <div className="text-xs text-gray-500">il y a 4 mois</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm line-clamp-4">
                  "Vanessa est une personne très à l'écoute et très réactive. De très bon conseil et un bilan qui m'a permis de me retrouver et de reprendre confiance en moi. Merci encore. Je vous recommande ATIPIK RH sans hésiter."
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    L
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900 text-sm">LSPLA MOREAU</div>
                    <div className="text-xs text-gray-500">Bilan de compétences</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-yellow-400 text-lg">
                    ★★★★★
                  </div>
                  <div className="text-xs text-gray-500">il y a 5 mois</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm line-clamp-4">
                  "J'ai effectué un bilan de compétences avec Vanessa et c'est exactement ce dont j'avais besoin ! Elle a su me guider dans ma réflexion de manière très professionnelle et bienveillante. Je recommande vivement Atipik RH."
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    S
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900 text-sm">Sophie Martin</div>
                    <div className="text-xs text-gray-500">Bilan de compétences</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-yellow-400 text-lg">
                    ★★★★★
                  </div>
                  <div className="text-xs text-gray-500">il y a 3 mois</div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm line-clamp-4">
                  "Centre de formation au top ! L'équipe est très professionnelle et l'accompagnement personnalisé. J'ai pu valider mes acquis et obtenir ma certification. Merci à toute l'équipe !"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    J
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900 text-sm">Julien Dupont</div>
                    <div className="text-xs text-gray-500">VAE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />

      </div>
    </>
  )
} 