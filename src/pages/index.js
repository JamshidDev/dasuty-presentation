export {default as LoginPage} from "./Login/page.vue"
export {default as HomePage} from "./Home/page.vue"
export {default as GantChartPage} from "./gantChart/page.vue"
export {default as DashboardPage} from "./Home/page.vue"

export const ProjectsPage = ()=>import("./Projects/ProjectsPage.vue")
export const ProjectInstancePage = ()=>import("./Projects/ProjectInstancePage.vue")