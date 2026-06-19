import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/CalcGetNinjas/' : '/',
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: [...configDefaults.exclude, 'e2e/*'],
  },
})
