import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works whether served from a custom domain
// (binaygupta.in) or a GitHub Pages project subpath (/myPortfolio/).
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 1500,
  },
});
