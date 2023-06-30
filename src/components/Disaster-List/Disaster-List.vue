<script setup lang="ts">
import DisasterItem from "./Disaster-Item.vue";
</script>

<template>
  <div class="disaster-list">
    <DisasterItem></DisasterItem>
  </div>
</template>

<style lang="scss" scoped>
.disaster-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  position: absolute;
  top: -45px;
  left: 0;
  flex-wrap: wrap;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: none;
}
</style>
