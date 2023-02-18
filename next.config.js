/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  images: {
    domains: [
      'www.instagram.com',
      'www.facebook.com',
      'cdn.sanity.io',
    ]
  },
  env: {
    projectId: process.env.NEXT_APP_SANITY_PROJECT_ID,
    sanity_token: process.env.NEXT_APP_SANITY_TOKEN,
    dataset: process.env.NEXT_APP_SANITY_DATASET
  },
}

module.exports = nextConfig
