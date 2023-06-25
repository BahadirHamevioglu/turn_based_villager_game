<script setup>
import ResourcesItem from "./Resources-Item.vue";

import { useMiningStore } from "../../stores/resources/mining";
const mining = useMiningStore();
</script>

<template>
  <ResourcesItem
    :icon="['fas', 'gem']"
    color="#2563eb"
    :value="mining.currentValue"
  />
</template>
