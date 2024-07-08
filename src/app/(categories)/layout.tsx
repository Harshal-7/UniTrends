"use client";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar
        className="text-black transition-none"
        categoryLayoutSpanClass="bg-[#000000] text-sm"
      />
      {children}
    </>
  );
}
