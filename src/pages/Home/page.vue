<script setup>
import ForceGraph from './ui/DashboardChart.vue';
import image from '@/assets/images/bg.png'

const quantityData = [
  { label: "Finance", value1: 324, value2: 1540, color: "#00e676" },    // green
  { label: "Travel", value1: 311, value2: 1320, color: "#ff9100" },    // orange
  { label: "Presentation", value1: 300, value2: 1201, color: "#c74bff" },    // purple
  { label: "Startup", value1: 288, value2: 989, color: "#00e5ff" },    // light blue
  { label: "Development", value1: 276, value2: 944, color: "#ff2fa2" },    // pink
  { label: "Design", value1: 273, value2: 897, color: "#ffc400" },    // yellow
  { label: "Product", value1: 233, value2: 843, color: "#9e86ff" },    // violet
  { label: "Research", value1: 184, value2: 765, color: "#2962ff" },    // blue
  { label: "Marketing", value1: 156, value2: 521, color: "#e0e0e0" }     // light gray
];


</script>
<template>
  <main class="mx-auto">
    <div class="relative flex justify-center items-center">
      <div class="absolute -z-[1] overflow-hidden">
        <img :src="image" :alt="image" />
      </div>
      <!-- <div class="abstraction"></div>
      <div class="abstraction-2"></div>
      <div class="abstraction-3"></div> -->
      <div class="main">
        <ForceGraph />
      </div>

      <div class="absolute top-15 right-10">
        <div class="flex flex-col gap-5">
          <div>
            <span class="text-[#383874] text-[22px] leading-9 font-semibold">
              Quantity of data
            </span>
          </div>
          <div class="flex flex-col gap-2 bg-white rounded-xl px-[30px] py-5 shadow-md">
            <div class="flex justify-between gap-15 items-center" v-for="(item, index) in quantityData" :key="index">
              <div class="flex gap-3 items-center w-[150px]">
                <span class="w-2 h-2 rounded-full bg-green-600"></span>
                <span>{{ item.label }}</span>
              </div>
              <div>
                <span class="text-[#9292C1] text-xs">{{ item.value1 }}</span>
              </div>
              <div>
                <span class="text-[#383874] text-xs">{{ item.value2 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.abstraction-2 {
  background: #2eb6521c;
  z-index: -1;
  border-radius: 100%;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 20%;
  left: 20%;
}

.abstraction-3 {
  background: #2eb6521c;
  z-index: -1;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 10%;
  right: 20%;
}

.abstraction {
  background: #2eb6521c;
  z-index: -1;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
}

.main {
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}
</style>