"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectIcon } from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";

const FeaturedBtn = ({ setSortCriteria }: { setSortCriteria: any }) => {
  const handleChange = (value: any) => {
    setSortCriteria(value);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="px-4 flex justify-center items-center border rounded-sm text-sm font-medium w-42">
        <SelectValue placeholder="Sort" />
        <SelectIcon className="SelectIcon">
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent className="z-[99999]">
        <SelectGroup>
          <SelectItem value="best selling">Best Selling</SelectItem>
          <SelectItem value="Title: A-Z">Title: A-Z</SelectItem>
          <SelectItem value="Title: Z-A">Title: Z-A</SelectItem>
          <SelectItem value="Price: low to high" className="flex gap-1">
            Price: low to high
          </SelectItem>
          <SelectItem value="Price: high to low">Price: high to low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FeaturedBtn;
