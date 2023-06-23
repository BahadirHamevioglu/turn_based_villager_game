<script setup>
import { watchEffect } from "vue";
import { useAlarmStore } from "../../stores/status/alarms";

const alarmsStore = useAlarmStore();
const alarmsItem = Array.from(
  { length: alarmsStore.alarmsLevelForEnd },
  (_, i) => ({ id: i })
);

watchEffect(() => {
  alarmsItem.forEach((item, i) => {
    item.color = i < alarmsStore.alarmsLevel ? "rgb(239, 68, 68)" : "#f3f4f6";
  });

  if (alarmsStore.alarmsLevel >= alarmsStore.alarmsLevelForEnd) {
    alarmsStore.alarmsLevel = 0;
    alarmsItem.forEach((item) => {
      item.color = "#f3f4f6";
    });
  }
});
</script>

<template>
  <div class="alarm-items">
    <div class="alarm-item" v-for="item in alarmsItem">
      <font-awesome-icon
        :icon="['fas', 'triangle-exclamation']"
        :style="{ color: item.color }"
        class="alarm-item"
      />
    </div>
    <div class="alarm-icon">
      <font-awesome-icon :icon="['fas', 'circle-question']" />
      <div class="disaster-popover">
        To the game over: {{ alarmsStore.alarmsLevel }}/{{ alarmsItem.length }}
      </div>
    </div>
    <button @click="alarmsStore.incrementAlarm">deneme</button>
  </div>
</template>

<style lang="scss" scoped>
.alarm-items {
  display: flex;
  flex-direction: row-reverse;
  gap: 0rem;
  justify-content: flex-start;
  align-items: center;

  .alarm-item {
    width: 2rem;
    height: 1rem;
    border-radius: 0.2rem;
  }

  .alarm-icon {
    margin-right: 0.4rem;
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
      right: 25px;
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
