<script setup>
import Resources_Item from "./Resources_Item.vue";

import { useGoldStore } from "../../stores/resources/gold";
const gold = useGoldStore();
</script>

<template>
  <Resources_Item
    :icon="['fas', 'coins']"
    color="#eab308"
    :value="gold.currentValue"
    :class="['resources_gold']"
  />
</template>

<style scoped lang="scss">
.resources_gold {
  border: 2px solid #db9a0e;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #f6b62d;
  &:hover {
    border: 2px solid #db9a0e;
  }
}
</style>
