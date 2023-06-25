import { Store, defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { useGoldStore } from "../resources/gold.js";
import { useFarmingStore } from "../resources/farming.js";
import { useHappinessStore } from "../resources/happiness.js";
import { useHealthStore } from "../resources/health.js";
import { useMiningStore } from "../resources/mining.js";
import { useScienceStore } from "../resources/science.js";
import { useCitizensStore } from "../citizens.js";
import { useElectricStore } from "../resources/electric.js";

const goldStore = useGoldStore();
const farmingStore = useFarmingStore();
const happinessStore = useHappinessStore();
const healthStore = useHealthStore();
const miningStore = useMiningStore();
const scienceStore = useScienceStore();
const citizensStore = useCitizensStore();
const electricStore = useElectricStore();

type Props = {
  name: string;
  owned: number;
  cost: number;
  addCitizens: number;
  happinessEffect: number;
  healthEffect: number;
  farmingEffect: number;
  miningEffect: number;
  scienceEffect: number;
  electricEffect: number;
};

export const createBuildingStore = (props: Props) => {
  const building = useStorage(`building-${props.name}`, props);

  function buildNewBuilding() {
    if (goldStore.currentValue >= building.value.cost) {
      goldStore.decrementValue(building.value.cost);
      building.value.owned++;
      citizensStore.incrementCitizensPopulationMax(building.value.addCitizens);
      building.value.electricEffect >= 0
        ? electricStore.incrementValue(building.value.electricEffect)
        : electricStore.decrementValue(-1 * building.value.electricEffect);
      building.value.scienceEffect >= 0
        ? scienceStore.incrementValue(building.value.scienceEffect)
        : scienceStore.decrementValue(-1 * building.value.scienceEffect);
      building.value.miningEffect >= 0
        ? miningStore.incrementValue(building.value.miningEffect)
        : miningStore.decrementValue(-1 * building.value.miningEffect);
      building.value.farmingEffect >= 0
        ? farmingStore.incrementValue(building.value.farmingEffect)
        : farmingStore.decrementValue(-1 * building.value.farmingEffect);
      building.value.healthEffect >= 0
        ? healthStore.incrementValue(building.value.healthEffect)
        : healthStore.decrementValue(-1 * building.value.healthEffect);
      building.value.happinessEffect >= 0
        ? happinessStore.incrementValue(building.value.happinessEffect)
        : happinessStore.decrementValue(-1 * building.value.happinessEffect);
    }
  }

  return defineStore(`building-${props.name}`, () => ({
    building,
    buildNewBuilding,
  }));
};

export type BuildingStore = ReturnType<ReturnType<typeof createBuildingStore>>;
