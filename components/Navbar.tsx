import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { NavigationLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full   border-b border-body/10 bg-white/70 backdrop-blur-md ">
      <div className="mx-auto flex w-full max-w-[1440px] items-center  justify-between  gap-8 p-5 sm:px-16 ">
        <Logo />
        <nav className="flex items-center justify-center gap-8 text-base font-semibold max-lg:hidden">
          {NavigationLinks.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/login" className="max-lg:hidden">
          <Button className="border-2 border-body bg-background px-8 py-3 font-bold text-body hover:border-heading hover:bg-heading hover:text-background">
            LOGIN
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
