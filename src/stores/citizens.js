import { watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { useLevelStore } from "./status/level.js";
const levelStore = useLevelStore();

export const useCitizensStore = defineStore("citizensPopulation", () => {
  const citizensPopulation = useStorage("citizensPopulation", 1);
  const citizensPopulationMax = useStorage("citizensPopulationMax", 10);

  function incrementCitizensPopulation(number) {
    citizensPopulation.value += number;
  }
  function decrementCitizensPopulation(number) {
    citizensPopulation.value -= number;
  }

  watchEffect(() => {
    citizensPopulationMax.value =
      Math.floor(levelStore.currentValue * 0.5) <= 2
        ? 2
        : Math.floor(levelStore.currentValue * 0.5);

    if (citizensPopulation.value > citizensPopulationMax.value) {
      citizensPopulation.value = citizensPopulationMax.value;
    }
  });

  return {
    citizensPopulation,
    citizensPopulationMax,
    incrementCitizensPopulation,
    decrementCitizensPopulation,
  };
});

export default useCitizensStore;
