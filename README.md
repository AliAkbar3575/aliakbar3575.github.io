# Ali Akbar — Portfolio

This repository is a production-ready personal portfolio site for Ali Akbar, generated from the official CV `Ali_Akbar_CV.pdf` (single source of truth).

Features
- Modern responsive React site (Vite)
- TailwindCSS + custom variables
- Framer Motion animations
- Theme persistence (dark default)
- Sections: Hero, About, Research Interests, Skills, Projects, Applied Research, Experience, Publications, Contact

Installation

1. Install dependencies:

```bash
npm install
# also install optional packages for deployment
npm install -D tailwindcss postcss autoprefixer framer-motion lucide-react
```

Development

```bash
npm run dev
```

Build

```bash
npm run build
```

Deployment (GitHub Pages)

Install `gh-pages` and add a `homepage` in `package.json`, then run:

```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

Folder structure

See the `src/` folder for components, sections, and `src/data/portfolioData.js` which is populated directly from `Ali_Akbar_CV.pdf`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
