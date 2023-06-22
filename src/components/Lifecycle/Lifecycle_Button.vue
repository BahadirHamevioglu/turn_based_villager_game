<template>
  <button class="lifecycle_button">
    Next Day (Day <span>1 </span>
    <font-awesome-icon
      :icon="['fas', 'arrow-right']"
      style="font-size: 0.75rem"
    />
    <span> 2</span>
    )
  </button>
</template>

<style lang="scss" scoped>
.lifecycle_button {
  position: fixed;
  bottom: 15px;
  right: 15px;

  padding: 1rem 2rem;
  border-radius: 999px;
  border: none;
  background: rgb(251, 146, 60);
  color: #fff;

  transition: all 0.2s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

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
