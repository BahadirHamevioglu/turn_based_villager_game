import { createStatusStore } from "./createStatusStore";
import { watchEffect, ref } from "vue";

export const useLevelStore = createStatusStore(
  "Level",
  1,
  null,
  true
);
