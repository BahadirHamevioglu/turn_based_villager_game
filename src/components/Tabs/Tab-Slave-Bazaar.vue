<script setup lang="ts">
import { ref } from "vue";

import GBButton from "../Button.vue";

import { useCitizensStore } from "../../stores/citizens";
import { useGoldStore } from "../../stores/resources/gold";

const citizens = useCitizensStore();
const gold = useGoldStore();

const cost: any = ref(15);
const earn: any = ref(2);

const purchaseQuantity: any = ref(1);
const sellQuantity: any = ref(1);

function buySlave(value = purchaseQuantity) {
  if (gold.currentValue >= cost.value) {
    citizens.incrementCitizensPopulation(value);
    gold.decrementValue(cost.value);
  } else {
    console.log("Not enough gold");
  }
}

function sellSlave(value = sellQuantity) {
  if (citizens.citizensPopulation >= value) {
    citizens.decrementCitizensPopulation(value);
    gold.incrementValue(earn.value);
  } else {
    console.log("Not enough citizens");
  }
}
</script>

<template>
  <div class="slave-bazaar">
    <div class="merchant-image">
      <img src="/merchant.png" alt="Merchant" />
    </div>
    <div class="slave-bazaar-content">
      <div class="title">SLAVE BAZAAR</div>
      <div class="description">
        The Slave Bazaar is where you can buy and sell slaves. Slaves will be
        your new citizens.
      </div>
      <div class="actions">
        <GBButton
          size="lg"
          :disabled="
            gold.currentValue < cost ||
            citizens.citizensPopulationMax === citizens.citizensPopulation
          "
          type="primary"
          @click="buySlave(purchaseQuantity)"
        >
          Buy {{ purchaseQuantity }} slave for {{ cost }} gold</GBButton
        >
        <GBButton
          size="lg"
          :disabled="citizens.citizensPopulation <= 0"
          type="danger"
          @click="sellSlave(sellQuantity)"
        >
          Sell {{ sellQuantity }} slave for {{ earn }} gold</GBButton
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slave-bazaar {
  width: 100%;
  padding: 1rem;
  background-color: rgb(243, 244, 246);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  display: grid;
  grid-template-columns: 230px 1fr;
  .merchant-image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 20px 30px rgba(#000, 0.35));
    }
  }

  .slave-bazaar-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .title {
      font-size: 48px;
      font-weight: 900;
      line-height: 1.5rem;
      margin-bottom: 1rem;
    }
    .description {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5rem;
    }

    .actions {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;

      gap: 1rem;
    }
  }
}
</style>
