import TopBar from "@/components/ui/TopBar";
import Navbar from "@/components/ui/Navbar";
import AboutBanner from "@/components/sections/AboutBanner";
import Footer from "@/components/ui/Footer";

import TestimonialSlider from "@/components/ui/Testimonial";

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <AboutBanner />
      <TestimonialSlider />
      <Footer />
    </>
  );
}
