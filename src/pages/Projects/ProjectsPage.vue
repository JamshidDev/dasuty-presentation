<script setup>

</script>

<template>
  <div>

    <div class="w-[400px] h-[480px] bg-background-primary-mutable rounded-3xl p-2">
      <div class="rounded-2xl aspect-[2/1] overflow-hidden relative">
        <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/aacac176932859.Y3JvcCwxMDgzLDg0NywxMDQsMTMyNw.png"
          class="w-full h-full object-cover" />
        <div class="absolute bottom-2 right-4 left-4 flex gap-2">
          <p class="w-[30px] text-white font-semibold">100%</p>
          <div class="grow basis-auto">
            <n-progress type="line" :percentage="60" class="w-full!" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
