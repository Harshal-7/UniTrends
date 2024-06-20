"use client";

import {
  TopwareProducts,
  TopwareProductsForHomePage,
} from "@/components/products/topware";

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const myProduct = TopwareProductsForHomePage.find(
    (product) => product.href.split("/")[2] === params.id
  );

  if (!myProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen max-w-7xl m-auto p-6 flex flex-col items-center gap-10 md:gap-14">
      <div className="grid grid-rows-1 lg:grid-cols-3 gap-10 text-4xl">
        {myProduct.ProductName}
      </div>
      <img src={myProduct.src} alt="img" />
    </div>
  );
}
