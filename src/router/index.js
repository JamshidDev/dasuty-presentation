
import {createRouter, createWebHistory} from "vue-router"
import {LoginPage, GantChartPage, DashboardPage} from "@/pages/index.js"
import {ProjectsPage, ProjectInstancePage} from "@/pages"
import {useAppSetting} from "@/utils/index.js"
const appLayout = useAppSetting.appLayouts



const routes = [
    {
        path:"/",
        children: [
            {
                path: "",
                name:"Home",
                component: GantChartPage,
                meta:{
                    layout:appLayout.client
                }
            },
            {
                path: "projects",
                name:"Projects",
                component: ProjectsPage,
                meta:{
                    layout:appLayout.client
                }
            },
            {
                path: "projects/:id",
                name:"ProjectInstance",
                component: ProjectInstancePage,
                meta:{
                    layout:appLayout.client
                }
            }
        ]
    },
    {
        path:"/login",
        component: LoginPage,
        meta:{
            layout:appLayout.empty
        }
    }

]




const router = createRouter({
    history: createWebHistory(),
    routes:routes,
})

export default router