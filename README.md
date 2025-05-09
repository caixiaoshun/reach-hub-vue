# 🌐 Reach Hub Vue

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A modern, responsive frontend platform built with Vue 3 and Vite for showcasing research projects and datasets—especially in the field of remote sensing.

🔗 **Live Demo**: [https://caixiaoshun.github.io/reach-hub-vue/#/](https://caixiaoshun.github.io/reach-hub-vue/#/)

---

## ✨ Features

* ⚡ **Modern Tech Stack**: Vue 3 + Vite + TypeScript for fast development.
* 📱 **Responsive Design**: Optimized layout across all screen sizes.
* 📊 **Project & Dataset Display**: Clean card-style views for both.
* 🚀 **GitHub Pages Deployment**: Automatic CI/CD with GitHub Actions.

---

## 🛠️ Tech Stack

* [Vue 3](https://vuejs.org/)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [pnpm](https://pnpm.io/)
* [GitHub Actions](https://github.com/features/actions)

---

## 📦 Installation

```bash
git clone https://github.com/caixiaoshun/reach-hub-vue.git
cd reach-hub-vue
pnpm install
```

---

## 🧪 Getting Started

### ✅ Prerequisites

Ensure the following are installed:

* [Node.js](https://nodejs.org/) (v18+)
* [pnpm](https://pnpm.io/) (v8+)

### 🧰 Available Commands

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start the development server         |
| `pnpm build`   | Build the project for production     |
| `pnpm preview` | Preview the built app locally        |
| `pnpm lint`    | Run ESLint for code quality checking |
| `pnpm test`    | Run unit tests                       |

---

## 💻 Development

```bash
pnpm dev
```

Runs the app in development mode:
Open [http://localhost:9002](http://localhost:9002) to view it in your browser.

---

## 📦 Build for Production

```bash
pnpm build
```

The output will be located in the `dist/` directory.

---

## 🚀 Deployment

Pushing to the `master` branch triggers a GitHub Actions workflow that:

* Builds the project using `pnpm build`
* Publishes the contents of `dist/` to the `gh-pages` branch
* Deploys to GitHub Pages at the URL listed above

Make sure your `vite.config.ts` includes:

```ts
export default defineConfig({
  base: '/reach-hub-vue/'
});
```

---

## 📁 Project Structure

```bash
reach-hub-vue/
├── public/                 # Static assets (no processing)
├── src/
│   ├── assets/             # Images, icons, etc.
│   ├── components/         # Vue components
│   ├── layouts/            # Layouts and containers
│   ├── pages/              # Route-level components
│   ├── router/             # Vue Router config
│   ├── store/              # (optional) Pinia/Vuex store
│   └── App.vue             # Root app component
├── .github/workflows/      # GitHub Actions config
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── pnpm-lock.yaml          # pnpm lockfile
└── vite.config.ts          # Vite build config
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add something cool'`
4. Push to GitHub: `git push origin feature/my-feature`
5. Open a Pull Request 🎉

---

## 📬 Contact

Feel free to reach out:

* 📧 Email: [cs.shunzhang@foxmail.com](mailto:cs.shunzhang@foxmail.com)
* 🧑‍💻 GitHub: [@caixiaoshun](https://github.com/caixiaoshun)

---

## 🙏 Acknowledgments

* [Vue 3](https://vuejs.org/)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [GitHub Actions](https://github.com/features/actions)
* [Firebase Studio](https://idx.google.com/) – for initial design inspiration

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
