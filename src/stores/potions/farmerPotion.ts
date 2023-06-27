import { createPotionStore } from "./createPotionsStore";

export const useFarmerPotionStore = createPotionStore({
  name: "Farmer Potion",
  description:
    "A short and sure way to increase the farm point of your village.",
  cost: 50,
  addCitizens: 0,
  happinessEffect: 0,
  healthEffect: 0,
  farmingEffect: 5,
  miningEffect: 0,
  scienceEffect: 0,
  electricEffect: 0,
});
