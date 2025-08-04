import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function VanessaNoahEwodo() {
  return (
    <>
      <Head>
        <title>Vanessa NOAH EWODO | Directrice - Atipik RH</title>
        <meta name="description" content="Découvrez le profil de Vanessa NOAH EWODO, Directrice d'Atipik RH. Son parcours, ses compétences et son accompagnement personnalisé." />
        <meta name="keywords" content="Vanessa NOAH EWODO, directrice Atipik RH, formation professionnelle, Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/equipe/vanessa-noah-ewodo" />
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
                      src="/images/equipe/Vanessa.jpeg"
                      alt="Vanessa NOAH EWODO"
                      width={350}
                      height={400}
                      className="relative z-10 w-full h-72 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>

                {/* Content à droite */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    Directrice
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#013F63] leading-tight">
                    <span className="font-brittany text-4xl lg:text-5xl">Vanessa</span> <span className="font-semibold">NOAH EWODO</span>
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
                        15 ans d'expérience dans la formation et l'accompagnement professionnel. Directrice et fondatrice d'Atipik RH, j'ai développé une expertise unique dans le bilan de compétences et la VAE.
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
                        Ma vision stratégique, mon approche innovante de l'accompagnement et ma capacité à créer un environnement bienveillant où chaque collaborateur peut s'épanouir et révéler son potentiel.
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
                        Ancienne danseuse classique, j'ai retrouvé la scène après 37 ans d'absence. Cette renaissance artistique nourrit aujourd'hui ma vision de l'accompagnement professionnel : il n'est jamais trop tard pour se réinventer.
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
                        Professeure de danse. Je voulais transmettre la beauté du mouvement et aider les autres à s'exprimer à travers l'art. Cette passion pour la transmission guide encore aujourd'hui ma mission chez Atipik RH.
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
                        Révéler le potentiel caché des personnes. J'ai cette capacité intuitive à percevoir les talents inexploités et à créer les conditions pour qu'ils s'épanouissent pleinement.
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
                        "Chaque défi est une danse avec l'opportunité."
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