import { useState, useEffect, useCallback } from 'react';
import ProductCollectionHero from '../components/productcollection/ProductCollectionHero';
import ProductCollectionVisionnaire from '../components/productcollection/ProductCollectionVisionnaire';
import ProductCollectionInfo from '../components/productcollection/ProductCollectionInfo';
import ProductGalleryContent from '../components/productcollection/ProductGalleryContent';
import { useInView } from 'react-intersection-observer';
import { useSwipeable } from 'react-swipeable';
import { ProductCollectionSteps } from '../components/productcollection/ProductCollectionSteps';
import { HeroScrollDemoProduct } from '../components/ui/HeroScrollDemoProduct';
import ProductCollectionCTA from '../components/productcollection/ProductCollectionCTA';
import BocaRatonFormModal from '../components/boca-raton/BocaRatonFormModal';
import { useContactForm } from '../hooks/useContactForm';
import { Helmet } from 'react-helmet';
import { Feature197 } from '../components/ui/accordion-feature-section';
import { accordionFeatureSeoMetadata } from '../data/accordionFeatureSeoMetadata';
import BrandsShowcase from '../components/productcollection/BrandsShowcase';

const ProductsCollection = () => {
  // State for UI
  const [isPullToRefreshing, setIsPullToRefreshing] = useState(false);
  const [, setLoadMoreCount] = useState(1);

  // Intersection observer for infinite scroll
  const { inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Handle infinite scroll when bottom is visible
  useEffect(() => {
    if (inView) {
      // Add a small delay to simulate loading more content
      const timer = setTimeout(() => {
        setLoadMoreCount((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  // Scroll to top when component mounts
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    };

    scrollToTop();
    // Use a timeout as a fallback in case the initial scroll doesn't work
    const timer = setTimeout(scrollToTop, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle pull-to-refresh functionality
  const handlePullToRefresh = useCallback(() => {
    setIsPullToRefreshing(true);

    // Simulate refresh with a small delay
    setTimeout(() => {
      // Reset any necessary state here
      setLoadMoreCount(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsPullToRefreshing(false);
    }, 1000);
  }, []);

  // Setup swipe handlers for pull-to-refresh
  const swipeHandlers = useSwipeable({
    onSwipedDown: (eventData) => {
      // Only trigger pull-to-refresh if we're at the top of the page
      if (window.scrollY < 10 && eventData.deltaY > 70) {
        handlePullToRefresh();
      }
    },
    delta: 50, // Min distance before a swipe is recognized
    preventScrollOnSwipe: false,
    trackTouch: true,
    trackMouse: false,
  });

  // Use the hook for consistent footer contact behavior
  const { isContactFormOpen, openContactForm, closeContactForm } = useContactForm();
  const triggerFooterContact = () => openContactForm();

  return (
    <div className="min-h-screen overflow-x-hidden" {...swipeHandlers}>
      {/* Pull-to-refresh indicator */}
      {isPullToRefreshing && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-16 bg-white/80 backdrop-blur-sm">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-[#C5A267]"></div>
          <span className="ml-2 text-sm text-gray-600">Refreshing...</span>
        </div>
      )}
      <Helmet>
        {/* ── Primary SEO ── */}
    <title>Luxury Custom Kitchens & Furniture – NYC Showroom | D&D</title>
    <meta name="description"
      content="Explore our curated Italian collection: kitchens, closets, lighting & more. Brooklyn showroom. Complimentary design consultation available." />
        <link rel="canonical" href="https://dnddesigncenter.com/productscollection" />
        <meta name="robots"
              content="index,follow,max-snippet:200,max-image-preview:large" />

        {/* ── OG / Twitter ── */}
        <meta property="og:title"
              content="Luxury Custom Kitchens & Interiors NYC – Explore the Collection" />
        <meta property="og:description"
              content="Discover the elegance of contemporary, custom Italian furnishings crafted for modern interiors." />
        <meta property="og:image"
              content="https://res.cloudinary.com/designcenter/image/upload/Product_2/Kitchen/Traditional/Kitchen_Traditional_6.avif" />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url"   content="https://dnddesigncenter.com/productscollection" />
        <meta property="og:type"  content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ── Consolidated structured data ── */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context":"https://schema.org",
          "@graph":[
            {
              "@type":"VideoObject",
              "@id":"#promoVideo",
              "name":"New York City Furniture Design",
              "description":"Experience our hand-crafted luxury furniture collection, designed in the heart of Italy.",
              "thumbnailUrl":"https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif",
              "uploadDate":"2025-04-01",
              "duration":"PT0M45S",
              "contentUrl":"https://res.cloudinary.com/designcenter/video/upload/New_York_City_Furniture_Design.mp4",
              "embedUrl":"https://res.cloudinary.com/designcenter/video/upload/New_York_City_Furniture_Design.mp4",
              "publisher":{
                "@type":"Organization",
                "name":"D&D Design Center",
                "logo":{"@type":"ImageObject","url":"https://res.cloudinary.com/designcenter/image/upload/v1741965462/DnD_Logo_Transparent.svg"}
              }
            },
            {
              "@type":"ItemList",
              "@id":"#collectionList",
              "name":"Luxury Custom Kitchen & Interior Collection",
              "itemListElement":[
                {
                  "@type":"ListItem",
                  "position":1,
                  "item":{
                    "@type":"Product",
                    "name":"Italian Kitchen Cabinets Collection",
                    "image":"https://res.cloudinary.com/designcenter/image/upload/v1744046400/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_11.avif",
                    "url":"https://dnddesigncenter.com/productscollection",
                    "description":"Handcrafted Italian cabinets with premium materials and timeless design"
                  }
                },
                {
                  "@type":"ListItem",
                  "position":2,
                  "item":{
                    "@type":"Product",
                    "name":"Custom Leather Bedroom Furniture",
                    "image":"https://res.cloudinary.com/designcenter/image/upload/v1744036618/Product_2/Furniture/Bedroom/Bedroom_5.avif",
                    "url":"https://dnddesigncenter.com/productscollection",
                    "description":"Elegant Italian beds and nightstands crafted for NYC homes"
                  }
                },
                {
                  "@type":"ListItem",
                  "position":3,
                  "item":{
                    "@type":"Product",
                    "name":"Luxury Walk-in Closets",
                    "image":"https://res.cloudinary.com/designcenter/image/upload/v1744033241/Product_2/Closet/Closet_13.avif",
                    "url":"https://dnddesigncenter.com/productscollection",
                    "description":"Bespoke Italian walk-in closets with custom finishes"
                  }
                }
              ]
            },
            /* FAQ block passed in from accordionFeatureSeoMetadata */
            accordionFeatureSeoMetadata
          ]
        })}
        </script>
      </Helmet>
      <ProductCollectionHero />
      <BrandsShowcase />
      <ProductGalleryContent />
      <Feature197 />
      <ProductCollectionVisionnaire />
      <ProductCollectionSteps />
      <div className="w-full">
        <HeroScrollDemoProduct />
      </div>
      <ProductCollectionInfo />
      <ProductCollectionCTA 
        triggerFooterContact={triggerFooterContact} 
      />
      
      {/* Contact Form Modal */}
      <BocaRatonFormModal isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};

export default ProductsCollection;
