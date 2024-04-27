import '@/styles/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {getCategoryApi} from "@/apis/head.js";
//懒加载
import { useIntersectionObserver } from '@vueuse/core'
import '@/styles/global.css'
import '@/styles/reset.css'
//懒加载
import {lazyPlugin} from "@/directives/index.js";
//全局组件插件
import {componentsPlugin} from "@/components/index.js";
//pinia 持久化插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

const app = createApp(App)

// app.use(createPinia())
const pinia=createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(lazyPlugin)

app.use(componentsPlugin)

getCategoryApi().then(res=>{
    console.log(res)
})

app.mount('#app')
