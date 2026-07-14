import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use a repo base only for production builds (GitHub Pages).
// During `npm run dev` we must serve from `/` so Vite's HMR and module imports work.
const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/Ixchel-Moon-Phases/' : '/'
})
