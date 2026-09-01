import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Ensure a single React instance — prevents "Invalid hook call" when
    // pre-bundled deps (e.g. lenis/react) would otherwise pull their own copy.
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: ["lenis", "lenis/react"],
  },
});
