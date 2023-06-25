<script setup lang="ts"> 
import { PropType, computed, watchEffect } from "vue";
import GBButton from "../Button.vue";

type PopoverContentItem = {
  label: string,
  value: number
}

type PopoverContent = PopoverContentItem[]

const props = defineProps({
  image: {
    type: String,
    required: true,
    default: "/house.png",
  },
  name: {
    type: String,
    required: true,
    default: "NO DATA!!!",
  },
  disabled: {
    type: Boolean,
    required: true,
    default: false,
  },
  buttonText: {
    type: String,
    required: true,
    default: "NO DATA!!!",
  },
  amountOwned: {
    type: Number,
    required: true,
    default: 0,
  },
  popoverTitle: {
    type: String,
    required: false,
    default: "NO DATA!!!",
  },
  popoverContent: {
    type: Array as PropType<PopoverContent>,
    required: false,
    default: () => [{ label: "NO DATA!!!", value: 0 }],
  },
});

const emit = defineEmits(["click"]);

const popoverContent = computed(() => props.popoverContent.slice().sort((a, b) => b.value - a.value))

const getPopoverContentItemColor = (item: PopoverContentItem) => {
  if (item.value > 0) return 'rgb(52, 211, 153)';
  if (item.value < 0) return 'rgb(248, 113, 113)';

  return '#000';
}
</script>

<template>
  <div class="buildings-tab-item">
    <div class="buildings-tab-item-image">
      <img :src="image" alt="" />
    </div>
    <div class="buildings-tab-item-content">
      <div class="buildings-tab-item-title">{{ name }}</div>
      <GBButton
        size="md"
        :disabled="disabled"
        type="primary"
        @click="emit('click')"
        >{{ buttonText }}</GBButton
      >
      <div class="amount-owned">{{ amountOwned }}</div>
      <div class="buildings-tab-item-popover">
        ?

        <div class="popover-content">
          <div class="popover-content-title">{{ popoverTitle }}</div>
          <div class="popover-content-items">
            <div
              class="popover-content-item"
              v-for="item in popoverContent"
            >
              <div class="popover-content-item-label">{{ item.label }}</div>
              <div
                class="popover-content-item-value"
                :style="{
                  color: getPopoverContentItemColor(item)
                }"
              >
                {{ item.value > 0 ? "+" : "" }}{{ item.value }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buildings-tab-item {
  border: 1px solid rgba(229, 231, 235, 1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  position: relative;
  text-align: center;

  &-image {
    height: 225px;
    width: 225px;
    margin-bottom: 0.75rem;
    position: relative;
    z-index: 1;

    img {
      object-fit: fill;
      height: 100%;
      width: 100%;
      filter: drop-shadow(0 20px 30px rgba(#000, .35));
        }
  }

  &-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  &-button {
    padding: 0.25rem 0.625rem;
    border-radius: 0.375rem;
    background: rgb(251, 146, 60);
    color: #fff;

    font-size: 0.85rem;
    line-height: 1.25rem;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
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

  &-popover {
    position: absolute;
    top: 15px;
    left: 15px;

    background: rgb(243, 244, 246);
    color: rgb(107, 114, 128);
    border-radius: 50%;
    padding: 0.25rem 0.5rem;

    text-align: right;
    font-size: 0.75rem;
    line-height: 1rem;
    font-size: 1rem;

    cursor: pointer;

    .popover-content {
      display: none;
      position: absolute;
      top: 120%;
      left: 0;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 0.5rem;
      padding: 1rem 1rem;

      min-width: 200px;
      text-align: left;
      box-shadow: 0 10px 15px -3px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0/0.1);
      backdrop-filter: blur(10px);
      border-radius: 0.5rem;
      border: 1px solid #bfbfbf;
      color: #000;

      &-title {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.75rem;
        margin-bottom: 0.5rem;
        color: #000;
      }

      &-items {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;
        .popover-content-item {
          display: flex;
          justify-content: space-between;
          align-items: center;

          &-label {
            font-size: 0.825rem;
            font-weight: 400;
            color: #000;
          }

          &-value {
            font-size: 0.825rem;
            font-weight: 400;
            color: #000;
          }
        }
      }
    }

    &:hover {
      .popover-content {
        display: block;
      }
    }
  }

  .amount-owned {
    position: absolute;
    top: 15px;
    right: 15px;

    background: rgb(251, 146, 60);
    color: #fff;
    border-radius: 50%;
    padding: 0.25rem 0.4rem;

    text-align: right;
    font-size: 0.75rem;
    line-height: 1rem;
    font-size: 1rem;
  }

  &:hover {
    border: 1px solid rgba(107, 114, 128, 1);
  }
}
</style>
