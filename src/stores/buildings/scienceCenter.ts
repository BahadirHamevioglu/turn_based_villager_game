import { createBuildingStore } from "./createBuildingsStore";

export const useScienceCenterBuildStore = createBuildingStore({
  name: "Science Center",
  owned: 0,
  cost: 20,
  addCitizens: 0,
  happinessEffect: 1,
  healthEffect: 1,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 5,
  electricEffect: -2,
});
