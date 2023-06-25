import { createBuildingStore } from "./createBuildingsStore.js";

export const useHouseBuildStore = createBuildingStore(
  "House", // storeName
  0, // owned
  8, // cost,
  3, // addCitizens
  0, // happinessEffect
  0, // healthEffect
  0, // farmingEffect
  0, // miningEffect
  0 // scienceEffect
);
