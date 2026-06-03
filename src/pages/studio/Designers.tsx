import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import DesignersHero from '../../components/designers/DesignersHero';
import DesignerCard from '../../components/designers/DesignerCard';
import DesignersCTA from '../../components/designers/DesignersCTA';
import ContactFormModal from '../../components/service-area/ContactFormModal';
import { useContactForm } from '../../hooks/useContactForm';

interface Designer {
  name: string;
  description: string;
  photo: string;
  website: string;
}

const Designers: React.FC = () => {
  const [designers, setDesigners] = useState<Designer[]>([]);
  const [loading, setLoading] = useState(true);
  const { isContactFormOpen, openContactForm, closeContactForm } = useContactForm();

  useEffect(() => {
    const loadDesigners = async () => {
      try {
        const modules = import.meta.glob('../../data/designers/*.json');
        const designerData = await Promise.all(
          Object.values(modules).map(module => module())
        );
        const loadedDesigners = designerData.map(module => (module as any).default || module);
        setDesigners(loadedDesigners);
      } catch (error) {
        console.error("Error loading designers:", error);
      } finally {
        setLoading(false);
      }
    };
    loadDesigners();
  }, []);

  const triggerFooterContact = () => {
    openContactForm();
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Meet Our Interior Designers | D&D Design Center</title>
        <meta 
          name="description" 
          content="Meet the designers behind D&D Design Center and explore their Italian-inspired projects and specialties."
        />
        <link rel="canonical" href="https://dnddesigncenter.com/designers" />
        <meta name="robots" content="index,follow,max-snippet:200,max-image-preview:large" />

        <meta property="og:title" content="Meet Our Interior Designers | D&D Design Center" />
        <meta property="og:description" content="Explore the designers behind D&D Design Center and their Italian-inspired projects." />
        <meta property="og:url" content="https://dnddesigncenter.com/designers" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet Our Interior Designers | D&D Design Center" />
        <meta name="twitter:description" content="Explore the designers behind D&D Design Center and their Italian-inspired projects." />
        <meta name="twitter:image" content="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif" />
      </Helmet>

      <DesignersHero />

      {/* Designers Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          {loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C5A267]"></div>
            </div>
          ) : designers.length > 0 ? (
            designers.map((designer, index) => (
              <DesignerCard
                key={designer.name}
                designer={designer}
                index={index}
              />
            ))
          ) : (
            <div className="text-center text-gray-600 py-12">
              Designers coming soon.
            </div>
          )}
        </div>
      </section>

      <DesignersCTA onContactTeam={triggerFooterContact} />
      
      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};

export default Designers;