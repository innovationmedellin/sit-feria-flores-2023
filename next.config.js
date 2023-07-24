/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['www.medellin.gov.co', 'www.gov.co']
  }
}

module.exports = nextConfig
