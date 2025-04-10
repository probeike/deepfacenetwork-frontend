# Minimal React App

A minimal React application created with Vite that displays "Hello, world!".

## Project Structure

```
minimal-react-app/
├── index.html         # HTML entry point
├── package.json       # Project dependencies and scripts
├── vite.config.js     # Vite configuration
└── src/
    ├── App.jsx        # Main App component
    └── main.jsx       # React rendering entry point
```

## Setup

1. Clone the repository
2. Install dependencies:

```bash
cd minimal-react-app
npm install
```

## Running the App

Start the development server:

```bash
npm run dev
```

This will start the app in development mode. Open the URL shown in the terminal (typically http://localhost:5173) to view it in your browser.

## Building for Production

Build the app for production:

```bash
npm run build
```

This will create a `dist` folder with the production build.

To preview the production build locally:

```bash
npm run preview
