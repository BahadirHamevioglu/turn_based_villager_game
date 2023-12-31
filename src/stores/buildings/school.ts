import { createBuildingStore } from "./createBuildingsStore";

export const useSchoolBuildStore = createBuildingStore({
  name: "School",
  owned: 0,
  cost: 15,
  addCitizens: 0,
  happinessEffect: 2,
  healthEffect: 1,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 3,
  electricEffect: -1,
});
