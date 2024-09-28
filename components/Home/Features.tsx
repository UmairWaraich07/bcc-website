import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const Features = () => {
  return (
    <section className="py-6 sm:py-16 ">
      <div className=" text-center  lg:mb-12 ">
        <h2 className="h2-bold">
          Our Chamber + Modern Marketing = Big <br className="max-lg:hidden" />{" "}
          Moneybags in your pocket
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl">
          <span className="font-bold text-heading ">
            Grow, scale and multiply your business
          </span>{" "}
          and revenue with marketing strategies that are as effective as they
          are explosive inside Blogger’s Chamber Of Commerce.
        </p>
      </div>

      {/* Features */}
      <div className="py-6 max-lg:space-y-10 sm:py-16">
        {/* Feature 1 */}
        <div className="flex w-full flex-col-reverse items-center justify-center gap-6 py-6 lg:flex-row lg:gap-12 lg:py-16">
          {/* Feature 1 Content */}
          <div className="w-full flex-1 lg:max-w-screen-sm  ">
            <h2 className="h2-bold">
              Find and Connect with Influencers in one click
            </h2>

            <p className="mt-8 text-base font-bold text-heading sm:text-xl  ">
              Influencers are your Power Players, and every collaboration is a
              strategic win.{" "}
            </p>
            <p className="mt-6 text-base sm:text-xl">
              Find and connect with game-changing influencers based on category,
              and your brand will no longer struggle with promotions, however
              your competitors will.
            </p>

            <p className="mt-6 text-base sm:text-xl">
              This is your smoothest pathway to reaching the highest echelon of
              business success.
            </p>
          </div>

          {/* Feature 1 Image */}
          <div className="flex flex-1 items-center justify-center ">
            <Image
              src="/assets/connect-with-influencers.png"
              alt="connect with influencers"
              width={472}
              height={446}
              className="rounded-xl"
            />
          </div>
        </div>
        {/* Feature 2 */}
        <div className="flex w-full flex-col items-center justify-center gap-6 py-6 lg:flex-row lg:gap-12 lg:py-16">
          {/* Feature 2 Image */}
          <div className="flex flex-1 items-center justify-center">
            <Image
              src="/assets/progini.png"
              alt="progini"
              width={450}
              height={540}
              className="rounded-xl"
            />
          </div>
          {/* Feature 2 Content */}
          <div className="w-full flex-1 lg:max-w-screen-sm  ">
            <h2 className="h2-bold">
              Unlimited Use of AI tools Outperforming Freelancers
            </h2>

            <p className="mt-8 text-base font-bold text-heading sm:text-xl  ">
              Imagine creating a video with just one click in seconds, a sales
              page built in a minute, and no need for expensive freelancers the
              next hour.{" "}
            </p>
            <p className="mt-6 text-base sm:text-xl">
              Unlike other outdated chambers, inside Blogger’s Chamber Of
              Commerce, you’ll gain access to ProGini AI—a modern AI tool that
              provides all the business marketing resources you need.
            </p>

            <p className="mt-6 text-base sm:text-xl">
              Whether you&apos;re creating images, videos, sales pages, ads, or
              smart websites…,{" "}
              <span className="font-bold text-heading">
                you can do it all without spending a penny—at the speed of
                light.
              </span>{" "}
              And that speed is the fundamental principle to sky-rocket a
              business
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex w-full flex-col-reverse items-center justify-center gap-6 py-6 lg:flex-row lg:gap-12 lg:py-16">
          {/* Feature 3 Content */}
          <div className="w-full flex-1 lg:max-w-screen-sm  ">
            <h2 className="h2-bold">
              No Business Owner in History became Exceptional Alone
            </h2>

            <p className="mt-8 text-base sm:text-xl">
              “Your Network Is Your Net Worth.” -{" "}
              <span className="italic">Porter Gale</span>
            </p>

            <p className="mt-6 text-base font-bold text-heading sm:text-xl  ">
              We live in a modern age. Our connections are worth more than
              skyscrapers and network hold more value than centuries.{" "}
            </p>
            <p className="mt-6 text-base sm:text-xl">
              Inside the Blogger’s Chamber of Commerce, you’ll network with
              business owners worth more than ages—those looking to build their
              business empires like you.
            </p>

            <p className="mt-6 text-base sm:text-xl">
              There is no other chamber on the earth with business owners of
              this caliber.
            </p>
          </div>

          {/* Feature 3 Image */}
          <div className="flex flex-1 items-center justify-center">
            <Image
              src="/assets/business.jpg"
              alt="business men sitting around table"
              width={472}
              height={446}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 flex w-full items-center justify-center ">
        <Button
          className="flex items-center justify-center gap-2 rounded-none border-x-0 border-b-[3px] border-t-0 border-primary bg-[#F2F2F2]
         text-lg sm:text-xl font-extrabold text-primary transition-all duration-200 hover:gap-4 hover:bg-[#f2f2f2] "
        >
          JOIN THE CHAMBER <MoveRight color="#1179FC" />
        </Button>
      </div>
    </section>
  );
};

export default Features;
