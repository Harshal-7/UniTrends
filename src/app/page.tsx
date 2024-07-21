import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import HoodieDemo from "./(home-demo-components)/hoodieDemo";
import Collections from "./(home-demo-components)/Collections";
import ShirtDemo from "./(home-demo-components)/shirtDemo";
const BrandFont = Pacifico({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      {/* Banner */}
      <div className="absolute top-0 left-0 w-full h-screen">
        <div className="absolute inset-0">
          <Image
            src="/banner6.jpg"
            alt="banner"
            fill
            className="hidden md:block object-cover"
          />
          <Image
            src="/banner1.jpg"
            alt="banner"
            fill
            className="block md:hidden object-cover"
          />
          <div
            className={cn(
              "text-white text-5xl md:text-7xl z-30 absolute bottom-24 md:bottom-10 left-1/2 transform -translate-x-1/2 md:left-20 md:-translate-x-0 tracking-widest",
              BrandFont.className
            )}
          >
            UniTrends
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
      {/* Sections */}
      <div className="relative z-10 flex flex-col">
        <ShirtDemo />
        <HoodieDemo />
        <Collections />
      </div>
    </div>
  );
}
