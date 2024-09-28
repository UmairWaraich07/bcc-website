import { ExclusiveBenefits } from "@/constants";
import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <section className="py-10 sm:py-16 ">
      <div className=" mb-12  text-center ">
        <h2 className="h2-bold">All Exclusive Benefits in One Room.</h2>
      </div>

      {/* List of Benefits */}
      <div className="mt-16 grid w-full grid-cols-1 items-start justify-center gap-4 md:grid-cols-2 md:gap-1 lg:grid-cols-3">
        {ExclusiveBenefits.map((benefit, index) => (
          <div
            key={`benefit-${index}`}
            className="flex size-full flex-col justify-between gap-5 rounded-md bg-[#f2f2f2] "
          >
            {/* benefit content */}
            <div className="bg-grid bg-cover bg-center bg-no-repeat px-3 py-5 ">
              <Image
                src={benefit.icon}
                alt={benefit.heading}
                height={32}
                width={40}
                className="h-[32px] w-auto"
              />
              <h4 className=" mt-8 text-xl font-bold text-heading xl:text-2xl">
                {benefit.heading}
              </h4>
              <p className="mt-4 text-base font-medium">{benefit.subheading}</p>
            </div>

            {/* benefit poster */}
            <div className="overflow-hidden">
              <Image
                src={benefit.image}
                alt={`${benefit.heading}-poster`}
                width={410}
                height={250}
                className="size-full rounded-b-md object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
