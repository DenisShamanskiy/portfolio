"use client";
import { useState } from "react";
import Image from "next/image";
import HeaderHamburger from "./HeaderHamburger";
import HeaderLinks from "./HeaderLinks";
import logo from "@/app/logo.svg";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`fixed top-0 z-40 mx-auto flex h-16 w-full min-w-[360px] bg-[#eeeeee] font-heading`}
    >
      <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" className="ml-4 h-[50px] w-[50px]" />
        </Link>
        <HeaderHamburger setOpen={setOpen} open={open} />
        <HeaderLinks setOpen={setOpen} open={open} />
      </div>
    </header>
  );
}
