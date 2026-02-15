'use client';

import { Product } from '@/types/product';
import ProductRow from './ProductRow';
import productsData from '@/data/products.json';

export default function ProductsGrid() {
  const products: Product[] = productsData.products;

  return (
    <div className="space-y-12">
      {products.map((product, index) => (
        <ProductRow
          key={product.id}
          product={product}
          reversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
