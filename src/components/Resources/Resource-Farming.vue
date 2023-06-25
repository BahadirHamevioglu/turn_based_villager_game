<script setup>
import ResourcesItem from "./Resources-Item.vue";

import { useFarmingStore } from "../../stores/resources/farming";

const farming = useFarmingStore();
</script>

<template>
  <Resources-Item
    :icon="['fas', 'wheat-awn']"
    color="#d97706"
    :value="farming.currentValue"
  />
</template>
