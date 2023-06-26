import { createResourceStore } from "./createResourcesStore.js";

export const useScienceStore = createResourceStore({
  name: "Science",
  startingValue: 0,
});
