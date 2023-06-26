import { watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { useAlarmStore } from "../status/alarms.js";

type props = {
  name: string;
  startingValue: number;
};

export const createResourceStore = (props: props) => {
  const alarmCycle = useAlarmStore();
  const isAlarmTriggered = useStorage(
    `isAlarmTriggeredFor${props.name}`,
    false
  );
  const currentValue = useStorage(`current${props.name}`, props.startingValue);

  function incrementValue(value: number) {
    currentValue.value += value;
  }

  function decrementValue(value: number) {
    currentValue.value -= value;
  }

  watchEffect(() => {
    if (currentValue.value < 0 && !isAlarmTriggered.value) {
      alarmCycle.incrementValue(1);
      isAlarmTriggered.value = true;
    }

    if (currentValue.value >= 0 && isAlarmTriggered.value) {
      alarmCycle.decrementValue(1);
      isAlarmTriggered.value = false;
    }
  });

  return defineStore(`resources-${props.name}`, () => ({
    currentValue,
    isAlarmTriggered,
    incrementValue,
    decrementValue,
  }));
};
