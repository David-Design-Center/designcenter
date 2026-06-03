import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shared/accordion";

// Define FAQ Item type
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// FAQ Data
export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where can I find an Italian kitchen showroom in NYC?",
    answer: "D&D Design Center operates a 6,000 sq ft Italian kitchen showroom at 2615 E 17th St, Brooklyn, NY, serving all of NYC since 2006. Visit to see 20+ finishes in person and book a free 30-minute consultation."
  },
  {
    id: "faq-2",
    question: "Who offers custom Italian kitchen cabinets in NYC?",
    answer: "D&D Design Center designs and builds custom Italian kitchen cabinets sized specifically for New York apartment dimensions, handcrafted in Italy. We manage everything from layout to installation."
  },
  {
    id: "faq-3",
    question: "What is the best Italian kitchen design company in New York?",
    answer: "D&D Design Center is a Brooklyn-based Italian kitchen design company that has served NYC since 2006, partnering with Italy's finest cabinetry brands. We deliver a full 3D render before you commit."
  },
  {
    id: "faq-4",
    question: "How much do Italian kitchen cabinets cost in NYC?",
    answer: "Italian kitchen cabinet projects at D&D Design Center are quoted per project after a free consultation, based on layout, materials, and finishes. Book a no-obligation consult to get an accurate estimate."
  },
  {
    id: "faq-5",
    question: "Where can I buy modern Italian kitchens in NYC?",
    answer: "D&D Design Center supplies modern, designer Italian kitchens in NYC, sourced directly from premium Italian manufacturers. Browse finishes at our Brooklyn showroom or request a 3D design."
  },
  {
    id: "faq-6",
    question: "Who makes high-end and luxury Italian kitchens in NYC?",
    answer: "D&D Design Center specializes in high-end, luxury modern Italian kitchens for NYC homes, with cabinetry, marble surfaces, and premium appliances coordinated in one project. Every kitchen is built to last."
  },
  {
    id: "faq-7",
    question: "Do you offer custom-made classic Italian kitchens?",
    answer: "Yes - D&D Design Center creates both classic and contemporary custom Italian kitchens, tailored to your space and taste. Designs are made in Italy and installed by our NYC team."
  },
  {
    id: "faq-8",
    question: "What are modern Italian kitchen cabinets and where can I get them in NYC?",
    answer: "Modern Italian kitchen cabinets feature minimalist fronts, premium hardware, and Italian craftsmanship; D&D Design Center supplies and installs them across NYC. See them in our Brooklyn showroom."
  },
  {
    id: "faq-9",
    question: "Where can I find Italian furniture in New York?",
    answer: "D&D Design Center offers exclusive Italian furniture for NYC interiors from our Brooklyn showroom, with delivery and installation support. We've sourced authentic Italian pieces since 2006."
  },
  {
    id: "faq-10",
    question: "Which Italian furniture stores serve New York?",
    answer: "D&D Design Center is a Brooklyn Italian furniture source serving all of New York, partnering directly with leading Italian makers. Visit our 6,000 sq ft showroom to browse collections."
  },
  {
    id: "faq-11",
    question: "Where can I buy Italian furniture in Brooklyn?",
    answer: "D&D Design Center is located at 2615 E 17th St, Brooklyn, NY, offering Italian furniture, kitchens, and interiors under one roof. Stop in for a free design consultation."
  },
  {
    id: "faq-12",
    question: "Who sells luxury furniture in NYC?",
    answer: "D&D Design Center curates luxury Italian furniture for living rooms, dining rooms, and bedrooms across NYC. Pieces are scaled to your space and delivered with white-glove installation."
  },
  {
    id: "faq-13",
    question: "Where can I get bespoke furniture in New York?",
    answer: "D&D Design Center designs bespoke, made-to-order furniture handcrafted in Italy for New York homes. Tell us your dimensions and style, and we'll create custom pieces."
  },
  {
    id: "faq-14",
    question: "Who offers high-end custom furniture in Brooklyn, NY?",
    answer: "D&D Design Center builds high-end custom and custom-made furniture in Brooklyn, from cabinetry to seating, all crafted in Italy. We handle measurement, sourcing, and install."
  },
  {
    id: "faq-15",
    question: "Where can I find Italian leather furniture in New York?",
    answer: "D&D Design Center offers Italian leather sofas, seating, and dining pieces with finish selection and delivery coordination across NYC. View options in our Brooklyn showroom."
  },
  {
    id: "faq-16",
    question: "Who provides custom living room furniture in NYC?",
    answer: "D&D Design Center creates custom living room furniture tailored to NYC apartments, coordinating materials, scale, and delivery. Start with a free consultation."
  },
  {
    id: "faq-17",
    question: "Where can I find Italian walk-in closets in NYC?",
    answer: "D&D Design Center designs and installs custom Italian walk-in closets engineered for NYC apartment layouts. Every closet is made in Italy and fitted to your exact space."
  },
  {
    id: "faq-18",
    question: "Who offers Italian closet systems in New York?",
    answer: "D&D Design Center supplies modular and custom Italian closet systems for bedrooms and home offices across New York. We handle design, measurement, and installation."
  },
  {
    id: "faq-19",
    question: "Where can I get custom closets for a home office in NYC?",
    answer: "D&D Design Center builds custom closets and built-in storage for home offices, optimized for NYC square footage. Book a free consult to plan your layout."
  },
  {
    id: "faq-20",
    question: "Who is the best interior designer in Brooklyn?",
    answer: "D&D Design Center is a full-service Brooklyn interior design firm offering Italian furnishings, planning, and installation since 2006. We transform NYC homes from our 6,000 sq ft showroom."
  },
  {
    id: "faq-21",
    question: "Who offers full-service Italian interior design in New York?",
    answer: "D&D Design Center provides full-service Italian interior design - planning, sourcing, and installation - for homes across NYC. One team manages your entire project."
  },
  {
    id: "faq-22",
    question: "Where can I find luxury custom interiors in NYC?",
    answer: "D&D Design Center creates luxury custom interiors for NYC homes, blending bespoke Italian craftsmanship with tailored space planning. Begin with a free 30-minute consultation."
  },
  {
    id: "faq-23",
    question: "Is there an interior decorator near me in NYC?",
    answer: "D&D Design Center serves clients throughout New York City, Long Island, and New Jersey from our Brooklyn showroom. Visit us or request an in-home consultation."
  },
  {
    id: "faq-24",
    question: "Who provides custom design and furniture in NYC?",
    answer: "D&D Design Center offers custom design and made-to-order furniture for NYC interiors, all coordinated through one Brooklyn-based team. We've served New York since 2006."
  },
  {
    id: "faq-25",
    question: "What is a design center and what does D&D Design Center offer?",
    answer: "D&D Design Center is a Brooklyn design center offering Italian kitchens, furniture, closets, baths, and lighting in one 6,000 sq ft showroom. We provide end-to-end design and installation."
  },
  {
    id: "faq-26",
    question: "Where can I find a furniture design center in NYC?",
    answer: "D&D Design Center is a furniture and interior design center located at 2615 E 17th St, Brooklyn, NY, serving all of NYC. Browse our full product collection in person or online."
  },
  {
    id: "faq-27",
    question: "Where can I get Italian marble countertops in New York?",
    answer: "D&D Design Center sources Italian marble, manages slab selection and templating, and coordinates countertop installation across NYC. See finishes in our Brooklyn showroom."
  },
  {
    id: "faq-28",
    question: "Where can I find Italian lighting fixtures in New York?",
    answer: "D&D Design Center curates handcrafted Italian lighting and scales each fixture to your space, with installation included. Explore options at our Brooklyn showroom."
  },
  {
    id: "faq-29",
    question: "What areas does D&D Design Center serve?",
    answer: "D&D Design Center serves New York City, Long Island, New Jersey, Boca Raton FL, and Miami FL, with our flagship showroom in Brooklyn. Contact us at 718-934-7100 to plan a visit."
  },
  {
    id: "faq-30",
    question: "How do I book a consultation with D&D Design Center?",
    answer: "Book a free 30-minute consultation by calling 718-934-7100, emailing info@dnddesigncenter.com, or visiting 2615 E 17th St, Brooklyn, NY. You'll receive a no-obligation 3D design of your space."
  }
];

