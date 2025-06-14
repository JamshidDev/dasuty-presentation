<script setup>
import {clientLayout, emptyLayout} from "@/Layout/index.js"
import {useAppSetting} from "@/utils/index.js"
const layouts = useAppSetting.appLayouts
const route = useRoute()

const layout = computed(()=>{
  const mode = route?.meta?.layout
  return mode === layouts.client? clientLayout : emptyLayout
})
</script>

<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>
