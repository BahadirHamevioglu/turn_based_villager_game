import { createPotionStore } from "./createPotionsStore";

export const useMinerPotionStore = createPotionStore({
  name: "Miner Potion",
  description:
    "A short and sure way to increase the mine point of your village.",
  cost: 50,
  addCitizens: 0,
  happinessEffect: 0,
  healthEffect: 0,
  farmingEffect: 0,
  miningEffect: 5,
  scienceEffect: 0,
  electricEffect: 0,
});
