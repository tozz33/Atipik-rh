
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Users, Mail, Phone, MapPin, User } from 'lucide-react'

export default function NotreEquipe() {

  return (
    <>
      <Head>
        <title>Notre équipe | Atipik RH - Les experts qui vous accompagnent</title>
        <meta name="description" content="Découvrez l'équipe d'Atipik RH : formatrices expertes, consultantes insertion professionnelle qui vous accompagnent dans votre projet." />
        <meta name="keywords" content="équipe Atipik RH, formatrices expertes, consultantes emploi, formation professionnelle Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/notre-equipe" />
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

        {/* Équipe d'Atipik RH */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              
              {/* Section Équipe d'ATIPIK RH */}
              <div className="mb-24">
                <div className="text-center mb-16">
                  <h1 className="text-3xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight tracking-tight">
                    L'équipe d'<span className="text-blue-600 font-brittany text-2xl lg:text-4xl">ATIPIK RH</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    L'équipe qui pilote et organise vos parcours de formation
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {/* Vanessa - Directrice */}
                  <div className="text-center">
                    <Link href="/equipe/vanessa-noah-ewodo" className="inline-block mb-4">
                      <div className="w-40 h-40 mx-auto group [perspective:1000px]">
                        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          {/* Face avant - Photo */}
                          <div className="absolute inset-0 [backface-visibility:hidden] rounded-full">
                            <Image
                              src="/images/equipe/Vanessa.jpeg"
                              alt="Vanessa NOAH EWODO"
                              width={160}
                              height={160}
                              className="w-full h-full rounded-full object-cover cursor-pointer"
                            />
                          </div>
                          {/* Face arrière - Icône temporaire */}
                          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                            <User className="w-16 h-16 text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <h3 className="text-lg text-[#013F63] mb-3">
                      <span className="font-brittany text-2xl">Vanessa</span> <span className="font-semibold">NOAH EWODO</span>
                    </h3>
                    <p className="text-orange-600 font-medium text-sm mb-3">Directrice</p>
                  </div>

                  {/* Brunilda - Chargée de Formation */}
                  <div className="text-center">
                    <Link href="/equipe/brunilda-rafael" className="inline-block mb-4">
                      <div className="w-40 h-40 mx-auto group [perspective:1000px]">
                        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          {/* Face avant - Photo */}
                          <div className="absolute inset-0 [backface-visibility:hidden] rounded-full">
                            <Image
                              src="/images/equipe/brunilda.jpeg"
                              alt="Brunilda RAFAEL"
                              width={160}
                              height={160}
                              className="w-full h-full rounded-full object-cover cursor-pointer"
                            />
                          </div>
                          {/* Face arrière - Icône temporaire */}
                          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            <User className="w-16 h-16 text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <h3 className="text-lg text-[#013F63] mb-3">
                      <span className="font-brittany text-2xl">Brunilda</span> <span className="font-semibold">RAFAEL</span>
                    </h3>
                    <p className="text-blue-600 font-medium text-sm mb-3">Chargée de Formation</p>
                  </div>

                  {/* Liliana - Communication */}
                  <div className="text-center">
                    <Link href="/equipe/liliana-delmas" className="inline-block mb-4">
                      <div className="w-40 h-40 mx-auto group [perspective:1000px]">
                        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          {/* Face avant - Photo */}
                          <div className="absolute inset-0 [backface-visibility:hidden] rounded-full">
                            <Image
                              src="/images/equipe/liliana.jpeg"
                              alt="Liliana DELMAS"
                              width={160}
                              height={160}
                              className="w-full h-full rounded-full object-cover cursor-pointer"
                            />
                          </div>
                          {/* Face arrière - Icône temporaire */}
                          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                            <User className="w-16 h-16 text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <h3 className="text-lg text-[#013F63] mb-3">
                      <span className="font-brittany text-2xl">Liliana</span> <span className="font-semibold">DELMAS</span>
                    </h3>
                    <p className="text-orange-600 font-medium text-sm mb-3">Chargée de Communication</p>
                  </div>
                </div>
              </div>

              {/* Section Nos Formatrices */}
              <div className="mb-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                    Nos <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">formatrices</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Des expertes passionnées qui vous transmettent leur savoir-faire
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  {/* Stéphanie */}
                  <div className="text-center">
                    <Link href="/equipe/stephanie-breton" className="inline-block mb-4">
                      <div className="w-40 h-40 mx-auto group [perspective:1000px]">
                        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          {/* Face avant - Photo */}
                          <div className="absolute inset-0 [backface-visibility:hidden] rounded-full">
                            <Image
                              src="/images/equipe/stephanie.jpeg"
                              alt="Stéphanie BRETON"
                              width={160}
                              height={160}
                              className="w-full h-full rounded-full object-cover cursor-pointer"
                            />
                          </div>
                          {/* Face arrière - Icône temporaire */}
                          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                            <User className="w-16 h-16 text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <h3 className="text-base text-[#013F63] mb-2">
                      <span className="font-brittany text-xl">Stéphanie</span> <span className="font-semibold">BRETON</span>
                    </h3>
                  </div>

                  {/* Nathalie */}
                  <div className="text-center">
                    <Link href="/equipe/nathalie-biotti" className="inline-block mb-4">
                      <div className="w-40 h-40 mx-auto group [perspective:1000px]">
                        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          {/* Face avant - Photo */}
                          <div className="absolute inset-0 [backface-visibility:hidden] rounded-full">
                            <Image
                              src="/images/equipe/nathalie.jpeg"
                              alt="Nathalie BIOTTI"
                              width={160}
                              height={160}
                              className="w-full h-full rounded-full object-cover cursor-pointer"
                            />
                          </div>
                          {/* Face arrière - Icône temporaire */}
                          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                            <User className="w-16 h-16 text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <h3 className="text-base text-[#013F63] mb-2">
                      <span className="font-brittany text-xl">Nathalie</span> <span className="font-semibold">BIOTTI</span>
                    </h3>
                  </div>

                  {/* Mouna */}
                  <div className="text-center">
                    <Link href="/equipe/mouna-mniai" className="inline-block mb-4">
                      <div className="w-40 h-40 mx-auto group [perspective:1000px]">
                        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          {/* Face avant - Photo */}
                          <div className="absolute inset-0 [backface-visibility:hidden] rounded-full">
                            <Image
                              src="/images/equipe/mouna.jpeg"
                              alt="Mouna MNIAI"
                              width={160}
                              height={160}
                              className="w-full h-full rounded-full object-cover cursor-pointer"
                            />
                          </div>
                          {/* Face arrière - Icône temporaire */}
                          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                            <User className="w-16 h-16 text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <h3 className="text-base text-[#013F63] mb-2">
                      <span className="font-brittany text-xl">Mouna</span> <span className="font-semibold">MNIAI</span>
                    </h3>
                  </div>

                  {/* Cécile */}
                  <div className="text-center">
                    <Link href="/equipe/cecile-bernat" className="inline-block mb-4">
                      <div className="w-40 h-40 mx-auto group [perspective:1000px]">
                        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          {/* Face avant - Photo */}
                          <div className="absolute inset-0 [backface-visibility:hidden] rounded-full">
                            <Image
                              src="/images/equipe/cecile.jpeg"
                              alt="Cécile BERNAT"
                              width={160}
                              height={160}
                              className="w-full h-full rounded-full object-cover cursor-pointer"
                            />
                          </div>
                          {/* Face arrière - Icône temporaire */}
                          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                            <User className="w-16 h-16 text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <h3 className="text-base text-[#013F63] mb-2">
                      <span className="font-brittany text-xl">Cécile</span> <span className="font-semibold">BERNAT</span>
                    </h3>
                  </div>

                  {/* Coraline */}
                  <div className="text-center">
                    <Link href="/equipe/coraline-abadie" className="inline-block mb-4">
                      <div className="w-40 h-40 mx-auto group [perspective:1000px]">
                        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          {/* Face avant - Photo */}
                          <div className="absolute inset-0 [backface-visibility:hidden] rounded-full">
                            <Image
                              src="/images/equipe/coraline.jpeg"
                              alt="Coraline ABADIE"
                              width={160}
                              height={160}
                              className="w-full h-full rounded-full object-cover cursor-pointer"
                            />
                          </div>
                          {/* Face arrière - Icône temporaire */}
                          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                            <User className="w-16 h-16 text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <h3 className="text-base text-[#013F63] mb-2">
                      <span className="font-brittany text-xl">Coraline</span> <span className="font-semibold">ABADIE</span>
                    </h3>
                  </div>

                  {/* Windy */}
                  <div className="text-center">
                    <Link href="/equipe/windy-telga" className="inline-block mb-4">
                      <div className="w-40 h-40 mx-auto group [perspective:1000px]">
                        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          {/* Face avant - Photo */}
                          <div className="absolute inset-0 [backface-visibility:hidden] rounded-full">
                            <Image
                              src="/images/equipe/windy.jpeg"
                              alt="Windy TELGA"
                              width={160}
                              height={160}
                              className="w-full h-full rounded-full object-cover cursor-pointer"
                            />
                          </div>
                          {/* Face arrière - Icône temporaire */}
                          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                            <User className="w-16 h-16 text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <h3 className="text-base text-[#013F63] mb-2">
                      <span className="font-brittany text-xl">Windy</span> <span className="font-semibold">TELGA</span>
                    </h3>
                  </div>

                  {/* Anne-Lise */}
                  <div className="text-center">
                    <Link href="/equipe/anne-lise-coatrine" className="inline-block mb-4">
                      <div className="w-40 h-40 mx-auto group [perspective:1000px]">
                        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                          {/* Face avant - Photo */}
                          <div className="absolute inset-0 [backface-visibility:hidden] rounded-full">
                            <Image
                              src="/images/equipe/anne-lise.jpeg"
                              alt="Anne-Lise COATRINE"
                              width={160}
                              height={160}
                              className="w-full h-full rounded-full object-cover cursor-pointer"
                            />
                          </div>
                          {/* Face arrière - Icône temporaire */}
                          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                            <User className="w-16 h-16 text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                    <h3 className="text-base text-[#013F63] mb-2">
                      <span className="font-brittany text-xl">Anne-Lise</span> <span className="font-semibold">COATRINE</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Contact équipe */}
        <section className="pt-6 pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                Rencontrons-<span className="text-orange-500 font-brittany text-5xl lg:text-6xl">nous</span>
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
                      Sam : Sur demande de rendez-vous
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

        </div>

        <Footer />

      </div>
    </>
  )
} 