import { createBuildingStore } from "./createBuildingsStore";

export const useAmusementCenterBuildStore = createBuildingStore({
  name: "Amusement Center",
  owned: 0,
  cost: 30,
  addCitizens: 0,
  happinessEffect: 6,
  healthEffect: 1,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 0,
  electricEffect: -2,
});
