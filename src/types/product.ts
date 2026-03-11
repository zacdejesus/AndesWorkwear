export interface Product {
  id: number;
  name: string;
  description: string;
  mainImage: string;
  gallery: string[];
  features?: string[];
}
