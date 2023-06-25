<script setup>
import ResourcesItem from "./Resources-Item.vue";

import { useElectricStore } from "../../stores/resources/electric";

const electric = useElectricStore();
</script>

<template>
  <ResourcesItem
    :icon="['fas', 'bolt']"
    color="#d97706"
    :value="electric.currentValue"
  />
</template>
