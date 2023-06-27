import { watchEffect, computed } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { useAlarmStore } from "./status/alarms";
const alarmCycle = useAlarmStore();

const POPULATION_INCREASE_PROBABILITY = 10;

export const useCitizensStore = defineStore("citizensPopulation", () => {
  const citizensPopulation = useStorage("citizensPopulation", 1 || 0);
  const citizensPopulationMax = useStorage("citizensPopulationMax", 10);

  function incrementCitizensPopulation(value: number) {
    citizensPopulation.value += value;

    if (citizensPopulation.value >= citizensPopulationMax.value) {
      citizensPopulation.value = citizensPopulationMax.value;
    }
  }

  function incrementCitizensPopulationRandom(value: number) {
    if (Math.random() < POPULATION_INCREASE_PROBABILITY / 100) {
      citizensPopulation.value += value;
    }

    if (citizensPopulation.value >= citizensPopulationMax.value) {
      citizensPopulation.value = citizensPopulationMax.value;
    }
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
    if (citizensPopulation.value >= citizensPopulationMax.value) {
      citizensPopulation.value = citizensPopulationMax.value;
    }

    computed(() => {
      if (citizensPopulation.value <= 0) {
        citizensPopulation.value = 0;
        alarmCycle.incrementValue(10);
      }
    });

    if (citizensPopulation.value <= 0) {
      citizensPopulation.value = 0;
      alarmCycle.incrementValue(alarmCycle.maxValue + 1);
    }
  });

  return {
    citizensPopulation,
    citizensPopulationMax,
    incrementCitizensPopulation,
    incrementCitizensPopulationRandom,
    decrementCitizensPopulation,
    incrementCitizensPopulationMax,
    decrementCitizensPopulationMax,
  };
});

export default useCitizensStore;
