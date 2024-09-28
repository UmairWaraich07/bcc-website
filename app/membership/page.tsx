import { Support } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PricingDetails } from "@/constants";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const Membership = () => {
  return (
    <div className="mt-[7vh] sm:mt-[10vh] mx-auto max-w-[1440px] px-5 sm:px-16">
      <div className="flex items-center gap-4 sm:gap-6 justify-center text-center flex-col w-full">
        <h1 className="h2-bold">Membership plans</h1>
        <p className=" text-lg sm:text-xl font-medium">
          Simple Membership plans built for businesses. Always know what you’ll
          pay.
        </p>
      </div>

      {/* Pricing section */}
      <div className=" mt-14 lg:mt-28 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 content-center items-start">
        {PricingDetails.map((plan) => (
          <div
            className={`relative p-8 max-w-[450px] mx-auto rounded-xl shadow-md border border-body/20 `}
          >
            {/* Most Popular */}
            {plan.label === "Premium Membership" && (
              <div className="absolute -top-10 shadow-md left-0 right-0 bg-primary text-white rounded-t-2xl flex items-center justify-center p-3">
                <span className="font-semibold">Most popular plan</span>
              </div>
            )}
            <div className="text-center px-4">
              <div className="text-5xl text-heading font-semibold">
                ${plan.price}/yr
              </div>
              <h4 className=" mt-6 text-xl text-heading font-bold">
                {plan.label}
              </h4>
              <p className=" mt-1 font-medium">{plan.description}</p>
            </div>
            <Link href="join">
              <Button className="mt-8 uppercase text-lg sm:text-xl font-extrabold w-full">
                Become a member
              </Button>
            </Link>

            {/* List of features */}
            <ul className=" mt-8 gap-4 flex flex-col items-start justify-start">
              {plan.features.map((feature, index) => (
                <li
                  key={`${plan.label}-feature-${index}`}
                  className="flex items-start justify-start gap-2"
                >
                  {/* <div className="h-6 w-6 rounded-full border-2 flex items-center justify-center border-primary"> */}
                  <Check
                    width={20}
                    height={20}
                    fontWeight="bold"
                    color="#1179FC"
                  />
                  {/* </div> */}

                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-16 pb-10 sm:pt-24 w-full ">
        <Separator className="bg-body/20 h-0.5" />
      </div>

      <Support />
    </div>
  );
};

export default Membership;
