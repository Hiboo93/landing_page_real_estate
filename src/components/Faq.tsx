 import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FAQ } from "@/constants/index";


const Faq = () => {
  return (
    <div className="container mx-auto my-20">
      <h2 className="mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        FAQ
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {FAQ.map(({question, answer, value}, index) => (
        <AccordionItem key={index} value={value}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>
            {answer}
          </AccordionContent>
        </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default Faq