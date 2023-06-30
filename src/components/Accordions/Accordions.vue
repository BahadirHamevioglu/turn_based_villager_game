<script setup lang="ts">
import Accordion from "./Accordion.vue";

const accordionData = [
  {
    title: "How does the game work?",
    content:
      "The main objective of our game is to strive to keep your village standing for as long as possible. While trying to sustain your village, you need to make improvements and avoid disasters by developing your village.",
  },
  {
    title: "What is the disaster system?",
    content:
      "The disaster system consists of events that cause damage to your village at regular intervals. To avoid these events, you must continuously improve your village. Developed villages can overcome disasters and thus continue your survival adventure.",
  },
  {
    title: "What is the alarm system?",
    content:
      "The alarm system serves as an emergency situation indicator for your village. The core gameplay revolves around reaching three alarms, upon which the game ends.",
  },
  {
    title: "What is the potions?",
    content:
      "Potions are delicious beverages that can provide beneficial effects directly to your advantage without any negative consequences.",
  },
  {
    title: "What is the resource system?",
    content:
      "Resources are essential for the survival of your village and ensure the continuity of the game. When one of your resources reaches -20, the game ends immediately. If your resources fall into negative values, you earn 1 alarm point. Three negative values essentially result in the game ending.",
  },
  {
    title: "How can i get earn gold?",
    content:
      "The primary way to earn gold is by progressing to a new day. Each time you transition to a new day, you earn 3 gold coins.",
  },
  {
    title: "How is the Slave Bazaar?",
    content:
      "You can either integrate new villagers into your village or sell the existing ones you have.",
  },
];
</script>

<template>
  <div class="accordions">
    <Accordion
      v-for="accordion in accordionData"
      :key="accordion.title"
      :title="accordion.title"
      :content="accordion.content"
    />
  </div>
</template>

<style lang="scss" scoped>
.accordions {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
</style>
