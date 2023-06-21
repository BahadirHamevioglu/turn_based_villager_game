<script>
import Resources_Item from "./Resources_Item.vue";

export default {
  data() {
    return {
      value: 100,
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
    <div class="gameboard-resources_item_dropdown">
      <div class="gameboard-resources_item_dropdown_title">Happiness</div>
      <div
        class="gameboard-resources_item_dropdown_items"
        v-for="content in dropdownContent"
      >
        <div class="gameboard-resources_item_dropdown_item" :key="content.id">
          <div class="gameboard-resources_item_dropdown_item_label">
            {{ content.text }}
          </div>
          <div class="gameboard-resources_item_dropdown_item_value">
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
