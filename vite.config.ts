import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/portfolio/', // <-- décommenter si déployé dans un sous-dossier (ex: GitHub Pages projet)
})
