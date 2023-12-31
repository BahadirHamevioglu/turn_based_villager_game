<script setup>
import { watchEffect, computed, ref } from "vue";
import { useAlarmStore } from "../../stores/status/alarms";
import GameOverModal from "../Modals/Modal-Game-Over.vue";

const alarmCycle = useAlarmStore();
const alarmsItem = computed(() => {
  return Array.from({ length: alarmCycle.maxValue }, (_, i) => ({
    id: i,
  }));
});

const showModal = ref(false);

const closeModal = () => {
  localStorage.clear();
  window.location.reload();
};

function gameOver() {
  showModal.value = true;
  if (!showModal.value) {
    closeModal();
  }
}

watchEffect(() => {
  alarmsItem.value.forEach((item, i) => {
    item.color = i < alarmCycle.currentValue ? "rgb(239, 68, 68)" : "#f3f4f6";
  });

  if (alarmCycle.currentValue >= alarmCycle.maxValue) {
    alarmCycle.currentValue = 0;
    gameOver();
    alarmsItem.value.forEach((item) => {
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
        To the game over: {{ alarmCycle.currentValue }}/{{ alarmsItem.length }}
      </div>
    </div>
  </div>
  <GameOverModal :show="showModal" @close="closeModal" />
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
