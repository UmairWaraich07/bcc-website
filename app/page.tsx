import {
  Benefits,
  FAQs,
  Features,
  Hero,
  HomeCTA,
  ModernGrowth,
  Support,
  YourChoice,
} from "@/components/Home";

export default function Home() {
  return (
    <div className="w-full ">
      <Hero />
      <ModernGrowth />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-16">
        <Features />
        <Benefits />
        <YourChoice />
        <HomeCTA />
        <FAQs />
        <Support />
      </div>
    </div>
  );
}
