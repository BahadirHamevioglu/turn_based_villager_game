<script setup lang="ts">
import TabHowToPlayAccordion from "./Tab-How-To-Play-Accordion.vue";
</script>

<template>
  <div class="accordions">
    <TabHowToPlayAccordion title="Deneme" content="Denemee" />
    <TabHowToPlayAccordion title="Deneme" content="Denemee" />
  </div>
</template>

<style lang="scss" scoped>
.accordions {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 1rem;
}
</style>
