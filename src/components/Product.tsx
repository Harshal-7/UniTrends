"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const Product = ({
  mySrc,
  className,
  divClassName,
}: {
  mySrc: string;
  className?: string;
  divClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-[160px] md:w-[250px] h-[220px] md:h-[300px] overflow-hidden group rounded-md",
        divClassName
      )}
    >
      <Image
        fill
        alt="img"
        src={mySrc}
        className={cn(
          "w-full h-full object-cover transition-transform duration-300 hover:scale-110",
          className
        )}
      />
    </div>
  );
};

export default Product;
