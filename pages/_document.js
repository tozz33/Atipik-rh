import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://atipikrh.fr/#organization",
    "name": "Atipik RH",
    "url": "https://atipikrh.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lormont",
      "postalCode": "33310",
      "addressRegion": "Nouvelle-Aquitaine",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.8764,
      "longitude": -0.5212
    },
    "sameAs": [
      "https://www.linkedin.com/company/atipik-rh",
      "https://www.facebook.com/atipikrh"
    ]
  }

  return (
    <Html lang="fr">
      <Head>
        {/* Preconnect pour optimiser le chargement des fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Préchargement de la police Brittany */}
        <link rel="preload" href="/Fonts/BrittanySignature.ttf" as="font" type="font/ttf" crossOrigin="" />
        
        {/* Meta tags génériques */}
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Atipik RH" />
        
        {/* Favicon Atipik RH */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logos/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logos/favicon.png" />
        <link rel="shortcut icon" href="/images/logos/favicon.png" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#013F63" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 