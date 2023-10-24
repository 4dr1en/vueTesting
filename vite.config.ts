/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { UserConfig as VitestUserConfigInterface } from "vitest/config"

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: 'happy-dom',
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@': '/src'
    }
  },
  test: vitestConfig.test,
})
