import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Atipik RH - Formation, Bilan de compétences & VAE à Lormont</title>
        <meta name="description" content="Centre de formation à Lormont (33) : bilan de compétences, VAE, formations certifiantes CPF. Accompagnement personnalisé pour votre évolution professionnelle." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        id="gtm-script"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T45Z2XRQ');`
        }}
      />
      
      <Component {...pageProps} />
    </>
  )
} // Force deployment Thu Oct 23 12:40:44 CEST 2025
// Test reconnexion Vercel Thu Oct 23 12:47:00 CEST 2025
