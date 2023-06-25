<script setup>
import TabMainBox from "./Tab-Main-Box.vue";

import { useFarmBuildStore } from "../../stores/buildings/farm";
const farmBuildStore = useFarmBuildStore();
</script>

<template>
  <div class="tabs-main">
    <TabMainBox
      :icon="['fas', 'house']"
      :value="5"
      title="Houses"
      color="rgb(0, 0, 0)"
    />
    <TabMainBox
      :icon="['fas', 'flask']"
      :value="5"
      title="Science"
      color="rgb(5, 150, 105)"
    />
  </div>
</template>

<style lang="scss" scoped>
.tabs-main {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  width: 100%;
}
</style>
