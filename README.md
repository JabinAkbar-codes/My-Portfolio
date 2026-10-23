# Jabin — Developer Portfolio

A modern, animated developer portfolio built with **React + JavaScript**, Tailwind CSS, shadcn/ui, and an interactive 3D Spline scene.

This project was converted from a TypeScript + React codebase into plain JavaScript + React, with the language switcher removed (English only) and personal content replaced with placeholders ready for you to fill in.

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

The `dist/` folder can be deployed to any static host (Vercel, Netlify, GitHub Pages, etc.). A `vercel.json` is already included for Vercel deployments.

## 6. Customize with your own content

Everything you need to personalize is centralized in a few files:

| What to change | File |
|---|---|
| Name, role, bio, skills text | `src/locales/translations.js` |
| Job history & education | `src/locales/translations.js` → `experience.jobs` / `experience.education` |
| Featured projects (titles/descriptions) | `src/locales/translations.js` → `projects.items` |
| Project links, images, tags | `src/components/Projects.jsx` → `projectData` |
| Your photo | Replace `public/placeholder.svg` reference in `src/components/About.jsx` with your own image file |
| Resume link | `src/components/Hero.jsx`, `src/components/Footer.jsx` (`links.resume` / resume URL) |
| Social links (GitHub, LinkedIn, email) | `src/components/Hero.jsx`, `src/components/Footer.jsx` |
| WhatsApp contact number | `src/components/Navbar.jsx`, `src/components/BottomNav.jsx`, `src/components/Footer.jsx`, `src/components/WhatsAppButton.jsx` (search for `wa.me`) |
| Page title / meta tags / SEO | `index.html` |
| Tech stack icons/levels | `src/components/TechStack.jsx` |
| Colors / theme | `tailwind.config.js`, `src/index.css` |

All placeholder values (`your.email@example.com`, `yourusername`, `Your City, Your Country`, `Project One`, etc.) are easy to find — just search the project for `your` or `Project` to locate every spot to edit.

## 7. Project structure

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

## Notes

- The language switcher has been removed — the site is English-only by default.
- The footer's "source code" link has been removed.
- All personal placeholder data (name, email, phone, socials, project links, photo, resume) needs to be replaced with your own before publishing.
