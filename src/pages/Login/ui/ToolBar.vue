<script setup>

import {UILanguage, UIThemeSwitch} from "@/components/index.js"

</script>

<template>
<div class="flex justify-between">
    <img class="h-[60px]" src="/imgs/logo.png" alt="logo">
  <div class="flex gap-4 items-center">
    <UILanguage/>
    <UIThemeSwitch/>
  </div>
</div>
</template>

