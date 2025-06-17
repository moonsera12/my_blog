/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  distDir: '.next',
  generateBuildId: () => 'build',
  trailingSlash: true
}

module.exports = nextConfig
