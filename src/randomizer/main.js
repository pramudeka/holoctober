// import { createApp } from 'vue'
import { createApp}  from 'https://unpkg.com/vue@3/dist/vue.global.js'
import App from './App.vue'
// import Router from './router'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// import './assets/style.css'
// import './assets/custom.css'

const app = createApp(App)
//app.use(Router)
//app.use(VueAxios,axios)
app.mount('#app')
