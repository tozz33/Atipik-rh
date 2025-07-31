import Head from 'next/head'
import Image from 'next/image'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  Wifi, 
  Printer, 
  Coffee, 
  Car, 
  Monitor, 
  PresentationChart,
  Clock,
  Euro,
  CheckCircle,
  Star,
  Calendar,
  Building
} from 'lucide-react'

export default function LocationEspacesBordeaux() {
  const sallesFormation = [
    {
      id: 'salle-20-personnes',
      nom: 'Grande salle de formation',
      capacite: '20 personnes',
      surface: '30m²',
      image: '/images/salles/salle-20-personnes.jpg',
      demiJournee: 170,
      journee: 250,
      weekend: 265,
      description: 'Idéale pour formations, séminaires et conférences',
      equipements: ['Vidéoprojecteur HD', 'Paperboard', 'Tables modulables', 'Climatisation']
    },
    {
      id: 'salle-15-personnes',
      nom: 'Salle de réunion moyenne',
      capacite: '15 personnes',
      surface: '29m²',
      image: '/images/salles/salle-15-personnes.jpg',
      demiJournee: 120,
      journee: 195,
      weekend: 210,
      description: 'Parfaite pour réunions et ateliers collaboratifs',
      equipements: ['Écran mural', 'Paperboard', 'Configuration flexible', 'Éclairage optimal']
    },
    {
      id: 'salle-10-personnes',
      nom: 'Petite salle de réunion',
      capacite: '10 personnes',
      surface: '20m²',
      image: '/images/salles/salle-10-personnes.jpg',
      demiJournee: 80,
      journee: 130,
      weekend: 145,
      description: 'Cosy et intimiste pour réunions restreintes',
      equipements: ['Équipement audiovisuel', 'Tables rondes', 'Ambiance feutrée']
    }
  ]

  const bureauxIndividuels = [
    {
      id: 'bureau-7m2',
      nom: 'Bureau individuel compact',
      surface: '7m²',
      image: '/images/bureaux/bureau-7m2.jpg',
      demiJournee: 40,
      journee: 70,
      weekend: 85,
      description: 'Espace de travail privé et fonctionnel'
    },
    {
      id: 'bureau-9m2',
      nom: 'Bureau individuel confort',
      surface: '9m²',
      image: '/images/bureaux/bureau-9m2.jpg',
      demiJournee: 40,
      journee: 70,
      weekend: 85,
      description: 'Bureau spacieux avec rangements intégrés'
    }
  ]

  const equipementsInclus = [
    'Tables et chaises modulables',
    'Paperboard et vidéoprojecteur',
    'Wi-Fi haut débit gratuit',
    'Accès imprimante illimité',
    'Thé et café à volonté',
    'Parking privé gratuit',
    'Climatisation réversible',
    'Nettoyage quotidien'
  ]

  const equipementsBureau = [
    'Bureau meublé complet',
    'Chaise ergonomique',
    'Rangements sécurisés',
    'Wi-Fi haut débit',
    'Accès imprimante',
    'Thé et café gratuits',
    'Parking privé gratuit'
  ]

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Location Salle Formation & Bureau Bordeaux - Dès 40€ | Atipik RH Lormont</title>
        <meta name="description" content="🏢 Location salle formation, réunion et bureau à Bordeaux-Lormont. 3 salles (10-20 pers) + bureaux individuels. Équipées, parking gratuit. Dès 40€/demi-journée." />
        <meta name="keywords" content="location salle formation Bordeaux, location salle réunion Lormont, bureau à louer Bordeaux, espace formation Gironde, salle équipée Bordeaux métropole" />
        
        {/* Geographic SEO */}
        <meta name="geo.region" content="FR-33" />
        <meta name="geo.placename" content="Lormont, Bordeaux, Gironde" />
        <meta name="geo.position" content="44.8787;-0.5241" />
        <meta name="ICBM" content="44.8787, -0.5241" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Location Salle Formation & Bureau Bordeaux - Dès 40€ | Atipik RH" />
        <meta property="og:description" content="🏢 3 salles de formation (10-20 personnes) + bureaux individuels à louer à Bordeaux-Lormont. Équipées, parking gratuit, dès 40€." />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://atipikrh.com/location-espaces-bordeaux" />
        <meta property="og:image" content="https://atipikrh.com/images/salles/og-location-salles.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="business:contact_data:street_address" content="8 Rue du Courant" />
        <meta property="business:contact_data:locality" content="Lormont" />
        <meta property="business:contact_data:postal_code" content="33310" />
        <meta property="business:contact_data:country_name" content="France" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Location Salle Formation & Bureau Bordeaux - Dès 40€" />
        <meta name="twitter:description" content="3 salles équipées + bureaux individuels à Bordeaux-Lormont. Parking gratuit, Wi-Fi, tout inclus." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://atipikrh.com/location-espaces-bordeaux" />
        
        {/* Language */}
        <html lang="fr" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Additional SEO */}
        <meta name="author" content="Atipik RH" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="fr" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Atipik RH - Location d'Espaces",
              "image": [
                "https://atipikrh.com/images/salles/salle-20-personnes.jpg",
                "https://atipikrh.com/images/salles/salle-15-personnes.jpg",
                "https://atipikrh.com/images/salles/salle-10-personnes.jpg"
              ],
              "description": "Location de salles de formation, réunion et bureaux individuels à Bordeaux-Lormont. Espaces équipés avec parking gratuit.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8 Rue du Courant",
                "addressLocality": "Lormont",
                "postalCode": "33310",
                "addressCountry": "FR",
                "addressRegion": "Nouvelle-Aquitaine"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.8787,
                "longitude": -0.5241
              },
              "telephone": "+33783019955",
              "email": "contact@atipikrh.fr",
              "url": "https://atipikrh.com/location-espaces-bordeaux",
              "priceRange": "40€-265€",
              "openingHours": [
                "Mo-Fr 09:00-18:00",
                "Sa 09:00-12:00"
              ],
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Wi-Fi gratuit"
                },
                {
                  "@type": "LocationFeatureSpecification", 
                  "name": "Parking gratuit"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Vidéoprojecteur"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Climatisation"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services de location d'espaces",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Location salle formation 20 personnes",
                      "description": "Grande salle équipée pour formations et séminaires"
                    },
                    "price": "170",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "170",
                      "priceCurrency": "EUR",
                      "referenceQuantity": {
                        "@type": "QuantitativeValue",
                        "value": "0.5",
                        "unitCode": "DAY"
                      }
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "47"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        
        {/* Hero Section Ultra-Optimisé */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute top-40 right-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-1000"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Header avec logo */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <Image
                    src="/images/logos/atipik-logo.png"
                    alt="Atipik RH - Location espaces Bordeaux"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                    priority
                  />
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Lormont - Bordeaux
                    </div>
                  </div>
                </div>
              </div>

              {/* Titre principal H1 optimisé SEO */}
              <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-6xl font-bold text-[#013F63] mb-6 leading-tight">
                  Location <span className="text-orange-500 font-brittany text-5xl lg:text-7xl">Salle</span> Formation<br/>
                  & <span className="text-blue-600 font-brittany text-5xl lg:text-7xl">Bureau</span> Bordeaux
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
                  <strong>3 salles équipées</strong> (10-20 personnes) + <strong>bureaux individuels</strong><br className="hidden lg:block"/>
                  à <span className="text-orange-500 font-semibold">Lormont</span> - Parking gratuit inclus
                </p>

                {/* USP badges */}
                <div className="grid md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Dès 40€</div>
                    <div className="text-sm text-gray-700">demi-journée</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
                    <div className="text-sm text-gray-700">équipées</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-purple-600 mb-1">5min</div>
                    <div className="text-sm text-gray-700">de Bordeaux</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-green-600 mb-1">Parking</div>
                    <div className="text-sm text-gray-700">gratuit</div>
                  </div>
                </div>

                {/* CTA Hero */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:0783019955" 
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#013F63] hover:bg-[#012a4a] text-white font-bold shadow-lg transition text-lg hover:scale-105"
                    aria-label="Réserver par téléphone au 07 83 01 99 55"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Réserver - 07 83 01 99 55
                  </a>
                  <a 
                    href="#tarifs"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#013F63] text-[#013F63] hover:bg-[#013F63] hover:text-white font-semibold transition"
                  >
                    <Euro className="w-5 h-5 mr-2" />
                    Voir tous les tarifs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Salles de Formation */}
        <section className="py-20 bg-white" id="salles-formation">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Salles de <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Formation</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  3 salles modernes et entièrement équipées pour vos formations, réunions et séminaires
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {sallesFormation.map((salle, index) => (
                  <div key={salle.id} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                    
                    {/* Image placeholder */}
                    <div className="h-64 bg-gradient-to-br from-blue-100 to-gray-100 relative">
                      <div className="absolute top-4 left-4 bg-white/90 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        {salle.capacite}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        {salle.surface}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building className="w-16 h-16 text-gray-400" />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-[#013F63] mb-2">{salle.nom}</h3>
                      <p className="text-gray-600 mb-4">{salle.description}</p>
                      
                      {/* Tarifs */}
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-700">Demi-journée (4h)</span>
                          <span className="font-bold text-blue-600">{salle.demiJournee}€</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-700">Journée complète (8h)</span>
                          <span className="font-bold text-orange-600">{salle.journee}€</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-gray-700">Weekend</span>
                          <span className="font-bold text-purple-600">{salle.weekend}€</span>
                        </div>
                      </div>

                      {/* Équipements */}
                      <div className="mb-6 flex-grow">
                        <h4 className="font-semibold text-gray-800 mb-2">Équipements inclus :</h4>
                        <div className="space-y-1">
                          {salle.equipements.map((equip, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {equip}
                            </div>
                          ))}
                        </div>
                      </div>

                      <a 
                        href={`tel:0783019955?subject=Réservation ${salle.nom}`}
                        className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition shadow-lg mt-auto"
                      >
                        Réserver cette salle
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Bureaux Individuels */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="bureaux">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Bureaux <span className="text-blue-600 font-brittany text-5xl lg:text-6xl">Individuels</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Espaces de travail privés et entièrement meublés pour vos rendez-vous et travail en autonomie
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {bureauxIndividuels.map((bureau) => (
                  <div key={bureau.id} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full">
                    
                    {/* Image placeholder */}
                    <div className="h-48 bg-gradient-to-br from-orange-100 to-yellow-100 relative">
                      <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        {bureau.surface}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building className="w-12 h-12 text-gray-400" />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-[#013F63] mb-2">{bureau.nom}</h3>
                      <p className="text-gray-600 mb-6 flex-grow">{bureau.description}</p>
                      
                      {/* Tarifs bureaux */}
                      <div className="space-y-2 mb-6 bg-gray-50 rounded-xl p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Demi-journée</span>
                          <span className="font-bold text-blue-600">{bureau.demiJournee}€</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Journée complète</span>
                          <span className="font-bold text-orange-600">{bureau.journee}€</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Weekend</span>
                          <span className="font-bold text-purple-600">{bureau.weekend}€</span>
                        </div>
                      </div>

                      <a 
                        href="tel:0783019955"
                        className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold transition shadow-lg mt-auto"
                      >
                        Réserver ce bureau
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Équipements bureaux */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-[#013F63] mb-6 text-center">
                  Équipements inclus - Bureaux individuels
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {equipementsBureau.map((equip, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{equip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Équipements Complets */}
        <section className="py-20 bg-white" id="equipements">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Équipements <span className="text-purple-600 font-brittany text-5xl lg:text-6xl">Inclus</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Tout le nécessaire pour la réussite de vos événements professionnels
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">Audiovisuel</h3>
                  <p className="text-sm text-gray-600">Vidéoprojecteur HD, écrans, son</p>
                </div>
                
                <div className="text-center p-6 bg-orange-50 rounded-2xl">
                  <Wifi className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">Connectivité</h3>
                  <p className="text-sm text-gray-600">Wi-Fi haut débit gratuit</p>
                </div>
                
                <div className="text-center p-6 bg-purple-50 rounded-2xl">
                  <Coffee className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">Restauration</h3>
                  <p className="text-sm text-gray-600">Thé, café, collations</p>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-2xl">
                  <Car className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">Stationnement</h3>
                  <p className="text-sm text-gray-600">Parking privé gratuit</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-[#013F63] mb-6 text-center">
                  Liste complète des équipements - Salles de formation
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {equipementsInclus.map((equip, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700">{equip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Localisation */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="localisation">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#013F63] mb-6">
                  Situation <span className="text-orange-500 font-brittany text-5xl lg:text-6xl">Idéale</span>
                </h2>
                <p className="text-xl text-gray-600">
                  À Lormont, aux portes de Bordeaux - Facilement accessible
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <MapPin className="w-8 h-8 text-blue-600" />
                      <div>
                        <h3 className="font-bold text-gray-800">Adresse</h3>
                        <p className="text-gray-600">8 Rue du Courant, 33310 Lormont</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Car className="w-6 h-6 text-green-600" />
                      Accès et stationnement
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        5 minutes du centre de Bordeaux
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Parking privé gratuit sur place
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Accès tramway Ligne A - Arrêt Lormont
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Proche rocade A630
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Clock className="w-6 h-6 text-orange-600" />
                      Horaires d'accès
                    </h3>
                    <div className="text-gray-600">
                      <p>Lundi - Vendredi : 8h - 19h</p>
                      <p>Samedi : 9h - 17h</p>
                      <p className="text-sm mt-2 text-orange-600">Accès weekend sur demande</p>
                    </div>
                  </div>
                </div>

                {/* Placeholder pour carte */}
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl h-80 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Carte interactive</p>
                      <p className="text-sm text-gray-500">Lormont - Bordeaux Métropole</p>
                    </div>
                  </div>
                  <a 
                    href="https://maps.google.com/maps?q=8+Rue+du+Courant+33310+Lormont"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Réservation & Contact */}
        <section className="py-20 bg-gradient-to-br from-[#013F63] to-blue-800 text-white" id="contact">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Réservez <span className="text-orange-400 font-brittany text-5xl lg:text-6xl">Maintenant</span>
              </h2>
              <p className="text-xl mb-12 opacity-90">
                Disponibilités en temps réel - Réponse immédiate
              </p>

              {/* Contact methods */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <a 
                  href="tel:0783019955"
                  className="flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-6 transition"
                  aria-label="Appeler Atipik RH pour réserver"
                >
                  <Phone className="w-8 h-8" />
                  <div className="text-left">
                    <div className="font-bold text-lg">Appelez directement</div>
                    <div className="text-orange-300">07 83 01 99 55</div>
                    <div className="text-sm opacity-80">Réponse immédiate</div>
                  </div>
                </a>
                
                <a 
                  href="mailto:contact@atipikrh.fr?subject=Demande de réservation salle formation"
                  className="flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-6 transition"
                  aria-label="Envoyer un email à Atipik RH"
                >
                  <Mail className="w-8 h-8" />
                  <div className="text-left">
                    <div className="font-bold text-lg">Écrivez-nous</div>
                    <div className="text-orange-300">contact@atipikrh.fr</div>
                    <div className="text-sm opacity-80">Devis personnalisé</div>
                  </div>
                </a>
              </div>

              {/* Urgence & garanties */}
              <div className="bg-white/10 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-xl mb-4">🚀 Réservation express</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span>Disponibilités en temps réel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span>Confirmation immédiate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span>Annulation gratuite 24h avant</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg font-semibold mb-2">
                  💡 Besoin urgent d'une salle aujourd'hui ?
                </p>
                <a 
                  href="tel:0783019955"
                  className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appel d'urgence - 07 83 01 99 55
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer légal minimal */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
                <Image
                  src="/images/logos/atipik-logo.png"
                  alt="Atipik RH"
                  width={120}
                  height={40}
                  className="h-8 w-auto brightness-0 invert"
                />
                <div className="text-sm text-gray-400">
                  <p>8 Rue du Courant, 33310 Lormont</p>
                  <p>SIRET: 123 456 789 00123 - Formation professionnelle</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-4">
                <a href="/mentions-legales" className="hover:text-white transition">Mentions légales</a>
                <a href="/cgv" className="hover:text-white transition">CGV</a>
                <a href="/rgpd" className="hover:text-white transition">Confidentialité</a>
                <a href="https://atipikrh.com" className="hover:text-white transition">Site principal</a>
              </div>
              
              <p className="text-gray-500 text-sm">
                © 2025 Atipik RH - Organisme de formation certifié Qualiopi
              </p>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
} 