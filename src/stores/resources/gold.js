import { createResourceStore } from "./createResourcesStore.js";

export const useGoldStore = createResourceStore("Gold", 10);
