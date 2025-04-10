# DeepFaceNetwork Frontend

A minimal Next.js app with TypeScript using the App Router.

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