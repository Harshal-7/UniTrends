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
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaFilter } from "react-icons/fa";

const Shirts = () => {
  const [ShirtsState, setShirtsState] = useState(CONFIG.Shirts);
  const [sortCriteria, setSortCriteria] = useState("");

  useEffect(() => {
    let sortedShirts = [...ShirtsState];
    if (sortCriteria === "best selling") {
      // Implement your best selling logic here
    } else if (sortCriteria === "Title: A-Z") {
      sortedShirts.sort((a, b) => a.ProductName.localeCompare(b.ProductName));
    } else if (sortCriteria === "Title: Z-A") {
      sortedShirts.sort((a, b) => b.ProductName.localeCompare(a.ProductName));
    } else if (sortCriteria === "Price: low to high") {
      sortedShirts.sort((a, b) => a.price - b.price);
    } else if (sortCriteria === "Price: high to low") {
      sortedShirts.sort((a, b) => b.price - a.price);
    }
    setShirtsState(sortedShirts);
  }, [sortCriteria]);

  return (
    <MaxWidthWrapper className="mb-10">
      <div className="flex flex-col mx-auto items-center w-full">
        {/* Title */}
        <div className="text-center w-full p-4 text-3xl md:text-3xl font-bold">
          Shirts
        </div>

        {/* filter and sort  */}
        <div className="flex gap-4 my-5 w-[320px] md:w-full justify-between">
          <FeaturedBtn setSortCriteria={setSortCriteria} />
          <Filter />
        </div>

        {/* Products  */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-x-5 gap-y-10 md:gap-10">
          {ShirtsState.map((product, index) => (
            <Link
              href={product.href}
              key={index}
              className="flex flex-col group"
            >
              <Product mySrc={product.src} />

              <div className="tracking-wider mt-4 mb-1 flex gap-2 items-center">
                <span>{product.ProductName}</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-500 scale-0 group-hover:scale-100" />{" "}
              </div>
              <div className="text-xs tracking-widest">
                Rs. {product.ProductPrice}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Shirts;
