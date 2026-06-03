import VisionnaireHero from '../../components/collaboration/VisionnaireHero';
import VisionnaireIntroWithLoopingWords from '../../components/collaboration/VisionnaireIntroWithLoopingWords';
import VisionnaireShowcase from '../../components/collaboration/VisionnaireShowcase';
import VisionnaireCTA from '../../components/collaboration/VisionnaireCTA';
import VisionnaireThankYou from '../../components/collaboration/VisionnaireThankYou';
import { HeroScrollDemo } from '../../components/animations/HeroScrollDemo';
import { GridMotionDemo } from '../../components/collaboration/GridMotionDemo';
import ContactFormModal from '../../components/service-area/ContactFormModal';
import { useContactForm } from '../../hooks/useContactForm';
import { Helmet } from 'react-helmet';
import VisionnaireBrands from '../../components/collaboration/VisionnaireBrands';

const Collaboration = () => {
  const { isContactFormOpen, openContactForm, closeContactForm } = useContactForm();
  const triggerFooterContact = () => openContactForm();

  return (
    <div className="relative min-h-screen bg-white">
      <Helmet>
        <title>Luxury Designer Collaborations | D&D Design Center</title>
        <meta name="description" content="Discover exclusive collaborations with Visionnaire and leading Italian brands. See limited collections and bespoke interiors." />
        <link rel="canonical" href="https://dnddesigncenter.com/collaboration" />
        <meta name="robots" content="index,follow,max-snippet:200,max-image-preview:large" />

        <meta property="og:title" content="Luxury Designer Collaborations | D&D Design Center" />
        <meta property="og:description" content="Exclusive collaborations with Visionnaire and leading Italian brands." />
        <meta property="og:url" content="https://dnddesigncenter.com/collaboration" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury Designer Collaborations | D&D Design Center" />
        <meta name="twitter:description" content="Exclusive collaborations with Visionnaire and leading Italian brands." />
        <meta name="twitter:image" content="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Visionnaire Luxury Collection",
            "description": "Explore D&D Design Center's exclusive collaboration with Visionnaire – where Italian artistry meets modern luxury in bespoke interiors.",
            "thumbnailUrl": "https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif",
            "uploadDate": "2025-04-01",
            "contentUrl": "https://res.cloudinary.com/designcenter/video/upload/f_auto,q_auto:good/visionnaire-luxury-collection.mp4",
            "embedUrl": "https://res.cloudinary.com/designcenter/video/upload/f_auto,q_auto:good/visionnaire-luxury-collection.mp4",
            "publisher": {
              "@type": "Organization",
              "name": "D&D Design Center",
              "logo": {
                "@type": "ImageObject",
                "url": "https://res.cloudinary.com/designcenter/image/upload/v1741965462/DnD_Logo_Transparent.svg"
              }
            }
          })}
        </script>
      </Helmet>
      <main>
        <VisionnaireHero />
        <VisionnaireIntroWithLoopingWords />
        <GridMotionDemo />
        <VisionnaireShowcase />
        <VisionnaireBrands />
        <VisionnaireThankYou />
        <HeroScrollDemo />
        <VisionnaireCTA triggerFooterContact={triggerFooterContact} />
      </main>
      
      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};

export default Collaboration;
