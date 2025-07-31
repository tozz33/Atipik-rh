import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Shield, Award, CheckCircle, Star, Users } from 'lucide-react'

export default function CertificationAccessibilite() {
  return (
    <>
      <Head>
        <title>Certification & Accessibilité | Atipik RH - Qualité et inclusion</title>
        <meta name="description" content="Découvrez nos certifications et notre engagement pour l'accessibilité : Qualiopi, Formation & Handicap, CPF. Une formation inclusive et de qualité." />
        <meta name="keywords" content="certification accessibilité Atipik RH, Qualiopi, CPF, Formation Handicap, inclusion, organisme formation agréé" />
        <link rel="canonical" href="https://atipikrh.fr/certification-accessibilite" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-20"></div>

                {/* Introduction */}
        <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight tracking-tight">
                Certification <span className="text-orange-500 font-brittany font-black">& Accessibilité</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                La qualité et la reconnaissance officielle<br className="hidden lg:block"/>
                <span className="text-orange-500 font-medium">au service de votre formation</span>
              </p>
            </div>
          </div>
        </section>

        {/* Certification Qualiopi */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="text-center lg:text-left lg:pl-12">
                  <div className="text-center lg:text-left mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">
                      Certification <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">qualité</span>
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    La certification Qualiopi atteste de la qualité de nos processus de formation selon un référentiel national unique. 
                    Elle garantit notre engagement dans l'amélioration continue de nos services et notre conformité aux exigences 
                    les plus strictes en matière de formation professionnelle.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Gage de qualité reconnu par l'État</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Processus d'amélioration continue</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Suivi et évaluation des formations</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Satisfaction des apprenants contrôlée</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="w-full h-60 flex items-center justify-center">
                    <Image 
                      src="/images/certifications/qualiopi.png" 
                      alt="Logo Qualiopi"
                      width={300}
                      height={300}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="mt-6 flex justify-center">
                    <ul className="text-gray-700 text-sm space-y-2 text-left">
                      <li>- ACTIONS DE FORMATIONS</li>
                      <li>- BILAN DE COMPÉTENCES</li>
                      <li>- ACTIONS PERMETTANT DE VALIDER LES ACQUIS D'EXPERIENCE</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formation & Handicap */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-center order-2 lg:order-1">
                  <div className="w-full h-60 flex items-center justify-center">
                    <Image 
                      src="/images/certifications/formation-handicap.png" 
                      alt="Logo Formation & Handicap"
                      width={300}
                      height={300}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                
                <div className="text-center lg:text-left order-1 lg:order-2">
                                      <div className="text-center lg:text-left mb-8">
                      <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">
                        Handi<span className="text-orange-500 font-brittany text-3xl lg:text-4xl">accueillant</span>
                      </h2>
                    </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Notre engagement pour l'accessibilité va au-delà des obligations légales. Nous mettons tout en œuvre 
                    pour adapter nos formations aux personnes en situation de handicap, avec des méthodes pédagogiques 
                    flexibles et un accompagnement individualisé.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Formations adaptées aux besoins spécifiques</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Accompagnement personnalisé</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Locaux et méthodes accessibles</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Partenariat avec Cap Emploi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mon Compte Formation - Supprimé car plus dans le footer */}

        {/* Nos entreprises s'engagent */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="text-center lg:text-left lg:pl-12">
                  <div className="text-center lg:text-left mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">
                      Partenariats <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">d'excellence</span>
                    </h2>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Nos entreprises partenaires s'engagent à nos côtés pour promouvoir la formation professionnelle 
                    et l'accompagnement des talents. Ensemble, nous construisons un écosystème local dynamique 
                    et inclusif.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Réseau d'entreprises engagées</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Soutien aux formations qualifiantes</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Accompagnement personnalisé</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Développement des compétences</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-full h-60 flex items-center justify-center">
                    <Image
                      src="/images/certifications/les-entreprises-engagent.png"
                      alt="Nos entreprises s'engagent"
                      width={300}
                      height={300}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Club d'entreprise Bassens */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-center">
                  <div className="bg-gray-50 rounded-2xl p-12 shadow-lg">
                    <Image
                      src="/images/certifications/Club entreprise de bassens.jpg"
                      alt="Logo Club d'Entreprise Bassens"
                      width={300}
                      height={200}
                      className="object-contain w-full h-40 mx-auto"
                    />
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">
                    Club d'entreprise <span className="text-orange-500 font-brittany text-3xl lg:text-4xl">Bassens</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Atipik RH est fière de faire partie du Club d'Entreprise de Bassens, 
                    un réseau dynamique qui favorise les échanges et les collaborations 
                    entre les entreprises locales.
                  </p>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Réseau d'entrepreneurs engagés</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Développement économique local</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Partenariats et collaborations</span>
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
                  Pourquoi ces <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">certifications ?</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Des garanties concrètes pour votre parcours de formation
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                
                {/* Qualité */}
                <div className="text-center group flex flex-col justify-center pt-8">
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Qualité garantie</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Des standards élevés contrôlés et audités régulièrement
                  </p>
                </div>

                {/* Financement */}
                <div className="text-center group flex flex-col justify-center pt-8">
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Financements possibles</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mobilisation de vos droits CPF, OPCO et autres dispositifs
                  </p>
                </div>

                {/* Reconnaissance */}
                <div className="text-center group flex flex-col justify-center pt-8">
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Reconnaissance officielle</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Des certifications reconnues par les employeurs et l'État
                  </p>
                </div>

                {/* Accessibilité */}
                <div className="text-center group flex flex-col justify-center pt-8">
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Accessibilité</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Formations ouvertes à tous, avec adaptations si nécessaire
                  </p>
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
                Prêt à bénéficier d'une <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">formation certifiée ?</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Nos certifications vous garantissent une formation de qualité et des possibilités de financement
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-base hover:scale-105">
                  Démarrer ma formation
                </Link>
                <Link href="/financement" className="inline-flex px-6 py-3 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-base">
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