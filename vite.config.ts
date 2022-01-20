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
        main: new URL(root, 'index.html').pathname,
        home: new URL(root, 'pages/home/index.html').pathname,
        about: new URL(root,  'pages/about/index.html').pathname,
        profile: new URL(root, 'pages/profile/index.html').pathname
      }
    }
  }
})
