import { createBuildingStore } from "./createBuildingsStore.js";

export const useScienceCenterBuildStore = createBuildingStore({
  name: "Science Center",
  owned: 0,
  cost: 8,
  addCitizens: 3,
  happinessEffect: 0,
  healthEffect: 0,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 0,
  electricEffect: 0
});
