<script setup>
import {Icons} from "@/shared/icons"

defineProps({
    type: {
        default: 1,
        type: Number
    }
})
</script>
<template>
    <div v-if="type == 1" class="rounded-3xl border-[0.4px] p-2 pr-4 bg-bright-mutable">
        <div class="flex gap-4 items-center">
            <div
                class="rounded-2xl bg-brand-light-background-mutable flex justify-center items-center h-[64px] w-[64px]">
                <img src="/imgs/document.png" class="w-[40px] h-[40px]" />
            </div>
            <div class="flex justify-between grow basis-auto items-center">
                <div>
                    <p class="font-bold text-lg">Reestr.uz xulosasi</p>
                    <div
                        class="px-2 py-1 rounded-lg bg-success-light-background-mutable inline-block border border-black/5">
                        <p class="text-success-background-immutable inline-block font-semibold text-sm leading-4">
                            Yuklangan</p>
                    </div>
                </div>
                <n-button class="!w-[44px] !h-[44px]" type="primary">
                    <template #icon>
                        <n-icon :size="24">
                            <Icons.DownloadSolidIcon />
                        </n-icon>
                    </template>
                </n-button>
            </div>
        </div>
    </div>
    <div v-else class="rounded-3xl border-[0.4px] p-2 pr-4 bg-bright-mutable">
        <div class="flex gap-4 items-center">
            <div
                class="rounded-2xl bg-brand-light-background-mutable flex justify-center items-center h-[64px] w-[64px]">
                <img src="/imgs/document.png" class="w-[40px] h-[40px]" />
            </div>
            <div class="flex justify-between grow basis-auto items-center">
                <div>
                    <p class="font-bold text-lg">Dalolatnoma</p>
                    <div
                        class="px-2 py-1 rounded-lg bg-danger-light-background-mutable inline-block border border-black/5">
                        <p class="text-danger-background-immutable inline-block font-semibold text-sm leading-4">
                            Yuklanmagan
                        </p>
                    </div>
                </div>
                <n-button secondary class="!w-[44px] !h-[44px]" type="primary">
                    <template #icon>
                        <n-icon :size="24" class="text-brand-text-disabled-mutable">
                            <Icons.DownloadSolidIcon />
                        </n-icon>
                    </template>
                </n-button>
            </div>
        </div>
    </div>
</template>