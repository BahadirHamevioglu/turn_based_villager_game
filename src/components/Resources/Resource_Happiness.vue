<script>
import Resources_Item from "./Resources_Item.vue";

export default {
  data() {
    return {
      value: 5,
      dropdownContent: [
        {
          text: "Base", // label
          value: this.value || 100, // value
          id: 1, // id
        },
      ],
    };
  },
  components: {
    Resources_Item,
  },
};
</script>

<template>
  <Resources_Item
    :icon="['fas', 'face-smile']"
    color="#65a30d"
    :value="value"
    :class="['resources_happiness']"
  >
    <div class="resources-item-dropdown">
      <div class="resources-item-dropdown-title">Happiness</div>
      <div
        class="resources-item-dropdown-items"
        v-for="content in dropdownContent"
      >
        <div class="resources-item-dropdown-item" :key="content.id">
          <div class="resources-item-dropdown-item-label">
            {{ content.text }}
          </div>
          <div class="resources-item-dropdown-item-value">
            {{ content.value }}
          </div>
        </div>
      </div>
    </div>
  </Resources_Item>
</template>

<style scoped lang="scss">
.resources_happiness {
  border: 2px solid #84cc16;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #65a30d;
  &:hover {
    border: 2px solid #84cc16;
  }
}
</style>
