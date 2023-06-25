<script setup>
import { computed, watchEffect } from "vue";
import TabBuildingsBox from "./TabBuildings-Box.vue";

import { useHouseBuildStore } from "../../stores/buildings/house";
const houseBuildStore = useHouseBuildStore();

import { useFarmBuildStore } from "../../stores/buildings/farm";
const farmBuildStore = useFarmBuildStore();

import { useDefaultMineBuildStore } from "../../stores/buildings/defaultMine";
const defaultMineBuildStore = useDefaultMineBuildStore();

import { useElectricFactoryBuildStore } from "../../stores/buildings/electricFactory";
const ElectricFactoryBuildStore = useElectricFactoryBuildStore();

import { useScienceCenterBuildStore } from "../../stores/buildings/scienceCenter";
const scienceCenterBuildStore = useScienceCenterBuildStore();

import { useAmusementCenterBuildStore } from "../../stores/buildings/amusementCenter";
const amusementCenterBuildStore = useAmusementCenterBuildStore();

import { useSchoolBuildStore } from "../../stores/buildings/school";
const schoolBuildStore = useSchoolBuildStore();

import { useGoldStore } from "../../stores/resources/gold";
const goldStore = useGoldStore();

const buildingsData = computed(() => {
  const buildings = [
    {
      type: "house",
      image: "/house.png",
      buildingStore: houseBuildStore,
      addCitizens: houseBuildStore.building.addCitizens,
      effects: {
        happiness: houseBuildStore.building.happinessEffect,
        health: houseBuildStore.building.healthEffect,
        farming: houseBuildStore.building.farmingEffect,
        mining: houseBuildStore.building.miningEffect,
        science: houseBuildStore.building.scienceEffect,
        electric: houseBuildStore.building.electricEffect,
      },
    },
    {
      type: "field",
      image: "/field.png",
      buildingStore: farmBuildStore,
      addCitizens: farmBuildStore.building.addCitizens,
      effects: {
        happiness: farmBuildStore.building.happinessEffect,
        health: farmBuildStore.building.healthEffect,
        farming: farmBuildStore.building.farmingEffect,
        mining: farmBuildStore.building.miningEffect,
        science: farmBuildStore.building.scienceEffect,
        electric: farmBuildStore.building.electricEffect,
      },
    },
    {
      type: "mine",
      image: "/coal-mine.png",
      buildingStore: defaultMineBuildStore,
      addCitizens: defaultMineBuildStore.building.addCitizens,
      effects: {
        happiness: defaultMineBuildStore.building.happinessEffect,
        health: defaultMineBuildStore.building.healthEffect,
        farming: defaultMineBuildStore.building.farmingEffect,
        mining: defaultMineBuildStore.building.miningEffect,
        science: defaultMineBuildStore.building.scienceEffect,
        electric: defaultMineBuildStore.building.electricEffect,
      },
    },
    {
      type: "electricFactory",
      image: "/electric-factory.png",
      buildingStore: ElectricFactoryBuildStore,
      addCitizens: ElectricFactoryBuildStore.building.addCitizens,
      effects: {
        happiness: ElectricFactoryBuildStore.building.happinessEffect,
        health: ElectricFactoryBuildStore.building.healthEffect,
        farming: ElectricFactoryBuildStore.building.farmingEffect,
        mining: ElectricFactoryBuildStore.building.miningEffect,
        science: ElectricFactoryBuildStore.building.scienceEffect,
        electric: ElectricFactoryBuildStore.building.electricEffect,
      },
    },
    {
      type: "scienceCenter",
      image: "/science-center.png",
      buildingStore: scienceCenterBuildStore,
      addCitizens: scienceCenterBuildStore.building.addCitizens,
      effects: {
        happiness: scienceCenterBuildStore.building.happinessEffect,
        health: scienceCenterBuildStore.building.healthEffect,
        farming: scienceCenterBuildStore.building.farmingEffect,
        mining: scienceCenterBuildStore.building.miningEffect,
        science: scienceCenterBuildStore.building.scienceEffect,
        electric: scienceCenterBuildStore.building.electricEffect,
      },
    },
    {
      type: "amusementCenter",
      image: "/amusement-center.png",
      buildingStore: amusementCenterBuildStore,
      addCitizens: amusementCenterBuildStore.building.addCitizens,
      effects: {
        happiness: amusementCenterBuildStore.building.happinessEffect,
        health: amusementCenterBuildStore.building.healthEffect,
        farming: amusementCenterBuildStore.building.farmingEffect,
        mining: amusementCenterBuildStore.building.miningEffect,
        science: amusementCenterBuildStore.building.scienceEffect,
        electric: amusementCenterBuildStore.building.electricEffect,
      },
    },
    {
      type: "school",
      image: "/school.png",
      buildingStore: schoolBuildStore,
      addCitizens: schoolBuildStore.building.addCitizens,
      effects: {
        happiness: schoolBuildStore.building.happinessEffect,
        health: schoolBuildStore.building.healthEffect,
        farming: schoolBuildStore.building.farmingEffect,
        mining: schoolBuildStore.building.miningEffect,
        science: schoolBuildStore.building.scienceEffect,
        electric: schoolBuildStore.building.electricEffect,
      },
    },
  ];

  return buildings.map((building) => {
    const { image, buildingStore, addCitizens, effects } = building;

    return {
      image,
      name: buildingStore.building.name,
      disabled: goldStore.currentValue < buildingStore.building.cost,
      click: () => {
        buildingStore.buildNewBuilding();
      },
      buttonText: `Build for ${buildingStore.building.cost} gold`,
      amountOwned: buildingStore.building.owned,
      popoverTitle: buildingStore.building.name,
      popoverContent: [
        {
          label: "Cost",
          value: -1 * buildingStore.building.cost,
        },
        {
          label: "New Citizens",
          value: addCitizens,
        },
        {
          label: "Happiness Effect",
          value: effects.happiness,
        },
        {
          label: "Health Effect",
          value: effects.health,
        },
        {
          label: "Farming Effect",
          value: effects.farming,
        },
        {
          label: "Mining Effect",
          value: effects.mining,
        },
        {
          label: "Science Effect",
          value: effects.science,
        },
        {
          label: "Electricity Effect",
          value: effects.electric,
        },
      ],
    };
  });
});

watchEffect(() => {
  buildingsData.value.sort(
    (a, b) => b.popoverContent[0].value - a.popoverContent[0].value
  );
});
</script>

<template>
  <div class="tabs-buildings">
    <TabBuildingsBox
      v-for="building in buildingsData"
      :key="building.name"
      :image="building.image"
      :name="building.name"
      :disabled="building.disabled"
      :click="building.click"
      :buttonText="building.buttonText"
      :amountOwned="building.amountOwned"
      :popoverTitle="building.popoverTitle"
      :popoverContent="building.popoverContent"
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
