import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function CecileBernat() {
  return (
    <>
      <Head>
        <title>Cécile BERNAT | Formatrice - Atipik RH</title>
        <meta name="description" content="Découvrez le profil de Cécile BERNAT, Formatrice chez Atipik RH. Son parcours, ses compétences et son accompagnement personnalisé." />
        <meta name="keywords" content="Cécile BERNAT, formatrice Atipik RH, formation professionnelle, Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/equipe/cecile-bernat" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <Header isFixed={true} />
        
        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Page complète en un seul écran */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Navigation compacte */}
              <div className="mb-6">
                <Link href="/notre-equipe" className="inline-flex items-center text-gray-600 hover:text-[#013F63] transition-colors group">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Retour à l'équipe
                </Link>
              </div>

              {/* Header compact avec photo et nom */}
              <div className="grid lg:grid-cols-12 gap-8 items-center mb-8">
                
                {/* Photo plus petite */}
                <div className="lg:col-span-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#013F63] to-orange-500 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-300"></div>
                    <Image
                      src="/images/equipe/cecile.jpeg"
                      alt="Cécile BERNAT"
                      width={350}
                      height={400}
                      className="relative z-10 w-full h-72 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>

                {/* Content à droite */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Formatrice
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#013F63] leading-tight">
                    Cécile BERNAT
                  </h1>
                  <p className="text-gray-600 leading-relaxed">
                    Accompagnement à distance sur toute la France ou en présentiel à <span className="text-orange-500 font-semibold">Lormont</span>
                  </p>
                </div>
              </div>

              {/* 6 cartes en grille 2x3 */}
              <div className="grid lg:grid-cols-3 gap-6">
                
                {/* Ton parcours professionnel */}
                <div className="group">
                  <div className="p-5 h-full">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-gray-800 mb-2">
                        Ton parcours professionnel
                      </h2>
                      <div className="w-8 h-0.5 bg-[#013F63] rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        9 ans d'expérience en formation d'adultes et conseil en évolution professionnelle. Experte en bilans de compétences et accompagnement des transitions de carrière.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ce que t'apportes à ATIPIK RH */}
                <div className="group">
                  <div className="p-5 h-full">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-gray-800 mb-2">
                        Ce que t'apportes à ATIPIK RH
                      </h2>
                      <div className="w-8 h-0.5 bg-[#013F63] rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Ma minutie et mon approche structurée des bilans. J'apporte une méthodologie rigoureuse qui permet à chacun de clarifier ses objectifs et de construire un projet solide.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Une anecdote sur toi */}
                <div className="group">
                  <div className="p-5 h-full">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-gray-800 mb-2">
                        Une anecdote sur toi
                      </h2>
                      <div className="w-8 h-0.5 bg-[#013F63] rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Fan de puzzles depuis l'enfance ! J'adore reconstituer les pièces pour former une image complète. C'est exactement ce que je fais avec les bilans de compétences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ton métier d'enfance */}
                <div className="group">
                  <div className="p-5 h-full">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-gray-800 mb-2">
                        Ton métier d'enfance
                      </h2>
                      <div className="w-8 h-0.5 bg-[#013F63] rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Détective ! J'étais fascinée par l'idée de résoudre des mystères en analysant les indices. Aujourd'hui, j'aide les gens à découvrir leurs talents cachés.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ton super-pouvoir au travail */}
                <div className="group">
                  <div className="p-5 h-full">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-gray-800 mb-2">
                        Ton super-pouvoir au travail
                      </h2>
                      <div className="w-8 h-0.5 bg-[#013F63] rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Analyser en profondeur pour révéler l'essentiel. Je démêle les situations complexes et aide les personnes à y voir clair dans leur parcours professionnel.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ta devise */}
                <div className="group">
                  <div className="p-5 h-full">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-gray-800 mb-2">
                        Ta devise
                      </h2>
                      <div className="w-8 h-0.5 bg-[#013F63] rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-600 text-sm leading-relaxed font-medium italic">
                        "Chaque détail compte pour révéler l'ensemble."
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
} 