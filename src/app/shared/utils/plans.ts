import type { IPlan } from "../interface/plan.interface";

export const PLANS: IPlan[] = [
  {
    name: "Free Plan",
    description: "Ideal for individuals exploring SaaS ideas",
    price: 0,
    popular: false,
    features: [],
  },
  {
    name: "Pro Plan",
    description: "Everything you need to discover and validate SaaS ideas",
    price: 299,
    popular: true,
    features: [],
  },
];
