import { createResourceStore } from "./createResourcesStore";

export const useHappinessStore = createResourceStore({
  name: "Happiness",
  startingValue: 10,
  maxNegativeValue: -20,
  noMaxValue: false,
});
