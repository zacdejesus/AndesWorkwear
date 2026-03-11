import { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/Landing/AboutSection";
import WhyChooseUsSection from "@/components/Landing/WhyChooseUsSection";
import IndustriesSection from "@/components/Landing/IndustriesSection";
import CTASection from "@/components/Landing/CTASection";

export const metadata: Metadata = {
  title: "Andes Workwear - Premium Workwear & Uniforms",
  description: "High-quality workwear and uniforms producer with 9 years of international experience.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
