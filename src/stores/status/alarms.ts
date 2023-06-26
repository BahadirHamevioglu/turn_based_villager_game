import { createStatusStore } from "./createStatusStore";

export const useAlarmStore = createStatusStore({
  storeName: "Alarm",
  startingValue: 0,
  maxValue: 3,
  noMaxValue: false,
});
