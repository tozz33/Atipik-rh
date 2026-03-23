import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, ArrowRight, User, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

    // Articles exemples - pourront être remplacés par une base de données ou CMS plus tard
  const articles = [
    {
      id: 23,
      slug: "location-salle-formation-lormont-proche-bordeaux",
      title: "Louer une salle de formation à Lormont (proche Bordeaux)",
      excerpt: "Louez une salle de formation à Lormont, proche Bordeaux : espaces modernes et équipés, réservation simple et flexible. Devis personnalisé sous 24 h. Atipik RH vous accompagne.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&q=80",
      date: "23 mars 2026",
      readTime: "7 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "location salle de formation Lormont, salle formation Lormont, louer salle Lormont, salle formation Bordeaux rive droite, location salle formation proche Bordeaux, location salle professionnelle Gironde, centre formation Lormont, réserver salle formation rive droite Bordeaux, Atipik RH"
    },
    {
      id: 22,
      slug: "financer-reconversion-professionnelle-2026-cpf-aides-regionales",
      title: "Financer sa reconversion en 2026 : CPF, aides régionales et parcours après 40 ans",
      excerpt: "Salarié en reconversion, demandeur d'emploi ou professionnel de plus de 40 ans : découvrez comment financer une reconversion professionnelle en 2026 grâce au CPF, aux aides régionales et aux autres dispositifs, sans reste à charge.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=80",
      date: "24 février 2026",
      readTime: "14 min",
      author: "Vanessa NOAH EWODO",
      category: "Financement",
      keywords: "financement formation 2026, utiliser son CPF 2026, aides régionales formation, financer une reconversion, financement bilan de compétences, reconversion professionnelle après 40 ans financement, changer de métier à 45 ans financement, formation adulte en reconversion financement, comment utiliser son CPF sans reste à charge, formation éligible CPF 2026, CPF pour reconversion professionnelle, cumul CPF et aides régionales, CPF abondement employeur comment faire, aide régionale pour formation adulte, financement formation demandeur d'emploi 2026, aides reconversion professionnelle région, dispositif régional métiers en tension"
    },
    {
      id: 21,
      slug: "vae-ou-bilan-competences-que-choisir-selon-parcours",
      title: "VAE ou bilan de compétences : que choisir selon son parcours ?",
      excerpt: "VAE ou bilan de compétences : découvrez les différences, les avantages et les critères pour choisir le dispositif le plus adapté à votre parcours professionnel.",
      image: "/images/hero/bilan-competences.jpg",
      date: "9 février 2026",
      readTime: "8 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "VAE, bilan de compétences, reconversion professionnelle, CPF, validation des acquis"
    },
    {
      id: 20,
      slug: "valoriser-competences-cv-parcours-atypique",
      title: "Comment valoriser ses compétences sur un CV quand on a un parcours atypique",
      excerpt: "Parcours atypique ? Apprenez à transformer vos expériences variées en atout sur votre CV. Conseils concrets pour convaincre les recruteurs.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80",
      date: "6 février 2026",
      readTime: "10 min",
      author: "Vanessa NOAH EWODO",
      category: "Conseils",
      keywords: "CV parcours atypique, valoriser compétences CV, CV par compétences, parcours professionnel atypique, CV reconversion, compétences transférables, rédaction CV, conseils CV, recherche emploi parcours atypique, bilan de compétences"
    },
    {
      id: 19,
      slug: "bilan-competences-cadres-plus-40-ans-reconversion",
      title: "Bilan de compétences pour cadres de plus de 40 ans : sécurisez votre reconversion",
      excerpt: "Cadre de plus de 40 ans ? Clarifiez votre projet professionnel grâce à un bilan de compétences pensé pour les profils expérimentés, afin de sécuriser votre reconversion sans repartir de zéro.",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1200&h=800&fit=crop&q=80",
      date: "27 janvier 2026",
      readTime: "5 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "bilan de compétences cadre, bilan compétences cadres 40 ans, reconversion cadres expérimentés, bilan compétences senior, accompagnement cadres Atipik RH, bilan de compétences Lyon, bilan de compétences à distance"
    },
    {
      id: 17,
      slug: "devenir-formateur-adultes-sans-etudes-longues-reconversion",
      title: "Devenir formateur pour adultes sans reprendre des études longues : est-ce vraiment possible ?",
      excerpt: "Changer de métier sans repartir sur les bancs de l'université est aujourd'hui une aspiration forte. Parmi les reconversions qui attirent de plus en plus de professionnels expérimentés, le métier de formateur pour adultes occupe une place à part.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop&q=80",
      date: "20 janvier 2026",
      readTime: "15 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "formateur adultes, formation FPA, reconversion formateur, devenir formateur sans diplôme, formation courte formateur, pédagogie adultes, formateur professionnel adultes, reconversion professionnelle formateur"
    },
    {
      id: 16,
      slug: "financer-bilan-competences-2026-cpf-france-travail-employeur",
      title: "Comment financer un bilan de compétences en 2026 ? (CPF, France Travail, employeur)",
      excerpt: "Guide complet pour financer votre bilan de compétences en 2026 : CPF, financement employeur, France Travail, FAF pour indépendants. Toutes les solutions pour lever le frein financier et investir sereinement dans votre avenir professionnel.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&q=80",
      date: "13 janvier 2026",
      readTime: "12 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "financement bilan compétences, bilan compétences CPF, financer bilan compétences 2026, France Travail bilan compétences, employeur finance bilan compétences, Aide Individuelle Formation, Fonds Assurance Formation indépendant"
    },
    {
      id: 15,
      slug: "portefeuille-competences-insertion-reconversion-employabilite",
      title: "Portefeuille de compétences : un outil stratégique pour l'insertion professionnelle et la reconversion",
      excerpt: "Dans un contexte de mutations du marché du travail, l'insertion professionnelle, la reconversion professionnelle et le bilan de compétences sont devenus des leviers essentiels pour renforcer l'employabilité et sécuriser les parcours.",
      image: "/images/hero/bilan-competences.jpg",
      date: "7 janvier 2026",
      readTime: "5 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "portefeuille compétences, insertion professionnelle, reconversion professionnelle, employabilité, compétences transférables, CIP, bilan compétences, ATIPIK RH"
    },
    {
      id: 14,
      slug: "difficultes-recrutement-pratiques-marche",
      title: "Et si vos difficultés de recrutement venaient de vos pratiques, pas seulement du marché ?",
      excerpt: "Les candidatures tardent à arriver, les profils ne correspondent pas et la pénurie de talents semble devenir la seule explication. Et si la solution se trouvait aussi dans vos pratiques de recrutement ?",
      image: "/images/hero/formations.jpg",
      date: "23 octobre 2025",
      readTime: "9 min",
      author: "Liliana ALMEIDA",
      category: "Tous",
      keywords: "recrutement inclusif, pratiques de recrutement, pénurie de talents, diversité, inclusion, vivier de candidats"
    },
    {
      id: 18,
      slug: "atipik-rh-espace-emploi-projets-partenariat-mem-wejob-lormont",
      title: "ATIPIK RH, un espace au service de l'emploi et de vos projets - Partenariat MEM we.job",
      excerpt: "Découvrez notre partenariat avec le programme MEM – Métier et Emploi porté par we.job. ATIPIK RH met à disposition ses locaux professionnels à Lormont pour l'accompagnement vers l'emploi, la reconversion et la réflexion professionnelle.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop&q=80",
      date: "25 janvier 2026",
      readTime: "4 min",
      author: "Vanessa NOAH EWODO",
      category: "Partenariat",
      keywords: "location de salle Lormont, espace professionnel Lormont, accompagnement emploi, insertion professionnelle, partenariat we.job, MEM Métier Emploi, centre formation Lormont, salles équipées formation, ateliers professionnels, événements professionnels Bordeaux"
    },
    {
      id: 8,
      slug: "reconversion-professionnelle-comment-reussir-changement-carriere",
      title: "Reconversion professionnelle : comment réussir son changement de carrière ?",
      excerpt: "La reconversion professionnelle concerne de plus en plus de Français. Découvrez les étapes clés, les dispositifs d'accompagnement et les conseils pratiques pour mener à bien votre projet de changement de carrière.",
      image: "/images/hero/bilan-competences.jpg",
      date: "22 janvier 2025",
      readTime: "10 min",
      author: "Vanessa NOAH EWODO",
      category: "Reconversion",
      keywords: "reconversion professionnelle, changement carrière, bilan compétences, formation adulte, projet professionnel, transition professionnelle"
    },
    {
      id: 2,
      slug: "financer-bilan-vae-formation-atipik-rh",
      title: "Financer votre formation professionnelle avec Atipik RH",
      excerpt: "Découvrez tous les dispositifs de financement pour vos projets de formation : CPF, France Travail, OPCO, Transitions Pro. La majorité de nos accompagnements sont finançables à 100% grâce à différents dispositifs.",
      image: "/images/hero/formations.jpg",
      date: "20 janvier 2025",
      readTime: "8 min",
      author: "Vanessa NOAH EWODO",
      category: "Financement",
      keywords: "financement formation, CPF, bilan compétences, VAE, France Travail, OPCO, Transitions Pro, AGEFIPH"
    },
    {
      id: 1,
      slug: "formation-conseiller-insertion-professionnelle-lormont",
      title: "Formation de Conseiller en Insertion Professionnelle à Lormont : débouchés et programme",
      excerpt: "Découvrez notre formation CIP complète, les débouchés professionnels et pourquoi choisir la Gironde pour développer cette expertise.",
      image: "/images/hero/formations.jpg",
      date: "15 janvier 2025",
      readTime: "12 min",
      author: "Brunilda RAFAEL",
      category: "Formations",
      keywords: "formation CIP, conseiller insertion professionnelle, Lormont, débouchés emploi, programme formation"
    },
    {
      id: 9,
      slug: "centre-formation-lormont-rive-droite-bordeaux",
      title: "Centre de formation professionnelle à Lormont : pourquoi choisir la rive droite de Bordeaux ?",
      excerpt: "Découvrez pourquoi notre centre de formation à Lormont offre tous les avantages d'une proximité avec Bordeaux, tout en bénéficiant des atouts spécifiques de la rive droite.",
      image: "/images/hero/formations.jpg",
      date: "10 janvier 2025",
      readTime: "10 min",
      author: "Vanessa NOAH EWODO",
      category: "Formations",
      keywords: "centre formation Lormont, rive droite Bordeaux, formation professionnelle, avantages géographiques, accessibilité"
    },
    {
      id: 10,
      slug: "vae-valoriser-experience-obtenir-diplome",
      title: "VAE : valoriser son expérience pour obtenir un diplôme",
      excerpt: "La Validation des Acquis de l'Expérience peut vous permettre d'obtenir une certification reconnue.",
      image: "/images/hero/vae.jpg",
      date: "5 janvier 2025",
      readTime: "6 min",
      author: "Stéphanie BRETON",
      category: "VAE",
      keywords: "VAE, validation acquis expérience, diplôme expérience, certification professionnelle"
    },
    {
      id: 11,
      slug: "bilan-competences-lormont-5-etapes-reconversion",
      title: "Bilan de compétences à Lormont : 5 étapes pour réussir sa reconversion professionnelle",
      excerpt: "Découvrez notre méthode en 5 étapes pour construire sereinement votre projet de reconversion grâce au bilan de compétences à Lormont.",
      image: "/images/hero/bilan-competences.jpg",
      date: "28 décembre 2024",
      readTime: "8 min",
      author: "Vanessa NOAH EWODO",
      category: "Bilan de compétences",
      keywords: "bilan compétences Lormont, reconversion professionnelle, 5 étapes, accompagnement carrière"
    },
    {
      id: 13,
      slug: "preparer-entretien-embauche-conseils-experts",
      title: "Préparer son entretien d'embauche : nos conseils d'experts",
      excerpt: "Les techniques et astuces pour réussir ses entretiens et convaincre les recruteurs.",
      image: "/images/hero/vae.jpg",
      date: "15 décembre 2024",
      readTime: "8 min",
      author: "Brunilda RAFAEL",
      category: "Recherche d'emploi",
      keywords: "entretien embauche, conseils recrutement, préparation entretien, techniques recruteurs"
    },
    {
      id: 12,
      slug: "soft-skills-competences-difference",
      title: "Les soft skills : ces compétences qui font la différence",
      excerpt: "Découvrez pourquoi les soft skills — communication, adaptabilité, intelligence émotionnelle — deviennent essentielles pour booster votre carrière en 2025 et comment les développer.",
      image: "/images/hero/bilan-competences.jpg",
      date: "10 juillet 2024",
      readTime: "8 min",
      author: "Brunilda RAFAEL",
      category: "Conseils",
      keywords: "soft skills, compétences comportementales, compétences transversales, évolution professionnelle"
    }
  ];

  const monthMap = {
    janvier: 0,
    fevrier: 1,
    mars: 2,
    avril: 3,
    mai: 4,
    juin: 5,
    juillet: 6,
    aout: 7,
    septembre: 8,
    octobre: 9,
    novembre: 10,
    decembre: 11
  };

  const normalizeMonth = (month) =>
    month
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split(' ');
    const monthIndex = monthMap[normalizeMonth(month)] ?? 0;

    return new Date(Number(year), monthIndex, Number(day));
  };

  const sortedArticles = [...articles].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const categories = ["Tous", "Formations", "Reconversion", "Financement", "VAE", "Bilan de compétences", "Conseils", "Recherche d'emploi", "Partenariat"];

  // Filtrer les articles selon la catégorie sélectionnée
  const filteredArticles = selectedCategory === "Tous" 
    ? sortedArticles 
    : sortedArticles.filter(article => article.category === selectedCategory);

  // Calculs pour la pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Réinitialiser la page lors du changement de catégorie
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Navigation pagination
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Head>
        <title>Blog | Atipik RH - Conseils et actualités formation</title>
        <meta name="description" content="Découvrez nos articles sur la formation professionnelle, la reconversion, le CPF, la VAE et l'accompagnement carrière." />
        <meta name="keywords" content="blog formation, conseils reconversion, CPF, VAE, bilan compétences, Atipik RH" />
        <link rel="canonical" href="https://atipikrh.fr/blog" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Header avec style amélioré */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
          
          {/* Background animé */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="relative inline-block mb-6">
                <h1 className="text-5xl lg:text-7xl font-black text-[#013F63] drop-shadow-sm tracking-tighter">
                  BLOG
                </h1>
                <Image 
                  src="/images/decorations/3 lignes orange.svg" 
                  alt="Élément décoratif"
                  width={45}
                  height={35}
                  className="absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16"
                />
              </div>
              <p className="text-xl text-[#013F63] font-medium">
                Conseils, actualités et témoignages pour réussir votre parcours professionnel
              </p>
            </div>
          </div>
          {/* Ligne orange à la séparation */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-orange-500 rounded-full z-10"></div>
        </section>

                 {/* Filtres par catégorie */}
         <section className="py-12 bg-white">
           <div className="container mx-auto px-4">
             <div className="max-w-6xl mx-auto">
               <div className="flex flex-wrap justify-center gap-4">
                 {categories.map((category, index) => (
                   <button
                     key={index}
                     onClick={() => handleCategoryChange(category)}
                     className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 shadow-sm hover:shadow-md ${
                       selectedCategory === category
                         ? 'bg-[#013F63] text-white shadow-lg hover:bg-[#012a4a]' 
                         : 'bg-white text-[#013F63] border border-[#013F63] hover:bg-blue-50 hover:border-[#012a4a]'
                     }`}
                   >
                     {category}
                   </button>
                 ))}
               </div>
             </div>
           </div>
         </section>

        {/* Articles du blog */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                  {currentArticles.length > 0 ? (
                   currentArticles.map((article) => (
                     <article key={article.id} className="group h-full">
                       <Link 
                         href={`/blog/${article.slug}`}
                         className="block h-full"
                       >
                         <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer">
                           {/* Image */}
                           <div className="relative h-48 overflow-hidden flex-shrink-0">
                             <Image
                               src={article.image}
                               alt={article.title}
                               width={400}
                               height={300}
                               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                             />
                             <div className="absolute top-4 left-4">
                               <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                 {article.category}
                               </span>
                             </div>
                           </div>
 
                           {/* Contenu */}
                           <div className="p-6 flex flex-col flex-grow">
                             {/* Métadonnées */}
                             <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 flex-shrink-0">
                               <div className="flex items-center gap-1">
                                 <Calendar className="w-4 h-4" />
                                 <span>{article.date}</span>
                               </div>
                               <div className="flex items-center gap-1">
                                 <Clock className="w-4 h-4" />
                                 <span>{article.readTime}</span>
                               </div>
                             </div>
 
                             {/* Titre */}
                            <h2 className="text-xl font-bold text-[#013F63] mb-3 leading-tight group-hover:text-[#013F63] transition-colors flex-shrink-0 line-clamp-2">
                               {article.title}
                             </h2>
 
                             {/* Extrait */}
                             <p className="text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-3">
                               {article.excerpt}
                             </p>
 
                             {/* Auteur et lien */}
                             <div className="flex items-center justify-between flex-shrink-0 mt-auto">
                               <div className="flex items-center gap-2 text-sm text-gray-500">
                                 <User className="w-4 h-4" />
                                 <span>{article.author}</span>
                               </div>
                               <div className="inline-flex items-center gap-1 text-orange-500 group-hover:text-[#013F63] font-medium text-sm transition-colors">
                                 Lire la suite
                                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                               </div>
                             </div>
                           </div>
                         </div>
                       </Link>
                     </article>
                   ))
                 ) : (
                   <div className="col-span-full text-center py-12">
                     <p className="text-gray-500 text-lg">
                       Aucun article trouvé pour la catégorie "{selectedCategory}".
                     </p>
                   </div>
                 )}
               </div>

              {/* Pagination */}
              {filteredArticles.length > articlesPerPage && (
                <div className="mt-16 flex flex-col items-center gap-6">
                  {/* Informations pagination */}
                  <div className="text-center">
                    <p className="text-gray-600">
                      Affichage de {startIndex + 1} à {Math.min(endIndex, filteredArticles.length)} sur {filteredArticles.length} articles
                    </p>
                  </div>

                  {/* Contrôles navigation */}
                  <div className="flex items-center gap-4">
                    {/* Bouton précédent */}
                    <button
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        currentPage === 1
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-[#013F63] border border-[#013F63] hover:bg-blue-50 hover:shadow-md'
                      }`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Précédent
                    </button>

                    {/* Indicateur page */}
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">Page</span>
                      <span className="bg-[#013F63] text-white px-4 py-2 rounded-lg font-semibold">
                        {currentPage}
                      </span>
                      <span className="text-gray-600">sur {totalPages}</span>
                    </div>

                    {/* Bouton suivant */}
                    <button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        currentPage === totalPages
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-[#013F63] border border-[#013F63] hover:bg-blue-50 hover:shadow-md'
                      }`}
                    >
                      Suivant
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-6">
                Besoin d'un accompagnement <span className="text-orange-500 font-brittany">personnalisé</span> ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Notre équipe d'experts vous accompagne dans votre projet professionnel
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition hover:scale-105"
                >
                  Nous contacter
                </Link>
                <Link 
                  href="/bilan-de-competences" 
                  className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition"
                >
                  Découvrir nos services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
} 