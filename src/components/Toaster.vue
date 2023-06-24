<script setup>
import { defineProps, ref, onMounted } from "vue";

const display = ref(false);

const props = defineProps({
  type: {
    type: String,
  },
  size: {
    type: String,
  },
  duration: {
    type: Number,
    requared: true,
  },
  message: {
    type: String,
    requared: true,
  },
  zIndex: {
    type: Number,
    default: 9999,
  },
  position: {
    type: String,
    default: "bottom",
  },
});

onMounted(() => {
  display.value = true;
  setTimeout(() => {
    display.value = false;
  }, props.duration);
});
</script>

<template>
  <div
    v-if="display"
    class="toaster"
    :class="[
      [
        [
          'primary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].includes(type)
          ? type
          : 'primary',

        ['sm', 'md', 'lg'].includes(size) ? `toaster-${size}` : 'toaster-md',
        display ? 'fade-in' : 'fade-out',
      ],
    ]"
    :style="{ zIndex: zIndex }"
  >
    <div class="toaster-content">
      {{ message }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toaster {
  border-radius: 0.5rem;
  min-width: 480px;
  padding: 1rem;
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;

  &.fade-in {
    animation-name: fade-in;
  }

  &.fade-out {
    animation-name: fade-out;
  }
  &.primary {
    background: rgb(251, 146, 60);
    color: #fff;
  }

  &.success {
    background: rgb(52, 211, 153);
    color: #fff;
  }

  &.danger {
    background: rgb(248, 113, 113);
    color: #fff;
  }

  &.warning {
    background: rgb(253, 203, 110);
    color: #fff;
  }

  &.info {
    background: rgb(24, 164, 245);
    color: #fff;
  }

  &.light {
    background: rgb(248, 249, 250);
    color: #000;
  }

  &.dark {
    background: rgb(24, 39, 51);
    color: #fff;
  }

  &.toaster-sm {
    min-width: 320px;
  }

  &.toaster-md {
    min-width: 480px;
  }

  &.toaster-lg {
    min-width: 640px;
  }

  &-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
}
</style>
