import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const createStatusStore = (
  storeName,
  startingValue = 0,
  maxValueFunction
) => {
  const currentValue = useStorage(`current${storeName}`, startingValue);
  const maxValue = useStorage(`max${storeName}`, maxValueFunction);

  function incrementValue(number) {
    currentValue.value += number;
  }

  function decrementValue(number) {
    currentValue.value -= number;
  }

  function incrementMaxValue(number) {
    maxValue.value += number;
  }

  function decrementMaxValue(number) {
    maxValue.value -= number;
  }

  watchEffect(() => {
    maxValue.value;
  });

  return defineStore(`status-${storeName}`, () => ({
    currentValue,
    maxValue,
    incrementValue,
    decrementValue,
    incrementMaxValue,
    decrementMaxValue,
  }));
};
