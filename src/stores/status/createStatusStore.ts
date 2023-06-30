import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { useToasterStore } from "../toasters";
const toasterStore = useToasterStore();

type props = {
  storeName: string;
  startingValue: number;
  maxValue: number;
  noMaxValue: boolean;
};

export const createStatusStore = (props: props) => {
  const currentValue = useStorage(
    `current${props.storeName}`,
    props.startingValue
  );
  const maxValue = useStorage(
    `max${props.storeName}`,
    props.noMaxValue ? Infinity : props.maxValue
  );

  function incrementValue(value: number) {
    currentValue.value += value;
  }

  function decrementValue(value: number) {
    currentValue.value -= value;
  }

  function incrementMaxValue(value: number) {
    maxValue.value += value;
  }

  function decrementMaxValue(value: number) {
    maxValue.value -= value;
  }

  return defineStore(`status-${props.storeName}`, () => ({
    currentValue,
    maxValue,
    incrementValue,
    decrementValue,
    incrementMaxValue,
    decrementMaxValue,
  }));
};
