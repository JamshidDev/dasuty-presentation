<script setup>
import { GantChartPage } from "@/pages/index.js"
import ProjectGeneralPage from "../projectGeneral/ProjectGeneralPage.vue"
import ProjectWorkerPage from "../projectWorker/ProjectWorkerPage.vue"
</script>
<template>
    <n-tabs type="segment" animated class="projects_tab">
        <n-tab-pane name="Umumiy ma'lumotlar" tab="Umumiy ma'lumotlar">
            <ProjectGeneralPage />
        </n-tab-pane>
        <n-tab-pane name="Gant chart" tab="Gant chart">
            <GantChartPage />
        </n-tab-pane>
        <n-tab-pane name="Xodimlar" tab="Xodimlar">
            <ProjectWorkerPage/>
        </n-tab-pane>
    </n-tabs>
</template>

<style>
.projects_tab .n-tabs-rail{
    margin-left: auto;
    margin-right: auto;
    width: 600px;
}

</style>
