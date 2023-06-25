import { watchEffect, computed } from "vue";
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
    name: storeName,
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
      citizensStore.incrementCitizensPopulationMax(building.value.addCitizens);
      if (building.value.happinessEffect >= 0) {
        happinessStore.incrementValue(building.value.happinessEffect);
      } else {
        happinessStore.decrementValue(-1 * building.value.happinessEffect);
      }
      if (building.value.healthEffect >= 0) {
        healthStore.incrementValue(building.value.healthEffect);
      } else {
        healthStore.decrementValue(-1 * building.value.healthEffect);
      }
      if (building.value.farmingEffect >= 0) {
        farmingStore.incrementValue(building.value.farmingEffect);
      } else {
        farmingStore.decrementValue(-1 * building.value.farmingEffect);
      }
      if (building.value.miningEffect >= 0) {
        miningStore.incrementValue(building.value.miningEffect);
      } else {
        miningStore.decrementValue(-1 * building.value.miningEffect);
      }
      if (building.value.scienceEffect >= 0) {
        scienceStore.incrementValue(building.value.scienceEffect);
      } else {
        scienceStore.decrementValue(-1 * building.value.scienceEffect);
        console.log(-1 * scienceStore.currentValue);
      }
    }
  }

  watchEffect(() => {});

  return defineStore(`building-${storeName}`, () => ({
    building,
    buildNewBuilding,
  }));
};
