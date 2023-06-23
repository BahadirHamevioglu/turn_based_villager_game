<script>
import Resources_Item from "./Resources_Item.vue";

import { useHealthStore } from "../../stores/resources/health";

const health = useHealthStore();

export default {
  data() {
    return {
      value: health.health,
    };
  },
  components: {
    Resources_Item,
  },
};
</script>

<template>
  <Resources_Item :icon="['fas', 'heart']" color="#dc2626" :value="value" />
</template>
