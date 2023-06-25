<script setup>
import GBButton from "../Button.vue";

import { useDayStore } from "../../stores/dayCycle";

const dayCycle = useDayStore();
</script>

<template>
  <div class="day-cycle">
    <GBButton
      size="lg"
      :disabled="false"
      type="primary"
      @click="dayCycle.incrementDay(1)"
    >
      Next Day (Day <span>{{ dayCycle.currentDay }} </span>
      <font-awesome-icon
        :icon="['fas', 'arrow-right']"
        style="font-size: 0.75rem"
      />
      <span> {{ dayCycle.currentDay + 1 }}</span>
      )</GBButton
    >
  </div>
</template>

<style lang="scss" scoped>
.day-cycle {
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 3;
}
</style>
