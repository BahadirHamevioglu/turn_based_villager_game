<script lang="ts" setup>
import { ref } from "vue";

const isOpen = ref(false);
const toggle = () => {
  isOpen.value = !isOpen.value;
};

type AccordionProps = {
  title: string;
  content: string;
};

const props = defineProps<AccordionProps>();
</script>

<template>
  <div class="accordion">
    <button class="accordion-header" @click="toggle">
      <div class="accordion-title">{{ props.title }}</div>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="accordion-icon"
        :style="{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }"
      />
    </button>
    <div class="accordion-content" v-show="isOpen">
      <p>
        {{ props.content }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion {
  width: 100%;
  padding: 1rem;

  background: rgb(243, 244, 246);
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &-header {
    width: 100%;

    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .accordion-title {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .accordion-icon {
      font-size: 0.85rem;
    }
  }

  &-content {
    width: 100%;
    padding: 1rem;

    background: #fff;
    border-radius: 0.5rem;
  }
}
</style>
