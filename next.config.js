/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Désactiver Turbopack pour éviter les erreurs de permissions
  experimental: {
    turbo: false,
  },

  // Redirections pour les anciens liens WordPress
  async redirects() {
    return [
      {
        source: '/wp-content/uploads/2025/09/Plaquette-location-de-salles.pdf',
        destination: '/location-salles-lormont',
        permanent: true,
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
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Configuration des images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // Configuration pour les images locales dans public/
    localPatterns: [
      {
        pathname: '/images/**',
      },
    ],
    // Configuration pour les images externes (Unsplash)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  compress: true,
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
