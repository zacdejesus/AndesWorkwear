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
        className="absolute top-8 left-8 w-25 h-25 object-contain"
      />
      <div className="text-center text-white max-w-2xl">
        <div className="mb-8">
          <img
            src="/Imagen1.jpeg"
            alt="Under Construction"
            className="mx-auto w-100 h-100 rounded-full border-1 border-black shadow-lg object-cover"
          />
        </div>
        <h1 className="text-6xl font-extrabold mb-6 animate-pulse">🚧 Under Construction </h1>
        <p className="text-2xl mb-4">We're building something amazing for you.</p>
        <p className="text-lg mb-8">Stay tuned for updates!</p>
      </div>
    </div>
  );
}
