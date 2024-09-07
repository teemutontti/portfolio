import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: "esbuild"
  },
  base: '/',
  plugins: [
    react(),
    visualizer({ open: true }),
    WindiCSS(),
  ],
})
