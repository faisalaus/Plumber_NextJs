import ContactBanner from "@/components/sections/ContactBanner";
import AppointmentForm from "@/components/sections/AppointmentForm";
import ContactSection from "@/components/ui/ContactSection";

export default function ContactPage() {
  return (
    <>
      <ContactBanner />
      <ContactSection />
      <AppointmentForm lightBackground={true} />
    </>
  );
}
