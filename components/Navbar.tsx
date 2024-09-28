import React from "react";
import Logo from "./Logo";
import { NavigationLinks } from "@/constants";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full   border-b border-body/10 bg-white ">
      <div className="mx-auto flex w-full max-w-[1440px] items-center  justify-between  gap-8 p-5 max-sm:py-3 sm:px-16 ">
        <Logo width={55} height={58} />
        <nav className="flex items-center justify-center gap-8 text-base font-semibold max-lg:hidden">
          {NavigationLinks.map((item) => {
            if (item.label === "Influencers") {
              return (
                <span
                  key={item.link}
                  className="cursor-not-allowed text-gray-400"
                  title="Coming soon"
                >
                  {item.label}
                </span>
              );
            }
            return (
              <Link
                key={item.link}
                href={item.link}
                className="hover:text-primary"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/" className="max-lg:hidden">
          <button className="rounded-xl border-2 border-heading bg-background px-8 py-3 font-bold text-heading hover:border-heading hover:bg-heading hover:text-background">
            LOGIN
          </button>
        </Link>

        {/* Mobile Nav */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
