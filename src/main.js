// import "tailwindcss/tailwind.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "echarts";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/styles/main.css'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
