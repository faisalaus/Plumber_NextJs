import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/lib/fontAwesome"; // Adjust the path if necessary
import "@/assets/styles/globals.css";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/contants/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}