import { watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { useGoldStore } from "../resources/gold.js";
const goldStore = useGoldStore();

import { useFarmingStore } from "../resources/farming.js";
const farmingStore = useFarmingStore();

import { useHappinessStore } from "../resources/happiness.js";
const happinessStore = useHappinessStore();
import { useHealthStore } from "../resources/health.js";
const healthStore = useHealthStore();

import { useMiningStore } from "../resources/mining.js";
const miningStore = useMiningStore();

import { useScienceStore } from "../resources/science.js";
const scienceStore = useScienceStore();

import { useCitizensStore } from "../citizens.js";
const citizensStore = useCitizensStore();

export const createBuildingStore = (
  storeName,
  owned,
  cost,
  addCitizens,
  happinessEffect,
  healthEffect,
  farmingEffect,
  miningEffect,
  scienceEffect
) => {
  const building = useStorage(`building-${storeName}`, {
    owned: owned,
    cost: cost,
    addCitizens: addCitizens,
    happinessEffect: happinessEffect,
    healthEffect: healthEffect,
    farmingEffect: farmingEffect,
    miningEffect: miningEffect,
    scienceEffect: scienceEffect,
  });

  function buildNewBuilding() {
    if (goldStore.currentValue >= building.value.cost) {
      goldStore.decrementValue(building.value.cost);
      building.value.owned += 1;
      citizensStore.incrementCitizensPopulation(building.value.addCitizens);
      happinessStore.incrementValue(building.value.happinessEffect);
      healthStore.incrementValue(building.value.healthEffect);
      farmingStore.incrementValue(building.value.farmingEffect);
      miningStore.incrementValue(building.value.miningEffect);
      scienceStore.incrementValue(building.value.scienceEffect);
    }
  }

  watchEffect(() => {});

  return defineStore(`building-${storeName}`, () => ({
    building,
    buildNewBuilding,
  }));
};
