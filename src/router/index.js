
import {createRouter, createWebHistory} from "vue-router"
import {LoginPage, HomePage} from "@/pages/index.js"






const routes = [
    {
        path:"/",
        name:"Home",
        component: HomePage,
    },
    {
        path:"/login",
        name:"Home",
        component: LoginPage,
    }

]




const router = createRouter({
    history: createWebHistory(),
    routes:routes,
})

export default router