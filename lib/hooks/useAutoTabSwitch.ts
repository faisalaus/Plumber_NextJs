"use client";
import { useState, useEffect } from "react";

const useAutoTabSwitch = (totalTabs: number, intervalTime: number = 3000) => {
  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const nextTab = (parseInt(prevTab, 10) % totalTabs) + 1;
        return nextTab.toString();
      });
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalTabs, intervalTime]);

  return { activeTab, setActiveTab };
};

export default useAutoTabSwitch;