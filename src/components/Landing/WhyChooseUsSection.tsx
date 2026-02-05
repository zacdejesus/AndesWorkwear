import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: "👥",
      title: "Technical Compliance & Quality",
      description:
        "We comply with strict technical production specifications, ensuring durable, high-quality workwear that meets industry standards.",
    },
    {
      icon: "🎧",
      title: "Client-Focused Solutions",
      description:
        "We listen, understand, and deliver reliable solutions tailored to our clients' real operational needs.",
    },
    {
      icon: "💰",
      title: "Fair and Transparent Pricing",
      description:
        "By controlling our production and supply chain, we guarantee fair, transparent pricing without compromising quality.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header with Logo and Title */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="flex-shrink-0">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-700 mb-2">▲</div>
              <h3 className="text-2xl font-bold text-gray-900">ANDES</h3>
              <p className="text-gray-500 tracking-widest">WORKWEAR</p>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white">WHY CHOOSE US?</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>

        {/* Yellow accent bar */}
        <div className="mt-16 h-16 bg-yellow-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;