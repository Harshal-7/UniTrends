import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const ContactPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="mt-32 w-full flex justify-center items-center">
        contact at :{" "}
        <span className="underline underline-offset-4">
          {" "}
          unitrends@gmail.com
        </span>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactPage;
