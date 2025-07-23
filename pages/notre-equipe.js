import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Users, Mail, Phone, MapPin } from 'lucide-react'

export default function NotreEquipe() {
  return (
    <>
      <Head>
        <title>Notre équipe | Atipik RH - Les experts qui vous accompagnent</title>
        <meta name="description" content="Découvrez l'équipe d'Atipik RH : formatrices expertes, consultantes insertion professionnelle qui vous accompagnent dans votre projet." />
        <meta name="keywords" content="équipe Atipik RH, formatrices expertes, consultantes emploi, formation professionnelle Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/notre-equipe" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Équipe d'Atipik RH */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-6xl font-bold text-[#013F63] mb-6">
                  L'équipe d'<span className="text-blue-600 font-brittany text-5xl lg:text-6xl">Atipik RH</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Des professionnelles passionnées, expertes dans l'accompagnement humain
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Vanessa - Directrice */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <Image
                      src="/images/equipe/Vanessa.jpeg"
                      alt="Vanessa NOAH EWODO"
                      width={128}
                      height={128}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-2">Vanessa NOAH EWODO</h3>
                  <p className="text-orange-600 font-medium mb-4">Directrice et formatrice</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fondatrice d'Atipik RH, elle pilote l'équipe et assure le développement stratégique 
                    tout en restant proche du terrain formatif.
                  </p>
                </div>

                {/* Brunilda - Chargée de Formation */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <Image
                      src="/images/equipe/brunilda.jpeg"
                      alt="Brunilda BUZI"
                      width={128}
                      height={128}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-2">Brunilda BUZI</h3>
                  <p className="text-blue-600 font-medium mb-4">Chargée de Formation</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Responsable de l'organisation et du suivi des formations, elle veille à la qualité 
                    de l'accompagnement pédagogique.
                  </p>
                </div>

                {/* Liliana - Coordinatrice */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <Image
                      src="/images/equipe/liliana.jpeg"
                      alt="Liliana DELMAS"
                      width={128}
                      height={128}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-2">Liliana DELMAS</h3>
                  <p className="text-purple-600 font-medium mb-4">Formatrice et consultante</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Spécialisée dans l'accompagnement professionnel et les bilans de compétences,
                    elle assure aussi la coordination des formations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Équipe Formatrice */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  L'équipe <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">formatrice</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Des expertes passionnées qui vous transmettent leur savoir-faire
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                
                {/* Stéphanie */}
                <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <Image
                      src="/images/equipe/stephanie.jpeg"
                      alt="Stéphanie GARCIA"
                      width={96}
                      height={96}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-1">Stéphanie GARCIA</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">Coordinatrice pédagogique</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Elle coordonne les programmes de formation et assure le lien entre apprenants, 
                    formateurs et entreprises partenaires.
                  </p>
                </div>

                {/* Nathalie */}
                <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <Image
                      src="/images/equipe/nathalie.jpeg"
                      alt="Nathalie BIOTTI"
                      width={96}
                      height={96}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-1">Nathalie BIOTTI</h3>
                  <p className="text-orange-600 font-medium text-sm mb-3">Formatrice</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Formatrice polyvalente, elle intervient sur différents modules de formation professionnelle.
                  </p>
                </div>

                {/* Mouna */}
                <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <Image
                      src="/images/equipe/mouna.jpeg"
                      alt="Mouna MNIAI"
                      width={96}
                      height={96}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-1">Mouna MNIAI</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">Consultante en emploi</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Spécialiste des techniques de recherche d'emploi et de l'accompagnement vers l'insertion.
                  </p>
                </div>

                {/* Cécile */}
                <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <Image
                      src="/images/equipe/cecile.jpeg"
                      alt="Cécile BERNAT"
                      width={96}
                      height={96}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-1">Cécile BERNAT</h3>
                  <p className="text-orange-600 font-medium text-sm mb-3">Formatrice RH</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Experte en ressources humaines, elle forme aux métiers RH et aux soft skills managériales.
                  </p>
                </div>

                {/* Coraline */}
                <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <Image
                      src="/images/equipe/coraline.jpeg"
                      alt="Coraline ABADIE"
                      width={96}
                      height={96}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-1">Coraline ABADIE</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">Formatrice et Intervenante Théâtre</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Utilise les techniques théâtrales pour développer la confiance en soi et l'expression orale.
                  </p>
                </div>

                {/* Windy */}
                <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <Image
                      src="/images/equipe/windy.jpeg"
                      alt="Windy TELGA"
                      width={96}
                      height={96}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-1">Windy TELGA</h3>
                  <p className="text-orange-600 font-medium text-sm mb-3">Formatrice communication & coaching emploi</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Spécialisée dans la communication professionnelle et le coaching pour l'emploi.
                  </p>
                </div>

                {/* Anne-Lise */}
                <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <Image
                      src="/images/equipe/anne-lise.jpeg"
                      alt="Anne-Lise COATRINE"
                      width={96}
                      height={96}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-1">Anne-Lise COATRINE</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">Intervenante Théâtre</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Experte en expression corporelle et développement de la confiance par les arts dramatiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact équipe */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                Rencontrez <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">notre équipe</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour répondre à vos questions 
                et vous accompagner dans votre projet professionnel
              </p>

              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#013F63] flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Contactez-nous
                    </h3>
                    <div className="flex items-center gap-3 pl-7">
                      <a href="tel:0783019955" className="text-gray-700 hover:text-blue-600 transition-colors text-lg">
                        07 83 01 99 55
                      </a>
                    </div>
                    <div className="flex items-center gap-3 pl-7">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <a href="mailto:contact@atipikrh.fr" className="text-gray-700 hover:text-blue-600 transition-colors">
                        contact@atipikrh.fr
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#013F63] flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Venez nous rencontrer
                    </h3>
                    <div className="text-gray-700 pl-7">
                      8 Rue du Courant<br />
                      33310 Lormont
                    </div>
                    <div className="text-sm text-gray-600 pl-7">
                      Lun-Ven : 9h-18h<br />
                      Sam : 9h-12h
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                  Nous contacter
                </Link>
                <Link href="/notre-histoire" className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                  Découvrir notre histoire
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