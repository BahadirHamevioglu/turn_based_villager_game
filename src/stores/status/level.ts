import { createStatusStore } from "./createStatusStore";

export const useLevelStore = createStatusStore({
  storeName: "Level",
  startingValue: 1,
  maxValue: null,
  noMaxValue: true,
});
