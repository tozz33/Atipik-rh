import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Award, Clock, Users, Target, CheckCircle } from 'lucide-react'

export default function FormationFPA() {
  return (
    <>
      <Head>
        <title>Formation FPA - Formateur Professionnel d'Adultes | Atipik RH</title>
        <meta name="description" content="Formation Formateur Professionnel d'Adultes (FPA) à Bordeaux. Devenez formateur certifié avec notre accompagnement expert. Financement CPF possible." />
        <meta name="keywords" content="formation FPA, formateur professionnel adultes, certification formateur, formation professionnelle, CPF" />
        <link rel="canonical" href="https://atipikrh.fr/formations/fpa" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-16"></div>

        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          
          <div className="relative z-10 container mx-auto px-4 pt-8 pb-8">
            <div className="text-center mb-8 max-w-5xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
                Formation <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">FPA</span><br/>
                Formateur Professionnel d'<span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Adultes</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-8">
                Devenez formateur certifié et accompagnez la montée en compétences<br className="hidden lg:block"/>
                <span className="text-blue-600 font-medium">Formation éligible CPF - Certification RNCP</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                  Informations et inscription
                </Link>
                <Link href="/financement" className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                  Financement CPF
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Informations clés */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Une formation <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">complète</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Acquérez toutes les compétences pour concevoir, animer et évaluer des formations professionnelles
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-10 h-10 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#013F63] mb-4">600 heures</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Formation complète répartie sur 8 mois, alternant théorie et pratique
                  </p>
                </div>

                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-10 h-10 text-orange-500" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#013F63] mb-4">Titre RNCP</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Certification reconnue par l'État, niveau 5 (Bac+2)
                  </p>
                </div>

                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-10 h-10 text-[#013F63]" />
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#013F63] mb-4">Accompagnement</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Suivi individualisé par des formateurs experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme de formation */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Programme de <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">formation</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Un cursus structuré en 2 blocs de compétences complémentaires
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Bloc 1 */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#013F63]">Bloc 1 - Concevoir et préparer la formation</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Élaborer la progression pédagogique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Concevoir un scénario pédagogique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Concevoir les activités d'apprentissage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Concevoir les modalités d'évaluation</span>
                    </li>
                  </ul>
                </div>

                {/* Bloc 2 */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#013F63]">Bloc 2 - Animer et évaluer</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Animer une formation et faciliter les apprentissages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Évaluer les acquis de formation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Accompagner les apprenants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Inscrire sa pratique dans une démarche qualité</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#013F63]">
                Prêt(e) à devenir formateur professionnel ?
              </h2>
              <p className="text-xl mb-12 leading-relaxed text-gray-600">
                Rejoignez une profession en pleine expansion et participez au développement 
                des compétences de demain
              </p>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-12">
                <h3 className="text-2xl font-bold text-[#013F63] mb-4">
                  Session d'information gratuite
                </h3>
                <p className="text-lg mb-6 text-gray-700">
                  Découvrez le métier, le programme et les modalités de financement lors de notre prochaine réunion d'information
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                    S'inscrire à la réunion
                  </Link>
                  <Link href="/financement" className="inline-flex px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                    Dossier de financement
                  </Link>
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