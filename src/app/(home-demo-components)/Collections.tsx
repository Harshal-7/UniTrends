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

const Collections = () => {
  return (
    <MaxWidthWrapper className="mb-10">
      <div className="flex flex-col mx-auto items-center w-full">
        {/* Title */}
        <div className="text-center w-full p-4 text-3xl md:text-3xl font-bold ">
          Collections
        </div>

        {/* Products  */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-5 md:gap-10 my-10 ">
          {CONFIG.ProductCollection.map((product, index) => (
            <Link
              key={index}
              href={product.href}
              className="flex flex-col group"
            >
              <Product mySrc={product.src} />

              <div className="tracking-wider mt-4 mb-1 flex gap-2 items-center ">
                {product.name}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:scale-125" />
              </div>
            </Link>
          ))}
        </div>

        <Link href="/tshirts" className="md:self-start">
          <Button className="flex gap-2">
            <span>View all</span>
          </Button>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Collections;
