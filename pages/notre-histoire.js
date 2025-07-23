import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Users, Award, Star, Target, Shield, Heart, Lightbulb, Trophy, Clock } from 'lucide-react'

export default function NotreHistoire() {
  return (
    <>
      <Head>
        <title>Notre histoire | Atipik RH - 15 ans d'expertise en formation</title>
        <meta name="description" content="Découvrez l'histoire d'Atipik RH : 15 ans d'expertise en formation professionnelle, notre mission et nos valeurs qui nous guident au quotidien." />
        <meta name="keywords" content="histoire Atipik RH, centre formation Lormont, mission formation professionnelle, valeurs Atipik RH" />
        <link rel="canonical" href="https://atipikrh.fr/notre-histoire" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-16"></div>

        {/* Notre histoire */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h1 className="text-4xl lg:text-6xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
                  L'histoire d'<span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Atipik RH</span><br/>
                  <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">15 ans</span> à vos côtés
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-6">
                  Plus qu'un centre de formation,<br className="hidden lg:block"/>
                  <span className="text-orange-500 font-medium">une équipe humaine qui croit en votre potentiel</span>
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Une aventure humaine née d'une conviction simple : chaque personne mérite un accompagnement sur mesure
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-30"></div>
                  <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
                    <div className="flex items-center mb-6">
                      <Clock className="w-8 h-8 text-orange-500 mr-4" />
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#013F63]">2009 - Les débuts</h3>
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#013F63]">Aujourd'hui</h3>
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

        {/* Notre mission */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight">
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
                  <h3 className="text-xl lg:text-2xl font-bold text-[#013F63] mb-4">Accompagnement personnalisé</h3>
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
                  <h3 className="text-xl lg:text-2xl font-bold text-[#013F63] mb-4">Excellence pédagogique</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nos formations sont conçues par des experts et constamment mises à jour pour 
                    répondre aux exigences du marché.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#013F63] mb-4">Proximité humaine</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Notre équipe vous accompagne avec bienveillance et professionnalisme tout au long 
                    de votre parcours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Nos <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">valeurs</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Ce qui nous guide au quotidien dans notre mission d'accompagnement
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Bienveillance */}
                <div className="bg-blue-50 rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-4">Bienveillance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous accompagnons chaque personne avec empathie et respect, 
                    en créant un environnement de confiance propice à l'épanouissement.
                  </p>
                </div>

                {/* Excellence */}
                <div className="bg-orange-50 rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-4">Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous nous engageons à offrir des formations de qualité supérieure 
                    et un accompagnement personnalisé adapté à chaque profil.
                  </p>
                </div>

                {/* Innovation */}
                <div className="bg-purple-50 rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-4">Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous adaptons constamment nos méthodes pédagogiques aux évolutions 
                    du marché du travail et aux besoins des apprenants.
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
                Prêt à <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">écrire</span> votre histoire ?
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