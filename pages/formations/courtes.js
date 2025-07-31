import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  Users, 
  Target, 
  Calendar, 
  MapPin, 
  Euro, 
  Clock, 
  CheckCircle, 
  Mail,
  Award,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

export default function FormationsCourtes() {
  const [openFormations, setOpenFormations] = useState({})

  const toggleFormation = (formationId) => {
    setOpenFormations(prev => ({
      ...prev,
      [formationId]: !prev[formationId]
    }))
  }

  const formations = [
    {
      id: 1,
      titre: "Développer la relation entreprise",
      sousTitre: "De l'accompagnement à la relation entreprise",
      public: "Professionnels sans expérience en relation entreprises (CIP débutants, travailleurs sociaux…)",
      objectifs: [
        "Comprendre le fonctionnement des entreprises",
        "Identifier les besoins du tissu économique local", 
        "Construire une posture orientée coopération",
        "Initier et valoriser une relation entreprise efficace"
      ],
      programme: [
        {
          jour: "Jour 1 : Comprendre l'entreprise",
          contenu: [
            "Cartographie des dynamiques économiques locales",
            "Analyse des représentations de l'entreprise", 
            "Décodage des attentes employeurs"
          ]
        },
        {
          jour: "Jour 2 : Entrer en relation",
          contenu: [
            "Discours de prospection adapté",
            "Simulations de prise de contact",
            "Analyse collective des postures efficaces"
          ]
        },
        {
          jour: "Jour 3 (à distance) : Coopérer durablement", 
          contenu: [
            "Enjeux de la relation tripartite",
            "Techniques de médiation",
            "Posture de coopération dans la durée"
          ]
        }
      ],
      sessions: [
        "du 7 au 8 octobre 2025 + le 24 octobre 2025 (à distance)",
        "du 12 au 13 janvier 2026 + 23 janvier 2026 (à distance)"
      ],
      couleur: "blue"
    },
    {
      id: 2,
      titre: "Renforcer la relation avec l'entreprise",
      sousTitre: "De la prospection à la valorisation de votre offre",
      public: "Professionnels ayant une première expérience en tant que chargés de relation entreprise.",
      objectifs: [
        "Structurer une offre de service lisible",
        "Construire des outils de prospection efficaces",
        "Valoriser les profils accompagnés",
        "Ancrer son action dans une démarche de coopération durable"
      ],
      programme: [
        {
          jour: "Jour 1 : Structurer l'offre",
          contenu: [
            "Clarifier missions, publics et services",
            "Construire une offre lisible",
            "Benchmark d'offres existantes"
          ]
        },
        {
          jour: "Jour 2 : Organiser la prospection",
          contenu: [
            "Identifier les cibles prioritaires",
            "Créer outils (trame d'appel, mails, fiches)",
            "Jeux de rôle de prise de contact"
          ]
        },
        {
          jour: "Jour 3 (à distance) : Valoriser son action",
          contenu: [
            "Argumenter l'impact RH / social",
            "Construire un discours partenariat", 
            "Simulations d'entretiens avec entreprises"
          ]
        }
      ],
      sessions: [
        "du 3 et 4 novembre 2025 + le 21 novembre 2025 (à distance)",
        "du 2 et 3 février 2026 + 13 février 2026 (à distance)"
      ],
      couleur: "blue"
    },
    {
      id: 3,
      titre: "Recruter en insertion avec les entreprises",
      sousTitre: "De la co-construction à l'accompagnement stratégique RH",
      public: "Professionnels de l'accompagnement, managers de parcours, partenaires emploi",
      objectifs: [
        "Comprendre les logiques de recrutement d'entreprise",
        "Se positionner comme facilitateur entre entreprise et candidat",
        "Adopter une posture adaptée aux besoins des 2 parties"
      ],
      programme: [
        {
          jour: "Jour 1 : Recrutement collaboratif",
          contenu: [
            "Analyse de ses pratiques et définition d'objectifs",
            "Spécificités du recrutement inclusif",
            "Identification des freins et leviers à l'embauche",
            "Construction d'un processus de recrutement adapté"
          ]
        },
        {
          jour: "Jour 2 : Analyse de profils et orientation",
          contenu: [
            "Co-construction d'un parcours d'intégration",
            "Simulation d'entretien tripartite",
            "Élaboration d'un plan d'action transférable"
          ]
        },
        {
          jour: "Jour 3 (à distance) : Appui aux entretiens & suivi post-embauche",
          contenu: [
            "Étude de cas \"Parcours de recrutement\"",
            "Retour terrain et outils d'évaluation",
            "Bilan final et valorisation des acquis"
          ]
        }
      ],
      sessions: [
        "du 22 au 23 janvier 2026 + 6 février 2026 (à distance)",
        "du 23 au 24 avril 2026 + 30 avril 2026 (à distance)",
        "du 18 au 19 mai 2026 + 25 mai 2026 (à distance)"
      ],
      couleur: "blue"
    },
    {
      id: 4,
      titre: "Renforcer sa pratique des recrutements inclusifs",
      sousTitre: "De la diversité à la performance RH",
      public: "Professionnels impliqués dans le recrutement ou la gestion des ressources humaines, sans prérequis spécifique. Formation particulièrement adaptée aux chargé·es de mission emploi, conseiller·ères en insertion professionnelle, managers.",
      objectifs: [
        "Sensibiliser aux enjeux d'inclusion et de non-discrimination",
        "Identifier les leviers d'un recrutement inclusif",
        "Adapter ses outils et postures pour élargir la diversité des recrutements"
      ],
      programme: [
        {
          jour: "Jour 1 : Les bases de l'inclusion RH",
          contenu: [
            "Définitions et enjeux de la diversité",
            "Identification des biais cognitifs",
            "Étude de cas et auto-analyse des pratiques"
          ]
        },
        {
          jour: "Jour 2 : Recruter sans discriminer",
          contenu: [
            "Recruter sur les compétences",
            "Simulations d'entretiens",
            "Rédaction d'offres inclusives",
            "Élaboration d'un plan d'action individuel"
          ]
        },
        {
          jour: "Jour 3 (à distance) : Mise en situation et ajustements d'outils",
          contenu: [
            "Retours d'expérience et partages de pratiques",
            "Diagnostic collectif d'un processus de recrutement",
            "Évaluation et engagements"
          ]
        }
      ],
      sessions: [
        "du 9 au 10 octobre 2025 + le 16 octobre 2025 (à distance)",
        "du 12 au 13 mars 2026 + 19 mars 2026 (à distance)"
      ],
      couleur: "blue"
    }
  ]

  const getCouleurClasses = (couleur) => {
    const colors = {
      blue: "from-[#013F63] to-[#012a4a] text-[#013F63] bg-blue-50 border-blue-200",
      orange: "from-orange-500 to-orange-600 text-orange-600 bg-orange-100 border-orange-200", 
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-100 border-purple-200",
      green: "from-green-500 to-green-600 text-green-600 bg-green-100 border-green-200"
    }
    return colors[couleur] || colors.blue
  }

  return (
    <>
      <Head>
        <title>Formations Professionnalisantes | Atipik RH - Lormont Bordeaux</title>
        <meta name="description" content="Formations professionnalisantes pour structures d'accompagnement, acteurs insertion et entreprises. Relation entreprise, recrutement inclusif - 1150€" />
        <meta name="keywords" content="formation courte, professionnalisante, relation entreprise, recrutement inclusif, insertion professionnelle, Bordeaux, Lormont" />
        <link rel="canonical" href="https://atipikrh.com/formations/courtes" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
          {/* Background animé */}
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-1000"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            
            {/* Titre principal */}
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight tracking-tight">
                Formations<br/>
                <span className="text-orange-500 font-brittany text-4xl lg:text-6xl">Professionnalisantes</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                Des formations ancrées dans les <strong>réalités professionnelles</strong><br className="hidden lg:block"/>
                <span className="text-orange-500 font-medium">pour les acteurs de l'accompagnement et de l'insertion</span>
              </p>
            </div>
          </div>
        </section>

        {/* Contexte & Objectifs */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Le Contexte */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-[#013F63] mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Le Contexte
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Dans un contexte de mutation du marché du travail, les acteurs de l'accompagnement social et professionnel 
                    ainsi que les entreprises de secteurs en tension doivent adapter leurs pratiques pour favoriser 
                    l'employabilité, la coopération interprofessionnelle et la sécurisation des parcours.
                  </p>
                </div>

                {/* Notre Objectif */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-[#013F63] mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Notre Objectif
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    Nos formations visent à répondre à ces enjeux, à travers une approche concrète et immédiatement transposable.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Structurer la relation employeur</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Valoriser les compétences</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Améliorer la posture professionnelle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos 4 Formations */}
        <section className="py-16 bg-white" id="formations">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4 leading-tight">
                  Nos <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">4 formations</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Chaque formation peut être suivie indépendamment
                </p>
              </div>

              <div className="space-y-4 max-w-4xl mx-auto">
                {formations.map((formation, index) => {
                  const couleurClasses = getCouleurClasses(formation.couleur)
                  const [gradientFrom, gradientTo, textColor, bgColor, borderColor] = couleurClasses.split(' ')
                  const isOpen = openFormations[formation.id]
                  
                  return (
                    <div key={formation.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                      
                      {/* En-tête cliquable */}
                      <button 
                        onClick={() => toggleFormation(formation.id)}
                        className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white p-4 flex items-center justify-between hover:opacity-90 transition-opacity`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{formation.id}</span>
                          </div>
                          <div className="text-left">
                            <h3 className="text-base lg:text-lg font-bold">{formation.titre}</h3>
                            <p className="text-white/90 text-sm">{formation.sousTitre}</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-white" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-white" />
                          )}
                        </div>
                      </button>

                      {/* Contenu déroulant */}
                      {isOpen && (
                        <div className="p-4 border-t border-gray-200 animate-in slide-in-from-top-4 duration-300">
                          <div className="grid lg:grid-cols-2 gap-6">
                            
                            {/* Colonne gauche : Public & Objectifs */}
                            <div className="space-y-4">
                              <div>
                                <h4 className="text-base font-bold text-[#013F63] mb-2 flex items-center gap-2">
                                  <Users className={`w-4 h-4 ${textColor}`} />
                                  Public & Prérequis
                                </h4>
                                <p className="text-gray-700 leading-relaxed text-xs">{formation.public}</p>
                              </div>

                              <div>
                                <h4 className="text-base font-bold text-[#013F63] mb-2 flex items-center gap-2">
                                  <Target className={`w-4 h-4 ${textColor}`} />
                                  Objectifs pédagogiques
                                </h4>
                                <div className="space-y-1">
                                  {formation.objectifs.map((objectif, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                      <CheckCircle className={`w-3 h-3 ${textColor} flex-shrink-0 mt-0.5`} />
                                      <span className="text-gray-700 text-xs">{objectif}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Colonne droite : Programme */}
                            <div>
                              <h4 className="text-base font-bold text-[#013F63] mb-2 flex items-center gap-2">
                                <BookOpen className={`w-4 h-4 ${textColor}`} />
                                Programme
                              </h4>
                              <div className="space-y-2">
                                {formation.programme.map((jour, idx) => (
                                  <div key={idx} className={`${bgColor} ${borderColor} border rounded-lg p-2`}>
                                    <h5 className="font-semibold text-[#013F63] mb-1 text-xs">{jour.jour}</h5>
                                    <div className="space-y-1">
                                      {jour.contenu.map((item, itemIdx) => (
                                        <div key={itemIdx} className="flex items-start gap-1">
                                          <div className={`w-1 h-1 ${textColor.replace('text-', 'bg-')} rounded-full flex-shrink-0 mt-1`}></div>
                                          <span className="text-gray-700 text-xs leading-tight">{item}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Sessions */}
                          <div className="mt-4 pt-3 border-t border-gray-100">
                            <h4 className="text-base font-bold text-[#013F63] mb-2 flex items-center gap-2">
                              <Calendar className={`w-4 h-4 ${textColor}`} />
                              Prochaines sessions
                            </h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {formation.sessions.map((session, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-lg p-2 text-center">
                                  <span className="text-gray-700 font-medium text-xs">{session}</span>
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

        {/* Section Contact Simple */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">
                Intéressé(e) par nos formations professionnalisantes ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Une question ? Contactez-nous directement
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:0783019955" className="inline-flex text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
                  07 83 01 99 55
                </a>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold rounded-full transition">
                  Nous contacter
                </Link>
              </div>
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

      </div>
    </>
  )
} 