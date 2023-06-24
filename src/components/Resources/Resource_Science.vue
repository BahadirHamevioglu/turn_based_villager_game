<script setup>
import { useScienceStore } from "../../stores/resources/science";

const science = useScienceStore();

import Resources_Item from "./Resources_Item.vue";
</script>

<template>
  <Resources_Item
    :icon="['fas', 'flask']"
    color="#059669"
    :value="science.currentValue"
  />
</template>
