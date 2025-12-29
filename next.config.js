/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
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
  
  // Headers pour sécurité et SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // Configuration des images pour optimiser les performances
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Compression et optimisation
  compress: true,
  
  // Optimisation du build
  swcMinify: true,
  
  // Production source maps désactivées pour la sécurité
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
