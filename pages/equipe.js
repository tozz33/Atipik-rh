import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Users, Award, Star, Target, Shield, Heart, Lightbulb, Trophy, Clock } from 'lucide-react'

export default function Equipe() {
  return (
    <>
      <Head>
        <title>Qui sommes-nous ? L'équipe Atipik RH | Centre de formation à Lormont</title>
        <meta name="description" content="Découvrez Atipik RH : 15 ans d'expertise en formation professionnelle. Notre histoire, nos valeurs et notre équipe dédiée à votre réussite." />
        <meta name="keywords" content="Atipik RH équipe, centre formation Lormont, histoire Atipik RH, formatrices expertes, consultantes insertion professionnelle" />
        <link rel="canonical" href="https://atipikrh.fr/equipe" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-16"></div>

        {/* Hero Section - Qui sommes-nous */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          {/* Background animé */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          
          <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
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

        {/* Notre histoire - Version écourtée */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight">
                  Notre <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">histoire</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Une aventure humaine née d'une conviction simple : chaque personne mérite un accompagnement sur mesure
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
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

        {/* Notre mission - Version écourtée */}
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

        {/* Certifications */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight">
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
                      <h3 className="text-xl font-bold text-[#013F63] mb-3 text-center">Qualiopi</h3>
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
                      <h3 className="text-xl font-bold text-[#013F63] mb-3 text-center">Formation & Handicap</h3>
                      <p className="text-gray-600 text-center leading-relaxed">Formations adaptées aux personnes en situation de handicap</p>
                    </div>
                  </div>
                </div>

                <div className="text-center group h-full">
                  <div className="relative h-full">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-purple-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
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
                      <h3 className="text-xl font-bold text-[#013F63] mb-3 text-center">Mon Compte Formation</h3>
                      <p className="text-gray-600 text-center leading-relaxed">Organisme référencé CPF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Équipe Administrative */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Notre équipe <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">administrative</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  L'équipe qui vous accompagne au quotidien dans vos démarches
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
                       alt="Brunilda RAFAEL"
                       width={128}
                       height={128}
                       className="w-full h-full rounded-full object-cover"
                     />
                   </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-2">Brunilda RAFAEL</h3>
                  <p className="text-blue-600 font-medium mb-4">Chargée de Formation</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Responsable de l'organisation pédagogique et de la coordination des formations. 
                    Elle assure le suivi des stagiaires et la qualité des parcours.
                  </p>
                </div>

                                 {/* Liliana - Communication */}
                 <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 text-center group hover:shadow-xl transition-all duration-300">
                   <div className="w-32 h-32 mx-auto mb-6 relative">
                     <Image
                       src="/images/equipe/liliana.jpeg"
                       alt="Liliana ALMEIDA"
                       width={128}
                       height={128}
                       className="w-full h-full rounded-full object-cover"
                     />
                   </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-2">Liliana ALMEIDA</h3>
                  <p className="text-orange-600 font-medium mb-4">Chargée de Communication</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Elle gère la communication externe, les relations partenaires et veille 
                    à la visibilité d'Atipik RH sur tous les canaux.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Équipe de Formatrices */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Notre équipe de <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">formatrices</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Des expertes passionnées qui vous transmettent leur savoir-faire
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                                 {/* Vanessa - Formatrice */}
                 <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                   <div className="w-24 h-24 mx-auto mb-6 relative">
                     <Image
                       src="/images/equipe/Vanessa.jpeg"
                       alt="Vanessa NOAH EWODO"
                       width={96}
                       height={96}
                       className="w-full h-full rounded-full object-cover"
                     />
                   </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-1">Vanessa NOAH EWODO</h3>
                  <p className="text-orange-600 font-medium text-sm mb-3">Fondatrice & Consultante en évolution professionnelle</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Experte en accompagnement et bilan de compétences, elle forme aussi les futurs conseillers.
                  </p>
                </div>

                                 {/* Stéphanie */}
                 <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                   <div className="w-24 h-24 mx-auto mb-6 relative">
                     <Image
                       src="/images/equipe/stephanie.jpeg"
                       alt="Stéphanie BRETON"
                       width={96}
                       height={96}
                       className="w-full h-full rounded-full object-cover"
                     />
                   </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-1">Stéphanie BRETON</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">Formatrice référente en insertion professionnelle</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Spécialisée dans l'insertion professionnelle, elle accompagne les publics les plus éloignés de l'emploi.
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

        {/* Nos valeurs */}
        <section className="py-24 bg-white">
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
                <div className="bg-blue-50 rounded-3xl p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-4">Bienveillance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous accompagnons chaque personne avec empathie et respect, 
                    en créant un environnement de confiance propice à l'épanouissement.
                  </p>
                </div>

                {/* Excellence */}
                <div className="bg-orange-50 rounded-3xl p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-4">Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous nous engageons à offrir des formations de qualité supérieure 
                    et un accompagnement personnalisé adapté à chaque profil.
                  </p>
                </div>

                {/* Innovation */}
                <div className="bg-blue-50 rounded-3xl p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-blue-600" />
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

        {/* Contact équipe */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                Rencontrez <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">notre équipe</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour répondre à vos questions 
                et vous accompagner dans votre projet professionnel
              </p>

              <div className="bg-white rounded-3xl p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#013F63]">Contactez-nous</h3>
                    <div className="flex items-center gap-3">
                      <a href="tel:0783019955" className="text-gray-700 hover:text-blue-600 transition-colors">
                        07 83 01 99 55
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href="mailto:contact@atipikrh.fr" className="text-gray-700 hover:text-blue-600 transition-colors">
                        contact@atipikrh.fr
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#013F63]">Venez nous rencontrer</h3>
                    <div className="text-gray-700">
                      8 Rue du Courant<br />
                      33310 Lormont
                    </div>
                    <div className="text-sm text-gray-600">
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
                <Link href="/bilan-de-competences" className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                  Découvrir nos services
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