import { Store, defineStore } from "pinia";
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

import { useElectricStore } from "../resources/electric.js";
const electricStore = useElectricStore();

type Props = {
  name: string,
  owned: number,
  cost: number,
  addCitizens: number,
  happinessEffect: number,
  healthEffect: number,
  farmingEffect: number,
  miningEffect: number,
  scienceEffect: number,
  electricEffect: number,
}

export const createBuildingStore = (props: Props) => {
  const building = useStorage(`building-${props.name}`, props);

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
      if (building.value.electricEffect >= 0) {
        electricStore.incrementValue(building.value.electricEffect);
      } else {
        electricStore.decrementValue(-1 * building.value.electricEffect);
      }
    }
  }

  return defineStore(`building-${props.name}`, () => ({
    building,
    buildNewBuilding,
  }));
};

export type BuildingStore = ReturnType<ReturnType<typeof createBuildingStore>>