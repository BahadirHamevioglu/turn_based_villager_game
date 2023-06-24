import { createBuildingStore } from "./useBuildingStore.js";

// STORE NAME, OWNED, COST, ADD CITIZENS, HAPPINESS EFFECT, HEALTH EFFECT, FARMING EFFECT, MINING EFFECT, SCIENCE EFFECT
export const useFarmBuildStore = createBuildingStore(
  "Farm",
  0,
  10,
  0,
  1,
  3,
  0,
  0,
  0
);
