import { createApp } from 'vue'
import {router} from "./router.js";
import './style.scss'
import App from './App.vue'

// diciamo di usare il router importato

createApp(App).use(router).mount('#app')
