<script setup>
import Disaster from "./Disaster.vue";
import Alarms from "./Alarms.vue";
</script>

<template>
  <div class="status-bar">
    <Disaster />
    <Alarms />
  </div>
</template>

<style lang="scss" scoped>
.status-bar {
  margin-bottom: 0.5rem;
  padding: 0.3rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
