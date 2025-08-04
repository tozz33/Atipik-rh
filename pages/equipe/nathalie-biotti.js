import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function NathalieBiotti() {
  return (
    <>
      <Head>
        <title>Nathalie BIOTTI | Formatrice - Atipik RH</title>
        <meta name="description" content="Découvrez le profil de Nathalie BIOTTI, Formatrice chez Atipik RH. Son parcours, ses compétences et son accompagnement personnalisé." />
        <meta name="keywords" content="Nathalie BIOTTI, formatrice Atipik RH, formation professionnelle, Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/equipe/nathalie-biotti" />
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
                      src="/images/equipe/nathalie.jpeg"
                      alt="Nathalie BIOTTI"
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
                    <span className="font-brittany text-3xl lg:text-4xl">Nathalie</span> <span className="font-semibold">BIOTTI</span>
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
                        Plus de 15 ans d'expérience en formation d'adultes et accompagnement professionnel. Experte en développement des compétences comportementales et en techniques de recherche d'emploi.
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
                        Ma bienveillance naturelle et ma capacité à motiver les personnes en difficulté. J'apporte une approche centrée sur la confiance en soi et la valorisation des potentiels cachés.
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
                        Ancienne responsable commerciale, j'ai vécu ma propre reconversion vers la formation. Cette expérience personnelle me permet de comprendre intimement les défis de mes stagiaires.
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
                        Psychologue ! Je voulais aider les gens à mieux se comprendre et à surmonter leurs difficultés. Cette vocation se retrouve aujourd'hui dans mon approche de la formation.
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
                        Redonner confiance aux personnes qui ont perdu espoir. Je sais déceler les forces cachées et créer un environnement où chacun ose se révéler et progresser.
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
                        "La confiance en soi est le premier secret du succès."
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