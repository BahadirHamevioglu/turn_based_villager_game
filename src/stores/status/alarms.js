import { createStatusStore } from "./createStatusStore";

const startingValue = 0;
const maxValue = 3;

export const useAlarmStore = createStatusStore(
  "Alarm",
  startingValue,
  maxValue
);
