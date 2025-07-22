import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Users, 
  Target, 
  Award, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Star,
  ChevronDown,
  MapPin,
  Heart,
  Lightbulb
} from 'lucide-react';

export default function BilanCompetences() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Combien de temps dure un bilan de compétences ?",
      answer: "Un bilan de compétences dure 24 heures au total, réparties sur 2 à 3 mois. Le rythme est flexible : généralement 1 à 2 séances par semaine de 2-3 heures, adaptées à vos disponibilités professionnelles et personnelles."
    },
    {
      question: "Le bilan de compétences est-il confidentiel ?",
      answer: "Oui, totalement. Votre employeur n'est pas informé si vous utilisez votre CPF. Les résultats vous appartiennent exclusivement. Seul un document de synthèse vous est remis, que vous êtes libre de partager ou non."
    },
    {
      question: "Puis-je faire mon bilan en ligne ?",
      answer: "Oui ! Nous proposons des bilans 100% à distance via visioconférence. L'efficacité est la même qu'en présentiel, avec plus de flexibilité. Idéal si vous habitez loin de Bordeaux ou avez des contraintes horaires."
    },
    {
      question: "Quelle est la différence avec un coaching ?",
      answer: "Le bilan de compétences suit une méthodologie structurée et réglementée. Il comprend des tests validés scientifiquement et aboutit à un projet professionnel concret. Le coaching est plus libre dans sa forme et ses objectifs."
    },
    {
      question: "À quelle fréquence puis-je faire un bilan ?",
      answer: "Il n'y a pas de limite légale, mais nous recommandons d'attendre au moins 5 ans entre deux bilans pour que la démarche garde tout son sens. Vos droits CPF se rechargent chaque année jusqu'à un plafond."
    }
  ];

  return (
    <>
      <Header isFixed={true} />
      
      {/* Spacer for fixed header */}
      <div className="h-16"></div>

      {/* Hero Section moderne avec background animé */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background animé */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        
        <div className="relative z-10 container mx-auto px-4 pt-8 pb-8">
          <div className="text-center mb-8 max-w-5xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
              Bilan de <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">compétences</span><br/>
              à <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">Bordeaux</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-8">
              Révélez votre potentiel et construisez votre avenir professionnel<br className="hidden lg:block"/>
              <span className="text-orange-500 font-medium">avec un accompagnement personnalisé</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                
                RDV découverte gratuit
              </Link>
              <Link href="/bilan-de-competences/quiz" className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                Quiz d'éligibilité
                
              </Link>
            </div>
          </div>


        </div>
      </section>

      {/* Introduction - Style storytelling */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight">
                Qu'est-ce qu'un <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">bilan de compétences</span> ?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Un dispositif d'accompagnement personnalisé qui vous permet d'analyser vos compétences, 
                aptitudes et motivations pour définir un projet professionnel réaliste
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#013F63] mb-4">24 heures</h3>
                <p className="text-gray-600 leading-relaxed">
                  d'accompagnement individuel réparties sur 2 à 3 mois, adaptées à votre rythme
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-orange-500" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#013F63] mb-4">100% personnalisé</h3>
                <p className="text-gray-600 leading-relaxed">
                  Un parcours adapté à votre situation et vos objectifs professionnels
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-[#013F63]" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#013F63] mb-4">Confidentiel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vos échanges restent strictement confidentiels, sans obligation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les 3 phases - Style moderne avec fonds colorés */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Éléments décoratifs de fond */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight">
                Les <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">3 phases</span> du bilan
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Une méthodologie éprouvée qui vous guide étape par étape vers la clarification 
                de votre projet professionnel
              </p>
            </div>

            <div className="space-y-8">
              {/* Phase 1 - Fond bleu clair */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 shadow-xl border border-blue-200 group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-4">
                        Phase préliminaire
                      </h3>
                      <div className="inline-flex items-center gap-2 bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        <Clock className="w-4 h-4" />
                        2-4 heures
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Analyse de vos besoins, définition des objectifs et présentation de la méthodologie. 
                        C'est le moment de créer une relation de confiance avec votre consultant et de 
                        personnaliser votre parcours selon vos attentes spécifiques.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">Définition des objectifs</span>
                        <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">Relation de confiance</span>
                        <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">Méthodologie</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 - Fond orange clair */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-8 shadow-xl border border-orange-200 group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-4">
                        Phase d'investigation
                      </h3>
                      <div className="inline-flex items-center gap-2 bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        <Clock className="w-4 h-4" />
                        16-18 heures
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Exploration approfondie de vos compétences, valeurs, intérêts et motivations. 
                        Tests psychométriques, analyse du parcours et identification des potentiels. 
                        C'est le cœur du processus de découverte et d'auto-connaissance.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="bg-white text-orange-700 px-3 py-1 rounded-full text-sm border border-orange-200">Tests psychométriques</span>
                        <span className="bg-white text-orange-700 px-3 py-1 rounded-full text-sm border border-orange-200">Analyse des compétences</span>
                        <span className="bg-white text-orange-700 px-3 py-1 rounded-full text-sm border border-orange-200">Identification potentiels</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 - Fond bleu foncé */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-slate-200 group-hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#013F63] to-[#012a4a] text-white rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#013F63] mb-4">
                        Phase de conclusion
                      </h3>
                      <div className="inline-flex items-center gap-2 bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        <Clock className="w-4 h-4" />
                        4-6 heures
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Définition et validation de votre projet professionnel. Élaboration d'un plan d'action 
                        détaillé et remise d'un document de synthèse complet. Vous repartez avec une 
                        feuille de route claire pour concrétiser vos objectifs.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="bg-white text-slate-700 px-3 py-1 rounded-full text-sm border border-slate-200">Projet professionnel</span>
                        <span className="bg-white text-slate-700 px-3 py-1 rounded-full text-sm border border-slate-200">Plan d'action</span>
                        <span className="bg-white text-slate-700 px-3 py-1 rounded-full text-sm border border-slate-200">Document synthèse</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call-to-action en bas de section */}
            <div className="mt-16 text-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-orange-200 rounded-3xl blur-lg opacity-30"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <h4 className="text-2xl font-bold text-[#013F63] mb-4">
                    Prêt(e) à commencer votre bilan de compétences ?
                  </h4>
                  <p className="text-lg text-gray-600 mb-6">
                    Un accompagnement personnalisé vous attend pour construire votre projet professionnel
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition text-lg hover:scale-105">
                      RDV découverte gratuit
                    </Link>
                    <Link href="/bilan-de-competences/quiz" className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                      Quiz d'éligibilité
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui - Design moderne avec cartes */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight">
                Pour <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">qui</span> ?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Le bilan de compétences s'adresse à tous les actifs en questionnement professionnel
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Users className="w-8 h-8 text-blue-600 mr-4" />
                    <h3 className="text-xl lg:text-2xl font-bold text-[#013F63]">Vous êtes salarié(e)</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Envie d'évoluer dans votre entreprise</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Besoin de changement après plusieurs années</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Questionnement sur une reconversion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Préparation d'une mobilité interne</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 text-orange-500 mr-4" />
                    <h3 className="text-xl lg:text-2xl font-bold text-[#013F63]">Vous êtes demandeur d'emploi</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Redéfinir votre projet après un licenciement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Valoriser vos compétences différemment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Explorer de nouvelles pistes professionnelles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span>Retrouver confiance en vos capacités</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Info recommandation */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 border border-[#013F63] text-center">
              <p className="text-lg text-[#013F63] font-medium mb-4">
                98% de nos bénéficiaires recommandent notre accompagnement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/bilan-de-competences/quiz" className="inline-flex px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition">
                  Faire le quiz d'éligibilité
                </Link>
                <Link href="/contact" className="inline-flex px-6 py-3 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                  Premier RDV gratuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight">
                Ils ont transformé leur <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">vie professionnelle</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Découvrez les témoignages de ceux qui ont franchi le pas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                    "Après 15 ans dans la comptabilité, je ne me sentais plus à ma place. 
                    Le bilan m'a permis de révéler ma passion pour l'accompagnement. 
                    Aujourd'hui, je suis conseillère en insertion professionnelle et épanouie !"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      M
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">Marie L., 42 ans</div>
                      <div className="text-sm text-gray-500">Bordeaux</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                    "Suite à un burn-out, j'avais besoin de prendre du recul. L'accompagnement 
                    d'Atipik RH m'a aidé à identifier mes vraies valeurs. J'ai créé mon entreprise 
                    et je n'ai jamais été aussi heureux."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      T
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">Thomas P., 38 ans</div>
                      <div className="text-sm text-gray-500">Mérignac</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financement */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse animation-delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight">
                Des solutions de <span className="text-[#013F63] font-brittany text-5xl lg:text-6xl">financement</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Plusieurs options s'offrent à vous pour financer votre bilan de compétences
              </p>
            </div>

            <div className="mb-12">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-30"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="w-10 h-10 text-[#013F63]" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#013F63] mb-4">
                      100% finançable par le CPF
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
                      Le bilan de compétences est éligible au Compte Personnel de Formation. 
                      Vous pouvez utiliser vos droits CPF pour financer intégralement votre accompagnement, 
                      sans reste à charge.
                    </p>
                    <Link href="/bilan-de-competences/cpf" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition text-lg">
                      Découvrir le financement CPF
                      
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300 text-center">
                  <h4 className="text-xl font-semibold text-[#013F63] mb-3">Plan de développement</h4>
                  <p className="text-gray-600">
                    Pour les salariés, possibilité de prise en charge par l'employeur
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300 text-center">
                  <h4 className="text-xl font-semibold text-[#013F63] mb-3">Pôle Emploi</h4>
                  <p className="text-gray-600">
                    Financement possible pour les demandeurs d'emploi via l'AIF
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-shadow duration-300 text-center">
                  <h4 className="text-xl font-semibold text-[#013F63] mb-3">Financement personnel</h4>
                  <p className="text-gray-600">
                    Facilités de paiement en 3 ou 4 fois sans frais
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/bilan-de-competences/prix" className="text-orange-500 font-medium text-lg hover:underline">
                Voir nos tarifs détaillés →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nos 2 formules */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                Nos <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">2 formules</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Tarifs adaptés selon le niveau de diplôme visé dans votre projet
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
                      <span className="text-gray-700 text-sm">Phase préliminaire et bilan de fin</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Tests et questionnaires personnalisés</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Analyse approfondie de votre profil</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Définition du projet professionnel</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Document de synthèse complet</span>
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
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-3xl p-6 text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">Niveau 5</h3>
                  <p className="text-blue-100 font-medium">DEUG, BTS, DUT, DEUST, BUT, TITRE PROFESSIONNEL</p>
                </div>
                
                {/* Contenu de la carte */}
                <div className="bg-white rounded-b-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col flex-grow">
                  
                  {/* Prix */}
                  <div className="text-center mb-8">
                    <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                      1 900<span className="text-2xl">€</span>
                    </div>
                    <p className="text-gray-500 text-sm">(sans frais d'acte formatif et frais de jurys)</p>
                  </div>
                  
                  {/* Durée d'accompagnement */}
                  <div className="flex items-center justify-center gap-3 mb-8 text-blue-600">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Jusqu'à 24 heures de face à face</span>
                  </div>
                  
                  {/* Services inclus */}
                  <div className="space-y-3 mb-8 flex-grow">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Phase préliminaire et bilan de fin</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Tests et questionnaires personnalisés</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Analyse approfondie de votre profil</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Définition du projet professionnel</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Document de synthèse complet</span>
                    </div>
                  </div>
                  
                  {/* Bouton */}
                  <Link href="/contact" className="block w-full text-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition mt-auto">
                    Parlons-en
                  </Link>
                </div>
              </div>
            </div>

            {/* Info financement */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 border border-[#013F63] text-center">
              <p className="text-lg text-[#013F63] font-medium mb-4">
                Nos formules sont 100% finançables par le CPF
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/bilan-de-competences/cpf" className="inline-flex px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition">
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

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight">
              Questions <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">fréquentes</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tout ce que vous devez savoir sur le bilan de compétences
            </p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-lg text-[#013F63] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-6 h-6 text-gray-600 transition-transform flex-shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-200/30 rounded-full animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
              Votre <span className="text-orange-500 font-brittany text-5xl lg:text-7xl">avenir professionnel</span><br/>
              commence maintenant
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-12">
              Ne restez plus dans le doute. Offrez-vous le temps de la réflexion<br className="hidden lg:block"/>
              <span className="text-gray-500">et construisez le projet qui vous ressemble vraiment</span>
            </p>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-3xl blur-lg opacity-30"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-12">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-semibold text-[#013F63] mb-4">
                  Premier rendez-vous découverte offert
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  30 minutes pour échanger sur votre situation et découvrir comment 
                  le bilan de compétences peut vous aider
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                    
                    Réserver maintenant
                  </button>
                  <Link href="/bilan-de-competences/quiz" className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                    Faire le quiz d'orientation
                    
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section liens vers les sous-pages */}
      <section className="py-12 bg-neutral-50 border-t border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold text-primary-600 mb-6 text-center">
              Explorer nos autres pages bilan de compétences
            </h4>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Link href="/bilan-de-competences/cpf" className="flex items-center gap-2 p-4 rounded-lg border border-neutral-200 hover:border-accent-300 hover:bg-accent-50 transition">
                <ArrowRight className="w-5 h-5 text-accent-500" />
                <span className="text-neutral-700 hover:text-accent-600">Financer votre bilan avec le CPF</span>
              </Link>
              <Link href="/bilan-de-competences/en-ligne" className="flex items-center gap-2 p-4 rounded-lg border border-neutral-200 hover:border-accent-300 hover:bg-accent-50 transition">
                <ArrowRight className="w-5 h-5 text-accent-500" />
                <span className="text-neutral-700 hover:text-accent-600">Bilan de compétences 100% en ligne</span>
              </Link>
              <Link href="/bilan-de-competences/prix" className="flex items-center gap-2 p-4 rounded-lg border border-neutral-200 hover:border-accent-300 hover:bg-accent-50 transition">
                <ArrowRight className="w-5 h-5 text-accent-500" />
                <span className="text-neutral-700 hover:text-accent-600">Nos tarifs et formules</span>
              </Link>
              <Link href="/bilan-de-competences/quiz" className="flex items-center gap-2 p-4 rounded-lg border border-neutral-200 hover:border-accent-300 hover:bg-accent-50 transition">
                <ArrowRight className="w-5 h-5 text-accent-500" />
                <span className="text-neutral-700 hover:text-accent-600">Quiz d'éligibilité</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 