<template>
  <button class="lifecycle_button">
    Next Day (Day 10 <font-awesome-icon :icon="['fas', 'arrow-right']" /> 11)
  </button>
</template>

<style lang="scss" scoped>
.lifecycle_button {
  position: absolute;
  bottom: -50px;
  right: 0px;

  padding: 1rem 2rem;
  border-radius: 999px;
  border: none;
  background: rgb(251, 146, 60);
  color: #fff;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgb(254, 127, 24);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
