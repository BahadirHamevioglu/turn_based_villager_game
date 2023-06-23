<script setup>
import GBButton from "../Button.vue";

import { useDayCycleStore } from "../../stores/dayCycle";

const dayCycle = useDayCycleStore();
</script>

<template>
  <div class="day-cycle">
    <GBButton
      size="lg"
      :disabled="false"
      type="primary"
      @click="dayCycle.newDay()"
    >
      Next Day (Day <span>{{ dayCycle.day }} </span>
      <font-awesome-icon
        :icon="['fas', 'arrow-right']"
        style="font-size: 0.75rem"
      />
      <span> {{ dayCycle.day + 1 }}</span>
      )</GBButton
    >
  </div>
</template>

<style lang="scss" scoped>
.day-cycle {
  position: fixed;
  bottom: 15px;
  right: 15px;
}
</style>
