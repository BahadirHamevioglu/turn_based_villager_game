<script setup>
import { useLevelStore } from "../../stores/status/level";
import { useCitizensStore } from "../../stores/citizens";
import { useGoldStore } from "../../stores/resources/gold";

const levelStore = useLevelStore();
const citizensStore = useCitizensStore();
const goldStore = useGoldStore();
</script>

<template>
  <div class="town-hall">
    <div class="town-hall-image">
      <img
        src="/town-hall.png"
        alt="town hall"
        v-if="levelStore.currentValue < 30"
      />
      <img
        src="/town-hall-1.png"
        alt="town hall"
        v-else-if="
          levelStore.currentValue >= 30 && levelStore.currentValue < 60
        "
      />
      <img
        src="/town-hall-2.png"
        alt="town hall"
        v-else-if="
          levelStore.currentValue >= 60 && levelStore.currentValue < 90
        "
      />
      <img
        src="/town-hall-3.png"
        alt="town hall"
        v-else-if="
          levelStore.currentValue >= 90 && levelStore.currentValue < 120
        "
      />
      <img
        src="/town-hall-4.png"
        alt="town hall"
        v-else="levelStore.currentValue >= 120"
      />
    </div>
    <div class="town-hall-info">
      <div class="town-hall-info-top">
        <div class="town-hall-level">Level {{ levelStore.currentValue }}</div>
      </div>
      <div class="town-hall-info-bottom">
        <div class="town-citizens">
          <font-awesome-icon :icon="['fas', 'user-group']" />
          <span class="town-citizens-value"
            >{{ citizensStore.citizensPopulation }}/{{
              citizensStore.citizensPopulationMax
            }}</span
          >
        </div>
        <div class="gold-resource">
          <font-awesome-icon :icon="['fas', 'coins']" />
          <span class="gold-resource-value">{{ goldStore.currentValue }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.town-hall {
  background-color: rgb(243, 244, 246);
  border-radius: 0.5rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 77.48px auto;
  gap: 2rem;
  align-items: center;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  .town-hall-image {
    width: 72px;
    height: 77.47px;
    border-radius: 0.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.35));
    }
  }

  .town-hall-info {
    display: flex;
    flex-direction: column;

    &-top {
      display: flex;
      gap: 1rem;
      .town-hall-level {
        font-size: 30px;
        line-height: 2.25rem;
      }
      .town-hall-level-up-button {
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        background-color: rgb(251, 146, 60);
        color: #fff;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: rgb(254, 127, 24);
        }

        &.disabled {
          background-color: rgb(209, 213, 219);
          color: rgb(156, 163, 175);
          cursor: not-allowed;
        }
      }
    }
    &-bottom {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;

      .town-citizens {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        svg {
          width: 1.2rem;
          height: 1.2rem;
          fill: rgba(156, 163, 175, 1);
        }
      }

      .gold-resource {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        color: #f6b62d;
        svg {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }
  }

  &:hover {
    border: 1px solid #bfbfbf;
  }
}
</style>
