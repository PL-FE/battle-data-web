import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/globalVar.scss";@import "@/assets/styles/globalMixins.scss";'
      }
    }
  },
  server: {
    watch: {
      usePolling: true,   // 修复HMR热更新失效
    },
    proxy: {
      '/api': { // 配置需要代理的路径 --> 这里的意思是代理http://localhost:80/api/后的所有路由
        target: 'https://api.test.zlbzb.cn/battle', // 目标地址 --> 服务器地址
        changeOrigin: true, // 允许跨域
        // 如果这里没有进行路径重写，当你访问http://localhost:80/api/login/,实际上访问的就是https://172.20.9.153:8085/api/login/
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
})
