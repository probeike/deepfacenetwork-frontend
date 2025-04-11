# Deepface Network Frontend

## Deployment Options

This project supports two deployment scenarios:

### 1. GitHub Pages Deployment

For deployment to GitHub Pages (at username.github.io/deepfacenetwork-frontend):

```bash
# Build for GitHub Pages
npm run build:github

# Test locally (will serve at /deepfacenetwork-frontend path)
npm run serve:github
```

### 2. Custom Domain Deployment

For deployment to a custom domain (e.g., deepfacenetwork.com):

```bash
# Build for custom domain
npm run build:custom

# Test locally (will serve at root path /)
npm run serve:custom
```

## Troubleshooting

If you encounter 404 errors when loading stylesheets or other assets:

1. Make sure you're using the correct deployment configuration for your target environment
2. For GitHub Pages, assets should be served from the `/deepfacenetwork-frontend` path
3. For custom domains, assets should be served from the root path

## Development

```bash
# Run development server
npm run dev
```

# DeepFaceNetwork Frontend

A planetary exploration LLM project on AWS

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Contains the App Router components
  - `layout.tsx` - Root layout component
  - `page.tsx` - Homepage component
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts
- `.github/workflows/deploy.yml` - GitHub Actions workflow for deployment

## Deployment

This project is configured for deployment to GitHub Pages using GitHub Actions. When you push to the main branch, the workflow will automatically build and deploy the app to the gh-pages branch.