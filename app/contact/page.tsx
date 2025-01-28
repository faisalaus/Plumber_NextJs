import TopBar from "@/components/ui/TopBar";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ContactBanner from "@/components/sections/ContactBanner";
import AppointmentForm from "@/components/sections/AppointmentForm";
import ContactSection from "@/components/ui/ContactSection";

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Banner Section */}
      <ContactBanner />

      {/* Contact Details (Address, Email, Phone) ABOVE the form */}
      <ContactSection />

      {/* Appointment Form */}
      <AppointmentForm lightBackground={true} />
      <Footer />
    </>
  );
}
