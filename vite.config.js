import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//element+，自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:'127.0.0.1',
    port:5173 //端口
  },
  plugins: [
    vue(),
    AutoImport({
      //自动导入其它的依赖
      imports:["vue","vue-router","pinia"],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      //配置element+用sass样式配色系统
      resolvers: [ElementPlusResolver({importStyle:"sass"})],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        //自动导入定制化样式进行样式覆盖
        additionalData:
            `@use "@/styles/element/index.scss" as *;
             @use "@/styles/var.scss" as *;`,
      }
    }
  }
})
