import TopBar from "@/components/ui/TopBar";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ServicesBanner from "@/components/sections/ServicesBanner";
import ServicesSection from "@/components/sections/ServicesSection";

export default function ServicesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <ServicesBanner />
      <ServicesSection />
      <Footer />
    </>
  );
}
