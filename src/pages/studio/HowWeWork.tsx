import TestimonialsSection from '../../components/shared/testimonials-with-marquee';
import CaseStudies from '../../components/howwework/CaseStudies';
import HowWeWorkHero from '../../components/howwework/HowWeWorkHero';
import HowWeWorkStages from '../../components/howwework/HowWeWorkStages';
import HowWeWorkCallToAction from '../../components/howwework/HowWeWorkCallToAction';
import { FeatureStepsDemo } from '../../components/howwework/FeatureStepsDemo';
import { AnimatePresence } from 'framer-motion';
import ContactFormModal from '../../components/service-area/ContactFormModal';
import { useContactForm } from '../../hooks/useContactForm';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

const HowWeWork = () => {
  const { isContactFormOpen, openContactForm, closeContactForm } = useContactForm();
  const triggerFooterContact = () => openContactForm();
  type Testimonial = {
    author: {
      name: string;
      role: string;
      image: string;
    };
    text: string;
    href?: string;
  };
  
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Vite's import.meta.glob for eager loading all JSON files
    const modules = import.meta.glob('../data/testimonials/*.json', { eager: true });
    const loaded = Object.values(modules).map((mod: any) => mod.default || mod);
    // Map to your component's expected shape
    setTestimonials(
      loaded.map((t: any) => ({
        author: {
          name: t.name,
          role: t.role || "",
          image: t.photo || "",
        },
        text: t.quote,
        href: t.website || undefined,
      }))
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Helmet>
        <title>Luxury Interior Design Process | D&D Design Center</title>
        <meta name="description" content="Our step-by-step process for Italian kitchens, custom furniture, and full-home interiors across NYC." />
        <link rel="canonical" href="https://dnddesigncenter.com/how-we-work" />
        <meta name="robots" content="index,follow,max-snippet:200,max-image-preview:large" />

        <meta property="og:title" content="Luxury Interior Design Process | D&D Design Center" />
        <meta property="og:description" content="Our step-by-step process for Italian kitchens, custom furniture, and full-home interiors across NYC." />
        <meta property="og:url" content="https://dnddesigncenter.com/how-we-work" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury Interior Design Process | D&D Design Center" />
        <meta name="twitter:description" content="Our step-by-step process for Italian kitchens, custom furniture, and full-home interiors across NYC." />
        <meta name="twitter:image" content="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif" />
      </Helmet>
      <HowWeWorkHero />
      <HowWeWorkStages />
      <AnimatePresence mode="sync">
        <FeatureStepsDemo />
      </AnimatePresence>
      <CaseStudies />
      {/* <TestimonialsSection
        title="What Our Clients Say"
        description="Real feedback from our happy clients."
        testimonials={testimonials}
      />*/}
      <HowWeWorkCallToAction
        triggerFooterContact={triggerFooterContact}
      />
      
      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};

export default HowWeWork;
