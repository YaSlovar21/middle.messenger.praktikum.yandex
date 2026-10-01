// vite.config.js
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer()
      ]
    }
  }
})