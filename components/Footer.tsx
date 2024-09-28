import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-body/20">
      <div className="mx-auto w-full max-w-[1440px]  px-5 py-6 sm:p-16 ">
        <div className="flex w-full flex-wrap items-start justify-start gap-8 lg:gap-16">
          <Logo width={65} height={68} logoTextSize="text-4xl" />
          {/* Resources */}
          <div>
            <h4 className="mb-6 font-semibold text-heading">Resources</h4>
            <div className="flex flex-col items-start justify-start gap-4">
              <Link href="about" className="hover:underline">
                About
              </Link>
              <Link href="membership" className="hover:underline">
                Membership
              </Link>
              <Link href="influencers" className="hover:underline">
                Influencers
              </Link>
              <Link href="reach-us" className="hover:underline">
                Reach Us
              </Link>
            </div>
          </div>
          {/* Join Chamber */}
          <div>
            <h4 className="mb-6 font-semibold text-heading">Join Chamber</h4>
            <div className="flex flex-col items-start justify-start gap-4">
              <Link href="join" className="hover:underline">
                Join as Business
              </Link>
              <Link href="join" className="hover:underline">
                Join as Influencer
              </Link>
            </div>
          </div>
          {/* More */}
          <div>
            <h4 className="mb-6 font-semibold text-heading">More</h4>
            <div className="flex flex-col items-start justify-start gap-4">
              <Link href="join" className="hover:underline">
                Progini AI
              </Link>
              <Link href="join" className="hover:underline">
                Miss Meta Universe
              </Link>
            </div>
          </div>
          {/* Legal */}
          <div>
            <h4 className="mb-6 font-semibold text-heading">Legal</h4>
            <div className="flex flex-col items-start justify-start gap-4">
              <Link href="join" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="join" className="hover:underline">
                Terms & Conditions
              </Link>
            </div>
          </div>
          {/* Support */}
          <div className="">
            <h4 className="mb-6 font-semibold text-heading">Support</h4>
            <div className="flex flex-col items-start justify-start">
              <p className="text-base">example@bloggerschamberofcommerce.com</p>
              <Link href="" className="mt-5">
                <Button className="border-2 border-body bg-background px-8 py-3 font-bold text-body hover:border-heading hover:bg-heading hover:text-background">
                  LOGIN
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-16 font-medium">
          © {new Date().getFullYear()} Blogger’s Chamber of Commerce.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
