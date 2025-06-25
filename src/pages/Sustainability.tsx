import SustainabilityHero from '../components/sustainability/SustainabilityHero';
import SustainabilityHighlights from '../components/sustainability/SustainabilityHighlights';
import SustainabilityShowcase from '../components/sustainability/SustainabilityShowcase';
import SustainabilityStats from '../components/sustainability/SustainabilityStats';
import SustainabilityPath from '../components/sustainability/SustainabilityPath';
import SustainabilityCTA from '../components/sustainability/SustainabilityCTA';
import ContactFormPopup from '../components/ui/ContactFormPopup';
import { useContactForm } from '../hooks/useContactForm';
import { Helmet } from 'react-helmet';

const Sustainability = () => {
  const { isContactFormOpen, openContactForm, closeContactForm } = useContactForm();
  const triggerFooterContact = () => openContactForm();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Sustainable Home Interiors | D&D Design Center</title>
        <meta name="description" content="Explore sustainable luxury with eco-conscious furniture and responsibly sourced materials designed for elegant, energy-efficient interiors." />
        <link rel="canonical" href="https://dnddesigncenter.com/sustainability" />
      </Helmet>
      <SustainabilityHero />
      <SustainabilityHighlights
        triggerFooterContact={triggerFooterContact}
        scrollToProjects={() => {}}
      />
      <SustainabilityShowcase />
      <SustainabilityStats />
      <SustainabilityPath />
      <SustainabilityCTA
        triggerFooterContact={triggerFooterContact}
      />
      
      {/* Contact Form Popup */}
      <ContactFormPopup isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};

export default Sustainability;
