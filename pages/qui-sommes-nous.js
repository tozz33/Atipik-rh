import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Users, Target, Award, MapPin, Clock, Shield, CheckCircle, Heart, Lightbulb, Trophy } from 'lucide-react'

export default function QuiSommesNous() {
  return (
    <>
      <Head>
        <title>Qui sommes-nous ? - Atipik RH | Centre de formation à Lormont</title>
        <meta name="description" content="Découvrez Atipik RH : 15 ans d'expertise en formation professionnelle, bilan de compétences et VAE à Lormont. Notre mission, nos valeurs, notre équipe." />
        <meta name="keywords" content="Atipik RH équipe, centre formation Lormont, histoire Atipik RH, mission formation, valeurs RH" />
        <link rel="canonical" href="https://atipikrh.fr/qui-sommes-nous" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-16"></div>

        {/* Hero Section moderne avec background animé */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          {/* Background animé */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          
          <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                L'histoire d'<span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Atipik RH</span><br/>
                <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">15 ans</span> à vos côtés
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                Plus qu'un centre de formation,<br className="hidden lg:block"/>
                <span className="text-orange-500 font-medium">une équipe humaine qui croit en votre potentiel</span>
              </p>
            </div>
          </div>
        </section>

        {/* Notre histoire - Style storytelling */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Notre <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">histoire</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Une aventure humaine née d'une conviction simple : chaque personne mérite un accompagnement sur mesure
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-30"></div>
                  <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
                    <div className="flex items-center mb-6">
                      <Clock className="w-8 h-8 text-orange-500 mr-4" />
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">2009 - Les débuts</h3>
                    </div>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                      <p>
                        Tout commence par une <strong className="text-blue-600">conviction profonde</strong> : 
                        l'évolution professionnelle ne peut se faire sans un accompagnement humain et personnalisé.
                      </p>
                      <p>
                        Installés au cœur de <strong className="text-orange-500">Lormont</strong>, nous créons Atipik RH 
                        avec l'ambition de révolutionner l'approche de la formation continue.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-lg opacity-30"></div>
                  <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
                    <div className="flex items-center mb-6">
                      <Trophy className="w-8 h-8 text-blue-600 mr-4" />
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Aujourd'hui</h3>
                    </div>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                      <p>
                        15 ans plus tard, nous avons accompagné plus de <strong className="text-orange-500">500 personnes</strong> 
                        dans leur projet de reconversion, VAE ou montée en compétences.
                      </p>
                      <p>
                        Notre secret ? Une approche <strong className="text-blue-600">bienveillante</strong> et 
                        <strong className="text-blue-600"> sur mesure</strong> qui fait toute la différence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre mission - Style moderne */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Notre <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">mission</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Accompagner chaque personne dans la construction et la réalisation de son projet professionnel, 
                  en offrant des solutions personnalisées et des formations de qualité
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-10 h-10 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Accompagnement personnalisé</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous croyons en l'unicité de chaque parcours professionnel et adaptons nos méthodes 
                    à vos besoins spécifiques.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-10 h-10 text-orange-500" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Excellence pédagogique</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nos formations sont conçues par des experts et constamment mises à jour pour 
                    répondre aux exigences du marché.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-green-300 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Proximité humaine</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Notre équipe vous accompagne avec bienveillance et professionnalisme tout au long 
                    de votre parcours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos valeurs - Design moderne avec cartes */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
          {/* Éléments décoratifs */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-1000"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Nos <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">valeurs</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Les principes qui guident notre action au quotidien
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <Heart className="w-8 h-8 text-blue-600 mr-4" />
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Bienveillance</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Nous créons un environnement de confiance où chacun peut s'exprimer librement 
                      et progresser à son rythme.
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <Shield className="w-8 h-8 text-orange-500 mr-4" />
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Professionnalisme</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Notre expertise et notre rigueur garantissent la qualité de nos accompagnements 
                      et de nos formations.
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-green-300 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <Lightbulb className="w-8 h-8 text-green-600 mr-4" />
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Innovation</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Nous intégrons les dernières méthodes pédagogiques et outils digitaux pour 
                      optimiser votre apprentissage.
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-purple-300 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <Trophy className="w-8 h-8 text-purple-600 mr-4" />
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Résultats</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Votre réussite est notre priorité. Nous nous engageons à tout mettre en œuvre 
                      pour atteindre vos objectifs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications - Style moderne */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Nos <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">certifications</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Des agréments qui garantissent la qualité de nos formations et vous permettent 
                  de bénéficier des financements CPF, OPCO et autres dispositifs
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group h-full">
                  <div className="relative h-full">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300 h-full min-h-[280px] flex flex-col justify-center items-center">
                      <div className="w-32 h-32 mb-6 relative flex items-center justify-center">
                        <Image 
                          src="/images/certifications/qualiopi.png" 
                          alt="Logo Qualiopi"
                          width={140}
                          height={140}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Qualiopi</h3>
                      <p className="text-gray-600 text-center leading-relaxed">Certification qualité des actions de formation</p>
                    </div>
                  </div>
                </div>

                <div className="text-center group h-full">
                  <div className="relative h-full">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300 h-full min-h-[280px] flex flex-col justify-center items-center">
                      <div className="w-32 h-32 mb-6 relative flex items-center justify-center">
                        <Image 
                          src="/images/certifications/formation-handicap.png" 
                          alt="Logo Formation & Handicap"
                          width={140}
                          height={140}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Formation & Handicap</h3>
                      <p className="text-gray-600 text-center leading-relaxed">Formations adaptées aux personnes en situation de handicap</p>
                    </div>
                  </div>
                </div>

                <div className="text-center group h-full">
                  <div className="relative h-full">
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-green-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300 h-full min-h-[280px] flex flex-col justify-center items-center">
                      <div className="w-32 h-32 mb-6 relative flex items-center justify-center">
                        <Image 
                          src="/images/certifications/cpf.jpg" 
                          alt="Logo Mon Compte Formation"
                          width={140}
                          height={140}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Mon Compte Formation</h3>
                      <p className="text-gray-600 text-center leading-relaxed">Organisme référencé CPF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action final */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                Prêt à commencer votre <span className="text-orange-500 font-brittany text-5xl lg:text-7xl">transformation</span> ?
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-12">
                Rencontrons-nous pour échanger sur vos objectifs<br className="hidden lg:block"/>
                <span className="text-gray-500">et découvrir comment nous pouvons vous accompagner</span>
              </p>
              
              <div className="space-y-6">
                <Link href="/contact" className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg">
                  Premier entretien gratuit
                </Link>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                  <span>• Sans engagement</span>
                  <span>• Réponse sous 24h</span>
                  <span>• À distance ou en présentiel</span>
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