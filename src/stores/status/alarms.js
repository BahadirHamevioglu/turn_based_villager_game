import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

const ALARM_LEVEL = 0;
const MAX_ALARM = 3;

const alarmLevelLocalStorage = useStorage("alarmLevel", ALARM_LEVEL);
const maxAlarmLocalStorage = useStorage("maxAlarm", MAX_ALARM);

export const useAlarmStore = defineStore("alarm", () => {
  const alarmLevel = ref(alarmLevelLocalStorage.value);
  const maxAlarmLevel = ref(maxAlarmLocalStorage.value);

  function incrementAlarm() {
    alarmLevel.value++;
  }

  function gameOver() {
    if (alarmLevel.value >= maxAlarmLevel.value) {
      alarmLevel.value = ALARM_LEVEL;
      return true;
    }
  }

  watchEffect(() => {
    alarmLevelLocalStorage.value = alarmLevel.value;
    maxAlarmLocalStorage.value = maxAlarmLevel.value;
  });

  return {
    alarmLevel,
    maxAlarmLevel,
    incrementAlarm,
    gameOver,
  };
});

export default useAlarmStore;
