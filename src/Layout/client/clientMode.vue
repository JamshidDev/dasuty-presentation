<script setup>
import ToolBar from "./ui/ToolBar.vue"
import Footer from "./ui/Footer.vue"
</script>

<template>
<div class="flex flex-col bg-line">
  <ToolBar/>
  <div class="w-full  h-[calc(100vh-140px)]">
    <slot name="default"></slot>
  </div>
  <Footer/>
</div>
</template>
