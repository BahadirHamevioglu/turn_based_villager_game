<script setup>
// COMPONENTS
import GameStatus from "../components/Status/GameStatus.vue";
import TownHall from "../components/TownHall/TownHall.vue";
import Resources from "../components/Resources/Resources.vue";
import Tabs from "../components/Tabs/Tabs.vue";
import LifecycleButton from "../components/Lifecycle/Lifecycle-Button.vue";
</script>

<template>
  <main>
    <div class="gameboard">
      <GameStatus />
      <div class="gameboard-grid-top">
        <TownHall />
        <Resources />
      </div>
      <div class="gameboard-grid-bottom">
        <Tabs />
      </div>
      <LifecycleButton />
    </div>
  </main>
</template>

<style lang="scss">
main {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  padding: 5rem 3rem;
  position: relative;
  .gameboard {
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
    position: relative;

    &-grid-top {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }
  }
}

body {
  font-family: "Inter Variable", sans-serif;
}
</style>
