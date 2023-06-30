<script setup>
import ToasterItem from "./Toaster-Item.vue";

import { useToasterStore } from "../../stores/toasters";
const toasterStore = useToasterStore();
</script>

<template>
  <ul class="toaster-list">
    <ToasterItem
      v-for="toast in toasterStore.toasterArray"
      :type="toast.type"
      :duration="toast.duration"
      :description="toast.description"
      :title="toast.title"
    />
  </ul>
</template>

<style lang="scss" scoped>
.toaster-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 1rem;
  position: fixed;
  bottom: 15px;
  left: 1rem;
  z-index: 9999;
  width: max-content;
  height: 50%;
  overflow-y: auto;
}
</style>
