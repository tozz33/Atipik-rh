/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Configuration simple et stable
  experimental: {
    // Désactiver seulement Fast Refresh de manière douce
    forceSwcTransforms: false,
  },
  
  // Redirections pour les anciens liens WordPress
  async redirects() {
    return [
      {
        source: '/wp-content/uploads/2025/09/Plaquette-location-de-salles.pdf',
        destination: '/location-salles-lormont',
        permanent: true, // Code 301 (redirection permanente)
      },
    ]
  },
  
  // Headers basiques
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
  
  // Configuration des images pour permettre les query strings
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
