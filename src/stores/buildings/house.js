import { watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { useHappinessStore } from "../resources/happiness.js";
const happinessStore = useHappinessStore();

import { useGoldStore } from "../resources/gold.js";
const goldStore = useGoldStore();

export const useHouseStore = defineStore("house", () => {
  const houseLocal = useStorage("house", {
    owned: 1,
    cost: 10,
    costIncrease: 0,
    addCitizens: 3,
  });

  function incrementHouse() {
    if (goldStore.currentValue >= houseLocal.value.cost) {
      goldStore.decrementValue(houseLocal.value.cost);
      happinessStore.incrementValue(0.5);
      houseLocal.value.owned += 1;
    } else {
      console.log("Not enough gold!");
    }
  }

  watchEffect(() => {
    houseLocal.value.addCitizens = houseLocal.value.owned * 3;
  });

  return {
    houseLocal,
    incrementHouse,
  };
});

export default useHouseStore;
