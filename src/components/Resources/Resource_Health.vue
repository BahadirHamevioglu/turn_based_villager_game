<script setup>
import Resources_Item from "./Resources_Item.vue";

import { useHealthStore } from "../../stores/resources/health";

const health = useHealthStore();
</script>

<template>
  <Resources_Item
    :icon="['fas', 'heart']"
    color="#dc2626"
    :value="health.currentValue"
  />
</template>