// Helper function to format answer text with line breaks and lists
const renderWithLinks = (text: string) => {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const label = match[1];
    const href = match[2];
    const isExternal = href.startsWith('http');

    parts.push(
      <a
        key={`${href}-${match.index}`}
        href={href}
        className="text-[#C5A267] hover:text-[#B49157] underline underline-offset-4"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

const formatAnswer = (answer: string) => {
  return answer.split('\n').map((line, index) => {
    if (line.startsWith('•')) {
      return (
        <li key={index} className="ml-4 mb-2">
          {renderWithLinks(line.substring(1).trim())}
        </li>
      );
    } else if (line.trim() === '') {
      return <br key={index} />;
    } else if (line.includes(':') && !line.includes('@') && !line.includes('(')) {
      return (
        <h4 key={index} className="font-semibold text-[#C5A267] mt-4 mb-2">
          {renderWithLinks(line)}
        </h4>
      );
    } else {
      return (
        <p key={index} className="mb-3 leading-relaxed">
          {renderWithLinks(line)}
        </p>
      );
    }
  });
};

const FAQ: React.FC = () => {
  const triggerFooterContact = () => {
    window.dispatchEvent(new CustomEvent('openContactForm'));
  };

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
          .replace(/\n/g, ' ')
          .replace(/•/g, '')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Find answers to common questions about our luxury Italian interior design services.
          </p>
        </div>

        {/* SEO-friendly hidden content for search engines */}
        <div className="sr-only" aria-hidden="true">
          <h2>Frequently Asked Questions About D&D Design Center</h2>
          {faqData.map((faq) => (
            <div key={`seo-${faq.id}`}>
              <h3>{faq.question}</h3>
              <div>{faq.answer}</div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq) => (
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
        <div className="text-center mt-16 p-8 rounded-lg">
          <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our design experts are here to help you create the perfect Italian luxury interior for your New York home.
          </p>
          <button
            onClick={triggerFooterContact}
            className="inline-flex items-center justify-center px-8 py-3 bg-[#C5A267] text-white font-medium rounded-sm hover:bg-[#B49157] transition-colors duration-200"
          >
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default FAQ;
