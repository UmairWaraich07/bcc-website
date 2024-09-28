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
    <section className="py-6 sm:py-16 ">
      <h2 className="h2-bold text-center">Frequently Asked Questions</h2>

      <div className="mt-16 max-w-[900px] mx-auto space-y-6">
        {Faqs.map((faq, index) => (
          <Accordion key={`question-${index}`} type="single" collapsible>
            <AccordionItem
              className="bg-[#f2f2f2] rounded-sm px-5"
              value="item-1"
            >
              <AccordionTrigger className="text-heading text-left text-xl font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
