import { createResourceStore } from "./createResourcesStore";

export const useHealthStore = createResourceStore({
  name: "Health",
  startingValue: 10,
});
