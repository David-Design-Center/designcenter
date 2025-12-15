import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

// Define FAQ Item type
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Boca Raton specific FAQ Data
export const bocaRatonFaqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Why should Boca Raton homeowners choose Italian kitchens?",
    answer: "Italian kitchens offer superior craftsmanship that Boca Raton luxury home buyers recognize and value. Unlike mass-produced cabinets, Italian kitchens are fully custom-made to your exact specifications, using premium materials that withstand Florida's climate. They increase resale value because discerning buyers can immediately tell the difference between showroom-grade and artisan-crafted.\n\nWhat makes Italian kitchens different:\n• Hand-finished cabinetry that lasts decades\n• Premium hardware and soft-close mechanisms\n• Materials resistant to humidity and heat\n• Custom dimensions that maximize every inch\n• Distinctive design no neighbor can replicate"
  },
  {
    id: "faq-2",
    question: "How long does a custom kitchen installation take in Boca Raton?",
    answer: "D&D Design Center can deliver fully custom Italian kitchens and closets in as little as 90 days from design approval to installation. Typical projects take 3-6 months depending on complexity and scope.\n\nOur process includes:\n• Initial consultation and space assessment\n• 3D design rendering and revisions\n• Italian manufacturing with quality control\n• Shipping and customs clearance\n• White-glove installation by our certified team\n\nWe'll provide a precise timeline during our initial consultation. We manage every step in-house, eliminating the delays that come from coordinating multiple contractors. You have one accountable partner from start to finish."
  },
  {
    id: "faq-3",
    question: "Do you offer free 3D design renders for Boca Raton projects?",
    answer: "Yes. Every Boca Raton project begins with a complimentary 3D design render so you can see exactly how your kitchen or closet will look before any construction begins.\n\nOur guarantee: If your 3D design doesn't meet your expectations, we revise it until it does — before construction begins. This eliminates the guesswork and expensive changes that plague most renovations.\n\nThe 3D render includes:\n• Photorealistic visualization of your space\n• Material and finish selections\n• Layout optimization for your lifestyle\n• Appliance integration planning"
  },
  {
    id: "faq-4",
    question: "What areas in South Florida do you serve?",
    answer: "D&D Design Center serves Boca Raton and the surrounding South Florida communities, including:\n\n• Boca Raton\n• Palm Beach\n• Delray Beach\n• Fort Lauderdale\n• Miami\n• Naples\n• Jupiter\n\nWhile our primary showroom is in Brooklyn, NY, we have extensive experience managing Florida projects with the same precision and white-glove service. Our dedicated project managers coordinate all deliveries and installations to ensure seamless execution."
  },
  {
    id: "faq-5",
    question: "How is D&D Design Center different from local Boca Raton kitchen showrooms?",
    answer: "Most local showrooms sell pre-configured cabinets with limited customization. D&D Design Center offers something fundamentally different:\n\n• Fully custom Italian manufacturing — not modified stock\n• Direct relationships with top Italian ateliers (Aster, Visionnaire, Longhi, Prestige)\n• One accountable partner from design through installation\n• No subcontractors chasing other jobs\n• Materials and finishes unavailable at retail showrooms\n\nBoca Raton homeowners don't gamble with six-figure renovations. Our process eliminates the chaos and disappointment that comes from piecing together multiple vendors."
  },
  {
    id: "faq-6",
    question: "What if my past renovation experience was disappointing?",
    answer: "If you're hesitating because past renovations went sideways, that's exactly why our process exists. Planning correctly costs less than fixing mistakes.\n\nMost kitchen disasters start with shortcuts — unclear timelines, uncoordinated contractors, and no single point of accountability. Our approach is the opposite:\n\n• You see everything in 3D before we build\n• One dedicated project manager owns your timeline\n• Italian artisans who specialize in luxury, not volume\n• White-glove delivery and installation\n• Clear communication at every stage\n\nWe've helped many Boca Raton homeowners recover from previous renovation nightmares with results that finally feel worth the investment."
  },
  {
    id: "faq-7",
    question: "Do you only do kitchens, or can you design my entire home?",
    answer: "While kitchens and closets are our specialty for Boca Raton homeowners, D&D Design Center offers complete Italian interior design services:\n\n• Custom Italian kitchens\n• Walk-in closets and wardrobe systems\n• Bathroom vanities and fixtures\n• Living room furniture\n• Dining rooms\n• Home offices\n• Outdoor living spaces\n• Lighting design\n\nEvery piece is sourced from our network of Italian artisans and designed specifically for your home — no catalog items, no showroom compromises."
  },
  {
    id: "faq-8",
    question: "How do I get started with a Boca Raton kitchen project?",
    answer: "Getting started is simple:\n\n1. Request a consultation — Tell us about your project and goals\n2. Design session — We assess your space and understand your lifestyle\n3. 3D render — See your kitchen before construction begins\n4. Refine until perfect — We revise until you're completely satisfied\n5. Production — Your kitchen is handcrafted in Italy\n6. Installation — White-glove delivery and professional installation\n\nWe accept a limited number of Boca Raton projects per month to maintain quality and timelines. Availability closes once slots are filled.\n\nClick 'Design My Kitchen' to check availability and schedule your free consultation."
  }
];

