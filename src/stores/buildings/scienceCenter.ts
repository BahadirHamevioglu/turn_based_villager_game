import { createBuildingStore } from "./createBuildingsStore.js";

export const useScienceCenterBuildStore = createBuildingStore({
  name: "Science Center",
  owned: 0,
  cost: 20,
  addCitizens: 0,
  happinessEffect: 1,
  healthEffect: 0,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 5,
  electricEffect: 0,
});
