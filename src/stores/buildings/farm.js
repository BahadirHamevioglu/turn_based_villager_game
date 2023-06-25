import { createBuildingStore } from "./createBuildingsStore.js";

// STORE NAME, OWNED, COST, ADD CITIZENS, HAPPINESS EFFECT, HEALTH EFFECT, FARMING EFFECT, MINING EFFECT, SCIENCE EFFECT
export const useFarmBuildStore = createBuildingStore(
  "Farm",
  0, // owned
  5, // cost,
  0, // addCitizens
  1, // happinessEffect
  1, // healthEffect
  3, // farmingEffect
  0, // miningEffect
  0 // scienceEffect
);
