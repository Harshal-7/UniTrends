"use client";

import FeaturedBtn from "@/components/FeaturedBtn";
import Filter from "@/components/Filter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaAngleDown, FaFilter } from "react-icons/fa";

const Shorts = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col mx-auto items-center w-full">
        {/* filter and sort  */}
        <div className="flex gap-4 mt-20 w-[320px] md:w-full mb-10 justify-end">
          <FeaturedBtn />
          <Filter />
        </div>

        {/* Products  */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-x-5 gap-y-10 md:gap-10">
          <div className="flex flex-col">
            <div className="w-[160px] md:w-[250px] h-[220px] md:h-[300px] bg-gray-300 felx items-center justify-center relative"></div>
            <div className="tracking-wider mt-4 mb-1">Symposium Tee</div>
            <div className="text-xs tracking-widest">Rs. 2,190.00</div>
          </div>
          <div className="flex flex-col">
            <div className="w-[160px] md:w-[250px] h-[220px] md:h-[300px] bg-gray-300 felx items-center justify-center relative"></div>
            <div className="tracking-wider mt-4 mb-1">Symposium Tee</div>
            <div className="text-xs tracking-widest">Rs. 2,190.00</div>
          </div>
          <div className="flex flex-col">
            <div className="w-[160px] md:w-[250px] h-[220px] md:h-[300px] bg-gray-300 felx items-center justify-center relative"></div>
            <div className="tracking-wider mt-4 mb-1">Symposium Tee</div>
            <div className="text-xs tracking-widest">Rs. 2,190.00</div>
          </div>
          <div className="flex flex-col">
            <div className="w-[160px] md:w-[250px] h-[220px] md:h-[300px] bg-gray-300 felx items-center justify-center relative"></div>
            <div className="tracking-wider mt-4 mb-1">Symposium Tee</div>
            <div className="text-xs tracking-widest">Rs. 2,190.00</div>
          </div>
          <div className="flex flex-col">
            <div className="w-[160px] md:w-[250px] h-[220px] md:h-[300px] bg-gray-300 felx items-center justify-center relative"></div>
            <div className="tracking-wider mt-4 mb-1">Symposium Tee</div>
            <div className="text-xs tracking-widest">Rs. 2,190.00</div>
          </div>
          <div className="flex flex-col">
            <div className="w-[160px] md:w-[250px] h-[220px] md:h-[300px] bg-gray-300 felx items-center justify-center relative"></div>
            <div className="tracking-wider mt-4 mb-1">Symposium Tee</div>
            <div className="text-xs tracking-widest">Rs. 2,190.00</div>
          </div>{" "}
          <div className="flex flex-col">
            <div className="w-[160px] md:w-[250px] h-[220px] md:h-[300px] bg-gray-300 felx items-center justify-center relative"></div>
            <div className="tracking-wider mt-4 mb-1">Symposium Tee</div>
            <div className="text-xs tracking-widest">Rs. 2,190.00</div>
          </div>{" "}
          <div className="flex flex-col">
            <div className="w-[160px] md:w-[250px] h-[220px] md:h-[300px] bg-gray-300 felx items-center justify-center relative"></div>
            <div className="tracking-wider mt-4 mb-1">Symposium Tee</div>
            <div className="text-xs tracking-widest">Rs. 2,190.00</div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Shorts;
