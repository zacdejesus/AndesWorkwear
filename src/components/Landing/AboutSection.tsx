import SectionTitle from "./SectionTitle";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                ABOUT OUR
                <br />
                <span className="text-blue-900">COMPANY</span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are <span className="font-bold text-gray-900">producers</span> and{" "}
              <span className="font-bold text-gray-900">distributors</span> of high-quality workwear and uniforms, with
              international experience in manufacturing and supply.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With 9 years of <span className="font-bold text-gray-900">experience</span> in the workwear industry, our
              company was established in <span className="font-bold text-gray-900">Peru</span>— a country recognized for
              its reliable, durable, and high-quality materials.
            </p>

            <div className="mt-8 h-2 w-48 bg-black"></div>
          </div>

          {/* Right Logo */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm border-4 border-yellow-500 rounded-3xl p-8 bg-white">
              <div className="text-center">
                {/* Placeholder for Andes Logo */}
                <div className="mb-6">
                  <div className="text-6xl font-bold text-yellow-700 mb-2">▲</div>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">ANDES</h3>
                <p className="text-gray-500 text-lg tracking-widest">WORKWEAR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;