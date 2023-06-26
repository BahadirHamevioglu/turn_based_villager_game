import { createBuildingStore } from "./createBuildingsStore";

export const useBazaarBuildStore = createBuildingStore({
  name: "Bazaar",
  owned: 0,
  cost: 15,
  addCitizens: 0,
  happinessEffect: 2,
  healthEffect: 1,
  farmingEffect: 6,
  miningEffect: 0,
  scienceEffect: 0,
  electricEffect: 0,
});
