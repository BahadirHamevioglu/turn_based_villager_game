import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useLevelStore = defineStore("level", () => {
  const currentLevel = useStorage("currentLevel", ref(1));

  function incrementLevel(number) {
    currentLevel.value += number;
  }
  function decrementAlarm(number) {
    currentLevel.value -= number;
  }

  watchEffect(() => {
    if (currentLevel.value % 20 === 0) {
      console.log("level up");
    }
  });

  return {
    currentLevel,
    incrementLevel,
    decrementAlarm,
  };
});

export default useLevelStore;
