<script setup>
import GBButton from "../Button.vue";
</script>

<template>
  <div class="town-hall">
    <div class="town-hall-image">
      <img src="/town-hall.png" alt="town hall" />
    </div>
    <div class="town-hall-info">
      <div class="town-hall-info-top">
        <div class="town-hall-level">Level 1</div>
        <GBButton size="md" :disabled="false" type="primary">Upgrade</GBButton>
      </div>
      <div class="town-hall-info-bottom">
        <div class="town-citizens">
          <font-awesome-icon :icon="['fas', 'user-group']" />
          <span class="town-citizens-value">10</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.town-hall {
  background-color: rgb(243, 244, 246);
  border-radius: 0.5rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 77.48px auto;
  gap: 2rem;
  align-items: center;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  .town-hall-image {
    width: 72px;
    height: 77.47px;
    border-radius: 0.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .town-hall-info {
    display: flex;
    flex-direction: column;

    &-top {
      display: flex;
      gap: 1rem;
      .town-hall-level {
        font-size: 30px;
        line-height: 2.25rem;
      }
      .town-hall-level-up-button {
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
        background-color: rgb(251, 146, 60);
        color: #fff;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: rgb(254, 127, 24);
        }

        &.disabled {
          background-color: rgb(209, 213, 219);
          color: rgb(156, 163, 175);
          cursor: not-allowed;
        }
      }
    }
    &-bottom {
      display: flex;
      flex-direction: row;
      align-items: center;

      .town-citizens {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        svg {
          width: 1.2rem;
          height: 1.2rem;
          fill: rgba(156, 163, 175, 1);
        }
      }
    }
  }

  &:hover {
    border: 1px solid #bfbfbf;
  }
}
</style>
