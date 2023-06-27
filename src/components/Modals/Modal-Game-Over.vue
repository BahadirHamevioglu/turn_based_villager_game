<script setup lang="ts">
import Modal from "./Modal.vue";
</script>

<template>
  <Modal>
    <template #header>
      <div class="modal-header-title">GAME OVER</div>
    </template>
    <template #body>
      <p>You lost the game!</p>
    </template>
  </Modal>
</template>
