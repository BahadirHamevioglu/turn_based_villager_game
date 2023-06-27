import { createPotionStore } from "./createPotionsStore";

export const useSciencePotionStore = createPotionStore({
  name: "Science Potion",
  description:
    "A short and sure way to increase the science point of your village.",
  cost: 50,
  addCitizens: 0,
  happinessEffect: 0,
  healthEffect: 0,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 5,
  electricEffect: 0,
});
