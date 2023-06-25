import { createBuildingStore } from "./createBuildingsStore.js";

export const useDefaultMineBuildStore = createBuildingStore(
  "Default Mine", // storeName
  0, // owned
  15, // cost,
  0, // addCitizens
  0, // happinessEffect
  -1, // healthEffect
  0, // farmingEffect
  3, // miningEffect
  0, // scienceEffect
  0 // electricEffect
);
