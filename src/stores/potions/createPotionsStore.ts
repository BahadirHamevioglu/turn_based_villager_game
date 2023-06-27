import { defineStore } from "pinia";
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
  description: string;
  cost: number;
  addCitizens: number;
  happinessEffect: number;
  healthEffect: number;
  farmingEffect: number;
  miningEffect: number;
  scienceEffect: number;
  electricEffect: number;
};

export const createPotionStore = (props: Props) => {
  const potion = useStorage(`potion-${props.name}`, props);

  function createNewPotion() {
    if (goldStore.currentValue >= potion.value.cost) {
      goldStore.decrementValue(potion.value.cost);
      citizensStore.incrementCitizensPopulationMax(potion.value.addCitizens);
      potion.value.electricEffect >= 0
        ? electricStore.incrementValue(potion.value.electricEffect)
        : electricStore.decrementValue(-1 * potion.value.electricEffect);
      potion.value.scienceEffect >= 0
        ? scienceStore.incrementValue(potion.value.scienceEffect)
        : scienceStore.decrementValue(-1 * potion.value.scienceEffect);
      potion.value.miningEffect >= 0
        ? miningStore.incrementValue(potion.value.miningEffect)
        : miningStore.decrementValue(-1 * potion.value.miningEffect);
      potion.value.farmingEffect >= 0
        ? farmingStore.incrementValue(potion.value.farmingEffect)
        : farmingStore.decrementValue(-1 * potion.value.farmingEffect);
      potion.value.healthEffect >= 0
        ? healthStore.incrementValue(potion.value.healthEffect)
        : healthStore.decrementValue(-1 * potion.value.healthEffect);
      potion.value.happinessEffect >= 0
        ? happinessStore.incrementValue(potion.value.happinessEffect)
        : happinessStore.decrementValue(-1 * potion.value.happinessEffect);
    }
  }

  return defineStore(`potion-${props.name}`, () => ({
    potion,
    createNewPotion,
  }));
};

export type potionStore = ReturnType<ReturnType<typeof createPotionStore>>;
