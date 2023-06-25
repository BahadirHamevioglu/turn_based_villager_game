<script setup lang="ts">
import { computed } from "vue";
import { useStorage } from "@vueuse/core";

import Tab_Main from "./Tab_Main.vue";
import TabBuildings from "./TabBuildings.vue";
import Resource_Happiness from "../Resources/Resource_Happiness.vue";

const tabItems = [
  {
    text: "Main",
    id: 1,
    component: Tab_Main,
  },
  {
    text: "Jobs",
    id: 2,
    component: Resource_Happiness,
  },
  {
    text: "Buildings",
    id: 2,
    component: TabBuildings,
  },
  {
    text: "How To Play",
    id: 3,
  },
];

const activeTab = useStorage("activeTab", tabItems[0].text);

const setActiveTab = (index: number) => {
  activeTab.value = tabItems[index].text;
};

const activeTabItem = computed(() => tabItems.find(
    (item) => item.text === activeTab.value
  ));

</script>

<template>
  <div class="tabs">
    <div class="tab-buttons">
      <button
        v-for="(item, index) in tabItems"
        :key="item.id"
        @click="() => setActiveTab(index)"
        :class="['tab-button', { active: activeTab === item.text }]"
      >
        {{ item.text }}
      </button>
    </div>

    <div class="tab-content">
      <div class="tab-content-title" v-if="activeTab && activeTabItem?.component">
        {{ activeTab }}
      </div>
      <keep-alive>
        <component
          :is="activeTabItem.component"
          v-if="activeTabItem?.component"
          :key="activeTabItem.text"
        />
      </keep-alive>
      <div class="" v-if="!activeTabItem?.component">no data!</div>
    </div>
  </div>
</template>

<style lang="scss">
.tabs {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  padding: 1rem 0;

  .tab-buttons {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;

    .tab-button {
      border-radius: 0.5rem;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding: 0.75rem 1.25rem;
      color: rgba(107, 114, 128, 1);
      background-color: rgba(243, 244, 246, 1);
      text-transform: uppercase;
      &.active {
        color: rgba(234, 88, 12, 1);
        background: rgba(255, 237, 213, 1);
      }
    }
  }
}

.tab-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &-title {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}
</style>
