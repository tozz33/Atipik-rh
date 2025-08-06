import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Clock, Users, MapPin, Calendar, GraduationCap, CheckCircle, ArrowRight, CreditCard, BookOpen, Target, Award, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

export default function FormationCIP() {
  const [openModules, setOpenModules] = useState({})

  const toggleModule = (moduleId) => {
    setOpenModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }))
  }

  const modules = [
    {
      id: 1,
      titre: "ACCUEILLIR POUR ANALYSER LA DEMANDE DES PERSONNES ET POSER LES BASES D'UN DIAGNOSTIC",
      sousTitre: "C.C.P 1",
      contenu: [
        "Accueil et information des personnes",
        "Analyse de la demande et des besoins",
        "Identification des freins à l'insertion",
        "Élaboration d'un diagnostic partagé"
      ]
    },
    {
      id: 2,
      titre: "ACCOMPAGNER LES PERSONNES DANS LES PARCOURS D'INSERTION SOCIALE ET PROFESSIONNELLE",
      sousTitre: "C.C.P 2",
      contenu: [
        "Construction de parcours individualisés",
        "Accompagnement vers l'emploi",
        "Techniques de recherche d'emploi",
        "Préparation aux entretiens et recrutements"
      ]
    },
    {
      id: 3,
      titre: "METTRE EN OEUVRE UNE OFFRE DE SERVICES AUPRES DES EMPLOYEURS POUR FAVORISER L'INSERTION PROFESSIONNELLE",
      sousTitre: "C.C.P 3",
      contenu: [
        "Prospection et relation entreprise",
        "Développement d'une offre de services",
        "Médiation emploi et mise en relation",
        "Suivi et sécurisation dans l'emploi"
      ]
    }
  ]
  return (
    <>
      <Head>
        <title>Formation CIP - Conseiller en Insertion Professionnelle | Atipik RH</title>
        <meta name="description" content="Formation certifiante Conseiller en Insertion Professionnelle (CIP) niveau 5. Titre professionnel RNCP, financement CPF possible. Durée 1186h dont 385h en entreprise." />
        <meta name="keywords" content="formation CIP, conseiller insertion professionnelle, formation certifiante, CPF, Bordeaux, Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/formations/cip" />
      </Head>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Background animé global */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-3000"></div>
        
        <div className="relative z-10">
          <Header isFixed={true} />

          {/* Spacer for fixed header */}
          <div className="h-20"></div>

          {/* Hero Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              
              {/* Titre principal */}
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight tracking-tight">
                  Formation<br/>
                  <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Conseiller en Insertion Professionnelle</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                  Devenez expert de l'<strong>accompagnement vers l'emploi</strong><br className="hidden lg:block"/>
                  <span className="text-orange-500 font-medium">Formation certifiante et financement CPF possible</span>
                </p>
              </div>
            </div>
          </section>

          {/* Le Contexte */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Titre à gauche */}
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63]">
                      Le <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Contexte</span>
                    </h2>
                  </div>
                  
                  {/* Contenu à droite */}
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Dans un contexte économique en mutation, l'accompagnement vers l'emploi nécessite des professionnels 
                      qualifiés capables d'analyser les besoins individuels, d'identifier les freins à l'insertion et 
                      de construire des parcours personnalisés vers l'emploi durable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Notre Objectif */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Contenu à gauche */}
                  <div className="lg:order-1">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-500">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-800 font-semibold text-lg">Maîtriser l'accompagnement personnalisé</p>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-500">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-800 font-semibold text-lg">Développer la relation entreprise</p>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-500">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-800 font-semibold text-lg">Favoriser l'insertion durable</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Titre à droite */}
                  <div className="lg:order-2">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63]">
                      Notre <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Objectif</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Les 3 Modules CIP */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Les <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">3 modules</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Un parcours complet organisé en 3 modules certifiants
                  </p>
                </div>

                <div className="space-y-4 max-w-4xl mx-auto">
                  {modules.map((module, index) => {
                    const isOpen = openModules[module.id]
                    const gradientFrom = "from-[#013F63]"
                    const gradientTo = "to-[#012a4a]"
                    
                    return (
                      <div key={module.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                        
                        {/* En-tête cliquable */}
                        <button
                          onClick={() => toggleModule(module.id)}
                          className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white p-4 flex items-center justify-between hover:opacity-90 transition-opacity`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{module.id}</span>
                            </div>
                            <div className="text-left">
                              <h3 className="text-base lg:text-lg font-bold">{module.titre}</h3>
                              <p className="text-white/90 text-sm">{module.sousTitre}</p>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-6 h-6 text-white" />
                            ) : (
                              <ChevronDown className="w-6 h-6 text-white" />
                            )}
                          </div>
                        </button>

                        {/* Contenu déroulant */}
                        {isOpen && (
                          <div className="p-6 border-t border-gray-200 animate-in slide-in-from-top-4 duration-300">
                            
                            {/* Contenu du module */}
                            <div className="mb-6">
                              <h4 className="text-sm font-bold text-[#013F63] mb-3 flex items-center gap-2">
                                <Target className="w-4 h-4" />
                                Compétences développées
                              </h4>
                              <div className="grid md:grid-cols-2 gap-2">
                                {module.contenu.map((item, i) => (
                                  <div key={i} className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Formation CIP - Informations clés */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                    Informations <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">clés</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Une formation complète pour devenir expert de l'accompagnement vers l'emploi
                  </p>
                </div>

                {/* Grille d'informations */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-[#013F63] mb-2">8 mois</div>
                    <p className="text-gray-600">dont 3 mois en entreprise</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="text-2xl font-bold text-[#013F63] mb-2">10-15</div>
                    <p className="text-gray-600">personnes par groupe</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-[#013F63] mb-2">Niveau 5</div>
                    <p className="text-gray-600">Équivalent Bac+2</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Contact */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">
                  Prêt(e) à devenir <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Conseiller en Insertion Professionnelle ?</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                  Rejoignez notre prochaine promotion et devenez expert de l'accompagnement vers l'emploi
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                    Candidater maintenant
                  </Link>
                  <a 
                    href="tel:0783019955"
                    className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-lg"
                  >
                    07 83 01 99 55
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibilité Handicap */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-6">
                  <Image 
                    src="/images/certifications/formation-handicap.png" 
                    alt="Formation accessible aux personnes en situation de handicap" 
                    width={80} 
                    height={80}
                    className="object-contain flex-shrink-0"
                  />
                  <div className="text-sm text-gray-600 text-left">
                    <p className="mb-2">
                      <strong>Accessibilité Handicap :</strong> Nos formations sont accessibles aux personnes en situation de handicap.
                    </p>
                    <p className="mb-3">
                      Contactez-nous pour étudier ensemble les modalités d'accès qui conviennent le mieux à votre situation.
                    </p>
                    <p>
                      <strong>Responsable :</strong> Vanessa NOAH EWODO - Directrice<br/>
                      <a href="mailto:contact@atipikrh.com" className="text-orange-500 hover:text-orange-600 transition-colors">contact@atipikrh.com</a> | 
                      <a href="tel:0783019955" className="text-orange-500 hover:text-orange-600 transition-colors ml-1">07 83 01 99 55</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        <Footer />

      </div>
    </>
  )
} 