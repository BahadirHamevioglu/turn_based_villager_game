import { createPotionStore } from "./createPotionsStore";

export const useHealthPotionStore = createPotionStore({
  name: "Health Potion",
  description: "A short and sure way to increase the health of your village.",
  cost: 50,
  addCitizens: 0,
  happinessEffect: 0,
  healthEffect: 5,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 0,
  electricEffect: 0,
});
