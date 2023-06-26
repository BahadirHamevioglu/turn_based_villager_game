<script setup lang="ts">
import { ref } from "vue";

type Props = {
  title: string;
  content: string;
};

const props = defineProps<Props>();

const isOpen = ref<boolean>(false);

const accordionRef = ref<any>(null);
const accordionContentRef = ref<any>(null);

const toggleAccordion = () => {};
</script>

<template>
  <div
    class="accordion"
    ref="accordionRef"
    @click="toggleAccordion"
    :class="[{ active: isOpen }]"
  >
    <button class="accordion-header">
      <div class="accordion-title">{{ props.title }}</div>
      <div class="accordion-arrow">
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </div>
    </button>
    <div class="accordion-content" ref="accordionContentRef">
      {{ props.content }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: rgb(243, 244, 246);
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
  transition: all 0.3s ease-in-out;
  &-title {
    font-size: 1.875rem;
    line-height: 2.25rem;
    text-align: left;
  }
  &-content {
    background-color: rgb(255, 255, 255);
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: left;
    transition: all 0.3s ease-in-out;
  }
  &-arrow {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    transform: rotate(0deg);

    svg {
      transition: all 0.3s ease-in-out;
    }
  }

  &.active {
    background-color: rgb(255, 237, 213);
    &-arrow {
      color: rgb(234, 88, 12);
    }
  }

  &:hover {
    background-color: rgb(255, 237, 213);
    &-arrow {
      color: rgb(234, 88, 12);
    }
  }
}
</style>
