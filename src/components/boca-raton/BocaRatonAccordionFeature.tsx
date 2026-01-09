"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface BocaRatonAccordionFeatureProps {
  features?: FeatureItem[];
}

const bocaRatonFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Kitchen",
    image: "https://res.cloudinary.com/designcenter/image/upload/Luxury%20Kitchen%20Interiors%20%E2%80%93%20Custom%20Cabinetry%20and%20Marble%20Finishes.avif",
    description: "**Most kitchen disasters start with a shortcut. Here's how ours avoids them.**\n\nWe begin with a personalized consultation to understand your culinary habits, lifestyle, and aesthetic goals. For Boca Raton homes, we consider Florida's climate, natural light, and how you actually live in your space.\n\nOur design team creates a fully customized kitchen layout, focusing on functionality, flow, and visual harmony. We source Italian-made cabinetry, marble surfaces, and premium appliances — materials that withstand humidity and look stunning for decades.\n\n**Increase resale value** with Italian craftsmanship that discerning Boca Raton buyers recognize immediately."
  },
  {
    id: 2,
    title: "Closet",
    image: "https://res.cloudinary.com/designcenter/image/upload/Closet_Designed_For_Modern_Homes.avif",
    description: "**Pride in owning a closet no neighbor can replicate.**\n\nWe start by mapping your wardrobe habits — whether you need expansive walk-in solutions for a growing collection or elegantly hidden storage that maximizes your Boca Raton home's square footage.\n\nOur designers create customized layouts using modular Italian systems, emphasizing aesthetic clarity and functional organization. Materials are carefully selected for durability and beauty, with options for integrated lighting and luxurious hardware.\n\n**Eliminate renovation chaos** with one accountable design partner who manages fabrication and installation from start to finish."
  },
  {
    id: 3,
    title: "Living Room",
    image: "https://res.cloudinary.com/designcenter/image/upload/Luxury%20Living%20Room%20Design%20%E2%80%93%20Custom%20Sofas%20and%20Decor%20NYC.avif",
    description: "**Live daily in a space that finally feels intentional.**\n\nWe start by understanding how you live and entertain in your Boca Raton home — whether you host frequent gatherings or prefer serene, intimate spaces with Florida's natural light.\n\nAfter establishing your design vision, we curate a bespoke layout that balances comfort and artistry, specifying custom Italian sofas, built-in cabinetry, and lighting tailored to your lifestyle.\n\n**Control over timeline, budget, and final outcome** — with one partner who handles everything from design to delivery."
  },
  {
    id: 4,
    title: "Bathroom",
    image: "https://res.cloudinary.com/designcenter/image/upload/Luxury%20Bathroom%20Design%20%E2%80%93%20Bespoke%20Vanities%20and%20Interiors.avif",
    description: "**Not all 'Italian' bathrooms are actually Italian. These are.**\n\nWe identify how you want your bathroom to feel — spa-like, sleek, dramatic, or timeless. For Boca Raton homes, we factor in humidity, natural light, and how the space connects to your bedroom or pool area.\n\nWe design a bespoke bathroom plan using custom vanities, Italian stone surfaces, premium fixtures, and tailored storage solutions. Throughout production, we maintain rigorous quality checks.\n\n**Relief knowing every detail is handled** without chasing contractors or managing multiple vendors."
  },
  {
    id: 5,
    title: "Outdoor",
    image: "https://res.cloudinary.com/designcenter/image/upload/Luxury%20Outdoor%20Furniture%20%E2%80%93%20Custom%20Patio%20and%20Terrace%20Designs.avif",
    description: "**Boca Raton living extends beyond four walls.**\n\nWe assess your outdoor lifestyle — whether it's hosting poolside dinners or creating a private terrace retreat that captures Florida's year-round sunshine.\n\nOur team designs layouts that maximize space and visual connection to your interiors, specifying Italian outdoor furniture, weather-resistant materials engineered for Florida's climate, and customized planters.\n\n**Confidence your space is designed right** before construction starts — we handle every detail from furniture sourcing to installation."
  },
  {
    id: 6,
    title: "Lighting",
    image: "https://res.cloudinary.com/designcenter/image/upload/Luxury%20Lighting%20Design%20%E2%80%93%20Modern%20Fixtures%20for%20High-End%20Homes.avif",
    description: "**What you pay matters less than what mistakes cost you later.**\n\nWe collaborate with you to understand the emotional tone and architectural needs of each space before designing a layered lighting plan perfect for Boca Raton's abundant natural light.\n\nOur specialists source Italian-made chandeliers, sconces, and recessed lighting systems that blend artistry and functionality. We provide detailed lighting schematics and coordinate installation.\n\n**Your home radiates atmosphere, elegance, and warmth** at every hour — from morning sunrise to evening entertaining."
  },
];

const BocaRatonAccordionFeature = ({ features = bocaRatonFeatures }: BocaRatonAccordionFeatureProps) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

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
            How We Transform Boca Raton Homes
          </h2>
          <p className="mt-4 text-m text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From kitchens to closets, discover how we create spaces and elevate everyday living.
          </p>
        </div>

        <div className="mb-12 flex w-full flex-col md:flex-row items-start justify-between gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
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
                        aria-label={`Request a luxury ${tab.title.toLowerCase()} design consultation for Boca Raton`}
                      >
                        INCREASE MY HOME VALUE
                      </button>
                    </div>
                    
                    <div className="mt-4 md:hidden">
                      <img
                        src={tab.image}
                        alt={`Custom Italian ${tab.title.toLowerCase()} design for Boca Raton homes`}
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
              alt="Luxury Italian furniture for Boca Raton homes"
              className="aspect-[4/3] object-cover shadow-lg transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { BocaRatonAccordionFeature };
