import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { CheckCircle, ArrowRight, ArrowLeft, Mail, Phone, Calendar, Target, Lightbulb, TrendingUp } from 'lucide-react'

export default function QuizBilanCompetences() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' })
  const [showResults, setShowResults] = useState(false)
  const [quizResult, setQuizResult] = useState(null)

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

  const calculateResult = (finalAnswers) => {
    const totalScore = Object.values(finalAnswers).reduce((sum, score) => sum + score, 0)
    const averageScore = totalScore / questions.length

    if (averageScore <= 1.5) {
      return {
        type: "equilibre",
        title: "Vous êtes dans une phase d'équilibre",
        description: "Votre situation professionnelle semble stable, mais un bilan peut vous aider à optimiser votre parcours et anticiper les évolutions futures.",
        urgency: "low",
        recommendation: "Un bilan préventif pour sécuriser votre avenir"
      }
    } else if (averageScore <= 2.5) {
      return {
        type: "questionnement",
        title: "Vous êtes en phase de questionnement",
        description: "Des interrogations émergent sur votre avenir professionnel. C'est le moment idéal pour faire le point et clarifier vos objectifs.",
        urgency: "medium",
        recommendation: "Un bilan pour clarifier votre vision et vos objectifs"
      }
    } else if (averageScore <= 3.5) {
      return {
        type: "transition",
        title: "Vous êtes prêt(e) pour une transition",
        description: "Vous ressentez un besoin fort de changement. Un bilan de compétences vous donnera les clés pour réussir votre transition professionnelle.",
        urgency: "high",
        recommendation: "Un bilan pour construire votre projet de transition"
      }
    } else {
      return {
        type: "urgence",
        title: "Votre situation nécessite une action rapide",
        description: "Vous vivez une période difficile professionnellement. Un bilan de compétences vous permettra de retrouver confiance et direction rapidement.",
        urgency: "urgent",
        recommendation: "Un bilan en urgence pour reprendre le contrôle"
      }
    }
  }

  const handleAnswer = (questionId, score) => {
    const newAnswers = { ...answers, [questionId]: score }
    setAnswers(newAnswers)
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Quiz terminé, calculer le résultat
      const result = calculateResult(newAnswers)
      setQuizResult(result)
      setCurrentStep(currentStep + 1) // Passer à l'étape de collecte d'infos
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
          quizResult,
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
        <div className="h-16"></div>

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
              {showResults && quizResult && (
                <div className="space-y-8">
                  
                  {/* Diagnostic personnel */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-[#013F63] mb-4">
                        Votre diagnostic, {userInfo.name} 👋
                      </h2>
                      
                      <div className={`inline-block px-6 py-3 rounded-full text-white font-medium mb-6 ${
                        quizResult.urgency === 'urgent' ? 'bg-red-500' :
                        quizResult.urgency === 'high' ? 'bg-orange-500' :
                        quizResult.urgency === 'medium' ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}>
                        {quizResult.title}
                      </div>
                      
                      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
                        {quizResult.description}
                      </p>
                      
                      <div className="bg-blue-50 rounded-xl p-6 mb-8">
                        <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                        <h3 className="text-xl font-bold text-blue-900 mb-2">Notre recommandation</h3>
                        <p className="text-blue-800 font-medium">{quizResult.recommendation}</p>
                      </div>
                    </div>

                    {/* Benefits selon le profil */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-6 bg-orange-50 rounded-xl">
                        <Lightbulb className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                        <h4 className="font-bold text-[#013F63] mb-2">Clarté sur vos compétences</h4>
                        <p className="text-sm text-gray-600">Identifiez précisément vos forces et talents cachés</p>
                      </div>
                      <div className="text-center p-6 bg-blue-50 rounded-xl">
                        <Target className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                        <h4 className="font-bold text-[#013F63] mb-2">Projet professionnel concret</h4>
                        <p className="text-sm text-gray-600">Définissez un plan d'action réaliste et motivant</p>
                      </div>
                      <div className="text-center p-6 bg-green-50 rounded-xl">
                        <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
                        <h4 className="font-bold text-[#013F63] mb-2">Confiance retrouvée</h4>
                        <p className="text-sm text-gray-600">Reprenez le contrôle de votre avenir professionnel</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA final très fort */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">
                      Prêt(e) à passer à l'action, {userInfo.name} ?
                    </h3>
                    <p className="text-lg mb-6 text-orange-100">
                      {quizResult.urgency === 'urgent' && "Votre situation mérite une attention immédiate. Nous pouvons vous accompagner dès cette semaine."}
                      {quizResult.urgency === 'high' && "C'est le moment parfait pour franchir le pas. Ne laissez pas cette motivation retomber."}
                      {quizResult.urgency === 'medium' && "Anticipez plutôt que de subir. Un bilan maintenant vous évitera des regrets plus tard."}
                      {quizResult.urgency === 'low' && "Même en situation stable, un bilan vous donnera un avantage concurrentiel."}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="tel:0783019955"
                        className="inline-flex px-8 py-4 rounded-full bg-white text-orange-600 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                      >
                        
                        Appel immédiat : 07 83 01 99 55
                      </a>
                      <Link 
                        href="/contact"
                        className="inline-flex px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold transition-all"
                      >
                        
                        RDV découverte gratuit
                      </Link>
                    </div>
                    
                    <p className="text-sm text-orange-200 mt-4">
                      🎁 Première consultation gratuite et sans engagement
                    </p>
                  </div>

                  {/* Preuves sociales */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-[#013F63] text-center mb-6">
                      Ils ont fait le même choix que vous
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-xl p-6">
                        <div className="flex text-yellow-400 text-sm mb-3">★★★★★</div>
                        <p className="text-gray-700 mb-4 italic">
                          "Grâce au bilan, j'ai enfin trouvé ma voie. L'équipe d'Atipik RH m'a accompagnée avec bienveillance vers une reconversion réussie."
                        </p>
                        <div className="font-medium text-gray-900">Marie L.</div>
                        <div className="text-sm text-gray-500">Reconversion réussie</div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-6">
                        <div className="flex text-yellow-400 text-sm mb-3">★★★★★</div>
                        <p className="text-gray-700 mb-4 italic">
                          "À 45 ans, je pensais qu'il était trop tard. Le bilan m'a donné confiance et une direction claire."
                        </p>
                        <div className="font-medium text-gray-900">Antoine D.</div>
                        <div className="text-sm text-gray-500">Nouvelle carrière à 45 ans</div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <Link href="/bilan-de-competences" className="text-orange-600 hover:text-orange-700 font-medium">
                        Voir tous les témoignages →
                      </Link>
                    </div>
                  </div>

                  {/* Informations financement */}
                  <div className="bg-green-50 rounded-3xl p-8 border border-green-200">
                    <h3 className="text-2xl font-bold text-green-900 text-center mb-4">
                      💰 Bonne nouvelle sur le financement !
                    </h3>
                    <p className="text-green-800 text-center mb-6">
                      92% de nos clients ne paient rien grâce au CPF. Vérifiez vos droits en 2 minutes.
                    </p>
                    <div className="text-center">
                      <a 
                        href="https://www.moncompteformation.gouv.fr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors"
                      >
                        Vérifier mon CPF
                        
                      </a>
                    </div>
                  </div>

                  {/* Retour au quiz */}
                  <div className="text-center">
                    <button
                      onClick={() => {
                        setCurrentStep(0)
                        setAnswers({})
                        setUserInfo({ name: '', email: '', phone: '' })
                        setShowResults(false)
                        setQuizResult(null)
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