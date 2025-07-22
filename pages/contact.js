import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from 'lucide-react'

export default function Contact() {

    return (
    <>
      <Head>
        <title>Contact - Atipik RH | Centre de formation à Lormont</title>
        <meta name="description" content="Contactez Atipik RH pour vos projets de formation, bilan de compétences et VAE à Lormont. Échangeons sur vos objectifs professionnels." />
        <meta name="keywords" content="contact Atipik RH, formation Lormont, rendez-vous bilan compétences, contact VAE Bordeaux" />
        <link rel="canonical" href="https://atipikrh.fr/contact" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-16"></div>

        {/* Hero Section avec background animé */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
          {/* Background animé */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          
          <div className="relative z-10 container mx-auto px-4 pt-8 pb-8">
            
            {/* Titre principal */}
            <div className="text-center mb-8 max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
                <span className="text-[#013F63]">Parlons de votre</span> <span className="text-orange-500 font-brittany text-5xl lg:text-7xl">projet</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                Un premier échange pour clarifier vos objectifs<br className="hidden lg:block"/>
                <span className="text-orange-500 font-medium">et découvrir les solutions qui vous correspondent.</span>
              </p>
            </div>

            {/* Grille Contact */}
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              
              {/* Formulaire de contact */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-8 h-8 text-accent-500 mr-3" />
                  <h2 className="text-2xl font-bold text-[#013F63]">Envoyez-nous un message</h2>
                </div>
                
                <form className="flex flex-col flex-grow">
                  <div className="space-y-5 flex-grow">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          id="prenom"
                          name="prenom"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                        placeholder="votre.email@exemple.fr"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                        placeholder="07 83 01 99 55"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet de votre demande *
                      </label>
                      <select
                        id="sujet"
                        name="sujet"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="bilan-competences">Bilan de compétences</option>
                        <option value="vae">VAE (Validation des acquis)</option>
                        <option value="formation-cip">Formation CIP</option>
                        <option value="formation-courte">Formation courte</option>
                        <option value="information">Demande d'information</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    
                                         <div className="flex-grow flex flex-col">
                       <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                         Votre message *
                       </label>
                       <textarea
                         id="message"
                         name="message"
                         required
                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors resize-y flex-grow min-h-[120px]"
                         placeholder="Décrivez-nous votre projet, vos objectifs ou vos questions..."
                       ></textarea>
                     </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center mt-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </button>
                </form>
              </div>

              {/* Informations de contact */}
              <div className="space-y-8">
                
                {/* Coordonnées */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <MapPin className="w-8 h-8 text-accent-500 mr-3" />
                    <h2 className="text-2xl font-bold text-[#013F63]">Nos coordonnées</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-gray-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Adresse</p>
                        <p className="text-gray-600">
                          8 Rue du Courant<br />
                          33310 Lormont<br />
                          France
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Téléphone</p>
                        <a href="tel:+33783019955" className="text-accent-500 hover:text-accent-600 transition-colors">
                          07 83 01 99 55
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a href="mailto:contact@atipikrh.fr" className="text-accent-500 hover:text-accent-600 transition-colors">
                          contact@atipikrh.fr
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horaires */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <Clock className="w-8 h-8 text-accent-500 mr-3" />
                    <h2 className="text-2xl font-bold text-[#013F63]">Horaires d'ouverture</h2>
                  </div>
                  
                  <div className="space-y-3 text-gray-600">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="font-medium">9h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span className="font-medium">9h00 - 12h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="font-medium text-gray-400">Fermé</span>
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
  )
} 