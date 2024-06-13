import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const Tshirts = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="text-xl md:text-3xl font-semibold">T-Shirts</div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Tshirts;
