import { defineStore } from "pinia";

import { useHealthStore } from "./health.js";
import { watchEffect, computed } from "vue";

export const BASE_HAPPINESS = 100;

const health = useHealthStore();

export const useHappinessStore = defineStore("happiness", {
  state: () => ({
    happiness: computed(() => BASE_HAPPINESS),
  }),
  actions: {
    incrementHappiness(number) {
      this.happiness = this.happiness + number;
    },
    decrementHappiness(number) {
      this.happiness = this.happiness - number;
    },

    happinessWatcher() {
      this.happiness = this.happiness + health.baseHealth;
    },
  },
});
