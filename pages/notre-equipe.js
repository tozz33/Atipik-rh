
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link'
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
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center mb-20">
                <h1 className="text-3xl lg:text-4xl font-medium text-[#013F63] mb-12">
                  <div className="relative inline-block">
                    Découvrez le portrait
                    <Image 
                      src="/images/decorations/3 lignes orange.svg" 
                      alt="Élément décoratif"
                      width={35}
                      height={25}
                      className="absolute -bottom-12 -right-8"
                    />
                  </div>
                  <br/>
                  <span className="bg-[#013F63] text-white px-4 py-1 rounded-full">de nos experts</span>
                </h1>
              </div>

              {/* Grille équipe direction */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-14 max-w-5xl mx-auto">
                
                {/* Vanessa - Directrice */}
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-5">
                    <Image
                      src="/images/equipe/Vanessa.jpeg"
                      alt="Vanessa NOAH EWODO"
                      width={160}
                      height={160}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg text-[#013F63] mb-3">
                    <span className="font-semibold">Vanessa</span> <span className="font-brittany">NOAH EWODO</span>
                  </h3>
                  <Link 
                    href="/equipe/vanessa-noah-ewodo"
                    className="text-orange-400 hover:text-orange-500 underline text-sm transition-colors"
                  >
                    Plus d'infos sur l'expert
                  </Link>
                </div>

                {/* Brunilda - Chargée de Formation */}
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-5">
                    <Image
                      src="/images/equipe/brunilda.jpeg"
                      alt="Brunilda RAFAEL"
                      width={160}
                      height={160}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg text-[#013F63] mb-3">
                    <span className="font-semibold">Brunilda</span> <span className="font-brittany">RAFAEL</span>
                  </h3>
                  <Link 
                    href="/equipe/brunilda-rafael"
                    className="text-orange-400 hover:text-orange-500 underline text-sm transition-colors"
                  >
                    Plus d'infos sur l'expert
                  </Link>
                </div>

                {/* Liliana - Coordinatrice */}
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-5">
                    <Image
                      src="/images/equipe/liliana.jpeg"
                      alt="Liliana DELMAS"
                      width={160}
                      height={160}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg text-[#013F63] mb-3">
                    <span className="font-semibold">Liliana</span> <span className="font-brittany">DELMAS</span>
                  </h3>
                  <Link 
                    href="/equipe/liliana-delmas"
                    className="text-orange-400 hover:text-orange-500 underline text-sm transition-colors"
                  >
                    Plus d'infos sur l'expert
                  </Link>
                </div>

                {/* Stéphanie */}
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-5">
                    <Image
                      src="/images/equipe/stephanie.jpeg"
                      alt="Stéphanie BRETON"
                      width={160}
                      height={160}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg text-[#013F63] mb-3">
                    <span className="font-semibold">Stéphanie</span> <span className="font-brittany">BRETON</span>
                  </h3>
                  <Link 
                    href="/equipe/stephanie-breton"
                    className="text-orange-400 hover:text-orange-500 underline text-sm transition-colors"
                  >
                    Plus d'infos sur l'expert
                  </Link>
                </div>
              </div>

              {/* Deuxième ligne équipe */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-14 max-w-5xl mx-auto">

                {/* Nathalie */}
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-5">
                    <Image
                      src="/images/equipe/nathalie.jpeg"
                      alt="Nathalie BIOTTI"
                      width={160}
                      height={160}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg text-[#013F63] mb-3">
                    <span className="font-semibold">Nathalie</span> <span className="font-brittany">BIOTTI</span>
                  </h3>
                  <Link 
                    href="/equipe/nathalie-biotti"
                    className="text-orange-400 hover:text-orange-500 underline text-sm transition-colors"
                  >
                    Plus d'infos sur l'expert
                  </Link>
                </div>

                {/* Mouna */}
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-5">
                    <Image
                      src="/images/equipe/mouna.jpeg"
                      alt="Mouna MNIAI"
                      width={160}
                      height={160}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg text-[#013F63] mb-3">
                    <span className="font-semibold">Mouna</span> <span className="font-brittany">MNIAI</span>
                  </h3>
                  <Link 
                    href="/equipe/mouna-mniai"
                    className="text-orange-400 hover:text-orange-500 underline text-sm transition-colors"
                  >
                    Plus d'infos sur l'expert
                  </Link>
                </div>

                {/* Cécile */}
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-5">
                    <Image
                      src="/images/equipe/cecile.jpeg"
                      alt="Cécile BERNAT"
                      width={160}
                      height={160}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg text-[#013F63] mb-3">
                    <span className="font-semibold">Cécile</span> <span className="font-brittany">BERNAT</span>
                  </h3>
                  <Link 
                    href="/equipe/cecile-bernat"
                    className="text-orange-400 hover:text-orange-500 underline text-sm transition-colors"
                  >
                    Plus d'infos sur l'expert
                  </Link>
                </div>

                {/* Coraline */}
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-5">
                    <Image
                      src="/images/equipe/coraline.jpeg"
                      alt="Coraline ABADIE"
                      width={160}
                      height={160}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg text-[#013F63] mb-3">
                    <span className="font-semibold">Coraline</span> <span className="font-brittany">ABADIE</span>
                  </h3>
                  <Link 
                    href="/equipe/coraline-abadie"
                    className="text-orange-400 hover:text-orange-500 underline text-sm transition-colors"
                  >
                    Plus d'infos sur l'expert
                  </Link>
                </div>
              </div>

              {/* Troisième ligne équipe - Centrée */}
              <div className="flex justify-center gap-6 lg:gap-8 max-w-5xl mx-auto">

                {/* Windy */}
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-5">
                    <Image
                      src="/images/equipe/windy.jpeg"
                      alt="Windy TELGA"
                      width={160}
                      height={160}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg text-[#013F63] mb-3">
                    <span className="font-semibold">Windy</span> <span className="font-brittany">TELGA</span>
                  </h3>
                  <Link 
                    href="/equipe/windy-telga"
                    className="text-orange-400 hover:text-orange-500 underline text-sm transition-colors"
                  >
                    Plus d'infos sur l'expert
                  </Link>
                </div>

                {/* Anne-Lise */}
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-5">
                    <Image
                      src="/images/equipe/anne-lise.jpeg"
                      alt="Anne-Lise COATRINE"
                      width={160}
                      height={160}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg text-[#013F63] mb-3">
                    <span className="font-semibold">Anne-Lise</span> <span className="font-brittany">COATRINE</span>
                  </h3>
                  <Link 
                    href="/equipe/anne-lise-coatrine"
                    className="text-orange-400 hover:text-orange-500 underline text-sm transition-colors"
                  >
                    Plus d'infos sur l'expert
                  </Link>
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