/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    distDir: 'out',
    images: {
      unoptimized: true,
    },
  }),
  // Required for GitHub Pages deployment with Next.js
  basePath: process.env.NODE_ENV === 'production' ? '/deepfacenetwork-frontend' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/deepfacenetwork-frontend' : '',
}

module.exports = nextConfig