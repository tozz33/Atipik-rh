import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Calendar,
  CreditCard,
  Target,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Phone
} from 'lucide-react'

export default function FormationsIndex() {
  return (
    <>
      <Head>
        <title>Formations professionnelles à Bordeaux - Certifiantes & Professionnalisantes | Atipik RH</title>
        <meta name="description" content="Formations certifiantes (CIP, FPA) et formations professionnalisantes à Bordeaux. Toutes nos formations sont éligibles au CPF. Centre de formation à Lormont." />
        <meta name="keywords" content="formations Bordeaux, CIP, FPA, formations professionnalisantes, CPF, Lormont, formation professionnelle" />
        <link rel="canonical" href="https://atipikrh.fr/formations" />
      </Head>

      <div className="min-h-screen bg-white">
        
        <Header isFixed={true} />

        {/* Spacer for fixed header */}
        <div className="h-20"></div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
          {/* Background animé */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          
          <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
            
            {/* Titre principal */}
            <div className="text-center mb-16 max-w-5xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
                Formations <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">professionnelles</span><br/>
                à <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Bordeaux</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-8">
                Développez vos compétences avec nos formations certifiantes et professionnalisantes<br className="hidden lg:block"/>
                <span className="text-blue-600 font-medium">100% éligibles au CPF</span>
              </p>
              
              {/* Statistiques */}
              <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-700 font-medium">Éligible CPF</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
                  <div className="text-gray-700 font-medium">Taux de réussite</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-700 font-medium">Stagiaires formés</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold shadow-lg transition text-lg hover:scale-105">
                  
                  Conseil gratuit
                </Link>
                <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                  Financement CPF
                  
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Types de formations */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6 leading-tight">
                  Nos <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">formations</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Que vous souhaitiez vous reconvertir ou monter en compétences, 
                  nous avons la formation qui correspond à vos objectifs
                </p>
              </div>

              {/* Grid des formations */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                
                {/* Formations certifiantes */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#013F63]">Formations Certifiantes</h3>
                      <p className="text-gray-600">Titre professionnel reconnu</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Des formations longues (6 à 9 mois) pour acquérir un nouveau métier 
                    avec un titre professionnel inscrit au RNCP.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">Conseiller en Insertion Professionnelle (CIP)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">Formateur Professionnel d'Adultes (FPA)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">Diplômes niveau 5 et 6</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>6-9 mois</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-blue-600" />
                      <span>CPF + co-financement</span>
                    </div>
                  </div>
                  
                  <Link href="/formations/certifiantes" className="block w-full text-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
                    Découvrir les formations certifiantes
                  </Link>
                </div>

                {/* Formations professionnalisantes */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#013F63]">Formations Professionnalisantes</h3>
                      <p className="text-gray-600">Montée en compétences</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Des formations professionnalisantes (1 à 5 jours) pour développer des compétences 
                    spécifiques et rester à jour dans votre domaine.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">Outils digitaux et bureautique</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">Communication et management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">Formations sur mesure</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span>1-5 jours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-orange-600" />
                      <span>100% CPF possible</span>
                    </div>
                  </div>
                  
                  <Link href="/formations/courtes" className="block w-full text-center px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
                    Voir les formations professionnalisantes
                  </Link>
                </div>
              </div>

              {/* Formation CIP mise en avant */}
              <div className="bg-blue-50 rounded-2xl p-8 border border-[#013F63] text-center">
                <h3 className="text-2xl font-bold text-[#013F63] mb-4">Formation phare : CIP</h3>
                <p className="text-lg text-[#013F63] mb-6 max-w-3xl mx-auto">
                  Notre formation Conseiller en Insertion Professionnelle est l'une des plus demandées. 
                  Devenez expert de l'accompagnement vers l'emploi en 9 mois.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/formations/cip" className="inline-flex px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition">
                    Découvrir la formation CIP
                  </Link>
                  <Link href="/financement" className="inline-flex px-6 py-3 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition">
                    Financement CPF
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages Atipik RH */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Pourquoi choisir <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Atipik RH</span> ?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  15 ans d'expertise au service de votre évolution professionnelle
                </p>
              </div>

              {/* Première ligne - 3 éléments */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Accompagnement personnalisé</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chaque stagiaire bénéficie d'un suivi individuel adapté à ses besoins et objectifs professionnels.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Certifications reconnues</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Organisme certifié Qualiopi et référencé CPF. Tous nos titres sont inscrits au RNCP.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Taux de réussite élevé</h3>
                  <p className="text-gray-600 leading-relaxed">
                    95% de taux de réussite grâce à notre pédagogie adaptée et notre accompagnement renforcé.
                  </p>
                </div>
              </div>

              {/* Deuxième ligne - 2 éléments centrés */}
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Pédagogie moderne</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Méthodes pédagogiques innovantes alliant théorie et pratique, présentiel et distanciel.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CreditCard className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Financement facilité</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Aide au montage de votre dossier CPF et recherche de co-financements adaptés à votre situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section financement */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                Financez votre <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">formation</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                92% de nos stagiaires ne paient rien grâce aux dispositifs de financement
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">CPF (Compte Personnel de Formation)</h3>
                  <p className="text-gray-600 mb-4">
                    Utilisez vos droits formation acquis. Jusqu'à 5000€ disponibles pour financer votre projet.
                  </p>
                  <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 font-medium">
                    Vérifier mes droits CPF →
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013F63] mb-4">Autres financements</h3>
                  <p className="text-gray-600 mb-4">
                    Pôle Emploi (AIF), employeur, OPCO... Nous vous aidons à trouver la solution adaptée.
                  </p>
                  <Link href="/financement" className="text-blue-600 hover:text-blue-700 font-medium">
                    Découvrir toutes les solutions →
                  </Link>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border border-[#013F63]">
                <h3 className="text-2xl font-bold text-[#013F63] mb-4">
                  Conseil gratuit personnalisé
                </h3>
                <p className="text-[#013F63] mb-6">
                  Nos conseillers analysent votre situation et vous orientent vers 
                  la formation et le financement les plus adaptés.
                </p>
                <Link href="/contact" className="inline-flex px-6 py-3 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-semibold transition">
                  
                  Prendre RDV gratuitement
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-24 bg-gradient-to-br from-white via-orange-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-6xl font-bold text-[#013F63] mb-8 leading-tight tracking-tight">
                  Prêt(e) à franchir le <span className="text-orange-500 font-brittany text-5xl lg:text-7xl">pas</span> ?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Découvrez la formation qui transformera votre avenir professionnel.<br className="hidden lg:block"/>
                  <span className="text-orange-500 font-medium">Votre nouvelle carrière commence ici</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-4 text-center">Conseil personnalisé</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">
                    Échangez avec nos experts pour définir la formation parfaite selon votre profil et vos objectifs.
                  </p>
                  <Link href="/contact" className="block w-full text-center px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
                    Prendre RDV gratuit
                  </Link>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#013F63] mb-4 text-center">Formations certifiantes</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">
                    Découvrez nos formations longues pour obtenir un titre professionnel reconnu et changer de métier.
                  </p>
                  <Link href="/formations/certifiantes" className="block w-full text-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
                    Voir les formations
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Une question ? Appelez-nous directement
                </p>
                <a href="tel:0783019955" className="inline-flex text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
                  
                  07 83 01 99 55
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