import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-body/20">
      <div className="mx-auto w-full max-w-[1440px]  px-5 py-6 sm:px-16 sm:py-16 ">
        <div className="flex w-full items-start justify-start flex-wrap gap-8 lg:gap-16">
          <Logo
            width={65}
            height={68}
            logoTextColor="text-heading"
            logoTextSize="text-4xl"
          />
          {/* Resources */}
          <div>
            <h4 className="font-semibold text-heading mb-6">Resources</h4>
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
            <h4 className="font-semibold text-heading mb-6">Join Chamber</h4>
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
            <h4 className="font-semibold text-heading mb-6">More</h4>
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
            <h4 className="font-semibold text-heading mb-6">Legal</h4>
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
            <h4 className="font-semibold text-heading mb-6">Support</h4>
            <div className="flex flex-col items-start justify-start">
              <p className="text-base">example@bloggerschamberofcommerce.com</p>
              <Link href="login" className="mt-5">
                <Button className="border-2 border-body bg-background px-8 py-3 font-bold text-body hover:border-heading hover:bg-heading hover:text-background">
                  LOGIN
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <p className="font-medium mt-16">
          © {new Date().getFullYear()} Blogger’s Chamber of Commerce.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
