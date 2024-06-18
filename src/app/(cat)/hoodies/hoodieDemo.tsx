"use client";

import FeaturedBtn from "@/components/FeaturedBtn";
import Filter from "@/components/Filter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  TopwareProducts,
  TopwareProductsForHomePage,
} from "@/components/products/topware";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaAngleDown, FaFilter } from "react-icons/fa";

const HoodieDemo = () => {
  return (
    <MaxWidthWrapper className="mb-10">
      <div className="flex flex-col mx-auto items-center w-full">
        {/* Title */}
        <div className="text-center w-full p-4 text-xl md:text-3xl font-bold ">
          Hoodies
        </div>
        {/* Products  */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-x-5 gap-y-10 md:gap-10 my-10">
          {TopwareProductsForHomePage.map((product, index) => (
            <Link
              href={product.href}
              key={index}
              className="flex flex-col group "
            >
              <img
                src={product.src}
                alt=""
                className="w-[160px] md:w-[250px] h-[220px] md:h-[300px] bg-gray-300 felx items-center justify-center relative object-cover"
              />

              <div className="tracking-wider mt-4 mb-1 flex gap-2 items-center">
                <span>{product.ProductName}</span>
              </div>
              <div className="text-xs tracking-widest">
                Rs. {product.ProductPrice}
              </div>
            </Link>
          ))}
        </div>
        <Link href="/tshirts" className="md:self-start">
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
