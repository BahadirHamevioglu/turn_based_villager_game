import { createStatusStore } from "./createStatusStore";

const startingLevel = 1;
const maxLevel = startingLevel * 2;
export const useLevelStore = createStatusStore(
  "Level",
  startingLevel,
  maxLevel
);
