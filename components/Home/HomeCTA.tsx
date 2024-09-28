import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const HomeCTA = () => {
  return (
    <section className="w-full py-6 sm:py-16 ">
      <div className=" h-[550px] sm:h-[650px] w-full rounded-xl bg-cta bg-cover bg-center bg-no-repeat ">
        <div className=" h-full w-full p-5 flex items-center justify-center flex-col text-center max-w-[597px] mx-auto ">
          <h2 className="h2-bold text-white">
            Become a Member for just $2.65 a day!
          </h2>
          <p className=" mt-8 text-lg sm:text-xl text-white font-medium">
            The price will increase threefold very soon. Hundreds of businesses
            and influencers (free) have already joined Blogger&apos;s Chamber of
            Commerce
          </p>

          <p className="mt-6 text-white text-lg sm:text-xl font-bold">
            Lock in your price now before it increases.
          </p>

          <Link href="#" className="mt-8">
            <Button className="text-white uppercase font-extrabold text-lg sm:text-xl">
              Join the chamber
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
