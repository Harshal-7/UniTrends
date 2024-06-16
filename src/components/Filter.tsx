"use client";

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

const Filter = () => {
  const [maxPrice, setMaxPrice] = useState(0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex gap-2 justify-center items-center">
          <span>Filter</span>
          <FaFilter className="w-3 h-3" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {/* <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="grid gap-4 mt-14">
          <Accordion type="single" collapsible className="w-full">
            <hr />
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold">
                AVAILABILITY
              </AccordionTrigger>
              <AccordionContent className="flex flex-col justify-center items-start gap-5 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="inStock" />
                  <Label
                    htmlFor="inStock"
                    className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    In stock
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="outOfStock" />
                  <Label
                    htmlFor="outOfStock"
                    className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Out of stock
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-semibold">
                PRICE
              </AccordionTrigger>
              <AccordionContent className="flex flex-col justify-center items-start gap-5 mt-2">
                <div className="flex gap-5">
                  <Input
                    value={0}
                    onChange={(val) => console.log("min-val", val)}
                  />
                  <Input
                    value={maxPrice}
                    onChange={(val) => console.log("min-val", val)}
                  />
                </div>
                <Slider
                  onValueChange={(val) => setMaxPrice(val[0])}
                  max={5000}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <SheetFooter className="mt-5">
          <SheetClose asChild>
            <Button type="submit">Filter</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Filter;
