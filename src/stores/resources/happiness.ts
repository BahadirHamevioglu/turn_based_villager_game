import { createResourceStore } from "./createResourcesStore";

export const useHappinessStore = createResourceStore({
  name: "Happiness",
  startingValue: 10,
});
