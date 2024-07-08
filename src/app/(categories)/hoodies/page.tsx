"use client";

import FeaturedBtn from "@/components/FeaturedBtn";
import Filter from "@/components/Filter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TopwareProducts } from "@/components/products/topware";
import { Button } from "@/components/ui/button";
import { CONFIG } from "@/config";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaFilter } from "react-icons/fa";

const Hoodies = () => {
  const [hoodieState, setHoodieState] = useState(CONFIG.Hoodies);
  const [sortCriteria, setSortCriteria] = useState("");

  useEffect(() => {
    let sortedHoodies = [...hoodieState];
    if (sortCriteria === "best selling") {
      // Implement your best selling logic here
    } else if (sortCriteria === "Title: A-Z") {
      sortedHoodies.sort((a, b) => a.ProductName.localeCompare(b.ProductName));
    } else if (sortCriteria === "Title: Z-A") {
      sortedHoodies.sort((a, b) => b.ProductName.localeCompare(a.ProductName));
    } else if (sortCriteria === "Price: low to high") {
      sortedHoodies.sort((a, b) => a.price - b.price);
    } else if (sortCriteria === "Price: high to low") {
      sortedHoodies.sort((a, b) => b.price - a.price);
    }
    setHoodieState(sortedHoodies);
  }, [sortCriteria]);

  return (
    <MaxWidthWrapper className="mb-10">
      <div className="flex flex-col mx-auto items-center w-full">
        {/* filter and sort  */}
        <div className="flex gap-4 mt-20 w-[320px] md:w-full mb-10 justify-end">
          <FeaturedBtn setSortCriteria={setSortCriteria} />
          <Filter />
        </div>

        {/* Products  */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-x-5 gap-y-10 md:gap-10">
          {hoodieState.map((product, index) => (
            <Link
              href={product.href}
              key={index}
              className="flex flex-col group "
            >
              <Image
                src={product.src}
                alt="hoodie.jpg"
                width={250}
                height={300}
                className="w-[160px] md:w-[250px] h-[220px] md:h-[300px] bg-gray-300 felx items-center justify-center relative object-cover"
              />

              <div className="tracking-wider mt-4 mb-1 flex gap-2 items-center">
                <span>{product.ProductName}</span>
                <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100" />
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

export default Hoodies;
