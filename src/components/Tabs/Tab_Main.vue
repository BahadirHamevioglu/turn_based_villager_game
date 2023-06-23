<script setup>
import Tab_Main_Box from "./Tab_Main-Box.vue";
</script>

<template>
  <div class="tabs-main">
    <Tab_Main_Box
      :icon="['fas', 'house']"
      :value="5"
      title="Houses"
      color="rgb(0, 0, 0)"
    />
    <Tab_Main_Box
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
