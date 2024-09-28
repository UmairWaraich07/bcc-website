import { ContactForm } from "@/components/Contact/Form";
import { HomeCTA } from "@/components/Home";
import React from "react";

const Contact = () => {
  return (
    <div className="mt-[7vh] sm:mt-[10vh] mx-auto max-w-[1440px] px-5 sm:px-16">
      <div className="flex items-center justify-center text-center flex-col w-full max-w-screen-sm mx-auto ">
        <h1 className="h2-bold !leading-[1.25]">Reach us Now!</h1>
        <div className="mt-4 md:mt-8 text-center text-lg sm:text-xl ">
          <p className="">
            <span className="font-bold text-heading">
              Our support is active 24/7.
            </span>{" "}
            Send us a message and within few minutes we’ll be in touch with you
            to help you out.
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full py-6 sm:py-16">
          <ContactForm />
        </div>
      </div>

      <HomeCTA />
    </div>
  );
};

export default Contact;
