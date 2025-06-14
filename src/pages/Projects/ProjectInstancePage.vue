<script setup>


</script>
<template>

    <n-tabs type="segment" animated>
        <n-tab-pane name="Umumiy ma'lumotlar" tab="Umumiy ma'lumotlar">
            <div class="flex flex-col gap-[72px]">

                <div class="flex gap-10 items-center">
                    <img src="/imgs/sample.jpg" alt="sample" class="rounded-2xl aspect-[2/1] object-cover w-[50%]">
                    <div class="grow basis-auto">
                        <p class="text-4xl font-bold text-text-icon-primary1-mutable">Railmap</p>
                        <p class="mt-2 text-text-icon-secondary1-mutable font-medium text-lg leading-7">Railmap — bu
                            O‘zbekiston temir yo‘llarining holatini yagona interaktiv xaritada real
                            vaqt
                            rejimida kuzatish va tahlil qilish imkonini beruvchi zamonaviy raqamli boshqaruv tizimidir.
                        </p>
                        <div class="flex mt-8">
                            <div class="grow basis-auto">
                                <p class="text-xs text-text-icon-secondary1-mutable leading-[16px]">Boshlangan sana</p>
                                <p
                                    class="mt-[2px] text-brand-background-text-immutable text-lg font-bold leading-[20px]">
                                    14-iyun, 2025</p>
                            </div>
                            <div class="grow basis-auto">
                                <p class="text-xs text-text-icon-secondary1-mutable leading-[16px]">Yuklangan hujjatlar
                                </p>
                                <p
                                    class="mt-[2px] text-brand-background-text-immutable text-lg font-bold leading-[20px]">
                                    7 ta</p>
                            </div>
                            <div class="grow basis-auto">
                                <p class="text-xs text-text-icon-secondary1-mutable leading-[16px]">Xodimlar soni</p>
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
                        <div class="rounded-3xl border-[0.4px] p-2 bg-bright-mutable">
                            <div class="flex gap-4">
                                <div
                                    class="rounded-2xl bg-brand-light-background-mutable flex justify-center items-center h-[64px] w-[64px]">
                                    <img src="/imgs/document.png" class="w-[40px] h-[40px]" />
                                </div>
                                <div class="flex justify-between">
                                    <div>
                                        <p class="font-bold">Reestr.uz xulosasi</p>
                                        <div class="px-2 py-1 rounded-lg bg-success-light-background-mutable inline-block border border-black/5">
                                            <p class="text-success-background-immutable inline-block font-semibold text-sm leading-4">Yuklangan</p>
                                        </div>
                                    </div>
                                    <n-button>
                                        <template #icon>

                                        </template>
                                    </n-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </n-tab-pane>
        <n-tab-pane name="Gant chart" tab="Gant chart">
            GantChart
        </n-tab-pane>
        <n-tab-pane name="Xodimlar" tab="Xodimlar">
            Xodimlar
        </n-tab-pane>
    </n-tabs>
</template>