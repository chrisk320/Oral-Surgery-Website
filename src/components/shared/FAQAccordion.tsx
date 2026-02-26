import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/lib/services";

interface FAQAccordionProps {
  items: FAQ[];
  className?: string;
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <Accordion type="multiple" className={className}>
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left font-semibold text-[#1B3A5C] hover:text-[#2A9D8F] hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-[#334155]/80 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
