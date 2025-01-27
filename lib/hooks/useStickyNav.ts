import { useEffect, useState } from "react";

export function useStickyNav() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Ensure window is defined (client-side only)
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };

      // Set initial state based on scroll position
      handleScroll();

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return isSticky;
}