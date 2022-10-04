import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'fontawesome-free/css/all.min.css'
import {key, store} from "@/store";

createApp(App)
    .use(router)
    .use(store, key)
    .mount('#app')
