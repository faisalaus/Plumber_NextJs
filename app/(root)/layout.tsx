import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar"; // Default import for Navbar
import TopBar from "@/components/Topbar"; // Import the TopBar

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
      <div className="flex h-screen flex-col">
        <TopBar /> {/* Add the TopBar here */}
        <Navbar /> {/* Navbar below the TopBar */}
        <main className="flex-1 wrapper">{children}</main>
      </div>
    </ThemeProvider>
  );
}