"use client";

import FeaturedBtn from "@/components/FeaturedBtn";
import Filter from "@/components/Filter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import { CONFIG } from "@/config";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleDown, FaFilter } from "react-icons/fa";

const ShirtDemo = () => {
  return (
    <MaxWidthWrapper className="mb-10">
      <div className="flex flex-col mx-auto items-center w-full">
        {/* Title */}
        <div className="text-center w-full p-4 text-3xl md:text-3xl font-bold ">
          Shirts
        </div>

        {/* Products  */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-x-5 gap-y-10 md:gap-10 mt-5 mb-10">
          {CONFIG.Shirts.map((product, index) => (
            <Link
              href={product.href}
              key={index}
              className="flex flex-col group"
            >
              <Product mySrc={product.src} />

              <div className="tracking-wider mt-4 mb-1 flex gap-2 items-center group">
                <span>{product.ProductName}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="text-xs tracking-widest">
                Rs. {product.ProductPrice}
              </div>
            </Link>
          ))}
        </div>

        <Link href="/shirts" className="md:self-start">
          <Button variant="outline" className="flex gap-2">
            <span>View all</span>
            <ArrowRight className="w-4 h-4" />{" "}
          </Button>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default ShirtDemo;
