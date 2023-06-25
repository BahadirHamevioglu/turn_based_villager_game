import { createBuildingStore } from "./createBuildingsStore.js";

// STORE NAME, OWNED, COST, ADD CITIZENS, HAPPINESS EFFECT, HEALTH EFFECT, FARMING EFFECT, MINING EFFECT, SCIENCE EFFECT
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
  electricEffect: 0
});
