import { createBuildingStore } from "./createBuildingsStore";

export const useEnvironmentallyFriendlyFactoryBuildStore = createBuildingStore({
  name: "Environmentally Friendly Factory",
  owned: 0,
  cost: 130,
  addCitizens: 0,
  happinessEffect: 1,
  healthEffect: -1,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 5,
  electricEffect: 20,
});
