import Link from 'next/link';
import ProductsGrid from '@/components/Products/ProductsGrid';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative z-10 overflow-hidden px-4 py-20 sm:px-8 md:py-32"
        style={{ backgroundColor: '#1d2430' }}
      >
        <div className="mx-auto max-w-6xl relative z-10">
          <h1
            className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl"
            style={{ color: '#B89A54' }}
          >
            Our Products
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Ask for custom orders. 
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ backgroundColor: '#2E2E2E' }}>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {[
              { value: '9+', label: 'Years of Experience' },
              { value: '100%', label: 'Custom Branding' },
              { value: '24/7', label: 'Dedicated Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p
                  className="text-2xl font-bold md:text-3xl"
                  style={{ color: '#B89A54' }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-1 text-xs tracking-wide uppercase md:text-sm"
                  style={{ color: '#F2F2F2' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="px-4 py-16 sm:px-8 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          {/* Section Title */}
          <div className="mb-14 text-center">
            <h2
              className="mb-4 text-3xl font-bold md:text-4xl"
              style={{ color: '#2E2E2E' }}
            >
              Professional Workwear{' '}
              <span style={{ color: '#B89A54' }}>Solutions</span>
            </h2>
            <div
              className="mx-auto mb-6 h-1 w-20"
              style={{ backgroundColor: '#B89A54' }}
            />
            <p
              className="mx-auto max-w-2xl text-base md:text-lg"
              style={{ color: '#6E6E6E' }}
            >
              Discover our curated selection of durable, high-quality workwear — designed
              to keep your team safe, comfortable, and looking professional.
            </p>
          </div>

          <ProductsGrid />
        </div>
      </section>

      {/* Closing CTA Section */}
      <section
        className="relative py-16 md:py-24 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/images/products/imagen3.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Let’s work together.
          </h2>
          <p
            className="mb-10 text-lg md:text-xl"
            style={{ color: '#F2F2F2' }}
          >
            Get in touch for custom quotes, bulk orders, and branding options tailored to your business.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded px-8 py-4 font-bold transition hover:opacity-90"
              style={{ backgroundColor: '#B89A54', color: '#2E2E2E' }}
            >
              Get a Custom Quote
            </Link>
            <a
              href="https://wa.me/+13683384802"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded border-2 px-8 py-4 font-bold text-white transition hover:opacity-90"
              style={{ borderColor: '#B89A54' }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
