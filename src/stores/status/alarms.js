import { createStatusStore } from "./createStatusStore";

const startingValue = 0;
const maxValue = 5;

export const useAlarmStore = createStatusStore(
  "Alarm",
  startingValue,
  maxValue
);
