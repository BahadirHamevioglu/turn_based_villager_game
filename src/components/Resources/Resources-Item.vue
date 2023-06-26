<script lang="ts">
export default {
  props: {
    icon: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      default: "#000",
    },
    value: {
      type: [Number, String],
      default: 0,
    },
  },
};
</script>

<template>
  <div class="resources-item">
    <div class="resources-item-icon">
      <font-awesome-icon :icon="icon" class="icon" :style="{ color: color }" />
    </div>
    <div class="resources-item-value">{{ Number(value) }}</div>

    <div class="resources-item-value-status" style="display: none">+80</div>

    <slot></slot>
  </div>
</template>

<style lang="scss">
.resources-item {
  display: flex;
  flex-direction: row;
  align-items: center;

  background: rgba(243, 244, 246, 1);
  border-radius: 0.5rem;
  border: 1px solid transparent;
  padding: 1rem;

  gap: 0.5rem;
  transition: all 0.2s ease-in-out;

  position: relative;

  &-icon {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  &-value {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  &-value-status {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: #000;
    padding: 0.2rem 0.4rem;
    border-radius: 999px;
    border: 1px solid #bfbfbf;
  }

  &-dropdown {
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    padding: 1rem;
    z-index: 999;
    display: none;

    box-shadow: 0 10px 15px -3px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0/0.1);
    backdrop-filter: blur(10px);

    background: rgba(255, 255, 255, 0.5);

    backdrop-filter: blur(17px);
    -webkit-backdrop-filter: blur(17px);
    border-radius: 0.5rem;
    border: 1px solid #bfbfbf;

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

      .resources-item-dropdown-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;

        &-label {
          font-size: 0.75rem;
          font-weight: 400;
          color: #000;
        }

        &-value {
          font-size: 0.75rem;
          font-weight: 400;
          color: #000;
        }
      }

      .resources-item-dropdown-divider {
        height: 1px;
        background: #bfbfbf;
        margin: 0.5rem 0;
      }
    }
  }

  &:hover {
    border: 1px solid #bfbfbf;

    .resources-item-dropdown {
      display: block;
    }
  }
}
</style>
