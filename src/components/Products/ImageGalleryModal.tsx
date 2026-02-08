'use client';

import Image from 'next/image';
import { Product } from '@/types/product';
import Link from 'next/link';

interface ImageGalleryModalProps {
  product: Product;
  currentImageIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}

export default function ImageGalleryModal({
  product,
  currentImageIndex,
  onPrev,
  onNext,
  onClose,
}: ImageGalleryModalProps) {
  const currentImage = product.gallery[currentImageIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative mb-6 aspect-square w-full">
          <Image
            src={currentImage}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onPrev}
            disabled={currentImageIndex === 0}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
          >
            ← Prev
          </button>
          <span className="text-sm text-gray-600">
            {currentImageIndex + 1} / {product.gallery.length}
          </span>
          <button
            onClick={onNext}
            disabled={currentImageIndex === product.gallery.length - 1}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
          >
            Next →
          </button>
        </div>

        {/* Product info */}
        <div className="mb-6 border-t border-gray-200 pt-4">
          <h3 className="mb-2 text-xl font-bold text-gray-800">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>

        {/* Get Quote button */}
        <Link href="/contact">
          <button
            style={{ backgroundColor: '#B89A54' }}
            className="w-full py-3 text-white hover:opacity-90"
          >
            Get a Custom Quote
          </button>
        </Link>
      </div>
    </div>
  );
}
