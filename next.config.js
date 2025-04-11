/** @type {import('next').NextConfig} */

// Check if we're deploying to a custom domain
const isCustomDomain = process.env.DEPLOY_TARGET === 'custom_domain';

// For production build (GitHub Pages deployment)
const githubPagesConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/deepfacenetwork-frontend',
  assetPrefix: '/deepfacenetwork-frontend/',
};

// For custom domain deployment (e.g., deepfacenetwork.com)
const customDomainConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // No basePath or assetPrefix for custom domain
};

// For local development and testing
const developmentConfig = {
  // No static export for development
  images: {
    unoptimized: true,
  },
};

// Determine which config to use
const isProduction = process.env.NODE_ENV === 'production';
let nextConfig;

if (isProduction) {
  nextConfig = isCustomDomain ? customDomainConfig : githubPagesConfig;
  console.log(`Using production config for ${isCustomDomain ? 'custom domain' : 'GitHub Pages'}`);
} else {
  nextConfig = developmentConfig;
  console.log('Using development config');
}

module.exports = nextConfig;