import { useEffect } from "react";
import { Helmet } from "react-helmet";
import BocaRatonHeroTop from "../components/boca-raton/BocaRatonHeroTop";
import HomeCollections from "../components/home/HomeCollections";
import HomeProjectsCards from "../components/home/HomeProjectsCards";
import HomeHowWeWork from "../components/home/HomeHowWeWork";
import BocaRatonFAQ from "../components/boca-raton/BocaRatonFAQ";
import BocaRatonHeroBottom from "../components/boca-raton/BocaRatonHeroBottom";
import VisionnaireSection from "../components/home/VisionnaireSection";
import SustainabilitySection from "../components/home/SustainabilitySection";
import BocaRatonTextSection from "../components/boca-raton/BocaRatonTextSection";
import { BocaRatonAccordionFeature } from '../components/boca-raton/BocaRatonAccordionFeature';

function BocaRatonInteriorDesigner() {
  // Load Inspectlet session recording for this page only
  useEffect(() => {
    // Avoid loading in development or if already loaded
    if (typeof window === 'undefined' || (window as any).__inspld) return;
    
    (window as any).__insp = (window as any).__insp || [];
    (window as any).__insp.push(['wid', 1105015992]);
    
    const loadInspectlet = () => {
      if ((window as any).__inspld) return;
      (window as any).__inspld = 1;
      
      const insp = document.createElement('script');
      insp.type = 'text/javascript';
      insp.async = true;
      insp.id = 'inspsync';
      insp.src = 'https://cdn.inspectlet.com/inspectlet.js?wid=1105015992&r=' + Math.floor(new Date().getTime() / 3600000);
      
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(insp, firstScript);
      }
    };
    
    setTimeout(loadInspectlet, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <Helmet>
        <title>Boca Raton Interior Designer | Luxury Italian Kitchens & Closets | D&D Design Center</title>
        <meta
          name="description"
          content="Custom Italian kitchens and closets for Boca Raton homeowners. Increase your home value with Italian craftsmanship. Free 3D design render. White-glove installation in 90 days."
        />
        <link rel="canonical" href="https://dnddesigncenter.com/boca-raton-interior-designer" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Boca Raton Interior Designer | Luxury Italian Kitchens & Closets" />
        <meta property="og:description" content="Custom Italian kitchens and closets tailored for Boca Raton homes, lifestyles, and property values. Free 3D design consultation." />
        <meta property="og:url" content="https://dnddesigncenter.com/boca-raton-interior-designer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boca Raton Interior Designer | Luxury Italian Kitchens & Closets" />
        <meta name="twitter:description" content="Custom Italian kitchens and closets tailored for Boca Raton homes. Free 3D design render." />

        {/* JSON-LD LocalBusiness for Boca Raton */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "D&D Design Center - Boca Raton",
            "description": "Custom Italian kitchens and closets for Boca Raton homeowners who value precision and long-term value.",
            "url": "https://dnddesigncenter.com/boca-raton-interior-designer",
            "logo": "https://res.cloudinary.com/designcenter/image/upload/v1741965462/DnD_Logo_Transparent.svg",
            "image": "https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif",
            "telephone": "+1 718-934-7100",
            "priceRange": "$$$",
            "areaServed": {
              "@type": "City",
              "name": "Boca Raton",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceType": ["Interior Design", "Kitchen Design", "Closet Design", "Italian Furniture"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Luxury Italian Interior Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Italian Kitchen Design",
                    "description": "Fully custom Italian kitchens designed and installed for Boca Raton homeowners"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Italian Closet Design",
                    "description": "Bespoke Italian closet systems tailored to your lifestyle"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free 3D Design Render",
                    "description": "See your kitchen in 3D before construction begins"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.instagram.com/dnddesigncenter.nyc/",
              "https://www.facebook.com/dnddesigncenter"
            ]
          })}
        </script>

        {/* JSON-LD VideoObject for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Boca Raton Luxury Kitchen Design Showcase",
            "description": "Discover custom Italian kitchens and closets designed for Boca Raton homeowners by D&D Design Center.",
            "thumbnailUrl": "https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif",
            "uploadDate": "2025-04-01",
            "contentUrl": "https://res.cloudinary.com/designcenter/video/upload/f_auto,q_auto:low/Hero_Luxury_Decor_Showcase_Slow_Motion.mp4",
            "embedUrl": "https://res.cloudinary.com/designcenter/video/upload/f_auto,q_auto:low/Hero_Luxury_Decor_Showcase_Slow_Motion.mp4",
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
      
      <main className="pb-16">
        <BocaRatonHeroTop />
        <HomeProjectsCards />
        <SustainabilitySection />
        <VisionnaireSection />
        <BocaRatonTextSection />
        <HomeCollections />
        <HomeHowWeWork />
        <BocaRatonAccordionFeature />
        <BocaRatonFAQ />
        <BocaRatonHeroBottom />
      </main>
    </div>
  );
}

export default BocaRatonInteriorDesigner;
