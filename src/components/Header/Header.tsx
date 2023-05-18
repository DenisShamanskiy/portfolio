"use client";
import { useState } from "react";
import HeaderHamburger from "./HeaderHamburger";
import HeaderLinks from "./HeaderLinks";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`fixed top-0 z-50 w-full bg-[#eeeeee] px-4 pb-2 pt-8 transition-all duration-500 xsPlus:h-24 xsPlus:shadow-none lg:px-0 ${
        open ? "h-64 rounded-b-xl shadow-md" : "h-24"
      }`}
    >
      <div className="relative mx-auto flex max-w-5xl">
        <HeaderLinks open={open} />
        <HeaderHamburger setOpen={setOpen} open={open} />
      </div>
    </header>
  );
}
