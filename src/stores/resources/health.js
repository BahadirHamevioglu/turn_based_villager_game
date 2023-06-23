import { watchEffect, computed } from "vue";
import { defineStore } from "pinia";

export const BASE_HEALTH = 100;
export let health1 = BASE_HEALTH + 10;

export const useHealthStore = defineStore("health", () => {
  const health = computed(() => BASE_HEALTH + health1);

  const healthIncrement = (number) => {
    health1 = health1 + number;
  };

  watchEffect(() => {
    console.log("Health changed to: ", health.value);
    console.log("BASE_HEALTH changed to: ", BASE_HEALTH);

    console.log("health1 changed to: ", health1);
  });

  return {
    health,
    healthIncrement,
  };
});

export default useHealthStore;
