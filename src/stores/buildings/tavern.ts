import { createBuildingStore } from "./createBuildingsStore.js";

export const useTavernBuildStore = createBuildingStore({
  name: "Tavern",
  owned: 0,
  cost: 10,
  addCitizens: 0,
  happinessEffect: 3,
  healthEffect: -1,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 0,
  electricEffect: -1,
});
