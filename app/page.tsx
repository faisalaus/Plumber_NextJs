import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BlogSection from "@/components/sections/BlogSection";
import LatestProjects from "@/components/sections/LatestProjects";
import AppointmentForm from "@/components/sections/AppointmentForm";
import TestimonialSlider from "@/components/ui/Testimonial";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-10">
      <HeroSection />
      <ServicesSection />
      <LatestProjects />
      <BlogSection />
      <AppointmentForm />
      <TestimonialSlider />
    </main>
  );
}
