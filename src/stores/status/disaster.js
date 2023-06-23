import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

const START_DISASTER = 0;
const DISASTER_CYCLE = 5;

const CURRENT_DISASTER_VALUE = useStorage(
  "currentDisasterValue",
  START_DISASTER
);

const CURRENT_DISASTER_CYCLE = useStorage(
  "currentDisasterCycle",
  DISASTER_CYCLE
);

export const useDisasterStore = defineStore("disaster", () => {
  const currentDisasterValue = ref(CURRENT_DISASTER_VALUE.value);
  const currentDisasterValueLocalStorage = ref(CURRENT_DISASTER_VALUE.value);
  const disasterCycleLocalStorage = ref(CURRENT_DISASTER_CYCLE.value);

  function incrementDisaster() {
    currentDisasterValue.value++;
    CURRENT_DISASTER_VALUE.value = currentDisasterValue.value;
  }

  watchEffect(() => {
    currentDisasterValueLocalStorage.value = CURRENT_DISASTER_VALUE.value;
    disasterCycleLocalStorage.value = CURRENT_DISASTER_CYCLE.value;
  });

  return {
    currentDisasterValue,
    currentDisasterValueLocalStorage,
    disasterCycleLocalStorage,
    incrementDisaster,
  };
});

export default useDisasterStore;
