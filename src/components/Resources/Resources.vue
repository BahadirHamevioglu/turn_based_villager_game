<script>
import Resource_Happiness from "./Resource_Happiness.vue";
import Resource_Health from "./Resource_Health.vue";
import Resources_Farming from "./Resource_Farming.vue";
import Resource_Mining from "./Resource_Mining.vue";
import Resource_Science from "./Resource_Science.vue";
import Resource_Gold from "./Resource_Gold.vue";

export default {
  components: {
    Resource_Happiness,
    Resource_Health,
    Resources_Farming,
    Resource_Mining,
    Resource_Science,
    Resource_Gold,
  },
};
</script>

<template>
  <div class="gameboard-resources">
    <Resource_Happiness />
    <Resource_Health />
    <Resources_Farming />
    <Resource_Mining />
    <Resource_Science />
    <Resource_Gold />
  </div>
</template>

<style scoped lang="scss">
.gameboard-resources {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>
