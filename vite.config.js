import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import spaFallbackPlugin from "vite-plugin-spa-fallback";

// https://vite.dev/config/
export default defineConfig({
  base: "/day-37/",
  plugins: [react(), spaFallbackPlugin()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@layouts": "/src/layouts",
      "@pages": "/src/pages",
    },
  },
});
