const WhyChooseUsSection = () => {
  const features = [
    {
      icon: "✓",
      title: "Technical Compliance",
      description: "High-quality standards and durable workwear that meets industry specifications.",
    },
    {
      icon: "✓",
      title: "Client-Focused",
      description: "Solutions tailored to your operational needs and challenges.",
    },
    {
      icon: "✓",
      title: "Fair Pricing",
      description: "Transparent, competitive pricing with no hidden costs.",
    },
  ];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#F2F2F2' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#2E2E2E' }}>
          Why Choose <span style={{ color: '#B89A54' }}>Andes</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow">
              <div className="text-3xl font-bold mb-4" style={{ color: '#B89A54' }}>{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E2E2E' }}>{feature.title}</h3>
              <p style={{ color: '#6E6E6E' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;