<script setup>
import ForceGraph from './ui/DashboardChart.vue';
</script>

<template>
  <main class="container">
    <div>
      <div class="abstraction"></div>
      <div class="abstraction-2"></div>
      <div class="abstraction-3"></div>
      <div class="main">
        <ForceGraph />
      </div>
    </div>
  </main>
</template>

<style scoped>
.abstraction-2 {
  background: rgba(242, 229, 248, 0.526);
  z-index: -1;
  border-radius: 100%;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 20%;
  left: 20%;
}

.abstraction-3 {
  background: rgba(242, 229, 248, 0.526);
  z-index: -1;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 10%;
  right: 20%;
}

.abstraction {
  background: rgba(242, 229, 248, 0.526);
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