/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/security-portfolio',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig