import { auth, signOut } from "@/auth";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Dashboard = async () => {
  const session = await auth();

  return (
    <MaxWidthWrapper className="flex flex-col gap-20 w-full items-center justify-center mt-16">
      <div className="text-4xl font-semibold">Dashboard</div>

      <p className="break-all text-xs md:text-base px-4">
        {JSON.stringify(session)}
      </p>

      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button variant="default" type="submit">
          Sign Out
        </Button>
      </form>
    </MaxWidthWrapper>
  );
};

export default Dashboard;
