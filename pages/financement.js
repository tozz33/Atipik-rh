import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CreditCard, Calculator, Users, FileText, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react'

export default function Financement() {
  const [activeTab, setActiveTab] = useState('salaries');
  const salariesCards = [
    {
      icon: CreditCard,
      title: "CPF (Compte Personnel de Formation)",
      details: [
        { label: "Montant", value: "500€/an (800€ si moins qualifié), plafond 5000€" },
        { label: "Avantages", value: "Utilisation libre et confidentielle" },
        { label: "Démarches", value: "100% en ligne sur MonCompteFormation" },
        { label: "Délai", value: "11 jours maximum" }
      ],
      badge: "Solution recommandée - Prise en charge totale fréquente",
      badgeColor: "green",
      buttonText: "Vérifier mes droits CPF",
      buttonStyle: "primary",
      buttonLink: "https://www.moncompteformation.gouv.fr",
      external: true
    },
    {
      icon: FileText,
      title: "Plan de développement des compétences",
      details: [
        { label: "Financement", value: "100% pris en charge par l'employeur" },
        { label: "Avantages", value: "Formation sur temps de travail possible" },
        { label: "Conditions", value: "Accord de l'employeur nécessaire" },
        { label: "Délai", value: "Variable selon l'entreprise" }
      ],
      badge: "Idéal si la formation correspond aux besoins de l'entreprise",
      badgeColor: "blue",
      buttonText: "Nous contacter pour conseil",
      buttonStyle: "secondary",
      buttonLink: "/contact",
      external: false
    },
    {
      icon: Users,
      title: "Congés de formation",
      details: [
        { label: "Principe", value: "Congé sans solde pour se former" },
        { label: "Durée", value: "Jusqu'à 1 an (3 ans si formation longue)" },
        { label: "Conditions", value: "36 mois d'ancienneté, 12 mois dans l'entreprise" },
        { label: "Financement", value: "CPF + financement personnel" }
      ],
      badge: "Nécessite une planification et accord employeur",
      badgeColor: "orange",
      buttonText: "Étudier cette option",
      buttonStyle: "secondary",
      buttonLink: "/contact",
      external: false
    },
    {
      icon: Calculator,
      title: "Autres financements",
      details: [
        { label: "Financement personnel", value: "Facilités de paiement 3-4x" },
        { label: "Abondement CPF", value: "Complément personnel ou employeur" },
        { label: "Co-financement", value: "CPF + plan de formation" },
        { label: "Avantage", value: "Démarrage immédiat" }
      ],
      badge: "Solutions sur mesure selon votre situation",
      badgeColor: "gray",
      buttonText: "Conseil personnalisé",
      buttonStyle: "secondary",
      buttonLink: "/contact",
      external: false
    }
  ];

  const getBadgeColorClasses = (color) => {
    switch (color) {
      case 'green': return 'bg-green-50 text-green-700';
      case 'blue': return 'bg-blue-50 text-blue-700';
      case 'orange': return 'bg-orange-50 text-orange-700';
      case 'gray': return 'bg-gray-50 text-gray-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <>
      <Head>
        <title>Financement formations CPF, VAE, bilan de compétences | Atipik RH</title>
        <meta name="description" content="Découvrez toutes les solutions de financement pour vos formations à Bordeaux : CPF, Pôle Emploi, employeur selon votre statut professionnel." />
        <meta name="keywords" content="financement formation CPF, Mon Compte Formation, financement bilan compétences, financement VAE, Pôle Emploi AIF" />
        <link rel="canonical" href="https://atipikrh.fr/financement" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
          {/* Background animé */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          
          <div className="relative z-10 container mx-auto px-4 pt-8 pb-8">
            
            {/* Titre principal */}
            <div className="text-center mb-8 max-w-5xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
                Solutions de <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">financement</span><br/>
                selon votre <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">statut</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-8">
                Chaque situation professionnelle offre des possibilités de financement spécifiques<br className="hidden lg:block"/>
                <span className="text-blue-600 font-medium">Découvrez celles qui vous correspondent</span>
              </p>
              

            </div>
          </div>
        </section>

        {/* Section principale avec onglets */}
        <section className="py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Onglets de navigation avec nouveau design */}
              <div className="mb-8">
                <div className="flex justify-center">
                  <div className="flex bg-white p-2 rounded-2xl shadow-lg border border-gray-200 gap-1">
                    <button 
                      onClick={() => setActiveTab('salaries')}
                      className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                        activeTab === 'salaries' 
                          ? 'bg-[#013F63] text-white shadow-lg transform scale-105' 
                          : 'text-gray-600 hover:text-[#013F63] hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        <span>Salariés</span>
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => setActiveTab('demandeurs-emploi')}
                      className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                        activeTab === 'demandeurs-emploi' 
                          ? 'bg-orange-500 text-white shadow-lg transform scale-105' 
                          : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5" />
                        <span className="hidden sm:inline">Chercheurs d'emploi</span>
                        <span className="sm:hidden">Chercheurs</span>
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => setActiveTab('independants')}
                      className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                        activeTab === 'independants' 
                          ? 'bg-purple-600 text-white shadow-lg transform scale-105' 
                          : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        <span className="hidden sm:inline">Travailleurs indépendants</span>
                        <span className="sm:hidden">Indépendants</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Contenu conditionnel basé sur l'onglet actif */}
              {activeTab === 'salaries' && (
                <>
                  {/* Options de financement pour salariés avec défilement horizontal */}
                  <div className="overflow-x-auto pb-4">
                    <div className="flex gap-6 w-max">
                      {salariesCards.map((card, index) => {
                        const IconComponent = card.icon;
                        return (
                          <div key={index} className="flex-shrink-0 w-80">
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[550px]">
                              <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-[#013F63] rounded-full flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#013F63]">{card.title}</h3>
                              </div>
                              <div className="space-y-3 mb-6 flex-grow">
                                {card.details.map((detail, detailIndex) => (
                                  <p key={detailIndex} className="text-gray-700 text-sm">
                                    <strong>{detail.label} :</strong> {detail.value}
                                  </p>
                                ))}
                              </div>
                              <div className={`${getBadgeColorClasses(card.badgeColor)} rounded-lg p-3 mb-6`}>
                                <p className="text-xs font-medium text-center">
                                  {card.badge}
                                </p>
                              </div>
                              {card.external ? (
                                <a 
                                  href={card.buttonLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition mt-auto ${
                                    card.buttonStyle === 'primary' 
                                      ? 'bg-[#013F63] hover:bg-[#012a4a] text-white' 
                                      : 'border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white'
                                  }`}
                                >
                                  {card.buttonText}
                                </a>
                              ) : (
                                <Link 
                                  href={card.buttonLink} 
                                  className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition mt-auto ${
                                    card.buttonStyle === 'primary' 
                                      ? 'bg-[#013F63] hover:bg-[#012a4a] text-white' 
                                      : 'border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white'
                                  }`}
                                >
                                  {card.buttonText}
                                </Link>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'demandeurs-emploi' && (
                <>
                  {/* Options de financement pour demandeurs d'emploi */}
                  <div className="grid md:grid-cols-3 gap-8">
                    
                    {/* AIF */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[550px]">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#013F63]">AIF (Aide Individuelle à la Formation)</h3>
                      </div>
                      <div className="space-y-3 mb-6 flex-grow">
                        <p className="text-gray-700 text-sm"><strong>Financement :</strong> Complète le CPF ou finance totalement</p>
                        <p className="text-gray-700 text-sm"><strong>Conditions :</strong> Formation en lien avec projet professionnel</p>
                        <p className="text-gray-700 text-sm"><strong>Démarches :</strong> Via votre conseiller Pôle Emploi</p>
                        <p className="text-gray-700 text-sm"><strong>Délai :</strong> 15-30 jours après validation</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 mb-6">
                        <p className="text-xs text-green-700 font-medium text-center">
                          Solution privilégiée pour les demandeurs d'emploi
                        </p>
                      </div>
                      <Link href="/contact" className="block w-full text-center px-6 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold transition mt-auto">
                        Préparer le dossier AIF
                      </Link>
                    </div>

                    {/* CPF */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[550px]">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <CreditCard className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#013F63]">CPF</h3>
                      </div>
                      <div className="space-y-3 mb-6 flex-grow">
                        <p className="text-gray-700 text-sm"><strong>Vos droits :</strong> Conservés pendant le chômage</p>
                        <p className="text-gray-700 text-sm"><strong>Utilisation :</strong> Libre et immédiate</p>
                        <p className="text-gray-700 text-sm"><strong>Complément :</strong> Souvent complété par l'AIF</p>
                        <p className="text-gray-700 text-sm"><strong>Avantage :</strong> Démarches 100% en ligne</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 mb-6">
                        <p className="text-xs text-blue-700 font-medium text-center">
                          Base de financement à utiliser en premier
                        </p>
                      </div>
                      <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold transition mt-auto">
                        Consulter mon CPF
                      </a>
                    </div>

                    {/* Auto-financement */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[550px]">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Calculator className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#013F63]">Auto-financement</h3>
                      </div>
                      <div className="space-y-3 mb-6 flex-grow">
                        <p className="text-gray-700 text-sm"><strong>Facilités :</strong> Paiement en 3-4 fois sans frais</p>
                        <p className="text-gray-700 text-sm"><strong>Réduction :</strong> Tarifs préférentiels possibles</p>
                        <p className="text-gray-700 text-sm"><strong>Rapidité :</strong> Démarrage immédiat</p>
                        <p className="text-gray-700 text-sm"><strong>ROI :</strong> Investissement pour retour à l'emploi</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 mb-6">
                        <p className="text-xs text-gray-700 font-medium text-center">
                          Solution de dernier recours avec accompagnement
                        </p>
                      </div>
                      <Link href="/contact" className="block w-full text-center px-6 py-3 rounded-full border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold transition mt-auto">
                        Étudier les modalités
                      </Link>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'independants' && (
                <>
                  {/* Options de financement pour indépendants */}
                  <div className="grid md:grid-cols-3 gap-8">
                    
                    {/* FAF */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[550px]">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#013F63]">FAF (Fonds d'Assurance Formation)</h3>
                      </div>
                      <div className="space-y-3 mb-6 flex-grow">
                        <p className="text-gray-700 text-sm"><strong>FIFPL :</strong> Professions libérales</p>
                        <p className="text-gray-700 text-sm"><strong>AGEFICE :</strong> Commerçants et dirigeants</p>
                        <p className="text-gray-700 text-sm"><strong>FAFCEA :</strong> Artisans</p>
                        <p className="text-gray-700 text-sm"><strong>Conditions :</strong> Être à jour des cotisations</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 mb-6">
                        <p className="text-xs text-green-700 font-medium text-center">
                          Financement selon votre activité et organisme
                        </p>
                      </div>
                      <Link href="/contact" className="block w-full text-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition mt-auto">
                        Identifier mon FAF
                      </Link>
                    </div>

                    {/* CPF */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[550px]">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <CreditCard className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#013F63]">CPF</h3>
                      </div>
                      <div className="space-y-3 mb-6 flex-grow">
                        <p className="text-gray-700 text-sm"><strong>Alimentation :</strong> 500€/an si vous cotisez</p>
                        <p className="text-gray-700 text-sm"><strong>Utilisation :</strong> Libre choix des formations</p>
                        <p className="text-gray-700 text-sm"><strong>Cumul :</strong> Possible avec financement FAF</p>
                        <p className="text-gray-700 text-sm"><strong>Démarches :</strong> 100% en ligne</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 mb-6">
                        <p className="text-xs text-blue-700 font-medium text-center">
                          Vérifiez vos droits acquis
                        </p>
                      </div>
                      <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition mt-auto">
                        Vérifier mes droits CPF
                      </a>
                    </div>

                    {/* Auto-financement */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-[550px]">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Calculator className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#013F63]">Auto-financement</h3>
                      </div>
                      <div className="space-y-3 mb-6 flex-grow">
                        <p className="text-gray-700 text-sm"><strong>Déduction fiscale :</strong> Charge déductible de votre activité</p>
                        <p className="text-gray-700 text-sm"><strong>Facilités :</strong> Paiement échelonné possible</p>
                        <p className="text-gray-700 text-sm"><strong>ROI :</strong> Développement de votre activité</p>
                        <p className="text-gray-700 text-sm"><strong>Flexibilité :</strong> Démarrage immédiat</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 mb-6">
                        <p className="text-xs text-gray-700 font-medium text-center">
                          Investissement professionnel déductible
                        </p>
                      </div>
                      <Link href="/contact" className="block w-full text-center px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold transition mt-auto">
                        Solutions personnalisées
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Section conseil personnalisé */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center">
                <h3 className="text-3xl font-bold text-white mb-6">Besoin d'aide pour choisir ?</h3>
                <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
                  Chaque situation est unique. Nos conseillers analysent votre profil 
                  et vous orientent vers la meilleure solution de financement selon votre statut.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
                    Conseil gratuit
                  </Link>
                  <a href="mailto:contact@atipikrh.fr" className="inline-flex px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold transition">
                    Nous écrire
                  </a>
                </div>
                <p className="text-gray-400 mt-6">
                  Appelez-nous au <a href="tel:0783019955" className="text-white hover:underline font-medium">07 83 01 99 55</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ rapide */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Questions <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">fréquentes</span>
                </h2>
              </div>

              {/* Questions FAQ par statut */}
              <div className="space-y-6">
                
                <details className="bg-blue-50 rounded-3xl p-8 group">
                  <summary className="font-bold text-xl cursor-pointer text-[#013F63] list-none flex items-center justify-between">
                    [Salarié] Mon employeur sera-t-il informé si j'utilise mon CPF ?
                    <ArrowRight className="w-6 h-6 group-open:rotate-90 transition-transform duration-200" />
                  </summary>
                  <p className="mt-6 text-gray-700 leading-relaxed">
                    Non, l'utilisation de votre CPF est strictement confidentielle. Votre employeur n'a aucune visibilité sur vos démarches de formation.
                  </p>
                </details>

                <details className="bg-orange-50 rounded-3xl p-8 group">
                  <summary className="font-bold text-xl cursor-pointer text-[#013F63] list-none flex items-center justify-between">
                    [Demandeur d'emploi] Comment obtenir l'AIF de Pôle Emploi ?
                    <ArrowRight className="w-6 h-6 group-open:rotate-90 transition-transform duration-200" />
                  </summary>
                  <p className="mt-6 text-gray-700 leading-relaxed">
                    Présentez votre projet de formation à votre conseiller Pôle Emploi. La formation doit être cohérente avec votre projet professionnel. Nous vous aidons à préparer le dossier.
                  </p>
                </details>

                <details className="bg-purple-50 rounded-3xl p-8 group">
                  <summary className="font-bold text-xl cursor-pointer text-[#013F63] list-none flex items-center justify-between">
                    [Indépendant] Comment connaître mon organisme de financement ?
                    <ArrowRight className="w-6 h-6 group-open:rotate-90 transition-transform duration-200" />
                  </summary>
                  <p className="mt-6 text-gray-700 leading-relaxed">
                    Cela dépend de votre activité : FIFPL (professions libérales), AGEFICE (commerçants), FAFCEA (artisans). Nous vous aidons à identifier le bon organisme.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-3xl p-8 group">
                  <summary className="font-bold text-xl cursor-pointer text-[#013F63] list-none flex items-center justify-between">
                    Puis-je cumuler plusieurs financements ?
                    <ArrowRight className="w-6 h-6 group-open:rotate-90 transition-transform duration-200" />
                  </summary>
                  <p className="mt-6 text-gray-700 leading-relaxed">
                    Oui ! Par exemple : CPF + AIF pour les demandeurs d'emploi, CPF + plan de formation pour les salariés, ou CPF + FAF pour les indépendants.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <Footer />

      </div>
    </>
  )
} 