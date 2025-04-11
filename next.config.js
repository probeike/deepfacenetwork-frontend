/** @type {import('next').NextConfig} */

// For production build (GitHub Pages deployment)
const productionConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/deepfacenetwork-frontend',
  assetPrefix: '/deepfacenetwork-frontend/',
};

// For local development and testing
const developmentConfig = {
  // No static export for development
  images: {
    unoptimized: true,
  },
};

// Use development config for local testing, production config otherwise
// Set NODE_ENV=production explicitly when building for production
const isProduction = process.env.NODE_ENV === 'production';
console.log(`Using ${isProduction ? 'production' : 'development'} config`);

const nextConfig = isProduction ? productionConfig : developmentConfig;

module.exports = nextConfig;