"use client";

import { CONFIG } from "@/config";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const myProduct = CONFIG.Shirts.find(
    (product) => product.href.split("/")[2] === params.id
  );

  if (!myProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen max-w-7xl m-auto p-6 flex flex-col items-center gap-10 md:gap-14 relatives">
      <div className="text-4xl ">{myProduct.ProductName}</div>

      <Image
        src={myProduct.src}
        alt="hoodie.jpg"
        width={600}
        height={600}
        className=" bg-gray-300 felx items-center justify-center relative object-cover"
      />
    </div>
  );
}
