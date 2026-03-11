'use client';

import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image container */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <Image
          src={product.mainImage}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
          style={{ backgroundColor: '#B89A54' }}
        ></div>
      </div>

      {/* Product info */}
      <div className="p-5">
        <h3
          className="mb-2 text-lg font-bold transition-colors duration-300 group-hover:text-opacity-90"
          style={{ color: '#2E2E2E' }}
        >
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}
