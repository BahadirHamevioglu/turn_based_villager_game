<script>
import Resources_Item from "./Resources_Item.vue";

export default {
  data() {
    return {
      value: 40,
    };
  },
  methods: {
    updateValue() {
      this.value += 1;
    },
  },
  components: {
    Resources_Item,
  },
};
</script>

<template>
  <Resources_Item :icon="['fas', 'heart']" color="#dc2626" :value="value" />
</template>
