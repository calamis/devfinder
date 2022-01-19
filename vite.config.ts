import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        home: resolve(root, 'pages/home/home.html'),
        about: resolve(root,  'pages/about/about.html'),
        profile: resolve(root, 'pages/profile/profile.html')
      }
    }
  }
})
