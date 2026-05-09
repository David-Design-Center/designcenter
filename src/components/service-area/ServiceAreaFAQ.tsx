import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shared/accordion";
import { ServiceAreaFAQConfig, FAQItem } from '../../data/service-areas/types';

interface ServiceAreaFAQProps {
  faq: ServiceAreaFAQConfig;
}

// Helper function to format answer text
const formatAnswer = (answer: string) => {
  return <p className="mb-3 leading-relaxed">{answer}</p>;
};

const ServiceAreaFAQ: React.FC<ServiceAreaFAQProps> = ({ faq }) => {
  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.items.map((item: FAQItem) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="py-16 md:py-24 bg-white px-4">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] mb-6">
              {faq.sectionHeading}
            </h2>
            <p className="text-md text-gray-600 font-light max-w-2xl mx-auto">
              {faq.sectionSubheading}
            </p>
          </div>

          {/* SEO-friendly hidden content for search engines */}
          <div className="sr-only" aria-hidden="true">
            <h2>{faq.seoHeading}</h2>
            {faq.items.map((item: FAQItem) => (
              <div key={`seo-${item.id}`}>
                <h3>{item.question}</h3>
                <div>{item.answer}</div>
              </div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faq.items.map((item: FAQItem) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="border border-gray-200 rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#1A1A1A] pr-4 line-clamp-2 sm:line-clamp-1">
                    {item.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-4 sm:pb-6 pt-2">
                  <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                    {formatAnswer(item.answer)}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaFAQ;
