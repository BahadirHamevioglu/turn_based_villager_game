<script setup>
import ResourcesItem from "./Resources-Item.vue";

import { useHealthStore } from "../../stores/resources/health";

const health = useHealthStore();
</script>

<template>
  <ResourcesItem
    :icon="['fas', 'heart']"
    color="#dc2626"
    :value="health.currentValue"
  />
</template>
