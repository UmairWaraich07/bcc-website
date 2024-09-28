import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex  items-center justify-center overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0" />
      <div className="relative z-10 mx-auto mb-[5vh] mt-[10vh] max-w-4xl px-5 py-6 text-center sm:p-16 ">
        <h1 className="mb-6 text-3xl font-bold !leading-[1.125] text-heading sm:text-4xl md:text-5xl lg:text-6xl ">
          Supercharge Your Online <br className="max-sm:hidden" /> Growth,
          Connect with <br className="max-sm:hidden" /> Influencers & Leverage
          AI
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-base font-medium sm:mb-16 sm:text-lg md:text-xl ">
          We help your business to multiply its revenue using One-Step Expansion
          marketing, connecting you with top influencers in your niche and
          providing cutting-edge modern AI tools—all designed to outsmart and
          outperform your competitors.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className=" text-lg sm:text-xl uppercase w-[300px] font-extrabold">
            JOIN AS BUSINESS
          </Button>
          <Button
            variant="outline"
            className=" text-lg sm:text-xl uppercase w-[300px] font-extrabold"
          >
            JOIN AS INFLUENCER
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
