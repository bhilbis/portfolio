"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/context/loading-screen";
import { ClientOnly } from "@/lib/isClient";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowContent(true);
        localStorage.setItem("hasVisited", "true");
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, []);

  if (!showContent) return <LoadingScreen />;
  return <ClientOnly>{children}</ClientOnly>
}