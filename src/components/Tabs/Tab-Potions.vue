<script setup lang="ts">
import TabPotionsBox from "./Tab-Potions-Box.vue";

import { potionStore } from "../../stores/potions/createPotionsStore";

import { useHappinessPotionStore } from "../../stores/potions/happinessPotion";
import { useHealthPotionStore } from "../../stores/potions/healthPotion";
import { useFarmerPotionStore } from "../../stores/potions/farmerPotion";
import { useMinerPotionStore } from "../../stores/potions/minerPotion";
import { useSciencePotionStore } from "../../stores/potions/sciencePotion";
import { useElectricPotionStore } from "../../stores/potions/electricPotion";
import { useGoldStore } from "../../stores/resources/gold";

const happinessPotionStore = useHappinessPotionStore();
const healthPotionStore = useHealthPotionStore();
const farmerPotionStore = useFarmerPotionStore();
const minerPotionStore = useMinerPotionStore();
const sciencePotionStore = useSciencePotionStore();
const electricPotionStore = useElectricPotionStore();
const goldStore = useGoldStore();

const getCost = (store: potionStore) => -1 * store.potion.cost;

const getEffects = (store: potionStore) => {
  return [
    {
      label: "Cost",
      value: getCost(store),
    },
    {
      label: "Citizens Capacity",
      value: store.potion.addCitizens,
    },
    {
      label: "Happiness Effect",
      value: store.potion.happinessEffect,
    },
    {
      label: "Health Effect",
      value: store.potion.healthEffect,
    },
    {
      label: "Farming Effect",
      value: store.potion.farmingEffect,
    },
    {
      label: "Mining Effect",
      value: store.potion.miningEffect,
    },
    {
      label: "Science Effect",
      value: store.potion.scienceEffect,
    },
    {
      label: "Electricity Effect",
      value: store.potion.electricEffect,
    },
  ].filter(({ value }) => value !== 0);
};

const potions = [
  {
    type: "happiness potion",
    imageKey: "potion",
    store: happinessPotionStore,
  },
  {
    type: "health potion",
    imageKey: "potion",
    store: healthPotionStore,
  },
  {
    type: "farmer potion",
    imageKey: "potion",
    store: farmerPotionStore,
  },
  {
    type: "miner potion",
    imageKey: "potion",
    store: minerPotionStore,
  },
  {
    type: "science potion",
    imageKey: "potion",
    store: sciencePotionStore,
  },
  {
    type: "electric potion",
    imageKey: "potion",
    store: electricPotionStore,
  },
];

const potionsData = potions
  .map(({ imageKey, store }) => {
    return {
      image: `/${imageKey}.png`,
      name: store.potion.name,
      store,
    };
  })
  .sort((a, b) => getCost(b.store) - getCost(a.store));
</script>

<template>
  <div class="potions">
    <TabPotionsBox
      v-for="potion in potionsData"
      :key="potion.name"
      :image="potion.image"
      :name="potion.name"
      :description="potion.store.potion.description"
      :disabled="goldStore.currentValue < potion.store.potion.cost"
      :buttonText="`Get for ${potion.store.potion.cost} gold`"
      :popoverTitle="potion.name"
      :popoverContent="getEffects(potion.store)"
      @click="potion.store.createNewPotion"
    />
  </div>
</template>

<style lang="scss" scoped>
.potions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 1rem;

  .potion-item {
    display: grid;
    grid-template-columns: 125px 1fr;
    grid-gap: 1rem;
    border: 1px solid rgba(229, 231, 235, 1);
    border-radius: 0.5rem;
    padding: 0.5rem;
    transition: all 0.2s ease-in-out;
    position: relative;
    .image {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0 20px 30px rgba(#000, 0.35));
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      .title {
        font-size: 24px;
        font-weight: 900;
        line-height: 1.5rem;
        margin-bottom: 0.5rem;
      }

      .description {
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 0.8rem;
      }

      .actions {
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }

      .popover {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: rgb(243, 244, 246);
        color: rgb(107, 114, 128);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.75rem;
        line-height: 1rem;
        font-size: 1rem;
        cursor: pointer;

        .popover-content {
          display: none;
          position: absolute;
          top: 120%;
          right: 0;
          min-width: 200px;
          text-align: left;
          background: rgba(255, 255, 255, 0.9);
          padding: 1rem 1rem;
          box-shadow: 0 10px 15px -3px rgb(0 0 0/0.1),
            0 4px 6px -4px rgb(0 0 0/0.1);
          backdrop-filter: blur(10px);
          border-radius: 0.5rem;
          border: 1px solid #bfbfbf;
          color: #000;
          z-index: 100;

          .title {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }

          .items {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .item {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              font-size: 0.875rem;
              font-weight: 400;
              line-height: 1.25rem;
              color: #4b5563;
            }
          }
        }

        &:hover {
          .popover-content {
            display: block;
          }
        }
      }
    }

    &:hover {
      border: 1px solid rgba(107, 114, 128, 1);
    }
  }
}
</style>
