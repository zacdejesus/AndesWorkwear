const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2E2E2E' }}>
              
              <span style={{ color: '#B89A54' }}>Andes Workwear</span>
            </h2>

            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#6E6E6E' }}>
              Producers and distributors of <span className="font-semibold" style={{ color: '#2E2E2E' }}>high-quality workwear</span> with 9 years of experience in manufacturing and supply.
            </p>

            <p className="text-lg leading-relaxed" style={{ color: '#6E6E6E' }}>
              Founded in Peru, we're committed to delivering durable uniforms and protective gear for every industry, with transparency and reliability.
            </p>

            <div className="mt-8 h-1 w-32" style={{ backgroundColor: '#B89A54' }}></div>
          </div>

          {/* Right Logo */}
          <div className="flex items-center justify-center">
                <img
                  src="/images/hero/logoAndes.png"
                  alt="Andes Workwear Logo"
                  className="h-64 w-auto object-contain rounded-full border-4"
                  style={{ borderColor: '#B89A54' }}
                />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;