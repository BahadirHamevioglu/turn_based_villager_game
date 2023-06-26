import { watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { useDisasterStore } from "./status/disaster";
import { useGoldStore } from "./resources/gold";
import { useCitizensStore } from "./citizens";

const goldStore = useGoldStore();
const disasterCycle = useDisasterStore();
const citizensStore = useCitizensStore();

export const useDayStore = defineStore("dayCycle", () => {
  const currentDay = useStorage("currentDay", 1);

  function incrementDay(value: number) {
    currentDay.value += value;
    disasterCycle.incrementValue(1);
    goldStore.incrementValue(3);
    citizensStore.incrementCitizensPopulationRandom(3);
  }

  function decrementDay(value: number) {
    currentDay.value -= value;
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
