import { watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { useAlarmStore } from "../status/alarms.js";

export const createResourceStore = (storeName, startingValue = 10) => {
  const alarmCycle = useAlarmStore();
  const isAlarmTriggered = useStorage(`isAlarmTriggeredFor${storeName}`, false);
  const currentValue = useStorage(`current${storeName}`, startingValue);

  function incrementValue(number) {
    currentValue.value += number;
  }

  function decrementValue(number) {
    currentValue.value -= number;

    if (currentValue.value < 0 && !isAlarmTriggered.value) {
      alarmCycle.incrementValue(1);
      isAlarmTriggered.value = true;
    }

    if (currentValue.value > 0 && isAlarmTriggered.value) {
      alarmCycle.incrementValue(1);
      isAlarmTriggered.value = false;
    }
  }

  watchEffect(() => {
    if (currentValue.value >= 0 && isAlarmTriggered.value) {
      alarmCycle.incrementValue(1);
      isAlarmTriggered.value = false;
    }
  });

  return defineStore(`resources-${storeName}`, () => ({
    currentValue,
    isAlarmTriggered,
    incrementValue,
    decrementValue,
  }));
};
