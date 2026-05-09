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
    question: "Where can I find luxury Italian interior design studios in New York?",
    answer: "For luxury Italian interior design in New York, D&D Design Center offers full-service planning, Italian furnishings, and installation. Browse the [Products Collection](/productscollection) or learn the process on [How We Work](/how-we-work)."
  },
  {
    id: "faq-2",
    question: "Which companies offer bespoke Italian furniture for upscale New York apartments?",
    answer: "D&D Design Center provides bespoke Italian furniture sized for NYC layouts with delivery and installation support. Explore the [Products Collection](/productscollection) or see featured work on [Collaboration](/collaboration)."
  },
  {
    id: "faq-3",
    question: "Who are the top providers of Italian marble countertops in New York?",
    answer: "D&D Design Center sources Italian marble, manages slab selection and templating, and coordinates installation in NYC. Start with [Kitchens](/kitchens) or view finishes in the [Products Collection](/productscollection)."
  },
  {
    id: "faq-4",
    question: "Where to buy handcrafted Italian lighting fixtures in New York?",
    answer: "D&D Design Center curates Italian lighting, scales fixtures to your space, and coordinates installation. See options in the [Products Collection](/productscollection) and learn more on [How We Work](/how-we-work)."
  },
  {
    id: "faq-5",
    question: "Which New York showrooms specialize in luxury Italian kitchen designs?",
    answer: "D&D Design Center specializes in Italian kitchens tailored to NYC buildings, from layout planning to installation. Visit [Italian Kitchen Cabinets](/italian-kitchen-cabinets) or browse the [Products Collection](/productscollection)."
  },
  {
    id: "faq-6",
    question: "Where can I source premium Italian textiles for interior decor in New York?",
    answer: "D&D Design Center sources Italian textiles for drapery, upholstery, and wall treatments with sampling support. Explore materials in the [Products Collection](/productscollection) and the process on [How We Work](/how-we-work)."
  },
  {
    id: "faq-7",
    question: "Who offers custom Italian cabinetry services in New York?",
    answer: "D&D Design Center provides custom Italian cabinetry for kitchens, wardrobes, and built-ins with measurement and installation. Explore [Kitchens](/kitchens) or the [Products Collection](/productscollection)."
  },
  {
    id: "faq-8",
    question: "Where to find Italian leather furniture collections in New York?",
    answer: "D&D Design Center offers Italian leather seating and dining pieces with sizing, finish selection, and delivery coordination. Browse the [Products Collection](/productscollection) or visit [Designers](/designers) for inspiration."
  },
  {
    id: "faq-9",
    question: "Which firms provide full service Italian interior design in New York?",
    answer: "D&D Design Center provides full-service Italian interior design, including planning, sourcing, and installation. See [How We Work](/how-we-work) or explore the [Products Collection](/productscollection)."
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
          <h2>Frequently Asked Questions About Italian Interior Design in New York</h2>
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
