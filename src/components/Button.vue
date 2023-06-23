<script setup>
const props = defineProps({
  size: {
    type: String,
    required: true,
    default: "md" || "lg" || "sm",
  },
  type: {
    type: String,
    required: true,
    default: "primary" || "danger" || "warning" || "success" || "info",
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <button
    class="gb-button"
    :class="[
      size === 'sm' ? 'gb-button-sm' : '',
      size === 'md' ? 'gb-button-md' : '',
      size === 'lg' ? 'gb-button-lg' : '',

      type === 'primary' ? 'gb-button-primary' : '',
      type === 'danger' ? 'gb-button-danger' : '',
      type === 'warning' ? 'gb-button-warning' : '',
      type === 'success' ? 'gb-button-success' : '',
      type === 'info' ? 'gb-button-info' : '',

      disabled ? 'disabled' : '',
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.gb-button {
  border-radius: 999px;
  border: none;
  color: #fff;
  transition: all 0.2s ease-in-out;

  &-md {
    padding: 0.75rem 1.5rem;
  }

  &-sm {
    padding: 0.5rem 1rem;
  }

  &-lg {
    padding: 1rem 2rem;
  }

  &-primary {
    background: rgb(251, 146, 60);

    &:hover {
      background: rgb(254, 127, 24);
    }
  }

  &-danger {
    background: rgb(239, 68, 68);

    &:hover {
      background: rgb(220, 38, 38) !important;
    }
  }

  &-warning {
    background: rgb(253, 126, 20);

    &:hover {
      background: rgb(245, 101, 13) !important;
    }
  }

  &-success {
    background: rgb(16, 185, 129);

    &:hover {
      background: rgb(11, 171, 110) !important;
    }
  }

  &-info {
    background: rgb(59, 130, 246);

    &:hover {
      background: rgb(43, 108, 176) !important;
    }
  }

  &:hover {
    background: rgb(254, 127, 24);
  }

  &:active {
    transform: scale(0.96);
  }

  &.disabled {
    background-color: rgb(209, 213, 219);
    color: rgb(156, 163, 175);
    cursor: not-allowed;

    &:hover {
      background-color: rgb(209, 213, 219);
    }

    &:active {
      transform: none;
    }
  }
}
</style>
