'use client';

import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import productsData from '@/data/products.json';

export default function ProductsGrid() {
  const products: Product[] = productsData.products;

  return (
    <>
      <div className="mb-8">
        <p className="text-gray-600 text-center">
          Discover our curated selection of professional workwear solutions
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
