import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

const STARTER_ALARM = 0;
const END_ALARM = 3;

const activeAlarmLocalStorage = useStorage("activeAlarm", STARTER_ALARM);

export const useAlarmStore = defineStore("alarm", () => {
  const alarmsLevel = ref(STARTER_ALARM);
  const alarmsLevelForEnd = ref(END_ALARM);
  const activeAlarmLocalStorageStore = ref(activeAlarmLocalStorage.value);

  function incrementAlarm() {
    alarmsLevel.value += 1;
    activeAlarmLocalStorage.value = alarmsLevel.value;

    if (alarmsLevel.value >= alarmsLevelForEnd.value) {
      gameOver();
    }
  }

  function gameOver() {
    if (alarmsLevel.value >= alarmsLevelForEnd.value) {
      activeAlarmLocalStorage.value = STARTER_ALARM;
      return true;
    }
  }

  return {
    alarmsLevel,
    alarmsLevelForEnd,
    activeAlarmLocalStorageStore,
    incrementAlarm,
    gameOver,
  };
});

export default useAlarmStore;
