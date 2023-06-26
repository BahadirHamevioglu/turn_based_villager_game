import { createStatusStore } from "./createStatusStore";

export const useDisasterStore = createStatusStore({
  storeName: "Disaster",
  startingValue: 0,
  maxValue: 5,
  noMaxValue: false,
});
