import { createBuildingStore } from "./createBuildingsStore";

export const useElectricGeneratorBuildStore = createBuildingStore({
  name: "Electric Generator",
  owned: 0,
  cost: 12,
  addCitizens: 0,
  happinessEffect: -1,
  healthEffect: -2,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 1,
  electricEffect: 2,
});
