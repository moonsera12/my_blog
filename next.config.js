/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 마크다운 파일을 public 폴더에서 제공
  async rewrites() {
    return [
      {
        source: '/posts/:path*',
        destination: '/api/markdown/:path*',
      },
    ];
  },  // 성능 최적화 설정
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // 정적 페이지 최적화
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['@radix-ui/react-icons', '@radix-ui/react-tooltip'],
  }
};
 
module.exports = nextConfig;
