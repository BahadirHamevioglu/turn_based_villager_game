import { watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { useDisasterStore } from "./status/disaster";
import { useGoldStore } from "./resources/gold";
import { useCitizensStore } from "./citizens";
import { useLevelStore } from "./status/level";
import { useToasterStore } from "./toasters";

const goldStore = useGoldStore();
const disasterCycle = useDisasterStore();
const citizensStore = useCitizensStore();
const levelStore = useLevelStore();
const toasterStore = useToasterStore();

export const useDayStore = defineStore("dayCycle", () => {
  const currentDay = useStorage("currentDay", 1);

  function incrementDay(value: number) {
    currentDay.value += value;
    disasterCycle.incrementValue(1);
    goldStore.incrementValue(3);
    citizensStore.incrementCitizensPopulationRandom(1);

    toasterStore.addToast({
      title: "NEW DAY",
      description: "Day " + currentDay.value + " has started.",
      type: "success",
      duration: 5,
    });
  }

  function decrementDay(value: number) {
    currentDay.value -= value;
  }

  watchEffect(() => {
    if (currentDay.value % 5 === 0) {
      levelStore.incrementValue(1);
    }
  });

  return {
    currentDay,
    incrementDay,
    decrementDay,
  };
});

export default useDayStore;
