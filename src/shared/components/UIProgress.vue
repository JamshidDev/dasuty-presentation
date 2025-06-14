<script setup>
import { Checkmark16Filled } from "@vicons/fluent"
const props = defineProps({
    total: Number,
    done: Number
})

onBeforeMount(()=>{
    if(props.done > props.total){
        throw new Error("How can done be over that total?")
    }
})

</script>
<template>
    <div class="relative h-[24px] flex justify-around">
        <div class="line"></div>
        <div class="line_after" :style="{ width: `${(((done * 2 - 1)/ ( total * 2)) * 100)}%` }"></div>
        <div class="w-[24px] h-[24px] flex justify-center items-center step" v-for="i in total" :idx="i"
            :class="{ 'done-step': !(i > done) }">
            <template v-if="i > done">  
                {{ i}}
            </template>
            <template v-else>
                <n-icon size="16">
                    <Checkmark16Filled />
                </n-icon>
            </template>
        </div>
    </div>
</template>
<style scoped>
.line {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    height: 2px;
    background-color: var(--color-background-secondary-mutable);
}

.line_after {
    width: 0;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    height: 2px;
    background-color: var(--color-success-background-immutable);
}

.step {
    z-index: 1;
    border-radius: 50%;
    background-color: var(--color-background-secondary-mutable);
    color: var(--color-text-icon-secondary1-mutable);
}

.done-step {
    background-color: var(--color-success-background-immutable);
    color: white;
    size: 12px;
}
</style>