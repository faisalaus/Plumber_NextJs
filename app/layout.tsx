import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/lib/fontAwesome"; // Adjust the path if necessary
import "@/assets/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/ui/Navbar";
import TopBar from "@/components/ui/TopBar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NHPS Services",
  description: "Your trusted plumbing service provider in Melbourne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
          <TopBar />
          <Navbar />
          <main className="mt-[96px] flex-1 wrapper">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
