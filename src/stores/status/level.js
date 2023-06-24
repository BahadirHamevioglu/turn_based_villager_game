import { createStatusStore } from "./createStatusStore";
import { watchEffect, ref } from "vue";
const startingLevel = ref(1);
const maxLevel = ref(startingLevel.value * 2);

watchEffect(() => {
  maxLevel.value = startingLevel.value * 2;
});

export const useLevelStore = createStatusStore(
  "Level",
  startingLevel,
  maxLevel
);
