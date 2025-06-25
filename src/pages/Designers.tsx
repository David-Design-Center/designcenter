import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import DesignersHero from '../components/designers/DesignersHero';
import DesignerCard from '../components/designers/DesignerCard';
import DesignersCTA from '../components/designers/DesignersCTA';
import ContactFormPopup from '../components/ui/ContactFormPopup';
import { useContactForm } from '../hooks/useContactForm';

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
        const modules = import.meta.glob('../data/designers/*.json');
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
        <title>Meet Our Designers | D&D Design Center</title>
        <meta 
          name="description" 
          content="Get to know the creative minds behind D&D Design Center. Explore their stories and see a handpicked selection of their best work."
        />
        <link rel="canonical" href="https://dnddesigncenter.com/designers" />
      </Helmet>

      <DesignersHero />

      {/* Designers Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          {loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C5A267]"></div>
            </div>
          ) : (
            designers.map((designer, index) => (
              <DesignerCard 
                key={designer.name}
                designer={designer}
                index={index}
              />
            ))
          )}
        </div>
      </section>

      <DesignersCTA onContactTeam={triggerFooterContact} />
      
      {/* Contact Form Popup */}
      <ContactFormPopup isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};

export default Designers;