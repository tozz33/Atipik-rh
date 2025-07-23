import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { CheckCircle, ArrowRight, ArrowLeft, Mail, Phone } from 'lucide-react'

export default function QuizBilanCompetences() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' })
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: "Comment vous sentez-vous dans votre travail actuel ?",
      options: [
        { value: "epanoui", text: "Je me sens épanoui(e) et motivé(e)", score: 1 },
        { value: "mitige", text: "C'est mitigé, j'ai des hauts et des bas", score: 2 },
        { value: "insatisfait", text: "Je ne me sens pas épanoui(e)", score: 3 },
        { value: "demotive", text: "Je suis démotivé(e) et je pense souvent à changer", score: 4 }
      ]
    },
    {
      id: 2,
      question: "Avez-vous une vision claire de votre avenir professionnel ?",
      options: [
        { value: "tres_claire", text: "Oui, très claire avec un plan précis", score: 1 },
        { value: "generale", text: "J'ai une idée générale mais pas de plan concret", score: 2 },
        { value: "floue", text: "C'est assez flou, j'ai du mal à me projeter", score: 3 },
        { value: "aucune", text: "Non, je ne sais pas du tout où je veux aller", score: 4 }
      ]
    },
    {
      id: 3,
      question: "Connaissez-vous bien vos compétences et talents ?",
      options: [
        { value: "parfaitement", text: "Parfaitement, je sais exactement ce que je sais faire", score: 1 },
        { value: "globalement", text: "Globalement oui, mais j'aimerais mieux les identifier", score: 2 },
        { value: "partiellement", text: "Partiellement, je découvre encore des choses sur moi", score: 3 },
        { value: "mal", text: "Non, j'ai du mal à définir mes vraies compétences", score: 4 }
      ]
    },
    {
      id: 4,
      question: "À quelle fréquence pensez-vous à changer de voie professionnelle ?",
      options: [
        { value: "jamais", text: "Jamais, je suis bien où je suis", score: 1 },
        { value: "rarement", text: "Rarement, seulement lors de moments difficiles", score: 2 },
        { value: "souvent", text: "Souvent, c'est devenu récurrent", score: 3 },
        { value: "tout_le_temps", text: "Tout le temps, c'est une obsession", score: 4 }
      ]
    },
    {
      id: 5,
      question: "Comment évaluez-vous votre confiance en vous professionnellement ?",
      options: [
        { value: "tres_forte", text: "Très forte, je connais ma valeur", score: 1 },
        { value: "bonne", text: "Bonne en général, avec quelques doutes parfois", score: 2 },
        { value: "moyenne", text: "Moyenne, j'aimerais être plus sûr(e) de moi", score: 3 },
        { value: "faible", text: "Faible, je doute souvent de mes capacités", score: 4 }
      ]
    },
    {
      id: 6,
      question: "Avez-vous déjà envisagé une reconversion ou évolution professionnelle ?",
      options: [
        { value: "non", text: "Non, pas du tout", score: 1 },
        { value: "vaguement", text: "Vaguement, sans rien de concret", score: 2 },
        { value: "serieusement", text: "Oui, j'y pense sérieusement", score: 3 },
        { value: "urgent", text: "Oui, c'est devenu urgent pour moi", score: 4 }
      ]
    },
    {
      id: 7,
      question: "Quelle est votre plus grande préoccupation professionnelle actuellement ?",
      options: [
        { value: "equilibre", text: "Maintenir un bon équilibre vie pro/perso", score: 1 },
        { value: "evolution", text: "Évoluer dans mon poste actuel", score: 2 },
        { value: "sens", text: "Trouver plus de sens dans mon travail", score: 3 },
        { value: "changement", text: "Changer complètement de voie", score: 4 }
      ]
    },
    {
      id: 8,
      question: "Si vous pouviez avoir une baguette magique pour votre carrière, que feriez-vous ?",
      options: [
        { value: "ameliorer", text: "Améliorer ma situation actuelle", score: 1 },
        { value: "competences", text: "Découvrir toutes mes compétences cachées", score: 2 },
        { value: "voie", text: "Connaître la voie professionnelle parfaite pour moi", score: 3 },
        { value: "recommencer", text: "Tout recommencer dans un domaine qui me passionne", score: 4 }
      ]
    }
  ]



  const handleAnswer = (questionId, score) => {
    const newAnswers = { ...answers, [questionId]: score }
    setAnswers(newAnswers)
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Quiz terminé, passer à l'étape de collecte d'infos
      setCurrentStep(currentStep + 1)
    }
  }

  const handleUserInfoSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Envoyer les données à notre API route côté serveur (plus fiable)
      const response = await fetch('/api/send-quiz-brevo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInfo,
          answers,
          questions
        }),
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Email envoyé avec succès via Brevo (serveur):', result)
      } else {
        const errorData = await response.json()
        console.error('Erreur lors de l\'envoi:', errorData)
        // Afficher l'erreur pour débogage
        alert(`Erreur d'envoi: ${errorData.error} - ${errorData.details || ''}`)
      }
    } catch (error) {
      console.error('Erreur réseau:', error)
      alert(`Erreur réseau: ${error.message}`)
    }
    
    // Afficher les résultats même en cas d'erreur email
    setShowResults(true)
  }

  const progress = ((currentStep) / (questions.length + 1)) * 100

  return (
    <>
      <Head>
        <title>Quiz : Avez-vous besoin d'un bilan de compétences ? | Atipik RH</title>
        <meta name="description" content="Découvrez en 8 questions si un bilan de compétences peut vous aider dans votre évolution professionnelle. Quiz gratuit et personnalisé." />
        <meta name="keywords" content="quiz bilan compétences, test orientation professionnelle, évaluation carrière, Bordeaux" />
        <link rel="canonical" href="https://atipikrh.fr/bilan-de-competences/quiz" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header isFixed={true} />
        
        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {!showResults && (
                <>
                  {/* Header du quiz */}
                  <div className="text-center mb-12">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                      <span className="text-[#013F63]">Avez-vous besoin d'un</span> <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">bilan de compétences</span> ?
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                      Découvrez en 8 questions si un bilan peut vous aider dans votre évolution professionnelle
                    </p>
                    
                    {/* Barre de progression */}
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-orange-500 h-3 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Question {Math.min(currentStep + 1, questions.length)} sur {questions.length}
                    </p>
                  </div>

                  {/* Questions du quiz */}
                  {currentStep < questions.length && (
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                      <h2 className="text-2xl font-bold text-[#013F63] mb-8 text-center">
                        {questions[currentStep].question}
                      </h2>
                      
                      <div className="space-y-4">
                        {questions[currentStep].options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleAnswer(questions[currentStep].id, option.score)}
                            className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-gray-800 group-hover:text-orange-700 font-medium">
                                {option.text}
                              </span>
                              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Bouton retour */}
                      {currentStep > 0 && (
                        <div className="mt-8 text-center">
                          <button
                            onClick={() => setCurrentStep(currentStep - 1)}
                            className="inline-flex text-gray-600 hover:text-gray-800 transition-colors"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            Question précédente
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Collecte des informations utilisateur */}
                  {currentStep === questions.length && !showResults && (
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                      <div className="text-center mb-8">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-[#013F63] mb-4">
                          Quiz terminé ! 🎉
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                          Nous analysons vos réponses... Laissez-nous vos coordonnées pour recevoir votre diagnostic personnalisé !
                        </p>
                      </div>

                      <form onSubmit={handleUserInfoSubmit} className="max-w-md mx-auto space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Votre prénom *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={userInfo.name}
                            onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                            placeholder="Prénom"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Votre email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                            placeholder="email@exemple.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Votre téléphone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={userInfo.phone}
                            onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                            placeholder="06 XX XX XX XX"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg"
                        >
                          Découvrir mon diagnostic 🎯
                        </button>
                        
                        <p className="text-xs text-gray-500 text-center">
                          Vos données sont protégées et ne seront jamais partagées
                        </p>
                      </form>
                    </div>
                  )}
                </>
              )}

              {/* Résultats */}
              {showResults && (
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
                    
                    {/* Confirmation */}
                    <div className="mb-8">
                      <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h2 className="text-3xl font-bold text-[#013F63] mb-4">
                        Quiz envoyé avec succès !
                      </h2>
                      <p className="text-lg text-gray-600">
                        Merci {userInfo.name}, nous avons bien reçu vos réponses.
                      </p>
                    </div>

                    {/* Contact */}
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 mb-6">
                      <h3 className="text-xl font-bold text-[#013F63] mb-4">
                        Nous vous recontacterons rapidement
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-3">
                          <Phone className="w-5 h-5 text-blue-600" />
                          <a href="tel:0783019955" className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors">
                            07 83 01 99 55
                          </a>
                        </div>
                        
                        <div className="flex items-center justify-center gap-3">
                          <Mail className="w-5 h-5 text-blue-600" />
                          <a href="mailto:contact@atipikrh.fr" className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors">
                            contact@atipikrh.fr
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Retour au quiz */}
                    <button
                      onClick={() => {
                        setCurrentStep(0)
                        setAnswers({})
                        setUserInfo({ name: '', email: '', phone: '' })
                        setShowResults(false)
                      }}
                      className="text-gray-600 hover:text-gray-800 font-medium"
                    >
                      ← Refaire le quiz
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
} 