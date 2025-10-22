# Clawzea Web App

This repository contains the Clawzea marketing site and web experience for helping pet parents connect with trusted care providers.

## Getting Started

You will need a current LTS release of Node.js (v18+) and npm. We recommend [installing via nvm](https://github.com/nvm-sh/nvm#installing-and-updating) so you can match the versions used in production.

```sh
git clone <REPO_URL>
cd Clawzea
npm install
npm run dev
```

The development server runs on `http://localhost:5173` by default. Vite provides hot-module reloading, so edits in `src/` appear immediately.

## Tooling

- Vite + React + TypeScript
- Tailwind CSS and shadcn/ui for styling and components
- ESLint and TypeScript for linting and type-checking

Useful scripts:

- `npm run dev` – start the local dev server
- `npm run build` – create a production build
- `npm run preview` – serve the production build locally
- `npm run lint` – run project linting

## Deployment

The app builds to the `dist/` directory via `npm run build`. Deploy the contents of `dist/` to your preferred static hosting platform (e.g. Netlify, Vercel, Cloudflare Pages, or S3/CloudFront). Update DNS and CDN settings as needed for the `clawzea.com` domain or any custom subdomain you manage.
