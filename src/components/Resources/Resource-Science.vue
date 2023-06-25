<script setup>
import ResourcesItem from "./Resources-Item.vue";
import { useScienceStore } from "../../stores/resources/science";

const science = useScienceStore();
</script>

<template>
  <ResourcesItem
    :icon="['fas', 'flask']"
    color="#059669"
    :value="science.currentValue"
  />
</template>
