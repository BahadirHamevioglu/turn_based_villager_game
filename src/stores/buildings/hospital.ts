import { createBuildingStore } from "./createBuildingsStore";

export const useHospitalBuildStore = createBuildingStore({
  name: "Hospital",
  owned: 0,
  cost: 20,
  addCitizens: 0,
  happinessEffect: 3,
  healthEffect: 3,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 0,
  electricEffect: -1,
});
