import SustainabilityHero from '../../components/sustainability/SustainabilityHero';
import SustainabilityHighlights from '../../components/sustainability/SustainabilityHighlights';
import SustainabilityShowcase from '../../components/sustainability/SustainabilityShowcase';
import SustainabilityStats from '../../components/sustainability/SustainabilityStats';
import SustainabilityPath from '../../components/sustainability/SustainabilityPath';
import SustainabilityCTA from '../../components/sustainability/SustainabilityCTA';
import ContactFormModal from '../../components/service-area/ContactFormModal';
import { useContactForm } from '../../hooks/useContactForm';
import { Helmet } from 'react-helmet';

const Sustainability = () => {
  const { isContactFormOpen, openContactForm, closeContactForm } = useContactForm();
  const triggerFooterContact = () => openContactForm();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Sustainable Luxury Interiors | D&D Design Center</title>
        <meta name="description" content="Eco-conscious materials and responsibly sourced Italian furnishings for elegant, energy-efficient homes in NYC." />
        <link rel="canonical" href="https://dnddesigncenter.com/sustainability" />
        <meta name="robots" content="index,follow,max-snippet:200,max-image-preview:large" />

        <meta property="og:title" content="Sustainable Luxury Interiors | D&D Design Center" />
        <meta property="og:description" content="Eco-conscious materials and responsibly sourced Italian furnishings for NYC homes." />
        <meta property="og:url" content="https://dnddesigncenter.com/sustainability" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sustainable Luxury Interiors | D&D Design Center" />
        <meta name="twitter:description" content="Eco-conscious materials and responsibly sourced Italian furnishings for NYC homes." />
        <meta name="twitter:image" content="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif" />
      </Helmet>
      <SustainabilityHero />
      <SustainabilityHighlights
        triggerFooterContact={triggerFooterContact}
        scrollToProjects={() => {}}
      />
      {/* <SustainabilityShowcase /> */}
      <SustainabilityStats />
      <SustainabilityPath />
      <SustainabilityCTA
        triggerFooterContact={triggerFooterContact}
      />
      
      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};

export default Sustainability;
