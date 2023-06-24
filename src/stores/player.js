import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const usePlayerStore = defineStore("player", () => {
  const playerOwned = useStorage("citizensPopulation", {});

  function incrementCitizensPopulation(number) {
    citizensPopulation.value += number;
  }
  function decrementCitizensPopulation(number) {
    citizensPopulation.value -= number;
  }

  watchEffect(() => {
    if (citizensPopulation.value % 10 === 0) {
      console.log("level up");
    }
  });

  return {
    citizensPopulation,
    incrementCitizensPopulation,
    decrementCitizensPopulation,
  };
});

export default usePlayerStore;
