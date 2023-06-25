<script setup>
import Resources_Item from "./Resources_Item.vue";

import { useElectricStore } from "../../stores/resources/electric";

const electric = useElectricStore();
</script>

<template>
  <Resources_Item
    :icon="['fas', 'bolt']"
    color="#d97706"
    :value="electric.currentValue"
  />
</template>
