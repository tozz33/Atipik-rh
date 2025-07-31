import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function BrunildaRafael() {
  return (
    <>
      <Head>
        <title>Brunilda RAFAEL | Chargée de Formation - Atipik RH</title>
        <meta name="description" content="Découvrez le profil de Brunilda RAFAEL, Chargée de Formation chez Atipik RH. Son parcours, ses compétences et son accompagnement personnalisé." />
        <meta name="keywords" content="Brunilda RAFAEL, chargée formation Atipik RH, formation professionnelle, Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/equipe/brunilda-rafael" />
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
                      src="/images/equipe/brunilda.jpeg"
                      alt="Brunilda RAFAEL"
                      width={350}
                      height={400}
                      className="relative z-10 w-full h-72 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>

                {/* Content à droite */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Chargée de Formation
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#013F63] leading-tight">
                    Brunilda RAFAEL
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
                        Plus de 8 ans d'expérience en formation et pédagogie pour adultes. Spécialisée dans l'accompagnement personnalisé et l'alphabétisation, j'ai développé une expertise unique dans l'adaptation pédagogique.
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
                        Ma passion pour la pédagogie et ma capacité à révéler le potentiel de chacun. J'apporte une approche humaine et personnalisée qui place l'empathie au cœur de l'apprentissage.
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
                        Passionnée de pédagogie depuis toujours, j'ai commencé par enseigner bénévolement l'alphabétisation aux adultes. Cette expérience m'a révélé ma vocation : accompagner chaque personne vers sa réussite.
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
                        Institutrice ! Je voulais aider les enfants à apprendre et grandir. Cette vocation précoce pour la transmission et l'accompagnement guide encore aujourd'hui ma mission chez Atipik RH.
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
                        Adapter ma pédagogie à chaque profil pour révéler les talents cachés. Je crée un environnement d'apprentissage où chacun se sent valorisé et capable de progresser, quel que soit son point de départ.
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
                        "Chacun a un potentiel unique à révéler."
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