import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// A minimal config for debugging the Vercel build
export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react()],
})