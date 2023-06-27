import { createPotionStore } from "./createPotionsStore";

export const useElectricPotionStore = createPotionStore({
  name: "Electric Potion",
  description:
    "A short and sure way to increase the electric point of your village.",
  cost: 50,
  addCitizens: 0,
  happinessEffect: 0,
  healthEffect: 0,
  farmingEffect: 0,
  miningEffect: 0,
  scienceEffect: 0,
  electricEffect: 5,
});
