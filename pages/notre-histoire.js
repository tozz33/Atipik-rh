import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Calendar, MapPin, Award, Users, Star, Building, Lightbulb, Heart, Plus, GraduationCap } from 'lucide-react'

export default function NotreHistoire() {
  const [openCards, setOpenCards] = useState({})

  const toggleCard = (year) => {
    setOpenCards(prev => 
      prev[year] ? {} : { [year]: true }
    )
  }

  return (
    <>
      <Head>
        <title>Notre histoire | Atipik RH - 5 ans d'expertise en formation</title>
        <meta name="description" content="Découvrez l'histoire d'Atipik RH : 5 ans d'expertise en formation professionnelle, notre mission et nos valeurs qui nous guident au quotidien." />
        <meta name="keywords" content="histoire Atipik RH, centre formation Lormont, mission formation professionnelle, valeurs Atipik RH" />
        <link rel="canonical" href="https://atipikrh.fr/notre-histoire" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Introduction */}
        <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-4 leading-tight tracking-tight">
                Notre <span className="text-orange-500 font-brittany">histoire</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-4">
                Une aventure humaine née d'une conviction simple :<br/>
                <span className="text-orange-500 font-medium">chaque personne mérite un accompagnement sur mesure</span>
              </p>
            </div>
          </div>
        </section>

        {/* Timeline moderne */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
          
          {/* Éléments décoratifs en arrière-plan - identiques à la page bilan de compétences */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Timeline verticale */}
              <div className="relative" style={{height: '1200px'}}>
                {/* Ligne principale ondulée en SVG */}
                <div className="absolute left-0 top-0 w-full pointer-events-none" style={{height: '1200px'}}>
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="8" 
                              refX="9" refY="4" orient="auto">
                        <polygon points="0 0, 10 4, 0 8" fill="#FE6400" />
                      </marker>
                    </defs>
                    <path 
                      d="M 50 5
                         L 50 18
                         L 75 18
                         L 75 31
                         L 25 31
                         L 25 44
                         L 75 44
                         L 75 57
                         L 25 57
                         L 25 70
                         L 50 70
                         L 50 85" 
                      stroke="#FE6400" 
                      strokeWidth="7" 
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="drop-shadow-lg"
                      vectorEffect="non-scaling-stroke"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>
                </div>
                
                {/* Points de la timeline */}
                <div className="relative">
                  
                  {/* 2019 - Création */}
                  <div className="absolute w-full" style={{top: '60px'}}>
                    <div className="absolute text-3xl font-bold text-[#013F63]" style={{left: '50%', top: '-45px', transform: 'translateX(-50%)'}}>
                      2019
                    </div>
                    <button 
                      onClick={() => toggleCard('2019')}
                      className="absolute w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-all duration-300 z-10 flex items-center justify-center cursor-pointer" 
                      style={{left: '50%', top: '0px', transform: 'translateX(-50%)'}}
                    >
                      <Plus className="w-4 h-4 text-white transform transition-transform duration-300" style={{rotate: openCards['2019'] ? '45deg' : '0deg'}} />
                    </button>
                    {/* Logo Atipik RH */}
                    <div className="absolute" style={{left: '50%', top: '50px', transform: 'translateX(-50%)'}}>
                      <div className="bg-white rounded-full p-4 shadow-lg border border-gray-100">
                        <Image
                          src="/images/logos/atipik-logo.png"
                          alt="Logo Atipik RH - Création 2019"
                          width={80}
                          height={27}
                          className="h-8 w-auto"
                        />
                      </div>
                    </div>
                    {openCards['2019'] && (
                      <div className="ml-8 md:ml-16 lg:ml-24 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 animate-in slide-in-from-left-4 fade-in max-w-2xl mt-12 relative z-20">
                        <div className="flex items-center mb-4">
                          <span className="text-4xl font-brittany text-orange-500 mr-4">2019</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#013F63] mb-4">Création d'ATIPIK RH</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Tout commence par une <strong className="text-blue-600">conviction profonde</strong> : 
                          l'évolution professionnelle ne peut se faire sans un accompagnement humain et personnalisé.
                        </p>
                        <div className="bg-orange-50 rounded-2xl p-4">
                          <p className="text-sm text-orange-700 font-medium">
                            Installation quartier "Bas Carriet" à Lormont
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2020 - Datadock */}
                  <div className="absolute w-full" style={{top: '216px'}}>
                    <div className="absolute text-3xl font-bold text-[#013F63]" style={{left: '75%', top: '-45px', transform: 'translateX(-50%)'}}>
                      2020
                    </div>
                    <button 
                      onClick={() => toggleCard('2020')}
                      className="absolute w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-all duration-300 z-10 flex items-center justify-center cursor-pointer" 
                      style={{left: 'calc(75% - 16px)', top: '0px'}}
                    >
                      <Plus className="w-4 h-4 text-white transform transition-transform duration-300" style={{rotate: openCards['2020'] ? '45deg' : '0deg'}} />
                    </button>
                    {/* Logo Datadock */}
                    <div className="absolute" style={{left: 'calc(75% - 16px)', top: '50px', transform: 'translateX(-50%)'}}>
                      <div className="bg-white rounded-full p-4 shadow-lg border border-gray-100">
                        <Image
                          src="/images/certifications/datadock.png"
                          alt="Logo Datadock - Certification 2020"
                          width={60}
                          height={60}
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                    </div>
                    {openCards['2020'] && (
                      <div className="ml-auto mr-8 md:mr-16 lg:mr-24 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 animate-in slide-in-from-right-4 fade-in max-w-2xl mt-12 relative z-20">
                        <div className="flex items-center mb-4">
                          <span className="text-4xl font-brittany text-blue-500 mr-4">2020</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#013F63] mb-4">Obtention du Datadock</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Une étape fondamentale qui marque notre engagement vers <strong className="text-blue-600">l'excellence</strong>. 
                          Le Datadock nous ouvre les portes d'une reconnaissance officielle de notre qualité.
                        </p>
                        <div className="bg-blue-50 rounded-2xl p-4">
                          <p className="text-sm text-blue-700 font-medium">
                            Eva Sael rejoint l'équipe en apprentissage (Octobre)
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2021 - Qualiopi */}
                  <div className="absolute w-full" style={{top: '372px'}}>
                    <div className="absolute text-3xl font-bold text-[#013F63]" style={{left: '25%', top: '-45px', transform: 'translateX(-50%)'}}>
                      2021
                    </div>
                    <button 
                      onClick={() => toggleCard('2021')}
                      className="absolute w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-all duration-300 z-10 flex items-center justify-center cursor-pointer" 
                      style={{left: 'calc(25% - 16px)', top: '0px'}}
                    >
                      <Plus className="w-4 h-4 text-white transform transition-transform duration-300" style={{rotate: openCards['2021'] ? '45deg' : '0deg'}} />
                    </button>
                    {/* Logo Qualiopi */}
                    <div className="absolute" style={{left: 'calc(25% - 16px)', top: '50px', transform: 'translateX(-50%)'}}>
                      <div className="bg-white rounded-full p-4 shadow-lg border border-gray-100">
                        <Image
                          src="/images/certifications/qualiopi.png"
                          alt="Logo Qualiopi - Certification 2021"
                          width={60}
                          height={60}
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                    </div>
                    {openCards['2021'] && (
                      <div className="ml-8 md:ml-16 lg:ml-24 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 animate-in slide-in-from-left-4 fade-in max-w-2xl mt-12 relative z-20">
                        <div className="flex items-center mb-4">
                          <span className="text-4xl font-brittany text-purple-500 mr-4">2021</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#013F63] mb-4">Certification Qualiopi</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Une reconnaissance majeure ! Nous obtenons la certification Qualiopi pour les catégories 
                          <strong className="text-purple-600"> Bilan de compétences, VAE et actions de formations</strong>.
                        </p>
                        <div className="bg-purple-50 rounded-2xl p-4">
                          <p className="text-sm text-purple-700 font-medium">
                            Gage de qualité qui confirme notre excellence pédagogique
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2022 - Expansion */}
                  <div className="absolute w-full" style={{top: '528px'}}>
                    <div className="absolute text-3xl font-bold text-[#013F63]" style={{left: '75%', top: '-45px', transform: 'translateX(-50%)'}}>
                      2022
                    </div>
                    <button 
                      onClick={() => toggleCard('2022')}
                      className="absolute w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-all duration-300 z-10 flex items-center justify-center cursor-pointer" 
                      style={{left: 'calc(75% - 16px)', top: '0px'}}
                    >
                      <Plus className="w-4 h-4 text-white transform transition-transform duration-300" style={{rotate: openCards['2022'] ? '45deg' : '0deg'}} />
                    </button>
                    {/* Logo CPF/Formation */}
                    <div className="absolute" style={{left: 'calc(75% - 16px)', top: '50px', transform: 'translateX(-50%)'}}>
                      <div className="bg-white rounded-full p-4 shadow-lg border border-gray-100">
                        <Image
                          src="/images/certifications/cpf.jpg"
                          alt="Logo CPF - Agrément CIP 2022"
                          width={60}
                          height={60}
                          className="h-12 w-12 object-contain rounded"
                        />
                      </div>
                    </div>
                    {openCards['2022'] && (
                      <div className="ml-auto mr-8 md:mr-16 lg:mr-24 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 animate-in slide-in-from-right-4 fade-in max-w-2xl mt-12 relative z-20">
                        <div className="flex items-center mb-4">
                          <span className="text-4xl font-brittany text-green-500 mr-4">2022</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#013F63] mb-4">Année charnière</h3>
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div className="bg-green-50 rounded-xl p-4 text-center">
                            <Calendar className="w-6 h-6 text-green-600 mx-auto mb-2" />
                            <p className="text-xs font-medium text-green-700">Fév. Clara Brousseau</p>
                          </div>
                          <div className="bg-green-50 rounded-xl p-4 text-center">
                            <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
                            <p className="text-xs font-medium text-green-700">Juil. Agrément CIP</p>
                          </div>
                          <div className="bg-green-50 rounded-xl p-4 text-center">
                            <Building className="w-6 h-6 text-green-600 mx-auto mb-2" />
                            <p className="text-xs font-medium text-green-700">Déc. Équipe pédago</p>
                          </div>
                        </div>
                        <div className="bg-green-50 rounded-2xl p-4">
                          <p className="text-sm text-green-700 font-medium">
                            Première Formation CIP sur la Métropole
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2023 - Premiers pas */}
                  <div className="absolute w-full" style={{top: '684px'}}>
                    <div className="absolute text-3xl font-bold text-[#013F63]" style={{left: '25%', top: '-45px', transform: 'translateX(-50%)'}}>
                      2023
                    </div>
                    <button 
                      onClick={() => toggleCard('2023')}
                      className="absolute w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-all duration-300 z-10 flex items-center justify-center cursor-pointer" 
                      style={{left: 'calc(25% - 16px)', top: '0px'}}
                    >
                      <Plus className="w-4 h-4 text-white transform transition-transform duration-300" style={{rotate: openCards['2023'] ? '45deg' : '0deg'}} />
                    </button>
                    {/* Logo Formation */}
                    <div className="absolute" style={{left: 'calc(25% - 16px)', top: '50px', transform: 'translateX(-50%)'}}>
                      <div className="bg-white rounded-full p-4 shadow-lg border border-gray-100">
                        <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-teal-600" />
                        </div>
                      </div>
                    </div>
                    {openCards['2023'] && (
                      <div className="ml-8 md:ml-16 lg:ml-24 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 animate-in slide-in-from-left-4 fade-in max-w-2xl mt-12 relative z-20">
                        <div className="flex items-center mb-4">
                          <span className="text-4xl font-brittany text-teal-500 mr-4">2023</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#013F63] mb-4">Concrétisation</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="flex items-start mb-3">
                              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></div>
                              <p className="text-sm text-gray-700"><strong>Jan.</strong> Ulrica en communication</p>
                            </div>
                            <div className="flex items-start mb-3">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                              <p className="text-sm text-gray-700"><strong>Oct.</strong> Session annulée (apprentissage)</p>
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-4 text-center">
                            <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <p className="text-sm font-medium text-green-700">Sept. 1ère session CIP réussie</p>
                            <p className="text-xs text-green-600">10 apprenants</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2024 - Consolidation */}
                  <div className="absolute w-full" style={{top: '840px'}}>
                    <div className="absolute text-3xl font-bold text-[#013F63]" style={{left: '50%', top: '-45px', transform: 'translateX(-50%)'}}>
                      2024
                    </div>
                    <button 
                      onClick={() => toggleCard('2024')}
                      className="absolute w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full border-4 border-white shadow-lg hover:scale-125 transition-all duration-300 z-10 flex items-center justify-center cursor-pointer" 
                      style={{left: '50%', top: '0px', transform: 'translateX(-50%)'}}
                    >
                      <Plus className="w-4 h-4 text-white transform transition-transform duration-300" style={{rotate: openCards['2024'] ? '45deg' : '0deg'}} />
                    </button>
                    {/* Logo Handiaccueillant */}
                    <div className="absolute" style={{left: '50%', top: '50px', transform: 'translateX(-50%)'}}>
                      <div className="bg-white rounded-full p-4 shadow-lg border border-gray-100">
                        <Image
                          src="/images/certifications/formation-handicap.png"
                          alt="Logo Handiaccueillant - Accessibilité 2024"
                          width={60}
                          height={60}
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                    </div>
                    {openCards['2024'] && (
                      <div className="ml-auto mr-8 md:mr-16 lg:mr-24 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 animate-in slide-in-from-right-4 fade-in max-w-2xl mt-12 relative z-20">
                        <div className="flex items-center mb-4">
                          <span className="text-4xl font-brittany bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mr-4">2024</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#013F63] mb-4">Consolidation & croissance</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-3">
                            <div className="flex items-center bg-orange-50 rounded-lg p-3">
                              <Calendar className="w-5 h-5 text-orange-500 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-800">Jan. Handiaccueillant</p>
                                <p className="text-xs text-gray-600">Démarche accessibilité</p>
                              </div>
                            </div>
                            <div className="flex items-center bg-blue-50 rounded-lg p-3">
                              <Award className="w-5 h-5 text-blue-500 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-800">Fév. Qualiopi renouvelé</p>
                                <p className="text-xs text-gray-600">3 ans de plus</p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center bg-green-50 rounded-lg p-3">
                              <Building className="w-5 h-5 text-green-500 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-800">Avr. Nouveau local</p>
                                <p className="text-xs text-gray-600">Rue du Courant</p>
                              </div>
                            </div>
                            <div className="flex items-center bg-purple-50 rounded-lg p-3">
                              <Users className="w-5 h-5 text-purple-500 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-800">Sept. 2ème session CIP</p>
                                <p className="text-xs text-gray-600">Nouvelle promotion</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aujourd'hui */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-8">
                <span className="text-orange-500 font-brittany">Aujourd'hui</span>...
              </h2>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                ...Atipik RH est devenu un acteur reconnu de la formation professionnelle 
                sur la métropole bordelaise. Nous accompagnons chaque année des dizaines de personnes 
                dans leur projet de <strong className="text-orange-500">reconversion</strong>, de <strong className="text-orange-500">VAE</strong> ou de <strong className="text-orange-500">montée en compétences</strong>.
              </p>
              
                             <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 text-center">
                  <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#013F63] mb-2">5 ans</h3>
                  <p className="text-gray-600">d'accompagnement bienveillant</p>
                </div>
                <div className="p-6 text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#013F63] mb-2">500+</h3>
                  <p className="text-gray-600">personnes accompagnées</p>
                </div>
                <div className="p-6 text-center">
                  <Lightbulb className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#013F63] mb-2">Innovation</h3>
                  <p className="text-gray-600">pédagogique continue</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                Prêt à <span className="text-orange-500 font-brittany">écrire</span> votre histoire ?
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Rejoignez les 500+ personnes qui ont fait confiance à Atipik RH pour transformer leur avenir professionnel
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                  Parlons de votre projet
                </Link>
                <Link href="/notre-equipe" className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                  Rencontrer l'équipe
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />

      </div>
    </>
  )
} 