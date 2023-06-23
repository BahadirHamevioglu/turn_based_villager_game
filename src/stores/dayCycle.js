import { defineStore } from "pinia";

import { useHealthStore, health1 } from "./resources/health";

const health = useHealthStore();

let currentHealth = health.health;

export const useDayCycleStore = defineStore("dayCycle", {
  state: () => ({ day: 1 }),
  actions: {
    newDay() {
      this.day++;

      health.healthIncrement(10);

      console.log(currentHealth);
    },
  },
});
