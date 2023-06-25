import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const createStatusStore = (
  storeName,
  startingValue = 0,
  maxValueFunction,
  noMaxValue = false
) => {
  const currentValue = useStorage(`current${storeName}`, startingValue);
  const maxValue = useStorage(`max${storeName}`, noMaxValue ? Infinity : maxValueFunction);

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

  return defineStore(`status-${storeName}`, () => ({
    currentValue,
    maxValue,
    incrementValue,
    decrementValue,
    incrementMaxValue,
    decrementMaxValue,
  }));
};
