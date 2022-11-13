/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.boredpanda.com', 'www.rd.com', 'images.pexels.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
