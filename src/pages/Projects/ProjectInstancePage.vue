<script setup>
import UIPageContent from '@/components/ui/UIPageContent.vue';
import Document from './ui/Document.vue'
import { GantChartPage } from "@/pages/index.js"

const sample = {
    name: "Railmap",
    description: "Hamma ma'lumotlar bitta xaritada — real vaqtda nazorat va tahlil",
    percentage: 50
}

const modules = [sample, sample, sample, sample, sample, sample, sample, sample, sample,]

</script>
<template>
    <n-tabs type="segment" animated >
        <n-tab-pane name="Umumiy ma'lumotlar" tab="Umumiy ma'lumotlar">
            <UIPageContent>

                <div class="flex flex-col gap-[72px]">

                    <div class="flex gap-10 items-center">
                        <img src="/imgs/sample.jpg" alt="sample" class="rounded-2xl aspect-[2/1] object-cover w-[50%]">
                        <div class="grow basis-auto">
                            <p class="text-4xl font-bold text-text-icon-primary1-mutable">Railmap</p>
                            <p class="mt-2 text-text-icon-secondary1-mutable font-medium text-lg leading-7">Railmap — bu
                                O‘zbekiston temir yo‘llarining holatini yagona interaktiv xaritada real
                                vaqt
                                rejimida kuzatish va tahlil qilish imkonini beruvchi zamonaviy raqamli boshqaruv
                                tizimidir.
                            </p>
                            <div class="flex mt-8">
                                <div class="grow basis-auto">
                                    <p class="text-xs text-text-icon-secondary1-mutable leading-[16px]">Boshlangan sana
                                    </p>
                                    <p
                                        class="mt-[2px] text-brand-background-text-immutable text-lg font-bold leading-[20px]">
                                        14-iyun, 2025</p>
                                </div>
                                <div class="grow basis-auto">
                                    <p class="text-xs text-text-icon-secondary1-mutable leading-[16px]">Yuklangan
                                        hujjatlar
                                    </p>
                                    <p
                                        class="mt-[2px] text-brand-background-text-immutable text-lg font-bold leading-[20px]">
                                        7 ta</p>
                                </div>
                                <div class="grow basis-auto">
                                    <p class="text-xs text-text-icon-secondary1-mutable leading-[16px]">Xodimlar soni
                                    </p>
                                    <p
                                        class="mt-[2px] text-brand-background-text-immutable text-lg font-bold leading-[20px]">
                                        12 ta</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-8">
                        <p class="text-text-icon-primary2-mutable font-bold text-4xl leading-11">Hujjatlar</p>
                        <div class="grid gap-4 grid-cols-3">
                            <Document />
                            <Document />
                            <Document />
                            <Document />
                            <Document />
                            <Document />
                            <Document />
                            <Document :type="0" />
                        </div>
                    </div>
                    <div class="flex flex-col gap-8">
                        <p class="text-text-icon-primary2-mutable font-bold text-4xl leading-11">Loyiha modul</p>
                        <div class="grid grid-cols-4 modules_grid">
                            <template v-for="(module, idx) in modules" :key="idx">
                                <div class="col-span-4 h-[70px] grid_separator relative" v-if="idx && idx % 4 == 0">
                                </div>
                                <div class="modules_grid-item flex flex-col gap-3 border-t-2 border-b-2 border-brand-light-background-mutable-hover p-5 pl-0 relative"
                                    :class="{ 'row-last': (idx + 1) % 4 == 0 }">
                                    <p class="font-bold text-lg text-text-icon-primary1-mutable">{{ module.name }}</p>
                                    <p class="font-medium text-text-icon-secondary1-mutable">{{ module.description }}
                                    </p>
                                    <div class="flex gap-5 items-center">
                                        <p class="w-[20px] font-semibold">{{ module.percentage }}%</p>
                                        <div class="grow basis-auto">
                                            <n-progress :height="12" type="line" :percentage="module.percentage"
                                                class="w-full!" />
                                        </div>
                                    </div>
                                    <p
                                        class="absolute w-[40px] h-[40px] flex justify-center items-center rounded-xl bg-brand-light-background-mutable-hover text-brand-background-text-immutable font-bold text-lg top-0 translate-y-[-50%]">
                                        {{ idx + 1 }}</p>
                                </div>
                            </template>

                        </div>
                    </div>
                    <div class="h-[200px]"></div>
                </div>
            </UIPageContent>

        </n-tab-pane>
        <n-tab-pane name="Gant chart" tab="Gant chart">
            <GantChartPage />
        </n-tab-pane>
        <n-tab-pane name="Xodimlar" tab="Xodimlar">
            Xodimlar
        </n-tab-pane>
    </n-tabs>
</template>

<style scoped>
.row-last {
    border-right: 2px solid var(--color-brand-light-background-mutable-hover);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.grid_separator::before {
    content: '';
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -30px;
    width: 30px;
    border: 2px solid var(--color-brand-light-background-mutable-hover);
    border-right: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.modules_grid-item:last-child {
    border: none;
}
</style>
