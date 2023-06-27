import { createResourceStore } from "./createResourcesStore";

export const useHealthStore = createResourceStore({
  name: "Health",
  startingValue: 10,
  maxNegativeValue: -20,
  noMaxValue: false,
});
