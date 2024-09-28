import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Support = () => {
  return (
    <section className="w-full py-6 sm:py-16 ">
      <div className="h-[550px] w-full rounded-xl bg-heading ">
        <div className=" mx-auto flex size-full max-w-[597px] flex-col items-center justify-center p-5 text-center ">
          {/* support person images */}
          <div className="flex w-full items-center justify-center -space-x-4">
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
          <h2 className="h2-bold mt-6 text-white">Still Have Questions?</h2>
          <p className=" mt-8 text-lg font-medium text-[#AEAEAE] sm:text-xl">
            If you still have any questions.{" "}
            <span className="font-bold text-white">
              Our support is active 24/7.
            </span>{" "}
            Send us a message and within few minutes we’ll be in touch with you
            to help you out.
          </p>

          <Link href="#" className="mt-8">
            <Button className="text-lg font-extrabold uppercase text-white sm:text-xl">
              Send us message!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Support;
