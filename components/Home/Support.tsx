import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Support = () => {
  return (
    <section className="w-full py-6 sm:py-16 ">
      <div className="h-[500px] w-full rounded-xl bg-heading ">
        <div className=" h-full w-full p-5 flex items-center justify-center flex-col text-center max-w-[597px] mx-auto ">
          {/* support person images */}
          <div className="w-full flex -space-x-4 items-center justify-center">
            <Image
              src="/assets/avatar1.png"
              alt="support-avatar"
              width={48}
              height={48}
            />
            <Image
              src="/assets/avatar2.png"
              alt="support-avatar"
              width={56}
              height={56}
              className="z-10 mb-2"
            />
            <Image
              src="/assets/avatar3.png"
              alt="support-avatar"
              width={48}
              height={48}
            />
          </div>
          <h2 className="mt-6 h2-bold text-white">Still Have Questions?</h2>
          <p className=" mt-8 text-lg sm:text-xl text-[#AEAEAE] font-medium">
            If you still have any questions.{" "}
            <span className="text-white font-bold">
              Our support is active 24/7.
            </span>{" "}
            Send us a message and within few minutes we’ll be in touch with you
            to help you out.
          </p>

          <Link href="#" className="mt-8">
            <Button className="text-white uppercase font-extrabold text-lg sm:text-xl">
              Send us message!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Support;
