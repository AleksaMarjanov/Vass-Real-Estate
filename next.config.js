/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
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
    dataset: process.env.NEXT_APP_SANITY_DATASET,
    emailJs_service: process.env.REACT_APP_EMAILJS_SERVICE,
    emailJs_template: process.env.REACT_APP_EMAILJS_TEMPLATE,
    emailJs_API: process.env.REACT_APP_EMAILJS_API_KEY
  },
  async redirect() {
    return [
      {
        source: 'home',
        destination: '/',
        permanent: false,
      },
    ]
  } 
}

module.exports = nextConfig
