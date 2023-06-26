import { createResourceStore } from "./createResourcesStore";

export const useGoldStore = createResourceStore({
  name: "Gold",
  startingValue: 3,
});
