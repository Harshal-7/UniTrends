import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const Tshirts = () => {
  return (
    <MaxWidthWrapper>
      <div className="mt-32">Tshirts</div>
      <div className="w-[300px] h-[600px] bg-black"></div>
      <div className="w-[300px] h-[600px] bg-black"></div>
    </MaxWidthWrapper>
  );
};

export default Tshirts;
