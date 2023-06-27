<script setup>
import ResourceHappiness from "./Resource-Happiness.vue";
import ResourceHealth from "./Resource-Health.vue";
import ResourcesFarming from "./Resource-Farming.vue";
import ResourceMining from "./Resource-Mining.vue";
import ResourceScience from "./Resource-Science.vue";
import ResourceElectric from "./Resource-Electric.vue";
</script>

<template>
  <div class="resources">
    <ResourceHappiness />
    <ResourceHealth />
    <ResourcesFarming />
    <ResourceMining />
    <ResourceScience />
    <ResourceElectric />
  </div>
</template>

<style scoped lang="scss">
.resources {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>
