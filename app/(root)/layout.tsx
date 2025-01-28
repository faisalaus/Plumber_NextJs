import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/Topbar";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import TestimonialSlider from "@/components/ui/Testimonial";
import BlogSection from "@/components/BlogSection";

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
