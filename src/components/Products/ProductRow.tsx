'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductRowProps {
  product: Product;
  reversed?: boolean;
}

export default function ProductRow({ product, reversed = false }: ProductRowProps) {
  return (
    <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
      {/* Image */}
      <div
        className={`relative aspect-[16/9] lg:aspect-auto w-full overflow-hidden bg-gray-100 ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <Image
          src={product.mainImage}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gold overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
          style={{ backgroundColor: '#B89A54' }}
        />
      </div>

      {/* Content */}
      <div
        className={`flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 ${
          reversed ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        {/* Gold accent line */}
        <div className="mb-4 h-1 w-16" style={{ backgroundColor: '#B89A54' }} />

        <h3
          className="mb-4 text-2xl font-bold md:text-3xl"
          style={{ color: '#2E2E2E' }}
        >
          {product.name}
        </h3>

        <p className="mb-6 text-base leading-relaxed md:text-lg" style={{ color: '#6E6E6E' }}>
          {product.description}
        </p>

        {/* Features list (if available) */}
        {product.features && product.features.length > 0 && (
          <ul className="mb-8 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm md:text-base" style={{ color: '#6E6E6E' }}>
                <span className="mr-3 text-xs" style={{ color: '#B89A54' }}>●</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        <div>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-sm font-semibold tracking-wide text-white transition-opacity duration-300 hover:opacity-90"
            style={{ backgroundColor: '#B89A54' }}
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
