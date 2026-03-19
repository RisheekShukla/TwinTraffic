<div align="center">
  <h1>🚦 TwinTraffic <i>(Interactive Showcase)</i></h1>
  <p><b>The Premium Frontend Dashboard for the TwinTraffic Platform</b></p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  </p>

  <p>
    A production-grade landing page and interactive console designed to showcase the power of the <b>TwinTraffic</b> Shadow Mirroring architecture directly in your browser.
  </p>
</div>

---

## ✨ Features

- **Premium Glassmorphism UI:** Built with custom Tailwind CSS base utility classes and sleek deep-dark aesthetics.
- **Interactive Architecture Flow:** A dynamic SVG and Framer Motion data-flow diagram illustrating the Gateway's asynchronous HTTP request splitting in real-time.
- **Live Demo Console:** Test the backend API right from your browser! Watch as requests are synchronously sent to the primary `v1` service and asynchronously mirrored to the chaotic shadow `v2` service, instantly displaying `MATCH`, `MISMATCH` (with detailed JSON diff trees), or `TIMEOUT` results.
- **Responsive Layout:** Fluidly scales down to mobile devices, ensuring the metrics and comparison components remain beautifully legible on any screen.
- **Lightning Fast:** Powered by Vite, ensuring optimal developer experience, instant Hot Module Replacement (HMR), and highly optimized production builds.

---

## 🚀 Quick Start

To run this React application locally, ensure you have Node.js installed, then execute:

```bash
# Install the exact dependencies (Tailwind, Framer Motion, Lucide)
npm install

# Start the blazing-fast Vite development server
npm run dev
```

Visit `http://localhost:5173` in your browser to interact with the dashboard.

---

## 🔗 The Core Engine

This React application acts as the presentation layer. The actual heavy lifting (Asynchronous Java Request Mirroring, Deep JSON Object Diffing, and Chaos engineering) is handled by the **TwinTraffic Backend**.

You can view the main Spring Boot repository and architectural flow here:
👉 **[TwinTraffic-Backend Repository](https://github.com/RisheekShukla/TwinTraffic-Backend)**
