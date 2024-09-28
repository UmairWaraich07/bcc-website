import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const HomeCTA = () => {
  return (
    <section className="w-full py-10 sm:py-16 ">
      <div className=" h-[600px] w-full rounded-xl bg-cta bg-cover bg-center bg-no-repeat sm:h-[650px] ">
        <div className=" mx-auto flex size-full max-w-[597px] flex-col items-center justify-center p-5 text-center ">
          <h2 className="h2-bold text-white">
            Become a Member for just $2.65 a day!
          </h2>
          <p className=" mt-8 text-lg font-medium text-white sm:text-xl">
            The price will increase threefold very soon. Hundreds of businesses
            and influencers (free) have already joined Blogger&apos;s Chamber of
            Commerce
          </p>

          <p className="mt-6 text-lg font-bold text-white sm:text-xl">
            Lock in your price now before it increases.
          </p>

          <Link href="#" className="mt-8">
            <Button className="text-lg font-extrabold uppercase text-white sm:text-xl">
              Join the chamber
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
