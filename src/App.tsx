import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/ui/ScrollToTop';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Home from './pages/Home';
import Loading from './components/ui/Loading';
import ErrorBoundary from './components/ui/ErrorBoundary';
import ContactFormPopup from './components/ui/ContactFormPopup';
import FloatingContactButton from './components/ui/FloatingContactButton';
import { useContactForm } from './hooks/useContactForm';

// Direct imports for all important pages (better for SEO/crawling)
import Sustainability from './pages/Sustainability';
import HowWeWork from './pages/HowWeWork';
import ProductsCollection from './pages/ProductsCollection';
import Collaboration from './pages/collaboration';
import Blog from './pages/Blog';
import BlogPostPage from './components/blog/BlogPostPage';
import Designers from './pages/Designers';
import CraftedCalm from './pages/CraftedCalm';
import ItalianKitchenCabinets from './pages/ItalianKitchenCabinets';

// Keep lazy loading only for legal pages (Privacy & Terms)
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterExpanded, setIsFooterExpanded] = useState(false);
  const { isContactFormOpen, openContactForm, closeContactForm } = useContactForm();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Listen for custom contact form open events
    const handleOpenContactForm = () => openContactForm();
    window.addEventListener('openContactForm', handleOpenContactForm);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openContactForm', handleOpenContactForm);
    };
  }, [openContactForm]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FurnitureStore",
      "name": "D&D Design Center",
      "url": "https://dnddesigncenter.com",
      "logo": "https://res.cloudinary.com/designcenter/image/upload/D_D_Logo.avif",
      "image": "https://res.cloudinary.com/designcenter/image/upload/D_D_New_York_Showroom.avif",
      "description": "Luxury bespoke furniture solutions...",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2615 East 17th Street",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "postalCode": "11235",
        "addressCountry": "US"
      },
      "telephone": "+1 718-934-7100",
      "openingHours": "Mo-Su 10:00-19:00",
      "serviceArea": [
        { "@type": "AdministrativeArea", "name": "New York" },
        { "@type": "City", "name": "Brooklyn" },
        { "@type": "City", "name": "Manhattan" },
        { "@type": "City", "name": "Queens" },
        { "@type": "City", "name": "Long Island" },
        { "@type": "AdministrativeArea", "name": "New Jersey" },
        { "@type": "City", "name": "Miami" },
        { "@type": "City", "name": "Orlando" },
        { "@type": "City", "name": "Tampa" },
        { "@type": "AdministrativeArea", "name": "Florida" },
        { "@type": "City", "name": "Columbus" },
        { "@type": "City", "name": "Cleveland" },
        { "@type": "AdministrativeArea", "name": "Ohio" },
        { "@type": "Country", "name": "United States" }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 718-934-7100",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": ["English", "Russian"]
      },
      "sameAs": [
        "https://www.instagram.com/dnddesigncenter.nyc/",
        "https://www.facebook.com/dnddesigncenter"
      ]
    });

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const triggerFooterContact = () => {
    openContactForm();
  };

  return (
    <>
      <Helmet>
        <title>Luxury Custom Furniture Brooklyn, NY | D&D Design Center</title>
        <meta name="description" content="Custom Italian furniture, kitchens, closets & vanities in NYC. Masterfully handmade interiors for American homes. Re-model your space with Italian artistry today." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="D&D Design Center" />
        <meta property="og:description" content="Luxury interiors with bespoke design solutions." />
        <meta property="og:image" content="https://res.cloudinary.com/designcenter/image/upload/D_D_New_York_Showroom.avif" />
        <meta property="og:url" content="https://dnddesigncenter.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="https://res.cloudinary.com/designcenter/image/upload/Favicon_DnD.avif" />
      </Helmet>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Router>
            <ScrollToTop />
            <Navbar
              isScrolled={isScrolled}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              triggerFooterContact={triggerFooterContact}
              openContactForm={openContactForm}
              isFooterExpanded={isFooterExpanded}
            />
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/how-we-work" element={<HowWeWork />} />
                <Route path="/productscollection" element={<ProductsCollection />} />
                <Route path="/collaboration" element={<Collaboration />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/designers" element={<Designers />} />
                <Route path="/crafted-calm" element={<CraftedCalm />} />
                <Route path="/italian-kitchen-cabinets" element={<ItalianKitchenCabinets />} />
                
                <Route path="/privacy" element={
                  <Suspense fallback={<Loading />}>
                    <Privacy />
                  </Suspense>
                } />
                <Route path="/terms" element={
                  <Suspense fallback={<Loading />}>
                    <Terms />
                  </Suspense>
                } />
                
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </ErrorBoundary>
            <Footer onExpandChange={setIsFooterExpanded} />
            
            {/* Floating Contact Button */}
            <FloatingContactButton onClick={openContactForm} />
            
            {/* Contact Form Popup */}
            <ContactFormPopup isOpen={isContactFormOpen} onClose={closeContactForm} />
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;