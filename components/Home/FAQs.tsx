import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faqs } from "@/constants";

const FAQs = () => {
  return (
    <section className="py-10 sm:py-16 ">
      <h2 className="h2-bold text-center">Frequently Asked Questions</h2>

      <div className="mx-auto mt-12 max-w-[900px] space-y-4 md:mt-16 md:space-y-6">
        {Faqs.map((faq, index) => (
          <Accordion key={`question-${index}`} type="single" collapsible>
            <AccordionItem
              className="rounded-sm bg-[#f2f2f2] px-5"
              value="item-1"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-heading md:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className=" text-base font-medium md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
