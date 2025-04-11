/** @type {import('next').NextConfig} */

// For GitHub Pages with custom domain (e.g., deepfacenetwork.com)
const customDomainConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // No basePath or assetPrefix for custom domain
};

// For GitHub Pages without custom domain (username.github.io/deepfacenetwork-frontend)
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

// For local development and testing
const developmentConfig = {
  // No static export for development
  images: {
    unoptimized: true,
  },
};

// Determine which config to use
const isProduction = process.env.NODE_ENV === 'production';
const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true';
let nextConfig;

if (isProduction) {
  // In production, use custom domain config if specified
  nextConfig = useCustomDomain ? customDomainConfig : githubPagesConfig;
  console.log(`Using production config for ${useCustomDomain ? 'GitHub Pages with custom domain' : 'GitHub Pages without custom domain'}`);
} else {
  nextConfig = developmentConfig;
  console.log('Using development config');
}

module.exports = nextConfig;