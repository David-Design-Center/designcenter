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
    question: "What interior design services do you offer for Boca Raton homes?",
    answer: "D&D Design Center provides complete Italian interior design for Boca Raton residences:\n\n• Custom Italian kitchens\n• Walk-in closets and dressing rooms\n• Bathroom and spa spaces\n• Living and dining rooms\n• Home offices\n• Outdoor living extensions\n• Lighting design\n• Full home renovations\n\nEvery piece is sourced from our network of Italian artisans and designed specifically for your home — no catalog items, no showroom compromises."
  },
  {
    id: "faq-2",
    question: "How long does a full home renovation take in Boca Raton?",
    answer: "Timeline depends on scope. Individual rooms like kitchens or closets typically take 3-6 months from design approval to installation. Full home renovations range from 6-12 months.\n\nOur process includes:\n• Initial consultation and space assessment\n• 3D design rendering for every room\n• Italian manufacturing with quality control\n• Coordinated shipping and installation\n• White-glove service by our certified team\n\nWe manage every step in-house, eliminating the delays that come from coordinating multiple contractors. You have one accountable partner from start to finish."
  },
  {
    id: "faq-3",
    question: "Do you design custom closets and dressing rooms?",
    answer: "Yes. Custom closets are one of our specialties for Boca Raton homeowners.\n\nWe design climate-controlled organization systems for:\n• Year-round resort wear and seasonal formal attire\n• Shoes, bags, jewelry, and accessories\n• Golf gear and sports equipment\n• His and hers configurations\n\nEvery closet includes lighting designed for accurate color matching, glass doors to showcase designer pieces, and materials that handle Florida's humidity. We measure everything—from handbag heights to suit lengths—so nothing gets folded or stacked incorrectly."
  },
  {
    id: "faq-4",
    question: "Can you design outdoor living spaces for Florida weather?",
    answer: "Absolutely. Boca Raton homeowners use outdoor spaces year-round, so we design them accordingly.\n\nOur outdoor living services include:\n• Covered patio kitchens with weather-resistant cabinetry\n• Outdoor dining and entertaining areas\n• Pool house and cabana design\n• Seamless indoor-outdoor transitions\n• Materials rated for humidity, sun, and salt air\n\nWe specify Italian fixtures and finishes that maintain their quality without constant maintenance. Your outdoor spaces become natural extensions of your home."
  },
  {
    id: "faq-5",
    question: "What makes Italian interior design different from local showrooms?",
    answer: "Most local showrooms sell pre-configured furniture and cabinets with limited customization. D&D Design Center offers something fundamentally different:\n\n• Fully custom Italian manufacturing — not modified stock\n• Direct relationships with top Italian ateliers (Aster, Visionnaire, Longhi, Prestige)\n• One accountable partner from design through installation\n• No subcontractors chasing other jobs\n• Materials and finishes unavailable at retail showrooms\n\nBoca Raton homeowners don't gamble with six-figure renovations. Our process eliminates the chaos that comes from piecing together multiple vendors."
  },
  {
    id: "faq-6",
    question: "Do you offer bathroom and spa design?",
    answer: "Yes. We design spa-level bathrooms with hotel-grade quality for Boca Raton homes.\n\nOur bathroom design includes:\n• Custom vanities and storage solutions\n• Heated floors and rain showers\n• Soaking tubs with views\n• Dual vanities with dedicated storage\n• Lighting for makeup application and skincare\n\nWe specify Italian fixtures that handle hard water and maintain finishes without constant polishing. Every bathroom is designed for both daily function and resort-style relaxation."
  },
  {
    id: "faq-7",
    question: "What if my past renovation experience was disappointing?",
    answer: "If you're hesitating because past renovations went sideways, that's exactly why our process exists. Planning correctly costs less than fixing mistakes.\n\nMost renovation disasters start with shortcuts — unclear timelines, uncoordinated contractors, and no single point of accountability. Our approach is the opposite:\n\n• You see everything in 3D before we build\n• One dedicated project manager owns your timeline\n• Italian artisans who specialize in luxury, not volume\n• White-glove delivery and installation\n• Clear communication at every stage\n\nWe've helped many Boca Raton homeowners recover from previous renovation nightmares with results that finally feel worth the investment."
  },
  {
    id: "faq-8",
    question: "How do I get started with a Boca Raton home project?",
    answer: "Getting started is simple:\n\n1. Request a consultation — Tell us about your project and goals\n2. Design session — We assess your space and understand your lifestyle\n3. 3D render — See your rooms before construction begins\n4. Refine until perfect — We revise until you're completely satisfied\n5. Production — Your pieces are handcrafted in Italy\n6. Installation — White-glove delivery and professional installation\n\nWe accept a limited number of Boca Raton projects per month to maintain quality and timelines.\n\nSchedule your free consultation to check availability."
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
      
      <section className="py-16 md:py-24 bg-white px-4">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] mb-6">
              Questions Boca Raton Homeowners Ask
            </h2>
            <p className="text-md text-gray-600 font-light max-w-2xl mx-auto">
              Full home renovation is a considerable investment. Here's what you need to know.
            </p>
          </div>

          {/* SEO-friendly hidden content for search engines */}
          <div className="sr-only" aria-hidden="true">
            <h2>Frequently Asked Questions About Interior Design in Boca Raton</h2>
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
        </div>
      </section>
    </>
  );
};

export default BocaRatonFAQ;
