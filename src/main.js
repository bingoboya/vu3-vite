import { createApp } from 'vue'
import App from './App.vue'
import 'styles/index.scss'
// import element3 from 'element3'
// import 'element3/lib/theme-chalk/index.css'

import element3 from 'plugins/element3.js'
createApp(App).use(element3).mount('#app')
