<script setup>
// COMPONENTS
import DisasterList from "../components/Disaster-List/Disaster-List.vue";
import GameStatus from "../components/Status/GameStatus.vue";
import TownHall from "../components/TownHall/TownHall.vue";
import Resources from "../components/Resources/Resources.vue";
import Tabs from "../components/Tabs/Tabs.vue";
import LifecycleButton from "../components/Lifecycle/Lifecycle-Button.vue";
</script>

<template>
  <main>
    <div class="gameboard">
      <DisasterList />
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

.disaster-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  position: absolute;
  top: -45px;
  left: 0;

  .disaster {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 20px 30px rgba(#000, 0.35));
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
}
</style>
