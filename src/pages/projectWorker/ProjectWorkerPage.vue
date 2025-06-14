<script setup>
import UIPageContent from '@/components/ui/UIPageContent.vue';

</script>
<template>
    <UIPageContent>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
            <div v-for="i in 13" :key="i" class="h-[400px] rounded-[24px] overflow-hidden relative">
                <img src="/imgs/person.png" class="w-full h-full object-cover" />
                <div class="absolute left-2 right-2 bottom-2 bg-bright-mutable/85 border border-bright-mutable/70 px-5 py-[14px] rounded-[16px]">
                    <p class="text-lg font-bold text-info-background-immutable">Farrux Bozorboyev</p>
                    <p class=" text-text-icon-secondary1-mutable font-medium">UX/UI dizayner</p>
                </div>
            </div>
        </div>
    </UIPageContent>


</template>