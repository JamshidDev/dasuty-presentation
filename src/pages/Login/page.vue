<script setup>
import {Form, ToolBar} from "./ui/index.js"

</script>

<template>
<div class="w-full min-h-screen bg-background-default-mutable relative px-[40px] pt-[40px]">
  <img class="w-[900px] absolute right-0 top-0" src="../../../public/imgs/train.png" alt="train">
  <img class="w-[500px] absolute right-[360px] top-[200px]" src="../../../public/imgs/workspace.png" alt="train">
  <ToolBar/>
  <Form/>
  <h1 class="text-text-icon-secondary1-mutable font-semibold text-[48px] mt-[70px]">{{$t('login.title')}}</h1>
  <h1 class="text-text-icon-primary1-mutable font-bold 2xl:text-[80px] leading-[1.2]">{{$t('login.subtitle')}}</h1>



</div>
</template>

<style scoped>

</style>