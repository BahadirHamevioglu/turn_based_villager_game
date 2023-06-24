import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

const ALARM_LEVEL = 0;
const MAX_ALARM = 3;

export const useAlarmStore = defineStore("alarm", () => {
  const currentAlarmLevel = useStorage("alarmLevel", ref(ALARM_LEVEL));
  const maxAlarmLevel = useStorage("maxAlarm", ref(MAX_ALARM));

  function incrementAlarm(number) {
    currentAlarmLevel.value += number;
  }
  function decrementAlarm(number) {
    currentAlarmLevel.value -= number;
  }

  return {
    currentAlarmLevel,
    maxAlarmLevel,
    incrementAlarm,
    decrementAlarm,
  };
});

export default useAlarmStore;
