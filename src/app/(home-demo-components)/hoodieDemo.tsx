"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CONFIG } from "@/config";
import Product from "@/components/Product";

const HoodieDemo = () => {
  return (
    <MaxWidthWrapper className="mb-10">
      <div className="flex flex-col mx-auto items-center w-full">
        {/* Title */}
        <div className="text-center w-full p-4 text-2xl md:text-3xl font-bold ">
          Hoodies
        </div>
        {/* Products  */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-x-5 gap-y-10 md:gap-10 mt-5 mb-10">
          {CONFIG.Hoodies.map((product, index) => (
            <Link
              href={product.href}
              key={index}
              className="flex flex-col group"
            >
              <Product mySrc={product.src} />

              <div className="tracking-wider mt-4 mb-1 flex gap-2 items-center group">
                <span>{product.ProductName}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 scale-0 group-hover:scale-100" />
              </div>
              <div className="text-xs tracking-widest">
                Rs. {product.ProductPrice}
              </div>
            </Link>
          ))}
        </div>
        <Link href="/hoodies" className="md:self-start">
          <Button className="flex gap-2">
            <span>View all</span>
            <ArrowRight className="w-4 h-4" />{" "}
          </Button>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default HoodieDemo;
