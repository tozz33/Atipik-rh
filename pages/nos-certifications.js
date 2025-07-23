import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Shield, Award, CheckCircle, Star, Users } from 'lucide-react'

export default function NosCertifications() {
  return (
    <>
      <Head>
        <title>Nos certifications | Atipik RH - Qualité et reconnaissance officielle</title>
        <meta name="description" content="Découvrez les certifications d'Atipik RH : Qualiopi, Formation & Handicap, CPF. Des agréments qui garantissent la qualité de nos formations." />
        <meta name="keywords" content="certifications Atipik RH, Qualiopi, CPF, Formation Handicap, organisme formation agréé" />
        <link rel="canonical" href="https://atipikrh.fr/nos-certifications" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-16"></div>

        {/* Introduction */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
                Nos <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">certifications</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-8">
                La qualité et la reconnaissance officielle<br className="hidden lg:block"/>
                <span className="text-orange-500 font-medium">au service de votre formation</span>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Nos certifications vous permettent de bénéficier des financements CPF, OPCO et autres dispositifs, 
                tout en vous assurant un accompagnement de qualité reconnu par les organismes officiels.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              <div className="grid md:grid-cols-3 gap-8">
                {/* Qualiopi */}
                <div className="text-center group h-full">
                  <div className="relative h-full">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300 h-full min-h-[400px] flex flex-col">
                      <div className="w-32 h-32 mb-6 relative flex items-center justify-center mx-auto">
                        <Image 
                          src="/images/certifications/qualiopi.png" 
                          alt="Logo Qualiopi"
                          width={140}
                          height={140}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#013F63] mb-4 text-center">Qualiopi</h3>
                      <p className="text-orange-600 font-medium mb-4 text-center">Certification qualité</p>
                      <div className="flex-grow">
                        <p className="text-gray-600 text-center leading-relaxed mb-6">
                          La certification Qualiopi atteste de la qualité de nos processus de formation. 
                          Elle garantit notre engagement dans l'amélioration continue de nos services.
                        </p>
                        
                        <div className="space-y-3 text-left">
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Gage de qualité reconnu par l'État</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Processus d'amélioration continue</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Suivi et évaluation des formations</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formation & Handicap */}
                <div className="text-center group h-full">
                  <div className="relative h-full">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300 h-full min-h-[400px] flex flex-col">
                      <div className="w-32 h-32 mb-6 relative flex items-center justify-center mx-auto">
                        <Image 
                          src="/images/certifications/formation-handicap.png" 
                          alt="Logo Formation & Handicap"
                          width={140}
                          height={140}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#013F63] mb-4 text-center">Formation & Handicap</h3>
                      <p className="text-blue-600 font-medium mb-4 text-center">Accessibilité et inclusion</p>
                      <div className="flex-grow">
                        <p className="text-gray-600 text-center leading-relaxed mb-6">
                          Notre engagement pour l'accessibilité de nos formations aux personnes en situation de handicap, 
                          avec des adaptations personnalisées.
                        </p>
                        
                        <div className="space-y-3 text-left">
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Formations adaptées aux besoins spécifiques</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Accompagnement personnalisé</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Locaux et méthodes accessibles</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mon Compte Formation */}
                <div className="text-center group h-full">
                  <div className="relative h-full">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-purple-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300 h-full min-h-[400px] flex flex-col">
                      <div className="w-32 h-32 mb-6 relative flex items-center justify-center mx-auto">
                        <Image 
                          src="/images/certifications/cpf.jpg" 
                          alt="Logo Mon Compte Formation"
                          width={140}
                          height={140}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#013F63] mb-4 text-center">Mon Compte Formation</h3>
                      <p className="text-purple-600 font-medium mb-4 text-center">Organisme référencé CPF</p>
                      <div className="flex-grow">
                        <p className="text-gray-600 text-center leading-relaxed mb-6">
                          Atipik RH est référencé sur Mon Compte Formation, vous permettant d'utiliser 
                          vos droits CPF pour financer votre formation.
                        </p>
                        
                        <div className="space-y-3 text-left">
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Formations finançables avec vos droits CPF</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Inscription directe en ligne</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">Organisme de formation certifié</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages des certifications */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Pourquoi ces <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">certifications</span> ?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Des garanties concrètes pour votre parcours de formation
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Qualité */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Qualité garantie</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Des standards élevés contrôlés et audités régulièrement
                  </p>
                </div>

                {/* Financement */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Financements possibles</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mobilisation de vos droits CPF, OPCO et autres dispositifs
                  </p>
                </div>

                {/* Reconnaissance */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Reconnaissance officielle</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Des certifications reconnues par les employeurs et l'État
                  </p>
                </div>

                {/* Accessibilité */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Accessibilité</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Formations ouvertes à tous, avec adaptations si nécessaire
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processus qualité */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Notre processus <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">qualité</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comment nous garantissons l'excellence de nos formations
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-blue-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#013F63] mb-2">Analyse des besoins</h3>
                        <p className="text-gray-600">Évaluation précise de vos objectifs et contraintes</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-orange-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#013F63] mb-2">Formation personnalisée</h3>
                        <p className="text-gray-600">Contenu et méthodes adaptés à votre profil</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-purple-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#013F63] mb-2">Suivi continu</h3>
                        <p className="text-gray-600">Accompagnement tout au long de votre parcours</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#013F63] mb-2">Évaluation et amélioration</h3>
                        <p className="text-gray-600">Mesure des résultats et amélioration continue</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Award className="w-16 h-16 text-[#013F63]" />
                      </div>
                    </div>
                    <p className="mt-6 text-lg font-medium text-[#013F63]">
                      Excellence<br />certifiée
                    </p>
                  </div>
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
                Prêt à bénéficier d'une <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">formation</span> certifiée ?
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Nos certifications vous garantissent une formation de qualité et des possibilités de financement
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                  Démarrer ma formation
                </Link>
                <Link href="/financement" className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                  Voir les financements
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