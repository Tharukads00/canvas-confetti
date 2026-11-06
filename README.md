# 🎉 Canvas Confetti — Webpack + Dynamic Import Exercise

<div align="center">

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Page-brightgreen?style=for-the-badge)](https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/)
[![Webpack](https://img.shields.io/badge/Bundler-Webpack%205-8DD6F9?style=for-the-badge&logo=webpack)](https://webpack.js.org/)

> Click the **Yay!** button and watch confetti burst from a random spot on the screen — built with dynamic imports, Lodash, and Webpack.

</div>

---

## 🌐 Live Page

👉https://tharukads00.github.io/canvas-confetti/

> [!TIP]
> Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name after pushing to GitHub.

---

## 📖 What This Exercise Covers

This project is a hands-on exercise exploring three key JavaScript/Webpack concepts:

| Concept | What You Learn |
|---|---|
| **Dynamic `import()`** | Load `canvas-confetti` only when the button is clicked (lazy loading) |
| **Webpack Externals** | Use Lodash via CDN instead of bundling it — keeps bundle size small |
| **Webpack Production Build** | Bundle, minify, and output to `dist/` with `HtmlWebpackPlugin` |
| **GitHub Actions CI/CD** | Auto-deploy to GitHub Pages on every `git push` |

---

## ✨ How It Works

```
User clicks "Yay!" button
        ↓
Dynamic import() fetches canvas-confetti (only on first click)
        ↓
_.sample() picks a random color from the palette (via Lodash CDN)
        ↓
confetti() fires from a random (x, y) origin on the screen 🎊
```

### Color Palette
The confetti randomly picks one of these colors on each click:

| Color | Hex |
|---|---|
| 🟡 Yellow | `#CCC31B` |
| 🟢 Green | `#1BCC1B` |
| 🔵 Blue | `#1B9DCC` |
| 🟣 Purple | `#B71BCC` |
| 🩷 Pink | `#CC1B6B` |
| 🫐 Indigo | `#3827F5` |
| 💜 Violet | `#F527CF` |

---

## 🗂️ Project Structure

```
canva-confetti/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions CI/CD pipeline
├── src/
│   ├── index.html           # HTML template (with Lodash CDN)
│   └── index.js             # App logic — dynamic import + confetti
├── dist/                    # Built output (auto-generated, git-ignored)
├── webpack.config.js        # Webpack config (production, externals)
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

- **[canvas-confetti](https://www.npmjs.com/package/canvas-confetti)** — Confetti animation library
- **[Lodash](https://lodash.com/)** — `_.sample()` to pick a random color (loaded via CDN)
- **[Webpack 5](https://webpack.js.org/)** — Module bundler
- **[HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)** — Auto-injects scripts into HTML
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** — Manual deploy helper
- **[GitHub Actions](https://github.com/features/actions)** — Automated CI/CD

---

## 🚀 Getting Started Locally

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

# 2. Install dependencies
npm install

# 3. Start dev mode (webpack watch — rebuilds on file save)
npm run dev
```

Then open `dist/index.html` in your browser.

---

## 📦 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Webpack in watch mode — rebuilds on save |
| `build` | `npm run build` | One-time production build → `dist/` |
| `deploy` | `npm run deploy` | Build + manually push `dist/` to `gh-pages` |

---

## ⚙️ CI/CD Pipeline

This project uses **GitHub Actions** for automatic deployment.

```
git push origin main
        ↓
GitHub Actions triggers (.github/workflows/deploy.yml)
        ↓
  ✅ Checkout code
  ✅ Setup Node 20
  ✅ npm ci (install deps)
  ✅ npm run build (webpack → dist/)
  ✅ Push dist/ to gh-pages branch
        ↓
GitHub Pages serves the live site 🌐
```

> [!NOTE]
> The `dist/` folder is **git-ignored** — you never push it manually. GitHub Actions builds and deploys it automatically on every push to `main`.

---

## 🔑 Key Concept: Dynamic Import

The most important pattern in this exercise — `canvas-confetti` is **not** in the main bundle. It's loaded on-demand the first time the user clicks:

```js
btn.addEventListener('click', () => {
  import('canvas-confetti').then(({ default: confetti }) => {
    confetti({
      origin: { x: Math.random(), y: Math.random() },
      colors: [_.sample(colors_arr)]   // random color via Lodash
    });
  });
});
```

This creates a **separate chunk** (`685.js`) in the `dist/` folder — Webpack splits it out automatically. ⚡

---

<div align="center">
Made as part of the <strong>Michi Course 3</strong> — JavaScript & Webpack exercises 🎓
</div>
