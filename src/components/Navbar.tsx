"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import useScroll from "@/hooks/useScroll";
import { motion } from "framer-motion";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { navMenuList } from "@/info/navMenuList";

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

const Navbar = ({
  className,
  categoryLayoutSpanClass,
}: {
  className?: string;
  categoryLayoutSpanClass?: string;
}) => {
  const scrollPosition = useScroll();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // for sidebar menu overflow (can not scroll if menu is open)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const isScrolled =
    scrollPosition > 0
      ? "shadow transition-all duration-300 bg-background"
      : "text-white transition-all duration-300";

  const sidebarNavTextUnderline =
    scrollPosition > 0 ? "bg-[#ffffff]" : "bg-[#000000]";

  const isScrolledBackground =
    scrollPosition > 0 ? "bg-[#000000] text-white" : "bg-[#ffffff] text-black";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <ul
      className={cn(
        "w-full flex justify-between items-center p-5 lg:px-20 sticky top-0 z-[9999] overflow-x-hidden",
        isScrolled,
        className
      )}
    >
      {/* hamburger button */}
      <li className="flex gap-4 md:hidden">
        <button onClick={toggleMenu} className="">
          {isMenuOpen ? (
            <X className="w-5 h-5 md:w-6 md:h-6 self-center transition-all duration-300 hover:scale-110" />
          ) : (
            <Menu className="w-5 h-5 md:w-6 md:h-6 self-center transition-all duration-300 hover:scale-110" />
          )}
        </button>
        <User className="w-5 h-5 md:w-6 md:h-6 opacity-0" />
        <User className="w-5 h-5 md:w-6 md:h-6 opacity-0 hidden sm:block" />
      </li>

      {/* LOGO  */}
      <li>
        <Link className={cn(pathname === "/" ? "" : "")} href="/">
          <Logo className="text-xl md:text-2xl transition-all duration-300" />
        </Link>
      </li>

      {/* NAV ITEMS  */}
      <li className="hidden md:flex gap-5">
        {navMenuList.map((_items, index) => (
          <div key={index}>
            <Link
              className={cn(
                "group hover:font-semibold transition-all duration-300 py-2",
                pathname === _items.navHref
                  ? "font-semibold transition-all duration-300"
                  : ""
              )}
              href={_items.navHref}
            >
              {_items.title}
              <span
                className={cn(
                  "block max-w-0 group-hover:max-w-24 transition-all duration-300 h-0.5 ",
                  isScrolledBackground,
                  categoryLayoutSpanClass
                )}
              ></span>
            </Link>
          </div>
        ))}
      </li>

      {/* USER - SEARCH - CART  */}
      <li className="flex gap-4">
        <Link href="/login">
          <User className="w-5 h-5 md:w-6 md:h-6 hidden sm:block transition-all duration-300 hover:scale-110" />
        </Link>
        <Link href="/">
          <Search className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 hover:scale-110" />
        </Link>
        <Link href="/cart">
          <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 hover:scale-110" />
        </Link>
      </li>

      {/* SIDE-NAV  */}
      <motion.div
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.7 }}
        className={cn(
          "block md:hidden fixed top-0 left-0 h-screen w-full bg-white",
          isScrolledBackground
        )}
      >
        <button onClick={toggleMenu}>
          <X className="w-5 h-5 md:w-6 md:h-6 absolute top-5 left-5 md:left-20 transition-all duration-300" />
        </button>
        <div className="absolute flex flex-col top-28 left-10 gap-8 text-xl">
          {navMenuList.map((_items, index) => (
            <div key={index}>
              <button className="p-0 m-0 text-start" onClick={toggleMenu}>
                <Link
                  className={cn(
                    "group hover:font-semibold transition-all duration-500 py-2",
                    pathname === _items.navHref
                      ? "font-semibold transition-all duration-500"
                      : ""
                  )}
                  href={_items.navHref}
                >
                  {_items.title}
                  <span
                    className={cn(
                      "block max-w-0 group-hover:max-w-24 transition-all duration-300 h-0.5 ",
                      sidebarNavTextUnderline,
                      categoryLayoutSpanClass
                    )}
                  ></span>
                </Link>
              </button>
            </div>
          ))}

          <Link
            href="/login"
            className="flex gap-2 justify-center items-center group hover:font-semibold"
          >
            <User className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:scale-110" />
            Account
          </Link>
        </div>
      </motion.div>
    </ul>
  );
};

export default Navbar;
