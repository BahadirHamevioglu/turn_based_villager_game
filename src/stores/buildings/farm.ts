import { createBuildingStore } from "./createBuildingsStore";

export const useFarmBuildStore = createBuildingStore({
  name: "Farm",
  owned: 0,
  cost: 5,
  addCitizens: 0,
  happinessEffect: 1,
  healthEffect: 1,
  farmingEffect: 3,
  miningEffect: 0,
  scienceEffect: 0,
  electricEffect: 0,
});
