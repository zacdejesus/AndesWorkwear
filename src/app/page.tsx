import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Construction | Andes Workwear",
  description: "This page is currently under construction.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center px-4 relative">
      <img
        src="/logoAndessinfondo.png"
        alt="Andes Logo"
        className="absolute top-4 left-4 sm:top-8 sm:left-8 w-16 h-16 sm:w-24 sm:h-24 object-contain"
      />
      <div className="text-center text-white max-w-2xl w-full">
        <div className="mb-6 sm:mb-8">
          <img
            src="/Imagen1.jpeg"
            alt="Under Construction"
            className="mx-auto w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-black shadow-lg object-cover"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 animate-pulse">🚧 Under Construction</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">We're building something amazing for you.</p>
        <p className="text-base sm:text-lg mb-6 sm:mb-8">Stay tuned for updates!</p>
      </div>
    </div>
  );
}
