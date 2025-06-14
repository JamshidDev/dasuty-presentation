
import {createRouter, createWebHistory} from "vue-router"
import {LoginPage, HomePage} from "@/pages/index.js"
import ClientLayout from "@/Layout/ClientLayout.vue"
import MainLayout from "@/Layout/MainLayout.vue"
import {ProjectsPage, ProjectInstancePage} from "@/pages"



const routes = [
    {
        path:"/",     
        component: MainLayout,
        children: [
            {
                path: "",
                name:"Home",
                component: HomePage
            },
            {
                path: "projects",
                name:"Projects",
                component: ProjectsPage,
            },
            {
                path: "projects/:id",
                name:"ProjectInstance",
                component: ProjectInstancePage,
            }
        ]
    },
    {
        path:"/login",
        component: ClientLayout,
        children: [
            {
                path: "",
                name:"Home",
                component: LoginPage
            }
        ]
    }

]




const router = createRouter({
    history: createWebHistory(),
    routes:routes,
})

export default router