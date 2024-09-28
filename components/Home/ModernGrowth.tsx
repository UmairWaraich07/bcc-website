import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const ModernGrowth = () => {
  return (
    <section className="mx-auto py-6 sm:py-16 ">
      <div className="mb-16 px-5 text-center sm:px-16  ">
        <h2 className="h2-bold">Modern Growth Ecosystem.</h2>
        <p className="mt-6 text-2xl">
          Your ultimate partners to take your business to{" "}
          <br className="max-sm:hidden" /> the{" "}
          <span className="font-bold italic ">next level</span>.
        </p>
      </div>

      {/* Infinite Moving Cards */}

      <div className="relative flex flex-col items-center justify-center  overflow-hidden rounded-md bg-white antialiased">
        <InfiniteMovingCards
          items={rowOneImages}
          direction="right"
          speed="slow"
          key="row-1"
        />
        <InfiniteMovingCards
          items={rowTwoImages}
          direction="left"
          speed="slow"
          key="row-2"
        />
      </div>
    </section>
  );
};

const rowOneImages = [
  "/assets/a1.jpg",
  "/assets/a2.png",
  "/assets/a3.jpg",
  "/assets/a4.png",
  "/assets/a5.jpg",
];
const rowTwoImages = [
  "/assets/b1.png",
  "/assets/b2.jpg",
  "/assets/b3.png",
  "/assets/b4.jpg",
  "/assets/b5.jpg",
];

export default ModernGrowth;
