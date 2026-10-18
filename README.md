# Hamad Ullah — Full Stack Developer Portfolio

A Next.js App Router portfolio built with TypeScript, Tailwind CSS v4, and Lucide icons.

## Requirements
- Node.js 20.9 or newer (Node.js 22 or 24 recommended)
- npm

## Run locally
1. Extract this ZIP and open the project folder in VS Code.
2. Open Terminal in the project root (the folder containing `package.json`).
3. Run `npm install`, then `npm run dev`.
4. Visit http://localhost:3000.

## Before publishing
- In `app/page.tsx`, replace `YOUR_EMAIL@example.com` with your actual email and update social/project links.
- In `app/layout.tsx`, replace `https://example.com` in `metadataBase` with your deployed domain.
- The CV is available at `/cv.pdf`. Replace `public/cv.pdf` with your latest CV if needed.
- Do not commit real `.env` files, passwords, or API keys. `.env.example` is a safe template only.

## Deploy to GitHub and Vercel
1. Create a new empty repository on GitHub.
2. Upload/push the contents of this folder so `package.json` is at the repository root. Do not upload `node_modules` or `.next`.
3. In Vercel, choose **Add New → Project**, import the GitHub repository, and keep **Framework Preset: Next.js**.
4. Keep the Root Directory as `./` and deploy. Vercel detects the build command automatically (`next build`).
5. After deployment, add your final domain in Vercel and update `metadataBase` in `app/layout.tsx`.

## Build locally
Run `npm install`, `npm run build`, then `npm run start`.

## Project structure
- `app/` — pages, layout, and global styles
- `public/` — static images, favicon, and CV
- `package.json` / `package-lock.json` — dependencies and reproducible npm installs
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs` — project configuration
