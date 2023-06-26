import { createBuildingStore } from "./createBuildingsStore";

export const useAdvancedMineBuildStore = createBuildingStore({
  name: "Advanced Mine",
  owned: 0,
  cost: 30,
  addCitizens: 0,
  happinessEffect: 0,
  healthEffect: -3,
  farmingEffect: 0,
  miningEffect: 8,
  scienceEffect: 0,
  electricEffect: -1,
});
