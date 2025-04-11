const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Check if we're using a custom domain with GitHub Pages
const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true';

if (useCustomDomain) {
  // For GitHub Pages with custom domain: serve files from the root
  app.use('/', express.static(path.join(__dirname, 'out')));
  
  console.log(`Server running for GitHub Pages with custom domain at http://localhost:${PORT}/`);
} else {
  // For GitHub Pages without custom domain: serve files from the /deepfacenetwork-frontend path
  app.use('/deepfacenetwork-frontend', express.static(path.join(__dirname, 'out')));
  
  // Redirect root to the base path for GitHub Pages deployment
  app.get('/', (req, res) => {
    res.redirect('/deepfacenetwork-frontend');
  });
  
  console.log(`Server running for GitHub Pages without custom domain at http://localhost:${PORT}/deepfacenetwork-frontend`);
}

app.listen(PORT, () => {
  console.log(`Open your browser to the URL above to view the site with styles properly loaded.`);
});