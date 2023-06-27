import { createPotionStore } from "./createPotionsStore";

export const useHappinessPotionStore = createPotionStore({
  name: "Happiness Potion",
  description:
    "A short and sure way to increase the happiness of your village.",
  cost: 50,
  addCitizens: 0,
  happinessEffect: 5,
  healthEffect: 0,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 0,
  electricEffect: 0,
});
