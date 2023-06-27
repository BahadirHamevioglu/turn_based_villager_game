<script setup lang="ts">
import { PropType, computed } from "vue";
import GBButton from "../Button.vue";

type PopoverContentItem = {
  label: string;
  value: number;
};

type PopoverContent = PopoverContentItem[];

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
  description: {
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

const popoverContent = computed(() =>
  props.popoverContent.slice().sort((a, b) => b.value - a.value)
);

const getPopoverContentItemColor = (item: PopoverContentItem) => {
  if (item.value > 0) return "rgb(52, 211, 153)";
  if (item.value < 0) return "rgb(248, 113, 113)";

  return "#000";
};
</script>

<template>
  <div class="potion-item">
    <div class="image">
      <img src="/potion-bottle.png" alt="Grace" />
    </div>
    <div class="content">
      <div class="title">{{ name }}</div>
      <div class="description">
        {{ description }}
      </div>
      <div class="actions">
        <GBButton
          size="sm"
          type="primary"
          :disabled="disabled"
          @click="emit('click')"
        >
          {{ buttonText }}
        </GBButton>
      </div>
      <div class="popover">
        ?

        <div class="popover-content">
          <div class="title">{{ popoverTitle }}</div>
          <div class="items">
            <div class="item" v-for="item in popoverContent">
              <div class="label">{{ item.label }}</div>
              <div
                class="value"
                :style="{
                  color: getPopoverContentItemColor(item),
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
</style>
