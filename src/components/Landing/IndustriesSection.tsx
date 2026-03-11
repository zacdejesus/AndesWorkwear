const IndustriesSection = () => {
  const industries = [
    { icon: "🏗", title: "Construction" },
    { icon: "📦", title: "Logistics & Warehousing" },
    { icon: "🧹", title: "Cleaning Services" },
    { icon: "🛡", title: "Security & Operations" },
    { icon: "🏨", title: "Hotels & Restaurants" },
    { icon: "🏥", title: "Healthcare" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#2E2E2E' }}>
          Industries We <span style={{ color: '#B89A54' }}>Serve</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="p-8 rounded-lg text-center hover:shadow-lg transition" style={{ backgroundColor: '#F2F2F2' }}>
              <div className="text-4xl mb-3">{industry.icon}</div>
              <h3 className="text-lg font-semibold" style={{ color: '#2E2E2E' }}>{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;