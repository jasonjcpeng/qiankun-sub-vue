import { fileURLToPath, URL } from 'node:url'
import qiankun from 'vite-plugin-qiankun';
import path from 'node:path';
import dotenv from 'dotenv';


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const qiankunConfig:any = dotenv.config({path:`.env.${process.env.NODE_ENV}`})?.parsed
// https://vitejs.dev/config/
export default defineConfig({
  // 这里的 'app2' 是子应用名，主应用注册时AppName需保持一致
  plugins: [vue({
    style:{trim:false}
  }), vueJsx(), qiankun('app2',{
    useDevMode:process.env.NODE_ENV === 'development'
  })],
  server:{
    port:qiankunConfig.DEV_PORT,
    origin:`http://127.0.0.1:${qiankunConfig.DEV_PORT}`
  },
  base:qiankunConfig.BASE,
  publicDir:qiankunConfig.PUBLIC_PATH,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
