import type { MetadataRoute } from 'next'

import { BASE_URL } from '../lib/seo/site'



export default function robots(): MetadataRoute.Robots {

  return {

    rules: {

      userAgent: '*',

      allow: '/',

      disallow: [

        '/api/',

        '/_next/',

        '/admin/',

        '/wp-content/',

        '/*?page_id=',

        '/*?mailpoet_page=',

        '/*?s=',

        '/*?trk=',

      ],

    },

    sitemap: `${BASE_URL}/sitemap.xml`,

  }

}

