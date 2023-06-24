<script setup>
import Resources_Item from "./Resources_Item.vue";

import { useMiningStore } from "../../stores/resources/mining";
const mining = useMiningStore();
</script>

<template>
  <Resources_Item
    :icon="['fas', 'gem']"
    color="#2563eb"
    :value="mining.currentValue"
  />
</template>
