import ProductsGrid from '@/components/Products/ProductsGrid';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative z-10 overflow-hidden bg-cover bg-center px-4 py-20 sm:px-8 md:py-32"
        style={{
          backgroundImage: 'url(/images/hero/Imagen1.jpeg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="mx-auto max-w-6xl relative z-10">
          <h1
            className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl"
            style={{ color: '#B89A54' }}
          >
            Our Products
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Explore our collection of premium workwear and safety equipment designed for professionals
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 py-16 sm:px-8 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl">
          <ProductsGrid />
        </div>
      </section>
    </main>
  );
}
