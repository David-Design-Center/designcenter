"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shared/accordion";
import { ServiceAreaAccordion } from "../../data/service-areas/types";

interface ServiceAreaAccordionFeatureProps {
  accordion: ServiceAreaAccordion;
}

const ServiceAreaAccordionFeature = ({ accordion }: ServiceAreaAccordionFeatureProps) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(accordion.features[0].image);

  const triggerFooterContact = () => {
    window.dispatchEvent(new CustomEvent('openContactForm'));
  };

  // Helper function to format description text with paragraphs and bold styling
  const renderFormattedDescription = (description: string) => {
    const paragraphs = description.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      const formattedText = paragraph.replace(
        /\*\*(.*?)\*\*/g, 
        '<strong>$1</strong>'
      );
      
      return (
        <p 
          key={index} 
          className="mt-3 text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
      );
    });
  };

  function handleConsultationClick(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    triggerFooterContact();
  }

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-relaxed">
            {accordion.sectionHeading}
          </h2>
          <p className="mt-4 text-m text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {accordion.sectionSubheading}
          </p>
        </div>

        <div className="mb-12 flex w-full flex-col md:flex-row items-start justify-between gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {accordion.features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`} className="border-[#C5A267]/30">
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                    aria-expanded={tab.id === activeTabId}
                  >
                    <h3
                      className={`text-xl font-serif ${tab.id === activeTabId ? "text-[#C5A267]" : "text-gray-600"}`}
                    >
                      {tab.title}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-1 text-justify leading-relaxed">
                      {renderFormattedDescription(tab.description)}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-6 flex justify-start">
                      <button 
                        onClick={handleConsultationClick} 
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C5A267] text-white font-medium rounded-sm hover:bg-[#D6B378] transition-all duration-300 min-h-[44px] text-sm"
                        aria-label={accordion.ctaAriaLabel(tab.title)}
                      >
                        {accordion.ctaButtonText}
                      </button>
                    </div>
                    
                    <div className="mt-4 md:hidden">
                      <img
                        src={tab.image}
                        alt={accordion.imageAlt(tab.title)}
                        className="h-full max-h-80 w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative m-auto hidden w-1/2 overflow-hidden md:block order-1 md:order-2">
            <img
              src={activeImage}
              alt={accordion.mainImageAlt}
              className="aspect-[4/3] object-cover shadow-lg transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaAccordionFeature;
