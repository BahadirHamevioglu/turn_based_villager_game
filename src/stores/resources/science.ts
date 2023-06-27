import { createResourceStore } from "./createResourcesStore.js";

export const useScienceStore = createResourceStore({
  name: "Science",
  startingValue: 0,
  maxNegativeValue: -20,
  noMaxValue: false,
});
