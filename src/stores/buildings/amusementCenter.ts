import { createBuildingStore } from "./createBuildingsStore.js";

export const useAmusementCenterBuildStore = createBuildingStore({
  name: "Amusement Center",
  owned: 0,
  cost: 15,
  addCitizens: 0,
  happinessEffect: 0,
  healthEffect: -1,
  farmingEffect: 0,
  miningEffect: 3,
  scienceEffect: 0,
  electricEffect: 0
});
