import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Shield, FileText, User, Lock } from 'lucide-react'

export default function RGPD() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité - RGPD | Atipik RH</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles conformément au RGPD - Atipik RH, centre de formation à Lormont." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://atipikrh.fr/rgpd" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
          {/* Background animé */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          
          <div className="relative z-10 container mx-auto px-4 pt-8 pb-8">
            <div className="text-center mb-8 max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#013F63] rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight tracking-tight">
                Politique de <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">Confidentialité</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                Protection des données personnelles et respect du RGPD<br className="hidden lg:block"/>
                <span className="text-blue-600 font-medium">Transparence et sécurité de vos informations</span>
              </p>
            </div>
          </div>
        </section>

        {/* Contenu principal */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <div className="bg-blue-50 rounded-3xl p-8 mb-12 border border-blue-100">
                <div className="flex items-start gap-4">
                  <FileText className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-[#013F63] mb-4">
                      Mise à jour et informations importantes
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Cette politique de confidentialité a été mise à jour le <strong>[DATE À DÉFINIR]</strong> 
                      et est conforme au Règlement Général sur la Protection des Données (RGPD) en vigueur 
                      depuis le 25 mai 2018.
                    </p>
                  </div>
                </div>
              </div>

              {/* Zone de contenu à compléter */}
              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Contenu en cours de rédaction
                  </h3>
                  <p className="text-gray-500">
                    Le contenu détaillé de cette politique de confidentialité sera ajouté prochainement.
                  </p>
                </div>

                {/* Sections prêtes à être remplies */}
                <div className="mt-12 space-y-8">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h2 className="text-2xl font-bold text-[#013F63] mb-4">1. Collecte des données</h2>
                    <p className="text-gray-600 italic">[Contenu à ajouter]</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h2 className="text-2xl font-bold text-[#013F63] mb-4">2. Utilisation des données</h2>
                    <p className="text-gray-600 italic">[Contenu à ajouter]</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h2 className="text-2xl font-bold text-[#013F63] mb-4">3. Vos droits</h2>
                    <p className="text-gray-600 italic">[Contenu à ajouter]</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h2 className="text-2xl font-bold text-[#013F63] mb-4">4. Sécurité des données</h2>
                    <p className="text-gray-600 italic">[Contenu à ajouter]</p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h2 className="text-2xl font-bold text-[#013F63] mb-4">5. Contact</h2>
                    <p className="text-gray-600 italic">[Contenu à ajouter]</p>
                  </div>
                </div>
              </div>

              {/* Contact rapide */}
              <div className="mt-16 bg-gradient-to-r from-[#013F63] to-blue-700 rounded-3xl p-8 text-white text-center">
                <Lock className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">
                  Questions sur vos données ?
                </h3>
                <p className="text-blue-100 mb-6">
                  Pour toute question concernant le traitement de vos données personnelles, 
                  n'hésitez pas à nous contacter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:contact@atipikrh.fr" 
                    className="inline-flex px-6 py-3 rounded-full bg-white text-[#013F63] font-semibold hover:bg-blue-50 transition"
                  >
                    Nous contacter
                  </a>
                  <a 
                    href="tel:0783019955" 
                    className="inline-flex px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#013F63] font-semibold transition"
                  >
                    07 83 01 99 55
                  </a>
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