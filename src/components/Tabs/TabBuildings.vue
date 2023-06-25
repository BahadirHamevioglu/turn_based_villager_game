<script setup>
import TabBuildingsBox from "./TabBuildings-Box.vue";

import { useHouseBuildStore } from "../../stores/buildings/house";
const houseBuildStore = useHouseBuildStore();

import { useFarmBuildStore } from "../../stores/buildings/farm";
const farmBuildStore = useFarmBuildStore();

import { useMineBuildStore } from "../../stores/buildings/mine";
const mineBuildStore = useMineBuildStore();

import { useGoldStore } from "../../stores/resources/gold";
const goldStore = useGoldStore();
</script>

<template>
  <div class="tabs-main">
    <TabBuildingsBox
      image="/house.png"
      :name="houseBuildStore.building.name"
      :description="`House, where your citizens live. Each house can hold ${houseBuildStore.building.addCitizens} citizens.`"
      :disabled="houseBuildStore.building.cost >= goldStore.currentValue"
      :click="
        () => {
          houseBuildStore.buildNewBuilding();
        }
      "
      :buttonText="`Build for ${houseBuildStore.building.cost} gold`"
      :amountOwned="houseBuildStore.building.owned"
      :popoverTitle="houseBuildStore.building.name"
      :popoverContent="[
        {
          label: 'Cost',
          value: -1 * houseBuildStore.building.cost,
        },
        {
          label: 'New Citizens',
          value: houseBuildStore.building.addCitizens,
        },
        {
          label: 'Happiness Effect',
          value: houseBuildStore.building.happinessEffect,
        },
        {
          label: 'Health Effect',
          value: houseBuildStore.building.healthEffect,
        },
        {
          label: 'Farming Effect',
          value: houseBuildStore.building.farmingEffect,
        },
        {
          label: 'Mining Effect',
          value: houseBuildStore.building.miningEffect,
        },
        {
          label: 'Science Effect',
          value: houseBuildStore.building.scienceEffect,
        },
      ]"
    />
    <TabBuildingsBox
      image="/field.png"
      :name="farmBuildStore.building.name"
      :description="`The field where our citizens grow food. Each time you build a field, you will gain ${farmBuildStore.building.farmingEffect} crops.`"
      :disabled="farmBuildStore.building.cost >= goldStore.currentValue"
      :click="
        () => {
          farmBuildStore.buildNewBuilding();
        }
      "
      :buttonText="`Build for ${farmBuildStore.building.cost} gold`"
      :amountOwned="farmBuildStore.building.owned"
      :popoverTitle="farmBuildStore.building.name"
      :popoverContent="[
        {
          label: 'Cost',
          value: -1 * farmBuildStore.building.cost,
        },
        {
          label: 'New Citizens',
          value: farmBuildStore.building.addCitizens,
        },
        {
          label: 'Happiness Effect',
          value: farmBuildStore.building.happinessEffect,
        },
        {
          label: 'Health Effect',
          value: farmBuildStore.building.healthEffect,
        },
        {
          label: 'Farming Effect',
          value: farmBuildStore.building.farmingEffect,
        },
        {
          label: 'Mining Effect',
          value: farmBuildStore.building.miningEffect,
        },
        {
          label: 'Science Effect',
          value: farmBuildStore.building.scienceEffect,
        },
      ]"
    />
    <TabBuildingsBox
      image="/default-mine.png"
      :name="mineBuildStore.building.name"
      :description="`The place where your citizens can dig mines. Every time you build a mine, you will get ${mineBuildStore.building.miningEffect} items.`"
      :disabled="mineBuildStore.building.cost >= goldStore.currentValue"
      :click="
        () => {
          mineBuildStore.buildNewBuilding();
        }
      "
      :buttonText="`Build for ${mineBuildStore.building.cost} gold`"
      :amountOwned="mineBuildStore.building.owned"
      :popoverTitle="mineBuildStore.building.name"
      :popoverContent="[
        {
          label: 'Cost',
          value: -1 * mineBuildStore.building.cost,
        },
        {
          label: 'New Citizens',
          value: mineBuildStore.building.addCitizens,
        },
        {
          label: 'Happiness Effect',
          value: mineBuildStore.building.happinessEffect,
        },
        {
          label: 'Health Effect',
          value: mineBuildStore.building.healthEffect,
        },
        {
          label: 'Farming Effect',
          value: mineBuildStore.building.farmingEffect,
        },
        {
          label: 'Mining Effect',
          value: mineBuildStore.building.miningEffect,
        },
        {
          label: 'Science Effect',
          value: mineBuildStore.building.scienceEffect,
        },
      ]"
    />
    <TabBuildingsBox
      image="/default-mine.png"
      :name="mineBuildStore.building.name"
      :description="`The place where your citizens can dig mines. Every time you build a mine, you will get ${mineBuildStore.building.farmingEffect} items.`"
      :disabled="mineBuildStore.building.cost >= goldStore.currentValue"
      :click="
        () => {
          mineBuildStore.buildNewBuilding();
        }
      "
      :buttonText="`Build for ${mineBuildStore.building.cost} gold`"
      :amountOwned="mineBuildStore.building.owned"
      :popoverTitle="mineBuildStore.building.name"
      :popoverContent="[
        {
          label: 'Cost',
          value: -1 * mineBuildStore.building.cost,
        },
        {
          label: 'New Citizens',
          value: mineBuildStore.building.addCitizens,
        },
        {
          label: 'Happiness Effect',
          value: mineBuildStore.building.happinessEffect,
        },
        {
          label: 'Health Effect',
          value: mineBuildStore.building.healthEffect,
        },
        {
          label: 'Farming Effect',
          value: mineBuildStore.building.farmingEffect,
        },
        {
          label: 'Mining Effect',
          value: mineBuildStore.building.miningEffect,
        },
        {
          label: 'Science Effect',
          value: mineBuildStore.building.scienceEffect,
        },
      ]"
    />
  </div>
</template>

<style lang="scss">
.tabs-main {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;
}
</style>
