import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createWebHashHistory,createRouter,useRouter} from "vue-router";
import home from "./components/home.vue"
import about from "./components/about.vue"
import society from "./components/society.vue"
import login from "./components/login.vue"
import society1 from "./components/society1.vue"
import society2 from "./components/society2.vue"

const routes = [
    { path: '/',component: home},
    { path: '/about', component: about},
    { path: '/society', component: society},
    { path: '/login', component: login},
    { path: '/society1', component: society1},
    { path: '/society2', component: society2},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

createApp(App).use(router).mount('#app')
