<script setup>
import { computed } from "vue";
import ResourcesItem from "./Resources-Item.vue";

import { useHappinessStore } from "../../stores/resources/happiness";
const happiness = useHappinessStore();

const dropdownContent = [
  {
    id: 0,
    text: "Happiness",
    value: computed(() => happiness.currentValue),
  },
];
</script>

<template>
  <ResourcesItem
    :icon="['fas', 'face-smile']"
    :value="happiness.currentValue"
    :color="happiness.currentValue < 0 ? 'rgb(239, 68, 68)' : '#65a30d'"
    :class="[
      'resources-happiness',
      happiness.currentValue < 0
        ? 'resources-happiness--negative'
        : 'resources-happiness--positive',
    ]"
  >
    <div class="resources-item-dropdown">
      <div class="resources-item-dropdown-title">Happiness</div>
      <div
        class="resources-item-dropdown-items"
        v-for="content in dropdownContent"
      >
        <div class="resources-item-dropdown-item" :key="content.id">
          <div class="resources-item-dropdown-item-label">
            {{ content.text }}
          </div>
          <div class="resources-item-dropdown-item-value">
            {{ content.value }}
          </div>
        </div>
      </div>
    </div>
  </ResourcesItem>
</template>

<style scoped lang="scss">
.resources-happiness {
  font-size: 1rem;
  line-height: 1.5rem;

  &--negative {
    border: 2px solid rgb(239, 68, 68);
    color: rgb(239, 68, 68);
  }

  &--positive {
    border: 2px solid #84cc16;
    color: #65a30d;
  }
}
</style>
