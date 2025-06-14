<script setup>
import {Icon} from "@/components/icon/index.js"
import {Search12Regular} from "@vicons/fluent"
</script>

<template>
<div class="flex justify-between items-center h-[60px] px-[40px]">
  <img class="w-[80px]" src="/imgs/logo.png" alt="logo">

  <div class="bg-background-secondary-mutable w-[500px] rounded-lg">
      <n-input class="input-override" placeholder="">
        <template #suffix>
          <n-icon size="20" class="text-text-icon-primary2-mutable">
            <Search12Regular/>
          </n-icon>
        </template>
      </n-input>
  </div>
  <div>
    <component class="text-text-icon-secondary2-mutable" :is="Icon.Profile"/>
  </div>


</div>
</template>