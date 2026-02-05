const OurValueSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-lg">[Professional Team Photo]</p>
            </div>
            {/* Yellow accent */}
            <div className="absolute -left-6 bottom-0 w-full h-24 bg-yellow-400 -z-10 rounded-full"></div>
          </div>

          {/* Right Content - Our Value Circle */}
          <div className="relative">
            {/* Our Value Circle */}
            <div className="flex items-center justify-center mb-12">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 border-8 border-yellow-400 rounded-full flex items-center justify-center">
                  <h3 className="text-5xl font-bold text-center text-gray-900">
                    Our
                    <br />
                    Value
                  </h3>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-8">
              {/* Mission */}
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-3">Mission</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To deliver reliable workwear solutions by listening to our clients and meeting their needs with
                  quality, consistency, and trust.
                </p>
              </div>

              {/* Vision */}
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-3">Vision</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become a leading workwear partner in Canada, known for our Peruvian origins, reliable products,
                  and commitment to understanding and supporting our clients' needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValueSection;