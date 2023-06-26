import { createBuildingStore } from "./createBuildingsStore";

export const useElectricFactoryBuildStore = createBuildingStore({
  name: "Electric Factory",
  owned: 0,
  cost: 35,
  addCitizens: 0,
  happinessEffect: -5,
  healthEffect: -5,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 2,
  electricEffect: 13,
});
