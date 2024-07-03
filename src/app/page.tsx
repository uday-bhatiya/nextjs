import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedSection from "./components/FeaturedSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedSection/>
      <WhyChooseUsSection/>
      <TestimonialSection />
    </main>
  );
}
