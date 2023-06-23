import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { useDisasterStore } from "./status/disaster.js";
const disasterCycle = useDisasterStore();

const START_DAY = 1;
const CURRENT_DAY = useStorage("currentDay", START_DAY);

export const useDayStore = defineStore("dayCycle", () => {
  const currentDay = ref(CURRENT_DAY.value);
  const currentDayLocalStorage = ref(CURRENT_DAY.value);

  function incrementDay() {
    currentDay.value++;
    CURRENT_DAY.value = currentDay.value;
    disasterCycle.incrementDisaster();
  }

  watchEffect(() => {
    currentDayLocalStorage.value = CURRENT_DAY.value;
  });

  return {
    currentDay,
    currentDayLocalStorage,
    incrementDay,
  };
});

export default useDayStore;
