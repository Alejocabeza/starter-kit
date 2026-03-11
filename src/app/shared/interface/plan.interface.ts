export interface IPlan {
  name: string;
  description: string;
  price: number;
  popular: boolean;
  features: Array<{ name: string; active: boolean }>;
}
