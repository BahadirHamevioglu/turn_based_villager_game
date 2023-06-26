import { createResourceStore } from "./createResourcesStore";

export const useMiningStore = createResourceStore({
  name: "Mining",
  startingValue: 3,
});
