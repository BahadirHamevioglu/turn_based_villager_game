import { createResourceStore } from "./createResourcesStore";

export const useFarmingStore = createResourceStore({
  name: "Farming",
  startingValue: 3,
  maxNegativeValue: -20,
  noMaxValue: false,
});
