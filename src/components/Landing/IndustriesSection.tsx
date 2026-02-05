import SectionTitle from "./SectionTitle";
import IndustryCard from "./IndustryCard";

const IndustriesSection = () => {
  const industries = [
    { icon: "🚧", title: "Construction" },
    { icon: "🚚", title: "Logistics & Warehousing" },
    { icon: "💧", title: "Cleaning Services" },
    { icon: "🛡️", title: "Security & Operations" },
    { icon: "⭐", title: "Hotels & Restaurants" },
    { icon: "🏥", title: "Healthcare" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            {/* Accent dots */}
            <div className="flex flex-col gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-400"></div>
              <div className="w-4 h-4 rounded-full bg-gray-400"></div>
              <div className="w-4 h-4 rounded-full bg-gray-400"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900">INDUSTRIES WE SERVE</h2>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <IndustryCard key={index} icon={industry.icon} title={industry.title} />
          ))}
        </div>

        {/* Yellow accent bar */}
        <div className="h-12 bg-yellow-400 rounded-full"></div>

        {/* Accent dots right */}
        <div className="flex flex-col gap-2 ml-auto w-fit mt-8">
          <div className="w-4 h-4 rounded-full bg-red-300"></div>
          <div className="w-4 h-4 rounded-full bg-red-300"></div>
          <div className="w-4 h-4 rounded-full bg-red-300"></div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;