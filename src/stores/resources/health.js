import { createResourceStore } from "./createResourcesStore.js";

export const useHealthStore = createResourceStore("Health", 10);
