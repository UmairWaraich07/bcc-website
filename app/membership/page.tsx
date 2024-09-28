import { Support } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PricingDetails } from "@/constants";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const Membership = () => {
  return (
    <div className="mx-auto mt-[7vh] max-w-[1440px] px-5 sm:mt-[10vh] sm:px-16">
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center sm:gap-6">
        <h1 className="h2-bold">Membership plans</h1>
        <p className=" text-lg font-medium sm:text-xl">
          Simple Membership plans built for businesses. Always know what you’ll
          pay.
        </p>
      </div>

      {/* Pricing section */}
      <div className=" mt-14 grid w-full grid-cols-1 content-center items-start gap-16 md:grid-cols-2 md:gap-8 lg:mt-28 lg:grid-cols-3">
        {PricingDetails.map((plan) => (
          <div
            key={plan.price}
            className={`relative mx-auto  ${plan.label === "Elite Membership" && "max-sm:-mt-10"} max-w-[450px] rounded-xl ${plan.label === "Premium Membership" && "bg-primary/5"} border border-body/20 p-8 shadow-md `}
          >
            {/* Most Popular */}
            {plan.label === "Premium Membership" && (
              <div className="absolute inset-x-0 -top-10 flex items-center justify-center rounded-t-2xl bg-primary p-3 text-white shadow-md">
                <span className="font-semibold">Most popular plan</span>
              </div>
            )}
            <div className="text-center md:px-4">
              <div className="text-5xl font-semibold text-heading">
                ${plan.price}
                <span className="text-xl">/yr</span>
              </div>
              <h4 className=" mt-6 text-xl font-bold text-heading">
                {plan.label}
              </h4>
              <p className=" mt-1 font-medium">
                &quot;{plan.description}&quot;
              </p>
            </div>
            <Link href="join">
              <Button className="mt-8 w-full text-lg font-extrabold uppercase sm:text-xl">
                Become a member
              </Button>
            </Link>

            {/* List of features */}
            <ul className=" mt-8 flex flex-col items-start justify-start gap-4">
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

                  <p className="font-medium">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="w-full pb-10 pt-16 sm:pt-24 ">
        <Separator className="h-0.5 bg-body/20" />
      </div>

      <Support />
    </div>
  );
};

export default Membership;
