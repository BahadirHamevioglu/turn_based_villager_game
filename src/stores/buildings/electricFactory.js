import { createBuildingStore } from "./createBuildingsStore.js";

export const useElectricFactoryBuildStore = createBuildingStore(
  "Electric Factory", // storeName
  0, // owned
  35, // cost,
  0, // addCitizens
  -5, // happinessEffect
  -5, // healthEffect
  0, // farmingEffect
  0, // miningEffect
  2, // scienceEffect
  10 // electricEffect
);
