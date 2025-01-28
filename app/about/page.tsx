import TopBar from "@/components/ui/TopBar";
import Navbar from "@/components/ui/Navbar";
import AboutBanner from "@/components/sections/AboutBanner";
import AboutContent from "@/components/sections/AboutContent";
import Footer from "@/components/ui/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialSlider from "@/components/ui/Testimonial";

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <AboutBanner />
      <AboutContent />
      <ServicesSection />
      <TestimonialSlider />
      <Footer />
    </>
  );
}
