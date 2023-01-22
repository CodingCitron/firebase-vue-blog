import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Hoem',
        component: () => import('../views/main/MainView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router