// Helper function to format answer text with line breaks and lists
const formatAnswer = (answer: string) => {
  return answer.split('\n').map((line, index) => {
    if (line.startsWith('•')) {
      return (
        <li key={index} className="ml-4 mb-2">
          {line.substring(1).trim()}
        </li>
      );
    } else if (line.trim() === '') {
      return <br key={index} />;
    } else if (line.includes(':') && !line.includes('@') && !line.includes('(') && line.length < 60) {
      return (
        <h4 key={index} className="font-semibold text-[#C5A267] mt-4 mb-2">
          {line}
        </h4>
      );
    } else {
      return (
        <p key={index} className="mb-3 leading-relaxed">
          {line}
        </p>
      );
    }
  });
};

const BocaRatonFAQ: React.FC = () => {
  const triggerFooterContact = () => {
    window.dispatchEvent(new CustomEvent('openContactForm'));
  };

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": bocaRatonFaqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/\n/g, ' ').replace(/•/g, '')
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
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] mb-6">
              Questions Boca Raton Homeowners Ask
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Boca Raton homeowners don't gamble with six-figure renovations. Here's what you need to know.
            </p>
          </div>

          {/* SEO-friendly hidden content for search engines */}
          <div className="sr-only" aria-hidden="true">
            <h2>Frequently Asked Questions About Italian Kitchen Design in Boca Raton</h2>
            {bocaRatonFaqData.map((faq) => (
              <div key={`seo-${faq.id}`}>
                <h3>{faq.question}</h3>
                <div>{faq.answer}</div>
              </div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {bocaRatonFaqData.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-gray-200 rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#1A1A1A] pr-4 line-clamp-2 sm:line-clamp-1">
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-4 sm:pb-6 pt-2">
                  <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
                    {formatAnswer(faq.answer)}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] mb-4">
              Still On the Fence?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              If you're hesitating because past renovations went sideways, that's exactly why this process exists. Planning correctly costs less than fixing mistakes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={triggerFooterContact}
                className="inline-flex items-center justify-center px-8 py-3 bg-[#C5A267] text-white font-medium rounded-sm hover:bg-[#B49157] transition-colors duration-200"
              >
                Design My Kitchen
              </button>
              <button
                onClick={triggerFooterContact}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#C5A267] text-[#C5A267] font-medium rounded-sm hover:bg-[#C5A267] hover:text-white transition-colors duration-200"
              >
                Get My Free 3D Design
              </button>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 text-center">
            <blockquote className="text-xl italic text-gray-600 max-w-2xl mx-auto">
              "Our renovation finally feels worth the investment."
            </blockquote>
            <p className="text-[#C5A267] mt-2">— Boca Raton Homeowner</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BocaRatonFAQ;
