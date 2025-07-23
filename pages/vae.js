import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Calendar, CheckCircle, FileText, Users, Award, Star, ArrowRight, ExternalLink, Phone, Mail, Clock, Target, Briefcase, ChevronDown } from 'lucide-react'

export default function VAE() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Qui peut faire une VAE ?",
      answer: "Toute personne justifiant d'au moins 1 an d'expérience (continue ou non) en lien avec le diplôme visé. Cette expérience peut être salariée, non salariée, bénévole, de volontariat, ou même en tant qu'élu."
    },
    {
      question: "Combien de temps dure une VAE ?",
      answer: "En moyenne, il faut compter 6 à 12 mois entre le début de l'accompagnement et le passage devant le jury. Cette durée varie selon votre disponibilité, le diplôme visé et votre investissement personnel."
    },
    {
      question: "Quel est le taux de réussite ?",
      answer: "Avec notre accompagnement, 85% de nos candidats obtiennent une validation totale dès le premier passage. 10% obtiennent une validation partielle et complètent ensuite leur parcours. Le taux d'échec total est très faible."
    },
    {
      question: "Comment financer ma VAE ?",
      answer: "La VAE est éligible au CPF (Compte Personnel de Formation). Dans la plupart des cas, vos droits CPF couvrent intégralement le coût de l'accompagnement. D'autres financements sont possibles : Pôle Emploi, employeur, OPCO..."
    },
    {
      question: "Puis-je faire une VAE en étant salarié ?",
      answer: "Absolument ! La VAE peut se faire en parallèle de votre activité professionnelle. Notre accompagnement s'adapte à vos contraintes (soirs, week-ends, distanciel). Vous n'êtes pas obligé d'informer votre employeur si vous utilisez le CPF."
    },
    {
      question: "Quelle est la différence entre vos deux formules ?",
      answer: "La formule Standard (24h) convient aux candidats autonomes avec une expérience bien structurée. La formule Premium (30h) inclut plus d'accompagnement à la rédaction, des simulations d'oral supplémentaires et un suivi renforcé."
    }
  ];

  return (
    <>
      <Head>
        <title>VAE à Bordeaux : obtenez votre diplôme par l'expérience | Atipik RH</title>
        <meta name="description" content="Transformez votre expérience en diplôme grâce à la VAE à Bordeaux. Accompagnement expert, 85% de réussite, 1er RDV offert. Financement CPF possible." />
        <meta name="keywords" content="VAE Bordeaux, validation acquis expérience, diplôme par expérience, accompagnement VAE, financement CPF VAE" />
        <link rel="canonical" href="https://atipikrh.fr/vae" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Hero Section avec background animé */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
          {/* Éléments graphiques décoratifs */}
          <div className="absolute top-0 right-0 w-88 h-88 opacity-45">
            <svg viewBox="0 0 352 352" className="w-full h-full">
              <path d="M352,0 C352,0 284,68 216,68 C148,68 80,136 80,204 C80,272 148,340 216,340 L352,340 Z" fill="url(#vaeBlueGradient)" />
              <defs>
                <linearGradient id="vaeBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute top-12 right-12 w-36 h-36 opacity-30">
            <svg viewBox="0 0 144 144" className="w-full h-full">
              <circle cx="72" cy="72" r="56" fill="url(#vaeOrangeGradient)" />
              <defs>
                <linearGradient id="vaeOrangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Background animé existant */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          
          <div className="relative z-10 container mx-auto px-4 pt-8 pb-8">
            
            {/* Titre principal */}
            <div className="text-center mb-8 max-w-5xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
                VAE à <span className="text-[#013F63] font-brittany text-5xl lg:text-7xl">Bordeaux</span><br/>
                Transformez votre <span className="text-orange-500 font-brittany text-5xl lg:text-7xl">expérience</span> en diplôme
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-8">
                15 ans d'expertise, 85% de réussite<br className="hidden lg:block"/>
                <span className="text-[#013F63] font-medium">Faites reconnaître officiellement vos compétences</span>
              </p>
              
              {/* Statistiques hero */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                  <div className="text-3xl font-bold text-[#013F63] mb-2">85%</div>
                  <p className="text-gray-700">de réussite avec notre accompagnement</p>
                </div>
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                  <div className="text-3xl font-bold text-[#013F63] mb-2">1 an</div>
                  <p className="text-gray-700">d'expérience minimum requis</p>
                </div>
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                  <div className="text-3xl font-bold text-[#013F63] mb-2">100%</div>
                  <p className="text-gray-700">des diplômes accessibles par VAE</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                  
                  RDV conseil gratuit
                </Link>
                <Link href="/vae/cpf" className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                  Financement CPF
                  
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Qu'est-ce que la VAE */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Qu'est-ce que la <span className="text-[#013F63] font-brittany text-5xl lg:text-6xl">VAE</span> ?
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  La Validation des Acquis de l'Expérience permet d'obtenir tout ou partie d'un diplôme, 
                  titre professionnel ou certificat de qualification en faisant valoir votre expérience 
                  professionnelle. C'est un droit individuel inscrit dans le Code du travail.
                </p>
              </div>

              {/* Avantages de la VAE */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-purple-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#013F63] mb-4">Diplôme reconnu</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Le diplôme obtenu par VAE a la même valeur qu'un diplôme obtenu 
                      par la formation traditionnelle
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#013F63] mb-4">Gain de temps</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Obtenez votre diplôme sans reprendre des études longues. 
                      Votre expérience compte !
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#013F63] mb-4">Évolution pro</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Boostez votre carrière, négociez une promotion ou 
                      changez de secteur d'activité
                    </p>
                  </div>
                </div>
              </div>

              {/* Expertise Atipik RH */}
              <div className="bg-gradient-to-r from-purple-50 to-white rounded-3xl p-12 shadow-xl border border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-3xl font-bold text-[#013F63] mb-6">
                    Atipik RH, votre expert VAE en Gironde
                  </h3>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Basés à Lormont près de Bordeaux, nous accompagnons depuis plus de 15 ans 
                    les professionnels dans leur démarche VAE. Notre taux de réussite de 85% 
                    témoigne de notre expertise et de la qualité de notre accompagnement.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#013F63] mb-2">15 ans</div>
                      <p className="text-gray-700">d'expérience en accompagnement VAE</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#013F63] mb-2">200+</div>
                      <p className="text-gray-700">candidats accompagnés avec succès</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processus VAE en 5 étapes */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Le parcours VAE en <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">5 étapes</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  De l'information initiale à l'obtention de votre diplôme, nous vous accompagnons 
                  à chaque étape de votre parcours VAE
                </p>
              </div>

              {/* Étapes */}
              <div className="space-y-8">
                
                {/* Étape 1 */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
                  <div className="absolute -left-6 top-8 w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                    1
                  </div>
                  <div className="ml-16">
                    <h3 className="text-2xl font-bold text-[#013F63] mb-4">
                      Information et conseil
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Premier rendez-vous gratuit pour vérifier la faisabilité de votre projet VAE. 
                      Nous analysons votre parcours, identifions le diplôme adapté et validons 
                      votre éligibilité.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-purple-600 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        1 à 2 heures
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        Gratuit chez Atipik RH
                      </span>
                    </div>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
                  <div className="absolute -left-6 top-8 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                    2
                  </div>
                  <div className="ml-16">
                    <h3 className="text-2xl font-bold text-[#013F63] mb-4">
                      Recevabilité (Livret 1)
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Constitution du dossier de recevabilité qui présente votre parcours et 
                      justifie de votre expérience. Nous vous aidons à rassembler les pièces 
                      justificatives et rédiger votre demande.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-blue-600 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        1 à 2 mois
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Accompagnement : 3 heures
                      </span>
                    </div>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
                  <div className="absolute -left-6 top-8 w-16 h-16 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                    3
                  </div>
                  <div className="ml-16">
                    <h3 className="text-2xl font-bold text-[#013F63] mb-4">
                      Rédaction du dossier (Livret 2)
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      C'est le cœur de la VAE ! Description détaillée de vos activités en lien 
                      avec le référentiel du diplôme. Notre accompagnement méthodologique est 
                      crucial pour valoriser votre expérience.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-sky-600 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        3 à 6 mois
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Accompagnement : 15 à 24h
                      </span>
                    </div>
                  </div>
                </div>

                {/* Étape 4 */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
                  <div className="absolute -left-6 top-8 w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                    4
                  </div>
                  <div className="ml-16">
                    <h3 className="text-2xl font-bold text-[#013F63] mb-4">
                      Préparation à l'oral
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Entraînement à la présentation devant le jury. Simulations d'entretien, 
                      conseils sur la posture, gestion du stress et argumentation de votre dossier.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-orange-600 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        2 à 3 séances
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Accompagnement : 6 heures
                      </span>
                    </div>
                  </div>
                </div>

                {/* Étape 5 */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
                  <div className="absolute -left-6 top-8 w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                    5
                  </div>
                  <div className="ml-16">
                    <h3 className="text-2xl font-bold text-[#013F63] mb-4">
                      Passage devant le jury
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Présentation de votre parcours et échange avec le jury de professionnels 
                      et formateurs. En cas de validation partielle, nous vous accompagnons 
                      pour compléter votre parcours.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-purple-600 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        30 min à 1h
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        Résultats sous 15 jours
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos 2 formules */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Nos <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">2 formules</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Tarifs adaptés selon le niveau de diplôme visé
                </p>
              </div>

              {/* Grille des formules par niveau */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                
                {/* Niveau 3 et 4 */}
                <div className="flex flex-col h-[550px]">
                  {/* Header avec niveau */}
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-t-3xl p-6 text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">Niveau 3 et 4</h3>
                    <p className="text-orange-100 font-medium">CAP - BEP - BAC</p>
                  </div>
                  
                  {/* Contenu de la carte */}
                  <div className="bg-white rounded-b-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col flex-grow">
                    
                    {/* Prix */}
                    <div className="text-center mb-8">
                      <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                        2 300<span className="text-2xl">€</span>
                      </div>
                      <p className="text-gray-500 text-sm">(sans frais d'acte formatif et frais de jurys)</p>
                    </div>
                    
                    {/* Durée d'accompagnement */}
                    <div className="flex items-center justify-center gap-3 mb-8 text-blue-600">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">Jusqu'à 30 heures de face à face</span>
                    </div>
                    
                    {/* Services inclus */}
                    <div className="space-y-3 mb-8 flex-grow">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Accompagnement à la recevabilité (Livret 1)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Méthodologie de rédaction du livret 2</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Accompagnement personnalisé à la rédaction</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Préparation à l'oral devant le jury</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Suivi jusqu'à validation complète</span>
                      </div>
                    </div>
                    
                    {/* Bouton */}
                    <Link href="/contact" className="block w-full text-center px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition mt-auto">
                      Parlons-en
                    </Link>
                  </div>
                </div>

                {/* Niveau 5 */}
                <div className="flex flex-col h-[550px]">
                  {/* Header avec niveau */}
                  <div className="bg-gradient-to-r from-[#013F63] to-[#012a4a] text-white rounded-t-3xl p-6 text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">Niveau 5</h3>
                    <p className="text-slate-200 font-medium">DEUG, BTS, DUT, DEUST, BUT, TITRE PROFESSIONNEL</p>
                  </div>
                  
                  {/* Contenu de la carte */}
                  <div className="bg-white rounded-b-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col flex-grow">
                    
                    {/* Prix */}
                    <div className="text-center mb-8">
                      <div className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-2">
                        1 900<span className="text-2xl">€</span>
                      </div>
                      <p className="text-gray-500 text-sm">(sans frais d'acte formatif et frais de jurys)</p>
                    </div>
                    
                    {/* Durée d'accompagnement */}
                    <div className="flex items-center justify-center gap-3 mb-8 text-[#013F63]">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">Jusqu'à 24 heures de face à face</span>
                    </div>
                    
                    {/* Services inclus */}
                    <div className="space-y-3 mb-8 flex-grow">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#013F63] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Accompagnement à la recevabilité (Livret 1)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#013F63] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Méthodologie de rédaction du livret 2</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#013F63] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Accompagnement personnalisé à la rédaction</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#013F63] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Préparation à l'oral devant le jury</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#013F63] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Suivi jusqu'à validation complète</span>
                      </div>
                    </div>
                    
                    {/* Bouton */}
                    <Link href="/contact" className="block w-full text-center px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition mt-auto">
                      Parlons-en
                    </Link>
                  </div>
                </div>
              </div>

              {/* Info financement */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 border border-[#013F63] text-center">
                <p className="text-lg text-[#013F63] font-medium mb-4">
                  💡 Nos formules sont 100% finançables par le CPF
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/vae/cpf" className="inline-flex px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition">
                    Financement CPF
                  </Link>
                  <Link href="/contact" className="inline-flex px-6 py-3 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                    Premier RDV gratuit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diplômes populaires */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Diplômes les plus <span className="text-sky-600 font-brittany text-5xl lg:text-6xl">demandés</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Les certifications plébiscitées par nos candidats à Bordeaux
                </p>
              </div>

              {/* Grille des secteurs */}
              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Commerce & Management */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-6 text-center">
                    Commerce & Management
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      BTS MCO (Management Commercial)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      BTS NDRC (Négociation)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Licence pro Commerce
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Bachelor Responsable Commercial
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Master Management
                    </li>
                  </ul>
                </div>

                {/* RH & Formation */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-6 text-center">
                    RH & Formation
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      Titre Assistant RH
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      Licence RH
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      Titre Formateur d'Adultes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      Master GRH
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                      Titre Conseiller en Insertion
                    </li>
                  </ul>
                </div>

                {/* Santé & Social */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-6 text-center">
                    Santé & Social
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                      CAP AEPE (Petite Enfance)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                      Diplôme d'Aide-Soignant
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                      DEAES (Accompagnant Éducatif)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                      Moniteur Éducateur
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                      CAFERUIS (Encadrement)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Ils ont réussi leur <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">VAE</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Découvrez les témoignages de nos candidats qui ont transformé 
                  leur expérience en diplôme reconnu
                </p>
              </div>

              {/* Grille témoignages */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Témoignage 1 */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      MC
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#013F63]">Marie C.</h4>
                      <p className="text-gray-600">BTS MCO obtenu par VAE</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-4">
                    "Après 10 ans dans le commerce, j'avais besoin d'un diplôme pour évoluer. 
                    L'accompagnement Atipik RH m'a permis de structurer mon expérience et de 
                    décrocher mon BTS. Aujourd'hui je suis responsable de magasin !"
                  </p>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Témoignage 2 */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      PL
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#013F63]">Pierre L.</h4>
                      <p className="text-gray-600">Titre FPA validé à 100%</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-4">
                    "En reconversion professionnelle, la VAE m'a permis d'obtenir le titre 
                    de Formateur d'Adultes. L'équipe Atipik m'a vraiment aidé à valoriser 
                    mon expérience de manager. Parfaitement accompagné !"
                  </p>
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Questions <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">fréquentes</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Tout ce que vous devez savoir sur la VAE
                </p>
              </div>

              {/* Questions FAQ */}
              <div className="space-y-6">
                
                                 {faqData.map((item, index) => (
                   <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                     <button
                       onClick={() => toggleFaq(index)}
                       className="w-full p-8 text-left font-bold text-xl cursor-pointer text-[#013F63] flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                     >
                       <span className="pr-4">{item.question}</span>
                       <ChevronDown
                         className={`w-6 h-6 transition-transform duration-200 flex-shrink-0 ${
                           openFaq === index ? 'rotate-180' : ''
                         }`}
                       />
                     </button>
                     {openFaq === index && (
                       <div className="px-8 pb-8">
                         <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                       </div>
                     )}
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#013F63]">
                Transformez votre expérience en reconnaissance officielle
              </h2>
              <p className="text-xl mb-12 leading-relaxed text-gray-600">
                Votre expertise professionnelle a de la valeur. La VAE vous permet d'obtenir 
                un diplôme reconnu qui correspond à vos compétences réelles.
              </p>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-12">
                <h3 className="text-2xl font-bold text-[#013F63] mb-4">
                  Consultation gratuite et sans engagement
                </h3>
                <p className="text-lg mb-6 text-gray-700">
                  Échangeons sur votre parcours pour évaluer ensemble la faisabilité de votre projet VAE
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg">
                    Prendre rendez-vous
                  </Link>
                  <Link href="/vae/cpf" className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                    Financement CPF
                  </Link>
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