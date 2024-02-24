import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import CardPage from './pages/CardPage.vue'
import {createPinia} from "pinia";

const app = createApp(App)

/**
 * FIXIT: На маленьком приложении ничего страшного
 * Но лучше вынеси роутер в отдельную директорию
 */
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/card/:id', name: 'Card', component: CardPage, props: true}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

app.use(router)
app.use(createPinia())


app.mount('#app')
