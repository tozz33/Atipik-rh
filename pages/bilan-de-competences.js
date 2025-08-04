import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Award, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star,
  ChevronDown,
  MapPin,
  Heart,
  Lightbulb
} from 'lucide-react';

export default function BilanCompetences() {
  const [openFaq, setOpenFaq] = useState(null);

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
    
    return () => {
      clearTimeout(timer)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Combien de temps dure un bilan de compétences ?",
      answer: "Un bilan de compétences dure 24 heures au total, réparties sur 2 à 3 mois. Le rythme est flexible : généralement 1 à 2 séances par semaine de 2-3 heures, adaptées à vos disponibilités professionnelles et personnelles."
    },
    {
      question: "Le bilan de compétences est-il confidentiel ?",
      answer: "Oui, totalement. Votre employeur n'est pas informé si vous utilisez votre CPF. Les résultats vous appartiennent exclusivement. Seul un document de synthèse vous est remis, que vous êtes libre de partager ou non."
    },
    {
      question: "Puis-je faire mon bilan en ligne ?",
      answer: "Oui ! Nous proposons des bilans 100% à distance via visioconférence. L'efficacité est la même qu'en présentiel, avec plus de flexibilité. Idéal si vous habitez loin de Bordeaux ou avez des contraintes horaires."
    },
    {
      question: "Quelle est la différence avec un coaching ?",
      answer: "Le bilan de compétences suit une méthodologie structurée et réglementée. Il comprend des tests validés scientifiquement et aboutit à un projet professionnel concret. Le coaching est plus libre dans sa forme et ses objectifs."
    },
    {
      question: "À quelle fréquence puis-je faire un bilan ?",
      answer: "Il n'y a pas de limite légale, mais nous recommandons d'attendre au moins 5 ans entre deux bilans pour que la démarche garde tout son sens. Vos droits CPF se rechargent chaque année jusqu'à un plafond."
    }
  ];

  return (
    <>
      <Header isFixed={true} />
      
      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* Section Storytelling Moderne - Reprise de la page d'accueil */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Éléments décoratifs en arrière-plan */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        
        <div className="relative z-10 container mx-auto px-4 pt-8 pb-16">
          
          {/* Titre principal */}
          <div className="text-center mb-12 max-w-5xl mx-auto">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
              Bilan de <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">compétences</span><br/>
              à <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">Bordeaux</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-8">
              Révélez votre potentiel et construisez votre avenir professionnel<br className="hidden lg:block"/>
              <span className="text-orange-500 font-medium">avec un accompagnement personnalisé</span>
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
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">Le vécu</h3>
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
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">Le déclic</h3>
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
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">L'accompagnement</h3>
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
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">La transformation</h3>
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
            <h3 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
              Chaque parcours est <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">différent</span>.<br/>
              Le vôtre commence peut-être <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">aujourd'hui</span>.
            </h3>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-12">
              Prenez le temps d'un premier échange pour clarifier vos objectifs<br className="hidden lg:block"/>
              <span className="text-gray-500">et découvrir les solutions qui vous correspondent.</span>
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[#013F63] hover:bg-[#012a4a] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg inline-block">
                  Premier entretien gratuit
                </Link>
                <Link href="/bilan-de-competences/quiz" className="border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 inline-block">
                  Quiz d'éligibilité
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <span>• Sans engagement</span>
                <span>• Réponse sous 24h</span>
                <span>• À distance ou en présentiel</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Nos 2 formules */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                Nos <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">2 formules</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Tarifs adaptés selon le niveau de diplôme visé dans votre projet
              </p>
            </div>

            {/* Grille des formules par niveau */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
              {/* Niveau 3 et 4 */}
              <div className="flex flex-col h-[550px]">
                {/* Header avec niveau */}
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-t-3xl p-6 text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">Niveau 3 et 4</h3>
                  <p className="text-orange-100 font-medium">CAP - BEP - BAC</p>
                </div>
                
                {/* Contenu de la carte */}
                <div className="bg-white rounded-b-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col flex-grow">
                  
                  {/* Prix */}
                  <div className="text-center mb-8">
                    <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                      2 300<span className="text-2xl">€</span>
                    </div>
                    <p className="text-gray-500 text-sm">(sans frais d'acte formatif et frais de jurys)</p>
                  </div>
                  
                  {/* Durée d'accompagnement */}
                  <div className="flex items-center justify-center gap-3 mb-8 text-blue-600">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Jusqu'à 30 heures de face à face</span>
              </div>

                  {/* Services inclus */}
                  <div className="space-y-3 mb-8 flex-grow">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Phase préliminaire et bilan de fin</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Tests et questionnaires personnalisés</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Analyse approfondie de votre profil</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Définition du projet professionnel</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Document de synthèse complet</span>
                    </div>
                  </div>
                  
                  {/* Bouton */}
                  <Link href="/contact" className="block w-full text-center px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition mt-auto">
                    Parlons-en
                  </Link>
                </div>
              </div>

              {/* Niveau 5 */}
              <div className="flex flex-col h-[550px]">
                {/* Header avec niveau */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-3xl p-6 text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">Niveau 5</h3>
                  <p className="text-blue-100 font-medium">DEUG, BTS, DUT, DEUST, BUT, TITRE PROFESSIONNEL</p>
                </div>
                
                {/* Contenu de la carte */}
                <div className="bg-white rounded-b-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col flex-grow">
                  
                  {/* Prix */}
                  <div className="text-center mb-8">
                    <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                      1 900<span className="text-2xl">€</span>
                    </div>
                    <p className="text-gray-500 text-sm">(sans frais d'acte formatif et frais de jurys)</p>
                  </div>
                  
                  {/* Durée d'accompagnement */}
                  <div className="flex items-center justify-center gap-3 mb-8 text-blue-600">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Jusqu'à 24 heures de face à face</span>
                  </div>
                  
                  {/* Services inclus */}
                  <div className="space-y-3 mb-8 flex-grow">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Phase préliminaire et bilan de fin</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Tests et questionnaires personnalisés</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Analyse approfondie de votre profil</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Définition du projet professionnel</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Document de synthèse complet</span>
                    </div>
                  </div>
                  
                  {/* Bouton */}
                  <Link href="/contact" className="block w-full text-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition mt-auto">
                    Parlons-en
                  </Link>
                </div>
              </div>
            </div>

            {/* Info financement */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 border border-[#013F63] text-center">
              <p className="text-lg text-[#013F63] font-medium mb-4">
                Nos formules sont 100% finançables par le CPF
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/bilan-de-competences/cpf" className="inline-flex px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition">
                  Financement CPF
                </Link>
                <Link href="/contact" className="inline-flex px-6 py-3 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                  Premier RDV gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Témoignages */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight">
                Ils ont transformé leur <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">vie professionnelle</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Découvrez les témoignages de ceux qui ont franchi le pas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                    "Après 15 ans dans la comptabilité, je ne me sentais plus à ma place. 
                    Le bilan m'a permis de révéler ma passion pour l'accompagnement. 
                    Aujourd'hui, je suis conseillère en insertion professionnelle et épanouie !"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      M
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">Marie L., 42 ans</div>
                      <div className="text-sm text-gray-500">Bordeaux</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                    "Suite à un burn-out, j'avais besoin de prendre du recul. L'accompagnement 
                    d'Atipik RH m'a aidé à identifier mes vraies valeurs. J'ai créé mon entreprise 
                    et je n'ai jamais été aussi heureux."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      T
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">Thomas P., 38 ans</div>
                      <div className="text-sm text-gray-500">Mérignac</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight">
              Questions <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">fréquentes</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tout ce que vous devez savoir sur le bilan de compétences
            </p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-lg text-[#013F63] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-6 h-6 text-gray-600 transition-transform flex-shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Accessibilité Handicap */}
      <section className="py-12 bg-gradient-to-br from-slate-100 to-blue-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              
              <div className="flex items-center justify-center gap-6 mb-6">
                <Image
                  src="/images/certifications/formation-handicap.png"
                  alt="Logo Handiaccueillant - Atipik RH"
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <h3 className="text-2xl font-bold text-[#013F63]">
                  Handiaccueillant
                </h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                <strong className="text-[#013F63]">Atipik RH</strong> s'engage à donner à tous les mêmes chances d'accéder à la formation professionnelle continue. 
                Nous mettons tout en œuvre dans la mesure du possible pour intégrer à nos programmes des personnes en situation de handicap 
                en adaptant les modalités de nos formations conformément à la Loi du 11/02/2005 pour l'égalité des droits et des chances, 
                la participation et la citoyenneté des personnes handicapées.
              </p>
              
              <p className="text-gray-800 italic text-lg mb-2">
                Merci de <strong>contacter notre référente handicap</strong> pour étudier au mieux votre demande et sa faisabilité.
              </p>
              <p className="text-2xl font-bold text-[#013F63] italic">
                📞 <a href="tel:0769097445" className="hover:text-orange-500 transition-colors duration-300">07 69 09 74 45</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 