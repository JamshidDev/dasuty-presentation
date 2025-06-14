<script setup>
import {WeatherMoon28Filled, WeatherSunny32Filled} from "@vicons/fluent"
import {useAppStore} from "@/store/modules/index.js"


const store = useAppStore()
const onChange = ()=>{
store.themeSwitch = !store.themeSwitch
}
</script>

<template>
  <n-button @click="onChange"
            type="primary"
            class="relative"
  >
    <template #icon>
      <n-icon class="text-warning mode-button !absolute !rotate-[120deg]" :class="{'mode-button-active': !store.themeSwitch}">
        <WeatherMoon28Filled/>
      </n-icon>
      <n-icon class="text-warning mode-button !absolute" :class="{'mode-button-active': store.themeSwitch}">
        <WeatherSunny32Filled/>
      </n-icon>
    </template>
  </n-button>
</template>

<style scoped lang="scss">
.mode-button {
  transform: scale(0);
  transition: all .3s ease;
  opacity: 0;

  &-active {
    transform: scale(1);
    opacity: 1;
  }
}
</style>