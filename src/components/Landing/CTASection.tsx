import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#2E2E2E' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to equip your team?
        </h2>
        <p className="text-xl mb-10" style={{ color: '#F2F2F2' }}>
          Contact us today for a custom quote
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 rounded font-bold transition hover:opacity-90"
          style={{ backgroundColor: '#B89A54', color: '#2E2E2E' }}
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
