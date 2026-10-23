# Jabin — Developer Portfolio

A modern, animated developer portfolio built with **React + JavaScript**, Tailwind CSS, shadcn/ui, and an interactive 3D Spline scene.

This project was converted from a TypeScript + React codebase into plain JavaScript + React

## Tech Stack

- React 18 (JavaScript, no TypeScript)
- Vite
- Tailwind CSS + shadcn/ui components
- React Router
- Spline (interactive 3D scene)
- Lucide icons

## 1. Requirements

- [Node.js](https://nodejs.org/) version 18 or higher
- npm (comes with Node.js)

Check your versions:

```bash
node -v
npm -v
```

## 2. Install dependencies

Unzip the project, open a terminal in the project folder, then run:

```bash
npm install
```

## 3. Run the project locally

```bash
npm run dev
```

This starts the Vite dev server. Open the URL shown in the terminal (usually `http://localhost:8080`) in your browser.

## 4. Build for production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

## 5. Deploy

The `dist/` folder can be deployed to any static host (Vercel, Netlify, GitHub Pages, etc.). 



## 6. Project structure

```
src/
├── components/       # UI sections (Hero, About, Projects, Experience, etc.)
│   └── ui/           # shadcn/ui primitives (button, card, dialog, etc.)
├── contexts/         # Language + theme providers
├── hooks/            # Custom hooks (scroll animation, typing effect, etc.)
├── lib/              # Utility functions
├── locales/          # Text content (translations.js)
├── pages/            # Route pages (Index, NotFound)
├── App.jsx           # App root, routing, providers
└── main.jsx          # Entry point
```


