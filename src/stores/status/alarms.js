import { createStatusStore } from "./createStatusStore";
import { ref } from "vue";

const STARTING_VALUE = ref(0);
const MAX_VALUE = ref(5);

export const useAlarmStore = createStatusStore(
  "Alarm",
  STARTING_VALUE,
  MAX_VALUE
);
