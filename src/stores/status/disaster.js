import { createStatusStore } from "./createStatusStore";

export const useDisasterStore = createStatusStore("Disaster", 0, 5);
