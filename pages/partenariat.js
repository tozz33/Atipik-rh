import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CheckCircle } from 'lucide-react'

export default function Partenariat() {
  return (
    <>
      <Head>
        <title>Partenariat | Atipik RH - Réseau d'entreprises engagées</title>
        <meta name="description" content="Découvrez nos partenariats : Les Entreprises s'Engagent et Club d'Entreprise Bassens. Un réseau d'entreprises dynamique et inclusif." />
        <meta name="keywords" content="partenariat Atipik RH, les entreprises engagent, club entreprise bassens, réseau entreprises" />
        <link rel="canonical" href="https://atipikrh.fr/partenariat" />
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

          {/* Introduction */}
          <section className="relative py-16 overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 pt-8 pb-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight tracking-tight">
                  Nos <span className="text-orange-500 font-brittany font-black">Partenariats</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                  Un écosystème d'entreprises engagées<br className="hidden lg:block"/>
                  <span className="text-orange-500 font-medium">pour votre réussite professionnelle</span>
                </p>
              </div>
            </div>
          </section>

          {/* Nos entreprises s'engagent */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  <div className="text-center lg:text-left lg:pl-12">
                    <div className="text-center lg:text-left mb-8">
                      <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">
                        Partenariats <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">d'excellence</span>
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
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="text-center">
                    <div className="rounded-2xl p-12 shadow-lg">
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
                      Club d'entreprise <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Bassens</span>
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

          {/* Avantages des partenariats */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                    Pourquoi ces <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">partenariats ?</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Des opportunités concrètes pour votre développement professionnel
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                  
                  {/* Réseau */}
                  <div className="text-center group flex flex-col justify-center pt-8">
                    <h3 className="text-xl font-bold text-[#013F63] mb-4">Réseau étendu</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Accès à un large réseau d'entreprises locales et nationales
                    </p>
                  </div>

                  {/* Opportunités */}
                  <div className="text-center group flex flex-col justify-center pt-8">
                    <h3 className="text-xl font-bold text-[#013F63] mb-4">Opportunités d'emploi</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Connexions directes avec les employeurs du territoire
                    </p>
                  </div>

                  {/* Innovation */}
                  <div className="text-center group flex flex-col justify-center pt-8">
                    <h3 className="text-xl font-bold text-[#013F63] mb-4">Innovation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Méthodes de formation adaptées aux besoins du marché
                    </p>
                  </div>

                  {/* Engagement */}
                  <div className="text-center group flex flex-col justify-center pt-8">
                    <h3 className="text-xl font-bold text-[#013F63] mb-4">Engagement social</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Participation active au développement économique local
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Rejoignez notre <span className="text-orange-500 font-brittany text-5xl lg:text-6xl whitespace-nowrap">écosystème ?</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                  Profitez de notre réseau d'entreprises partenaires pour développer votre carrière
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-base hover:scale-105">
                    Nous contacter
                  </Link>
                  <Link href="/formations" className="inline-flex px-6 py-3 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition text-base">
                    Voir nos formations
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  )
}
