"use client";

import { CONFIG } from "@/config";
import Image from "next/image";

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const myProduct = CONFIG.Hoodies.find(
    (product) => product.href.split("/")[2] === params.id
  );

  if (!myProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen max-w-7xl m-auto p-6 flex flex-col items-center gap-10 md:gap-14 relatives">
      <div className="text-4xl ">{myProduct.ProductName}</div>

      <div className="w-[600px] h-[600px] relative">
        <Image
          src={myProduct.src}
          alt="hoodie.jpg"
          fill
          className="object-cover absolute top-0 left-0"
        />
      </div>
    </div>
  );
}
