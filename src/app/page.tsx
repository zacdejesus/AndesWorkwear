import { Metadata } from "next";
import AboutSection from "@/components/Landing/AboutSection";
import OurValueSection from "@/components/Landing/OurValueSection";
import WhyChooseUsSection from "@/components/Landing/WhyChooseUsSection";
import IndustriesSection from "@/components/Landing/IndustriesSection";

export const metadata: Metadata = {
  title: "Andes Workwear - Premium Workwear & Uniforms",
  description: "High-quality workwear and uniforms producer with 9 years of international experience.",
};

export default function Home() {
  return (
    <>
      <AboutSection />
      <OurValueSection />
      <WhyChooseUsSection />
      <IndustriesSection />
    </>
  );
}
