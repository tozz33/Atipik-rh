import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Clock, Users, MapPin, Calendar, GraduationCap, CheckCircle, ArrowRight, CreditCard, BookOpen, Target, Award, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export default function FormationCIP() {
  return (
    <>
      <Head>
        <title>Formation CIP - Conseiller en Insertion Professionnelle | Atipik RH</title>
        <meta name="description" content="Formation certifiante Conseiller en Insertion Professionnelle (CIP) niveau 5. Titre professionnel RNCP, financement CPF possible. Durée 1186h dont 385h en entreprise." />
        <meta name="keywords" content="formation CIP, conseiller insertion professionnelle, formation certifiante, CPF, Bordeaux, Lormont" />
        <link rel="canonical" href="https://atipikrh.fr/formations/cip" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
          {/* Éléments graphiques décoratifs */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-60">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <path d="M400,0 C400,0 320,80 240,80 C160,80 80,160 80,240 C80,320 160,400 240,400 L400,400 Z" fill="url(#blueGradient)" />
              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.4"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute top-20 right-20 w-48 h-48 opacity-40">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="url(#orangeGradient)" />
              <defs>
                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#fb923c" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Background animé existant */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          
          <div className="relative z-10 container mx-auto px-4 pt-12 pb-16">
            
            {/* Titre principal */}
            <div className="text-center mb-16 max-w-5xl mx-auto">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
                Titre Professionnel Niveau 5 • RNCP37274
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
                Formation <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">CIP</span><br/>
                <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Conseiller en Insertion Professionnelle</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-8">
                Devenez expert de l'accompagnement vers l'emploi<br className="hidden lg:block"/>
                <span className="text-blue-600 font-medium">Formation certifiante et financée par le CPF</span>
              </p>

              {/* Informations clés */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-[#013F63] mb-1">1186h</div>
                  <p className="text-gray-600 text-sm">dont 385h en entreprise</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-[#013F63] mb-1">10-15</div>
                  <p className="text-gray-600 text-sm">personnes par groupe</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-[#013F63] mb-1">Niveau 5</div>
                  <p className="text-gray-600 text-sm">Équivalent Bac+2</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                  Demander des informations
                </Link>
                <a href="tel:0783019955" className="px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                  07 83 01 99 55
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Objectifs de la formation */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">Objectifs</span> de la formation
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Former des professionnels capables d'accompagner tous types de publics dans leur insertion professionnelle
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#013F63] mb-2">Accueillir et accompagner</h3>
                        <p className="text-gray-600">Accueillir pour analyser la demande des personnes et poser les bases d'un diagnostic partagé</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#013F63] mb-2">Accompagner l'élaboration</h3>
                        <p className="text-gray-600">Accompagner les personnes dans l'élaboration de leur projet professionnel</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#013F63] mb-2">Accompagner la réalisation</h3>
                        <p className="text-gray-600">Accompagner la réalisation des projets professionnels</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#013F63] mb-2">Concevoir des interventions</h3>
                        <p className="text-gray-600">Concevoir des cessions d'information et des ateliers thématiques favorisant l'insertion</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-[#013F63] mb-6">Publics concernés</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Demandeurs d'emploi</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Jeunes en insertion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Personnes en reconversion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Bénéficiaires du RSA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Personnes en situation de handicap</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme de formation */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Programme</span> de formation
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Un parcours complet organisé en 3 modules certifiants
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Module 1 */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4 text-center">Module 1</h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-4 text-center">Accueillir pour analyser la demande</h4>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Informer et orienter une personne ou un groupe</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Analyser la demande de la personne</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Exercer une veille informationnelle</span>
                    </div>
                  </div>
                </div>

                {/* Module 2 */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4 text-center">Module 2</h3>
                  <h4 className="text-lg font-semibold text-orange-600 mb-4 text-center">Accompagner l'élaboration du projet</h4>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Contractualiser et conduire un accompagnement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Accompagner l'élaboration et la confirmation du projet</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Accompagner l'élaboration d'une stratégie</span>
                    </div>
                  </div>
                </div>

                {/* Module 3 */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4 text-center">Module 3</h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-4 text-center">Accompagner la réalisation</h4>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Préparer et animer des ateliers thématiques</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Analyser sa pratique professionnelle</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Concevoir des sessions d'information collective</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Informations pratiques */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Informations <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">pratiques</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Modalités */}
                <div className="bg-blue-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-[#013F63] mb-6">Modalités de formation</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#013F63] mb-1">Durée</h4>
                        <p className="text-gray-700">1186 heures au total</p>
                        <p className="text-sm text-gray-600">801h en centre + 385h en entreprise</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#013F63] mb-1">Horaires</h4>
                        <p className="text-gray-700">Du lundi au vendredi</p>
                        <p className="text-sm text-gray-600">9h00-12h30 et 13h30-17h00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#013F63] mb-1">Groupe</h4>
                        <p className="text-gray-700">Entre 10 et 15 personnes</p>
                        <p className="text-sm text-gray-600">Pour un suivi individualisé</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#013F63] mb-1">Lieu</h4>
                        <p className="text-gray-700">8 Rue du Courant</p>
                        <p className="text-sm text-gray-600">33310 Lormont</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prérequis et débouchés */}
                <div className="bg-orange-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-[#013F63] mb-6">Prérequis & Débouchés</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-[#013F63] mb-3">Prérequis</h4>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600" />
                          <span className="text-sm">Niveau 4 (Bac) ou équivalent</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600" />
                          <span className="text-sm">Expérience professionnelle souhaitée</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600" />
                          <span className="text-sm">Motivation pour l'accompagnement</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#013F63] mb-3">Débouchés</h4>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-orange-600" />
                          <span className="text-sm">Conseiller en insertion professionnelle</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-orange-600" />
                          <span className="text-sm">Conseiller emploi formation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-orange-600" />
                          <span className="text-sm">Chargé d'accompagnement socioprofessionnel</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-orange-600" />
                          <span className="text-sm">Conseiller en évolution professionnelle</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financement */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Financement</span> possible
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Plusieurs solutions pour financer votre formation
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                
                {/* CPF */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CreditCard className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4 text-center">CPF</h3>
                  <p className="text-gray-600 text-center mb-4">Compte Personnel de Formation</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">Éligible</div>
                    <p className="text-sm text-gray-600">Formation inscrite au répertoire CPF</p>
                  </div>
                </div>

                {/* Pôle Emploi */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4 text-center">Pôle Emploi</h3>
                  <p className="text-gray-600 text-center mb-4">AIF, POEI, autres dispositifs</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-2">Possible</div>
                    <p className="text-sm text-gray-600">Pour les demandeurs d'emploi</p>
                  </div>
                </div>

                {/* Autres */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4 text-center">Autres</h3>
                  <p className="text-gray-600 text-center mb-4">Région, employeur, personnel</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">Variables</div>
                    <p className="text-sm text-gray-600">Selon votre situation</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link href="/financement" className="px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition">
                  Voir toutes les solutions de financement
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact et inscription */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                Prêt à <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">commencer</span> ?
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Contactez-nous pour obtenir plus d'informations ou pour vous inscrire à la prochaine session
              </p>

              <div className="bg-gray-50 rounded-3xl p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#013F63]">Informations</h3>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <a href="tel:0783019955" className="text-gray-700 hover:text-blue-600 transition-colors">
                        07 83 01 99 55
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <a href="mailto:contact@atipikrh.fr" className="text-gray-700 hover:text-blue-600 transition-colors">
                        contact@atipikrh.fr
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      <div className="text-gray-700">
                        8 Rue du Courant<br />
                        33310 Lormont
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#013F63]">Prochaines sessions</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Session 1 :</span>
                        <span className="font-medium">Mars 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Session 2 :</span>
                        <span className="font-medium">Septembre 2025</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Places limitées - Inscriptions ouvertes
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                  Demander des informations
                </Link>
                <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                  Financer avec le CPF
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section Accessibilité Handicap */}
        <section className="py-12 bg-gradient-to-br from-slate-100 to-blue-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                
                <div className="flex items-center justify-center gap-6 mb-6">
                  <Image
                    src="/images/certifications/formation-handicap.png"
                    alt="Logo Handiaccueillant - Atipik RH"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <h3 className="text-2xl font-bold text-[#013F63]">
                    Handiaccueillant
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  <strong className="text-[#013F63]">Atipik RH</strong> s'engage à donner à tous les mêmes chances d'accéder à la formation professionnelle continue. 
                  Nous mettons tout en œuvre dans la mesure du possible pour intégrer à nos programmes des personnes en situation de handicap 
                  en adaptant les modalités de nos formations conformément à la Loi du 11/02/2005 pour l'égalité des droits et des chances, 
                  la participation et la citoyenneté des personnes handicapées.
                </p>
                
                <p className="text-gray-800 italic text-lg mb-2">
                  Merci de <strong>contacter notre référente handicap</strong> pour étudier au mieux votre demande et sa faisabilité.
                </p>
                <p className="text-2xl font-bold text-[#013F63] italic">
                  📞 <a href="tel:0769097445" className="hover:text-orange-500 transition-colors duration-300">07 69 09 74 45</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />

      </div>
    </>
  )
} 