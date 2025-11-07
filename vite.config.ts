import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  root: '.',              // ✅ 루트는 현재 폴더 기준
  base: './',             // ✅ 상대경로 빌드 (GitHub Pages 대비)
  server: {
    port: 5173,
    open: true
  }
})
