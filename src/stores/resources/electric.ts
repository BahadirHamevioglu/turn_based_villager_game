import { createResourceStore } from "./createResourcesStore";

export const useElectricStore = createResourceStore({
  name: "Electric",
  startingValue: 0,
  maxNegativeValue: -20,
  noMaxValue: false,
});
