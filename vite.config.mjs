import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";
import path from "path";
import { fileURLToPath } from "url";

// Correctly define __dirname for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2000,
  },
  resolve: {
    alias: {
      "three/examples/js/libs/stats.min": path.resolve(__dirname, "empty-module.js"),
    },
  },
  plugins: [tsconfigPaths(), react({ jsxRuntime: 'classic' }), tagger()],
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
  },
});