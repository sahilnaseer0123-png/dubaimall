# The Grand Atrium — Downtown Dubai

A modern, high-performance web platform showcasing The Grand Atrium luxury shopping, fine dining, entertainment attractions, and events in Downtown Dubai.

## 🔗 Live Site & Repository
- **Live URL**: [https://dubaimall.pages.dev](https://dubaimall.pages.dev)
- **Deployment URL**: [https://1f316dcb.dubaimall.pages.dev](https://1f316dcb.dubaimall.pages.dev)
- **GitHub Repository**: [sahilnaseer0123-png/dubaimall](https://github.com/sahilnaseer0123-png/dubaimall)
- **Branch**: `main`

---

## 🚀 Cloudflare Pages Hosting Guide

This project is pre-configured for static export (`output: "export"`) with all dynamic store, dining, attraction, and event routes pre-rendered at build time.

### Method 1: Continuous Deployment via GitHub (Recommended)

1. Open your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Compute (Workers) > Workers & Pages** (or **Pages**).
3. Click **Create application** > **Pages** > **Connect to Git**.
4. Select your repository: `sahilnaseer0123-png/dubaimall`.
5. Configure the build settings:
   - **Framework preset**: `None` or `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js version**: `20` or `22` (Environment Variable: `NODE_VERSION=20`)
6. Click **Save and Deploy**.

> **Note**: Any future `git push origin main` will automatically trigger a new production build and deployment on Cloudflare!

---

### Method 2: Direct CLI Deployment via Wrangler

If you want to deploy directly from your local terminal:

1. Log in to Cloudflare:
   ```bash
   npx wrangler login
   ```
2. Build and deploy in one step:
   ```bash
   npm run deploy
   ```
   Or manually:
   ```bash
   npm run build
   npx wrangler pages deploy out --project-name=dubaimall
   ```

---

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
