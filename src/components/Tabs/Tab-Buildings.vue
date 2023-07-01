<script setup lang="ts">
import TabBuildingsBox from "./Tab-Buildings-Box.vue";
import { BuildingStore } from "../../stores/buildings/createBuildingsStore";

import { useHouseBuildStore } from "../../stores/buildings/house";
import { useFarmBuildStore } from "../../stores/buildings/farm";
import { useBazaarBuildStore } from "../../stores/buildings/bazaar";
import { useDefaultMineBuildStore } from "../../stores/buildings/defaultMine";
import { useAdvancedMineBuildStore } from "../../stores/buildings/advancedMine";
import { useElectricFactoryBuildStore } from "../../stores/buildings/electricFactory";
import { useElectricGeneratorBuildStore } from "../../stores/buildings/electricGenerator";
import { useEnvironmentallyFriendlyFactoryBuildStore } from "../../stores/buildings/environmentallyFriendlyFactory";
import { useScienceCenterBuildStore } from "../../stores/buildings/scienceCenter";
import { useAmusementCenterBuildStore } from "../../stores/buildings/amusementCenter";
import { usePubBuildStore } from "../../stores/buildings/pub";
import { useTavernBuildStore } from "../../stores/buildings/tavern";
import { useSchoolBuildStore } from "../../stores/buildings/school";
import { useHospitalBuildStore } from "../../stores/buildings/hospital";
import { useGoldStore } from "../../stores/resources/gold";

const houseBuildStore = useHouseBuildStore();
const farmBuildStore = useFarmBuildStore();
const bazaarBuildStore = useBazaarBuildStore();
const defaultMineBuildStore = useDefaultMineBuildStore();
const advancedMineBuildStore = useAdvancedMineBuildStore();
const ElectricFactoryBuildStore = useElectricFactoryBuildStore();
const ElectricGeneratorBuildStore = useElectricGeneratorBuildStore();
const EnvironmentallyFriendlyFactoryBuildStore =
  useEnvironmentallyFriendlyFactoryBuildStore();
const scienceCenterBuildStore = useScienceCenterBuildStore();
const amusementCenterBuildStore = useAmusementCenterBuildStore();
const pubBuildStore = usePubBuildStore();
const tavernBuildStore = useTavernBuildStore();
const schoolBuildStore = useSchoolBuildStore();
const hospitalBuildStore = useHospitalBuildStore();
const goldStore = useGoldStore();

const getCost = (store: BuildingStore) => -1 * store.building.cost;

const getEffects = (store: BuildingStore) => {
  return [
    {
      label: "Cost",
      value: getCost(store),
    },
    {
      label: "Citizens Capacity",
      value: store.building.addCitizens,
    },
    {
      label: "Happiness Effect",
      value: store.building.happinessEffect,
    },
    {
      label: "Health Effect",
      value: store.building.healthEffect,
    },
    {
      label: "Farming Effect",
      value: store.building.farmingEffect,
    },
    {
      label: "Mining Effect",
      value: store.building.miningEffect,
    },
    {
      label: "Science Effect",
      value: store.building.scienceEffect,
    },
    {
      label: "Electricity Effect",
      value: store.building.electricEffect,
    },
  ].filter(({ value }) => value !== 0);
};

const buildings = [
  { type: "house", imageKey: "house", store: houseBuildStore },
  { type: "field", imageKey: "field", store: farmBuildStore },
  { type: "bazaar", imageKey: "bazaar", store: bazaarBuildStore },
  { type: "mine", imageKey: "coal-mine", store: defaultMineBuildStore },
  {
    type: "advancedMine",
    imageKey: "advanced-mine",
    store: advancedMineBuildStore,
  },
  {
    type: "electricFactory",
    imageKey: "electric-factory",
    store: ElectricFactoryBuildStore,
  },
  {
    type: "electricGenerator",
    imageKey: "electric-generator",
    store: ElectricGeneratorBuildStore,
  },
  {
    type: "environmentallyFriendlyFactory",
    imageKey: "environmentally-friendly-factory",
    store: EnvironmentallyFriendlyFactoryBuildStore,
  },
  {
    type: "scienceCenter",
    imageKey: "science-center",
    store: scienceCenterBuildStore,
  },
  {
    type: "amusementCenter",
    imageKey: "amusement-center",
    store: amusementCenterBuildStore,
  },
  { type: "school", imageKey: "school", store: schoolBuildStore },
  { type: "pub", imageKey: "pub", store: pubBuildStore },
  { type: "tavern", imageKey: "tavern", store: tavernBuildStore },
  { type: "hospital", imageKey: "hospital", store: hospitalBuildStore },
];

const buildingsData = buildings
  .map(({ imageKey, store }) => {
    return {
      image: `/${imageKey}.png`,
      name: store.building.name,
      store,
    };
  })
  .sort((a, b) => getCost(b.store) - getCost(a.store));
</script>

<template>
  <div class="tabs-buildings">
    <TabBuildingsBox
      v-for="building in buildingsData"
      :key="building.name"
      :image="building.image"
      :name="building.name"
      :disabled="goldStore.currentValue < building.store.building.cost"
      :button-text="`Build for ${building.store.building.cost} gold`"
      :amount-owned="building.store.building.owned"
      :popover-title="building.name"
      :popover-content="getEffects(building.store)"
      @click="building.store.buildNewBuilding"
    />
  </div>
</template>

<style lang="scss">
.tabs-buildings {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;
}
</style>
