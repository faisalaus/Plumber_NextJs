import { ThemeProvider } from "next-themes";
import Navbar from "@/components/ui/Navbar";
import TopBar from "@/components/ui/TopBar";
import Footer from "@/components/ui/Footer";
import AppointmentForm from "@/components/sections/AppointmentForm";
import TestimonialSlider from "@/components/ui/Testimonial";
import BlogSection from "@/components/sections/BlogSection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <TopBar />
        <Navbar />
        <main className="mt-[96px] flex-1 wrapper">{children}</main>
        <AppointmentForm />
        <TestimonialSlider />
        <BlogSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
