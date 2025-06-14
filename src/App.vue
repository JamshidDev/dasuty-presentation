<script setup>

import ClientLayout from "@/Layout/ClientLayout.vue"
</script>

<template>
  <n-config-provider>
    <n-message-provider placement="top-right">
      <n-dialog-provider>
        <ClientLayout/>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

