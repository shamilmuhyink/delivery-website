/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  allowedDevOrigins: ['192.168.1.13', 'localhost', '127.0.0.1']
}

module.exports = nextConfig