import { watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useCitizensStore = defineStore("citizensPopulation", () => {
  const citizensPopulation = useStorage("citizensPopulation", 1);
  const citizensPopulationMax = useStorage("citizensPopulationMax", 10);

  function incrementCitizensPopulation(value: number) {
    citizensPopulation.value += value;
  }

  function decrementCitizensPopulation(value: number) {
    citizensPopulation.value -= value;
  }

  function incrementCitizensPopulationMax(value: number) {
    citizensPopulationMax.value += value;
  }

  function decrementCitizensPopulationMax(value: number) {
    citizensPopulation.value += value;
  }

  watchEffect(() => {
    if (citizensPopulation.value > citizensPopulationMax.value) {
      citizensPopulation.value = citizensPopulationMax.value;
    }
  });

  return {
    citizensPopulation,
    citizensPopulationMax,
    incrementCitizensPopulation,
    decrementCitizensPopulation,
    incrementCitizensPopulationMax,
    decrementCitizensPopulationMax,
  };
});

export default useCitizensStore;
