'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/types/product';

interface ProductRowProps {
  product: Product;
  reversed?: boolean;
}

export default function ProductRow({ product, reversed = false }: ProductRowProps) {
  const images = product.gallery.length > 0 ? product.gallery : [product.mainImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
      {/* Image Carousel */}
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5] ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`${product.name} ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ objectPosition: 'center 30%' }}
          />
        ))}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
              aria-label="Previous image"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
              aria-label="Next image"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-6 bg-[#B89A54]'
                      : 'w-2 bg-white/60 hover:bg-white/90'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Gold overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none"
          style={{ backgroundColor: '#B89A54' }}
        />
      </div>

      {/* Content */}
      <div
        className={`flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 ${
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
