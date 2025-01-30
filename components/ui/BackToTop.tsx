"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Import an icon

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-teal-600 text-white shadow-lg transition-all ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <ArrowUp size={24} />
    </button>
  );
}
