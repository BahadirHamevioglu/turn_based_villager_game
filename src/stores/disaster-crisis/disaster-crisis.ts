import { watchEffect, computed } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

import { useHappinessStore } from "../resources/happiness";
import { useHealthStore } from "../resources/health";
import { useFarmingStore } from "../resources/farming";
import { useElectricStore } from "../resources/electric";
import { useMiningStore } from "../resources/mining";
import { useScienceStore } from "../resources/science";
import { useGoldStore } from "../resources/gold";

import { useToasterStore } from "../toasters";

const happinessStore = useHappinessStore() as any;
const healthStore = useHealthStore() as any;
const farmingStore = useFarmingStore() as any;
const electricStore = useElectricStore() as any;
const miningStore = useMiningStore() as any;
const scienceStore = useScienceStore() as any;
const goldStore = useGoldStore() as any;

const toasterStore = useToasterStore() as any;

const disasters = [
  {
    name: "Agricultural Crisis",
    actions: [
      { store: farmingStore, action: "decrementValue", amount: 2 },
      { store: healthStore, action: "decrementValue", amount: 2 },
    ],
    toast: {
      title: "Agricultural Crisis",
      description:
        "Agricultural Crisis has occurred. Your farming point and health point has been decreased by 2.",
      type: "danger",
      duration: 5,
    },
  },
  {
    name: "Pandemic",
    actions: [
      { store: healthStore, action: "decrementValue", amount: 3 },
      { store: happinessStore, action: "decrementValue", amount: 3 },
    ],
    toast: {
      title: "PANDEMIC",
      description:
        "Pandemic has occurred. Your health point has been decreased by 3.",
      type: "danger",
      duration: 5,
    },
  },
  {
    name: "Earthquake",
    actions: [
      { store: electricStore, action: "decrementValue", amount: 2 },
      { store: miningStore, action: "decrementValue", amount: 2 },
      { store: scienceStore, action: "decrementValue", amount: 2 },
    ],
    toast: {
      title: "EARTHQUAKE",
      description:
        "Earthquake has occurred. Your electric point, mining point, and science point has been decreased by 2.",
      type: "danger",
      duration: 5,
    },
  },
  {
    name: "Gold Crisis",
    actions: [{ store: goldStore, action: "decrementValue", amount: 10 }],
    toast: {
      title: "Gold Crisis",
      description:
        "Gold Crisis has occurred. Your gold point has been decreased by 10.",
      type: "danger",
      duration: 5,
    },
  },
];

export const useDisasterCrisisStore = defineStore("disasterHistory", () => {
  const lastDisaster = useStorage("lastDisaster", "No Disaster");

  function getRandomDisaster() {
    const randomDisaster = Math.floor(Math.random() * disasters.length);
    lastDisaster.value = disasters[randomDisaster].name;
  }

  function OccurrenceDisaster() {
    const disaster = disasters.find(
      (disaster) => disaster.name === lastDisaster.value
    );

    if (disaster) {
      disaster.actions.forEach(({ store, action, amount }) => {
        store[action](amount);
      });

      toasterStore.addToast(disaster.toast);
    }
  }

  return {
    lastDisaster,
    getRandomDisaster,
    OccurrenceDisaster,
  };
});

export default useDisasterCrisisStore;
