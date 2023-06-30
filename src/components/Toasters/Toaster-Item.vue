<script setup>
const props = defineProps({
  type: {
    type: String,
  },
  duration: {
    type: Number,
    requared: true,
  },
  description: {
    type: String,
    requared: true,
  },
  title: {
    type: String,
    requared: true,
  },
});
</script>

<template>
  <li
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
      ],
    ]"
  >
    <div class="toaster-content">{{ title }}: {{ description }}</div>
  </li>
</template>

<style lang="scss" scoped>
.toaster {
  border-radius: 0.5rem;
  padding: 1rem;
  word-wrap: break-all;
  overflow-wrap: break-word;
  position: relative;
  width: max-content;
  max-width: 100%;
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
    width: 320px;
  }

  &.toaster-md {
    width: 480px;
  }

  &.toaster-lg {
    width: 640px;
  }

  &-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
