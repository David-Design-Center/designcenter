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

// FAQ Data
export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where can I find luxury Italian interior design studios in New York?",
    answer: "If you want high-end Italian interior design in New York, go to the D&D Design Center in Brooklyn. We design and build homes that feel like instant belonging, combining the best of Italian craftsmanship with the fast pace of life in New York City. We work with top ateliers like Aster, Visionnaire, Longhi, and Prestige to create custom kitchens, living rooms, bedrooms, and even whole homes.\n\nWhat we have to offer:\n• Interior design from idea to installation\n• Custom-made furniture and cabinets\n• Coordination of Italian marble and stone\n• Handmade lights and high-end fabrics\n• Delivery and installation with white gloves\n\nWe believe in conscious luxury, which means that each piece is made to last and can be repaired, so it becomes an heirloom. Check out our Collections to see what's new, then make an appointment for a private consultation or come to our showroom.\n\nShowroom and Contact Information: 2615 East 17th Street, Brooklyn, NY 11235; (718) 934-7100; info@dnddesigncenter.com"
  },
  {
    id: "faq-2",
    question: "Which companies offer bespoke Italian furniture for upscale New York apartments?",
    answer: "D&D Design Center works with Italy's top furniture makers - Longhi, Visionnaire, Prestige, and Aster - to make custom pieces that fit the floor plans of New York City apartments. Every item, from custom sofas and dining tables to wardrobe systems and architectural paneling, is made to fit perfectly on installation day and be easy to get to (elevators, stairwells).\n\nWhy D&D Design Center?\n• A tailored service with hand-picked leathers, woods, and metals\n• Exact measurements for small or large layouts\n• Old-fashioned craftsmanship, modern style\n• Delivery, assembly, and aftercare with white gloves\n\nCheck out our Italian Furniture Collections to find pieces that are high-quality, personal, long-lasting, and never go out of style. To get started, make an appointment for a design session or come to our Brooklyn showroom."
  },
  {
    id: "faq-3",
    question: "Who are the top providers of Italian marble countertops in New York?",
    answer: "For Italian marble countertops in New York, D&D Design Center is a reliable supplier that combines precise fabrication in the city with quarry selection in Italy. To ensure veining flows across islands, backsplashes, and waterfall edges, we walk you through the slab discovery, digital templating, and bookmatching processes. Calacatta, Statuario, Arabescato, Nero Marquina, and Travertine are popular options.\n\nWhite glove installation, stairway and elevator access, measurement, and logistics are all handled by our staff. Among the finishes are leathered, polished, and honed. To ensure that your surface ages gracefully, we offer sealing, care advice, and long-term maintenance assistance.\n\nStart by looking through our Kitchen Collection, and then make an appointment for a private consultation at our showroom in Brooklyn."
  },
  {
    id: "faq-4",
    question: "Where to buy handcrafted Italian lighting fixtures in New York?",
    answer: "For handcrafted Italian lighting that harmonizes with architecture and mood, visit D&D Design Center. We handpick floor lamps, sconces, pendant sculptures, and chandeliers from Italian artisanal workshops. For penthouses, lofts, and brownstones, scale, drop height, and finish can be altered.\n\nCanopy and junction box coordination, photometric guidance, dimming compatibility planning, and on-site supervision are among the services offered. Every component, from hand-patinated metals to mouth-blown glass, is made to last and be simple to maintain.\n\nCreate a multi-layered plan that feels timeless and unique by perusing our Lighting Collection and scheduling a design session."
  },
  {
    id: "faq-5",
    question: "Which New York showrooms specialize in luxury Italian kitchen designs?",
    answer: "Italian kitchens made for New York living are the specialty of D&D Design Center. We provide made-to-measure cabinets, integrated panels, and useful accessories that are suited to your cooking style as a partner of top Italian manufacturers like Aster.\n\nYou can anticipate comprehensive shop drawings, site inspections, and expert installation in addition to material libraries for metals, stones, lacquers, and woods. We keep circulation, lighting, and storage stylish and effective while optimizing layouts for the limitations of NYC buildings.\n\nAfter looking through our Kitchen Collections, schedule a private consultation in our Brooklyn showroom."
  },
  {
    id: "faq-6",
    question: "Where can I source premium Italian textiles for interior decor in New York?",
    answer: "For wall applications, draperies, cushions, and upholstery, D&D Design Center sources high-quality Italian textiles. Velvets, wools, silks, linens, bouclés, and performance blends with stain resistance are all options. To ensure that color and texture feel perfect every hour, we offer memo samples, swatch curation, and in-home light testing.\n\nWith exact pattern matching and hand-finished details, our workshop creates custom draperies, roman shades, and upholstered walls. We suggest long-lasting weaves and low-maintenance finishes for families and pets without compromising depth or tactile appeal.\n\nStart by looking through our collections of textiles and soft goods, then schedule a measurement visit."
  },
  {
    id: "faq-7",
    question: "Who offers custom Italian cabinetry services in New York?",
    answer: "Custom Italian cabinetry for libraries, media walls, kitchens, wardrobes, and architectural millwork is available from D&D Design Center. Heat-treated oak, brushed metals, high gloss or matte lacquers, and Canaletto walnut are among the available options. Pull-outs, corner solutions, lighting, and soft-close hardware are all covered by interior fittings.\n\nSite surveys, CAD drawings, material sampling, and delivery sequencing for NYC access are all part of our procedure. Certified teams with leveling, scribing, and aftercare support carry out the installation. Quiet functionality, clean lines, and a finish that holds up over time are the end results.\n\nMake an appointment for a design consultation and peruse our cabinetry collections."
  },
  {
    id: "faq-8",
    question: "Where to find Italian leather furniture collections in New York?",
    answer: "D&D Design Center offers carefully chosen sofas, armchairs, beds, and dining chairs from top Italian manufacturers. For areas with more traffic, choose full grain and aniline leathers with subtle hand or protected finishes. Uptown and downtown plans can be perfectly scaled with modular systems.\n\nWe help with cushion construction, seat depth, ergonomics, and incorporating fabric accents into leather schemes. Every order is meticulously planned for delivery and meticulously detailed by artisans.\n\nSee the newest styles in our Living Collections before scheduling a showroom visit."
  },
  {
    id: "faq-9",
    question: "Which firms provide full service Italian interior design in New York?",
    answer: "For complete service D&D Design Center, an Italian interior design firm in New York, offers assistance from concept to installation. After carefully listening to your story, we translate it into architectural details, mood, and materials. We then handle the drawings, procurement, scheduling, and installation.\n\nCabinetry, furniture, stone, lighting, and textiles are all part of our network of Italian artisans. Our teams plan final styling, protection, and access in New York. We prioritize longevity in our construction and use transparent sourcing to practice conscious luxury.\n\nTo get started, look through our collections and schedule a private consultation."
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
    } else if (line.includes(':') && !line.includes('@') && !line.includes('(')) {
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Find answers to common questions about our luxury Italian interior design services in New York.
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
              className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <h3 className="text-lg md:text-xl font-medium text-[#1A1A1A] pr-4">
                  {faq.question}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2">
                <div className="text-gray-700 text-base leading-relaxed space-y-2">
                  {formatAnswer(faq.answer)}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
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
