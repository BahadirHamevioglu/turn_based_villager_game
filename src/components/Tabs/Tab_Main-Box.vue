<script setup>
const props = defineProps(["icon", "color", "value", "title"]);
</script>

<template>
  <div class="tabs_main-item">
    <div class="tabs_main-item_icon">
      <font-awesome-icon :icon="icon" :style="{ color: color }" />
    </div>
    <div class="tabs_main-item_title">{{ title }}</div>
    <div class="tabs_main-item_value">{{ value }}</div>
  </div>
</template>

<style lang="scss" scoped>
.tabs_main-item {
  border: 1px solid rgba(229, 231, 235, 1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  position: relative;
  &_icon {
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-bottom: 0.75rem;

    color: rgba(156, 163, 175, 1);
  }

  &_title {
    font-size: 15px;
    font-weight: 400;
    color: rgba(107, 114, 128, 1);
  }

  &_value {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    text-align: center;
    width: 2rem;
  }

  &:hover {
    border: 1px solid rgba(107, 114, 128, 1);
  }
}
</style>
