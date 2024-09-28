import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const YourChoice = () => {
  return (
    <section className="mx-auto max-w-6xl py-6 sm:py-16">
      <div className="text-center ">
        <h2 className="h3-bold">
          <span className="font-normal">After all this,</span> you are now left
          with two <br className="hidden sm:inline" /> possible options.
        </h2>
      </div>

      {/* Two choices */}
      <div className="mt-12 flex flex-col items-center justify-center gap-10 md:mt-20 md:flex-row md:items-start md:gap-16">
        {/* Choice 1 */}
        <div className="flex flex-1 flex-col items-center justify-start text-center">
          <div className="mb-8 flex size-12 items-center justify-center rounded-full border-4 border-[#F60000]">
            <span className="text-3xl font-bold text-[#F60000]">1</span>
          </div>
          <p className="max-w-md text-xl sm:text-2xl">
            One who want to do business alone, without a community, and without
            the means to truly make a significant difference in his life and
            business.
          </p>
        </div>
        {/* Choice 2 */}
        <div className="flex flex-1 flex-col items-center justify-start text-center">
          <div className="mb-8 flex size-12 items-center justify-center rounded-full border-4 border-[#0054F6]">
            <span className="text-3xl font-bold text-[#0054F6]">2</span>
          </div>
          <p className="max-w-md text-xl font-bold text-heading sm:text-2xl">
            Or one who understands that no business owner ever succeeded without
            a network and experts.
          </p>
        </div>
      </div>

      {/* CTA */}

      <div className="mt-24 flex flex-col items-center justify-center text-center">
        <h2 className="h3-bold">Which option will you choose?</h2>
        <Link href="#" className="mt-10">
          <Button
            className="flex items-center justify-center gap-2 rounded-none border-x-0 border-b-[3px] border-t-0 border-primary bg-[#F2F2F2]
         text-lg sm:text-xl font-extrabold text-primary transition-all duration-200 hover:gap-4 hover:bg-[#f2f2f2] "
          >
            JOIN THE CHAMBER <MoveRight color="#1179FC" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default YourChoice;
