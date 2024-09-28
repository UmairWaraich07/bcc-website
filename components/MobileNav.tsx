import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { NavigationLinks } from "@/constants";
import Link from "next/link";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu width={32} height={32} color="#1C1D1F" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <div className="flex w-full flex-col items-start justify-start gap-12">
              <Logo />
              <SheetClose asChild>
                <nav className="flex flex-col items-start justify-start gap-6 text-base font-semibold">
                  {NavigationLinks.map((item) => (
                    <SheetClose asChild key={item.link}>
                      <Link
                        key={item.link}
                        href={item.link}
                        className="hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetClose>

              <div className="flex w-full flex-col gap-4">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="w-full text-lg font-extrabold uppercase "
                  >
                    LOGIN
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className="w-full text-lg font-extrabold uppercase">
                    Join the chamber
                  </Button>
                </Link>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
