import React from "react";
import { Button } from "@/components/ui/button";
import { FlipWords } from "../ui/flip-words";

const HeroSection = () => {
  const words = [
    "Connect with Influencers",
    "Leverage AI Power",
    "Network with Businesses",
  ];
  return (
    <section className="relative flex  items-center justify-center overflow-hidden border-b border-body/20">
      {/* <div className="hero-gradient absolute inset-0 z-0" /> */}

      <div className="relative z-10 mx-auto my-[10vh] max-w-4xl px-5 text-center  ">
        <h1 className="mb-6 text-5xl font-bold !leading-[1.125] text-heading md:text-5xl lg:text-6xl ">
          Supercharge Your Online <br className="max-sm:hidden" /> Growth,{" "}
          <br />
          <FlipWords className="text-center text-primary" words={words} />
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-base font-medium sm:mb-16 sm:text-lg md:text-xl ">
          We help your business to multiply its revenue using One-Step Expansion
          marketing, connecting you with top influencers in your niche and
          providing cutting-edge modern AI tools—all designed to outsmart and
          outperform your competitors.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className=" w-[300px] text-lg font-extrabold uppercase sm:text-xl">
            JOIN AS BUSINESS
          </Button>
          <Button
            variant="outline"
            className=" w-[300px] text-lg font-extrabold uppercase sm:text-xl"
          >
            JOIN AS INFLUENCER
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
