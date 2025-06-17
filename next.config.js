/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/my_blog',
  assetPrefix: '/my_blog'
}

module.exports = nextConfig
