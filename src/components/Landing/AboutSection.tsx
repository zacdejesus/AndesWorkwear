const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2E2E2E' }}>
              About<br />
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
            <div className="w-full max-w-sm border-4 p-8 rounded-lg" style={{ borderColor: '#B89A54', backgroundColor: '#F2F2F2' }}>
              <div className="text-center">
                <div className="text-6xl font-bold mb-3" style={{ color: '#B89A54' }}>▲</div>
                <h3 className="text-4xl font-bold mb-1" style={{ color: '#2E2E2E' }}>ANDES</h3>
                <p className="tracking-widest text-sm" style={{ color: '#6E6E6E' }}>WORKWEAR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;