<script setup>
import { useDisasterStore } from "../../stores/status/disaster";
import { watchEffect } from "vue";

const disasterCycle = useDisasterStore();

const disasterBar = Array.from(
  { length: disasterCycle.disasterCycleLocalStorage },
  (_, i) => ({
    id: i,
  })
);

watchEffect(() => {
  disasterBar.forEach((item, i) => {
    item.color =
      i < disasterCycle.currentDisasterValue ? "rgb(239, 68, 68)" : "#f3f4f6";
  });

  if (
    disasterCycle.currentDisasterValue > disasterCycle.disasterCycleLocalStorage
  ) {
    disasterCycle.currentDisasterValue = 0;
    disasterBar.forEach((item) => {
      item.color = "#f3f4f6";
    });
  }
});
</script>

<template>
  <div class="disaster-bar">
    <div
      class="disaster-item"
      v-for="item in disasterBar"
      :style="{ background: item.color }"
    ></div>
    <div class="disaster-icon">
      <font-awesome-icon :icon="['fas', 'circle-question']" />

      <div class="disaster-popover">
        To the next disaster: {{ disasterCycle.currentDisasterValue }}/{{
          disasterBar.length
        }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.disaster-bar {
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  justify-content: flex-start;
  align-items: center;

  .disaster-item {
    width: 2rem;
    height: 1rem;
    border-radius: 0.2rem;
  }

  .disaster-icon {
    margin-left: 0.8rem;
    font-size: 1rem;
    color: #a3a6ac;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    position: relative;

    &:hover {
      color: #000;
      cursor: pointer;

      .disaster-popover {
        display: block;
      }
    }

    .disaster-popover {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 25px;
      width: max-content;
      background: #fff;
      padding: 0.3rem 0.5rem;
      border-radius: 0.2rem;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
      z-index: 1;
      font-size: 14px;
      display: none;
    }
  }
}
</style>
