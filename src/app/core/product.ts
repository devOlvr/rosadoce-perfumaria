export interface Product {
  id: string;
  name: string;
  type: string;
  badge: string;
  shortDescription: string;
  description: string;
  notes: readonly string[];
  price: number;
  image: string;
}
