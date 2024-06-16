import { auth, signOut } from "@/auth";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Cart = async () => {
  const session = await auth();

  return (
    <MaxWidthWrapper className="flex flex-col gap-20 w-full items-center justify-center mt-16">
      <div className="text-4xl font-semibold">CART</div>
    </MaxWidthWrapper>
  );
};

export default Cart;
