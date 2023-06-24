<script setup>
import Resources_Item from "./Resources_Item.vue";

import { useFarmingStore } from "../../stores/resources/farming";

const farming = useFarmingStore();
</script>

<template>
  <Resources_Item
    :icon="['fas', 'wheat-awn']"
    color="#d97706"
    :value="farming.currentValue"
  />
</template>
