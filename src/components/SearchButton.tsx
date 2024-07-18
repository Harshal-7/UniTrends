import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FaFilter } from "react-icons/fa";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { useEffect, useState } from "react";

export function SearchButton() {
  const [productName, setProductName] = useState("");

  const searchBtn = () => {
    console.log("PRODUCT NAME : ", productName);
    setProductName("");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Search className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 hover:scale-110" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {/* <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription> */}
        </SheetHeader>
        <div className="flex flex-col gap-10 mt-14">
          <hr />
          <div className="text-2xl">Search Product</div>
          <div className="flex justify-between">
            <Input
              className="w-[220px] h-[50px] text-xl"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />

            <SheetClose asChild>
              <button
                onClick={searchBtn}
                className="mr-5 bg-black text-white px-4"
              >
                GO
              </button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
