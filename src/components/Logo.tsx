"use client";
import { Menu } from "lucide-react";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
const BrandFont = Pacifico({ subsets: ["latin"], weight: ["400"] });

const Logo = ({ className }: { className: ReactNode }) => {
  return (
    <span className={cn("", BrandFont.className, className)}>UniTrends</span>
  );
};

export default Logo;
