import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ServiceAreaHeroTop from "../../components/service-area/ServiceAreaHeroTop";
import ServiceAreaMidCTA from "../../components/service-area/ServiceAreaMidCTA";
import ServiceAreaTextSection from "../../components/service-area/ServiceAreaTextSection";
import ServiceAreaTestimonial from "../../components/service-area/ServiceAreaTestimonial";
import ServiceAreaFAQ from "../../components/service-area/ServiceAreaFAQ";
import VisionnaireSection from "../../components/home/VisionnaireSection";
import { FullWidthImageGrid } from "../../components/shared/FullWidthImageGrid";
import { ServiceAreaConfig } from "../../data/service-areas/types";

interface ServiceAreaPageProps {
  config: ServiceAreaConfig;
}

function ServiceAreaPage({ config }: ServiceAreaPageProps) {
  // Load Inspectlet session recording for this page only
  useEffect(() => {
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

  const baseUrl = 'https://dnddesigncenter.com';
  const isUnderConstruction = config.underConstruction === true;

  return (
    <div className="relative min-h-screen bg-white">
      <Helmet>
        <title>{config.seo.title}</title>
        <meta name="description" content={config.seo.description} />
        <link rel="canonical" href={`${baseUrl}${config.seo.canonicalPath}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={config.seo.ogTitle} />
        <meta property="og:description" content={config.seo.ogDescription} />
        <meta property="og:url" content={`${baseUrl}${config.seo.canonicalPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.seo.twitterTitle} />
        <meta name="twitter:description" content={config.seo.twitterDescription} />

        {/* JSON-LD LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": config.jsonLd.businessName,
            "description": config.jsonLd.businessDescription,
            "url": `${baseUrl}${config.seo.canonicalPath}`,
            "logo": "https://res.cloudinary.com/designcenter/image/upload/v1741965462/DnD_Logo_Transparent.svg",
            "image": "https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif",
            "telephone": "+1 718-934-7100",
            "priceRange": "$$$",
            "areaServed": {
              "@type": config.jsonLd.areaServedType,
              "name": config.jsonLd.areaServedName,
              "containedInPlace": {
                "@type": "State",
                "name": config.jsonLd.containedInPlace
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
                    "description": config.jsonLd.serviceDescriptions.kitchen
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Italian Closet Design",
                    "description": config.jsonLd.serviceDescriptions.closet
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free 3D Design Render",
                    "description": config.jsonLd.serviceDescriptions.render
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
            "name": `${config.cityName} Luxury Kitchen Design Showcase`,
            "description": `Discover custom Italian kitchens and closets designed for ${config.cityName} homeowners by D&D Design Center.`,
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
        {isUnderConstruction ? (
          <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-gray-500 mb-4">
                Service Area
              </p>
              <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4">
                {config.cityName} Page Under Construction
              </h1>
              <p className="text-gray-600">
                We are building this page now. Please check back soon or contact us for details.
              </p>
            </div>
          </section>
        ) : (
          <>
            <ServiceAreaHeroTop hero={config.hero} formType={config.formType} backgroundImage={config.pageBackgroundImage} />
            <FullWidthImageGrid 
              images={config.galleryImages}
              columns={{ mobile: 1, tablet: 2, desktop: 3 }}
            />
            <ServiceAreaMidCTA midCTA={config.midCTA} formType={config.formType} />
            <VisionnaireSection />
            <ServiceAreaTestimonial videoTestimonial={config.videoTestimonial} />
            <ServiceAreaFAQ faq={config.faq} />
          </>
        )}
      </main>
    </div>
  );
}

export default ServiceAreaPage;
