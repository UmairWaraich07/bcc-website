import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="mx-auto mt-[7vh] max-w-[1440px] px-5 sm:mt-[10vh] sm:px-16">
      <div className="mx-auto flex w-full max-w-[750px] flex-col items-center justify-center gap-0 text-center sm:gap-6 ">
        <h1 className="h2-bold !leading-tight">
          The Wake-Up Call That Revolutionized Business Growth
        </h1>
        <div className="mt-8 text-center text-lg sm:text-2xl ">
          <p className="font-bold">Let me paint you a picture of mediocrity.</p>
          <p className="mt-6">
            It&apso;s 2019, and I&apso;m Rick Hamadeh, sitting in yet another
            mind-numbing chamber of commerce meeting. Stale donuts, lukewarm
            coffee, and a room full of &quot;businessmen&quot; patting each
            other on the back for barely staying afloat.
          </p>

          <p className="mt-6">
            I looked around and thought,{" "}
            <span className="font-bold">
              &quot;Is this what success looks like? Is this the best the
              business world has to offer?&quot;
            </span>
          </p>

          <p className="mt-6 font-bold text-heading">Hell no.</p>
        </div>
      </div>

      <div className="py-6 max-lg:space-y-10 sm:py-16">
        {/* Section 1 */}
        <div className="flex w-full flex-col-reverse items-center justify-center gap-6 py-6 lg:flex-row lg:gap-12 lg:py-16">
          {/* Section 1 Content */}
          <div className="w-full flex-1 lg:max-w-screen-sm  ">
            <h2 className="h2-bold">The Birth of a Revolution</h2>

            <p className="mt-8 text-lg sm:text-2xl  ">
              The Blogger&apso;s Chamber of Commerce wasn&apso;t born that day –
              it was forged in the fires of frustration and ambition.{" "}
            </p>
            <p className="mt-6 text-lg sm:text-2xl">
              <span className="font-bold text-heading">
                Here&apso;s the cold, hard truth:
              </span>{" "}
              The business world is a war zone. Every day you&apso;re not
              growing, you&apso;re dying. Every moment you waste on outdated
              networking techniques is a moment your competition is leaving you
              in the dust.
            </p>
          </div>

          {/* Section 1 Image */}
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

        {/* Section 2 */}
        <div className="flex w-full flex-col items-center justify-center gap-6 py-6 lg:flex-row lg:gap-12 lg:py-16">
          {/* Section 2 Image */}
          <div className="flex flex-1 items-center justify-center">
            <Image
              src="/assets/progini.png"
              alt="progini"
              width={450}
              height={540}
              className="rounded-xl"
            />
          </div>
          {/* Section 2 Content */}
          <div className="w-full flex-1 lg:max-w-screen-sm  ">
            <h2 className="h2-bold">The BCC Difference</h2>

            <p className="mt-8 text-lg sm:text-2xl  ">
              You see, success leaves clues. And the clue I&apso;m giving you is
              this:{" "}
              <span className="font-bold text-heading">
                Join BCC or get left behind.
              </span>
            </p>
            <p className="mt-6 text-lg sm:text-2xl">
              We&apso;re not here to hold your hand.
            </p>

            <p className="mt-6 text-lg sm:text-2xl">
              We&apso;re here to strap a rocket to your back and launch you into
              the stratosphere of success.
            </p>
            <p className="mt-6 text-lg sm:text-2xl">
              <span className="font-bold text-heading">Our members?</span>{" "}
              They&apso;re not just business owners. They&apso;re the apex
              predators of the digital jungle
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[750px] flex-col items-center justify-center gap-0 text-center sm:gap-6 ">
        <h2 className="h2-bold !leading-tight">The Choice Is Yours</h2>
        <div className="mt-8 text-center text-lg sm:text-2xl ">
          <p className="">
            Every day, I see businesses join BCC and within months, they&apso;re
            unrecognizable. They walk differently. Talk differently. Their bank
            accounts? Let&apso;s just say they need bigger vaults.
          </p>
          <p className="mt-7">
            <span className="font-bold">So here&apso;s the deal.</span> You can
            stay in your current position, attend those coffee meetups, and
            wonder why your business isn&apso;t growing. Or you can join BCC,
            tap into the power of AI, leverage influencer networks that took us
            years to build, and watch your empire rise
          </p>

          <p className="mt-7">
            The choice is yours. But remember this: In five years, you&apso;ll
            either be grateful you joined BCC, or you&apso;ll wish you had.
          </p>

          <p className="mt-7 font-bold">
            Time never stops and never comes again. A revolution waits for no
            one. It’s time to decide.
          </p>
        </div>
      </div>

      <div className=" mt-10 flex w-full flex-col items-center justify-center py-6 sm:py-16">
        <h2 className="h3-bold ">Are you in, or are you out?</h2>
        <Link href="/join">
          <Button className=" mt-10 text-lg font-extrabold uppercase sm:text-xl">
            Join the chamber
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
