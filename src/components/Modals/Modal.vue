<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">default header</slot>
          <button class="modal-button" @click="$emit('close')">
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </button>
        </div>
        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  transition: opacity 0.3s ease;
  z-index: 200;
  .modal-container {
    width: 300px;
    margin: auto;
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    z-index: 100;

    .modal-header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      .modal-header-title {
        font-size: 1.25rem;
        font-weight: 600;
      }
      .modal-button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 1.25rem;
        color: #000;
        transition: all 0.3s ease;
        transform: rotate(0deg);
        &:hover {
          color: #edb229;
          transform: rotate(90deg);
        }
      }
    }
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
