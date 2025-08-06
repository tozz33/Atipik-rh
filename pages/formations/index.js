import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  Clock, 
  Users, 
  Award, 
  ArrowRight
} from 'lucide-react'

export default function FormationsIndex() {
  return (
    <>
      <Head>
        <title>Formations professionnelles à Bordeaux - Certifiantes & Professionnalisantes | Atipik RH</title>
        <meta name="description" content="Formations certifiantes (CIP, FPA) et formations courtes professionnalisantes à Bordeaux. Toutes nos formations sont éligibles au CPF. Centre de formation à Lormont." />
        <meta name="keywords" content="formations Bordeaux, CIP, FPA, formations courtes professionnalisantes, CPF, Lormont, formation professionnelle" />
        <link rel="canonical" href="https://atipikrh.fr/formations" />
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
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight tracking-tight">
                  Nos <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Formations</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                  Développez vos compétences avec nos formations<br className="hidden lg:block"/>
                  <span className="text-orange-500 font-medium">adaptées à vos objectifs professionnels</span>
                </p>
              </div>
            </div>
          </section>

          {/* Nos 3 Formations */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                
                <div className="grid lg:grid-cols-3 gap-8">
                  
                  {/* Formation CIP */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <p className="text-sm text-orange-500 mb-2 font-bold">Formation</p>
                      <h3 className="text-xl font-bold text-[#013F63] mb-6">
                        CONSEILLER EN INSERTION PROFESSIONNELLE
                      </h3>
                      
                      <div className="space-y-3 mb-8 text-sm text-gray-600">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>8 mois</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>10-15 personnes</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>Niveau 5 (Bac+2)</span>
                        </div>
                      </div>
                      
                      <Link href="/formations/cip" className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group">
                        Découvrir
                        <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Formation FPA */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <p className="text-sm text-orange-500 mb-2 font-bold">Formation</p>
                      <h3 className="text-xl font-bold text-[#013F63] mb-6">
                        FORMATEUR PROFESSIONNEL D'ADULTES
                      </h3>
                      
                      <div className="space-y-3 mb-8 text-sm text-gray-600">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>6 mois</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>8-12 personnes</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>Niveau 5 (Bac+2)</span>
                        </div>
                      </div>
                      
                      <Link href="/formations/fpa" className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group">
                        Découvrir
                        <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Formations courtes professionnalisantes */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <p className="text-sm text-orange-500 mb-2 font-bold">Formation</p>
                      <h3 className="text-xl font-bold text-[#013F63] mb-6">
                        FORMATIONS PROFESSIONNALISANTES
                      </h3>
                      
                      <div className="space-y-3 mb-8 text-sm text-gray-600">
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>2 jours (14h)</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>10-12 personnes</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>Attestation</span>
                        </div>
                      </div>
                      
                      <Link href="/formations/courtes-professionnalisantes" className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition group">
                        Découvrir
                        <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
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

          <Footer />
        </div>

      </div>
    </>
  )
} 