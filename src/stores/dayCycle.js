import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { useDisasterStore } from "./status/disaster";
const disasterCycle = useDisasterStore();

export const useDayStore = defineStore("dayCycle", () => {
  const currentDay = useStorage("currentDay", 1);

  function incrementDay(number) {
    currentDay.value += number;
    disasterCycle.incrementValue(1);
  }
  function decrementDay(number) {
    currentDay.value -= number;
  }

  watchEffect(() => {
    if (currentDay.value % 10 === 0) {
      console.log("level up");
    }
  });

  return {
    currentDay,
    incrementDay,
    decrementDay,
  };
});

export default useDayStore;
