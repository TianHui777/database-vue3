import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


//解决跨域问题
import axios from "axios"

axios.defaults.baseURL = "/api";
app.config.globalProperties.$http = axios;
