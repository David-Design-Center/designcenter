import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import ScrollToTop from './components/layout/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Loading from './components/layout/Loading';
import ErrorBoundary from './components/layout/ErrorBoundary';
import ContactFormModal from './components/service-area/ContactFormModal';
import FloatingContactButton from './components/layout/FloatingContactButton';
import { useContactForm } from './hooks/useContactForm';

// Direct imports for all important pages (better for SEO/crawling)
import Sustainability from './pages/studio/Sustainability';
import HowWeWork from './pages/studio/HowWeWork';
import ProductsCollection from './pages/services/ProductsCollection';
import Collaboration from './pages/studio/Collaboration';
import Designers from './pages/studio/Designers';
import CraftedCalm from './pages/studio/Quiz';
import ItalianKitchenCabinets from './pages/services/ItalianKitchenCabinets';
import Kitchens from './pages/services/Kitchens';
import BookRedirect from './components/layout/BookRedirect';
import Blog from './pages/blog/Blog';

// Service Area pages
import ServiceAreasIndex from './pages/service-areas/ServiceAreasIndex';
import BocaRatonPage from './pages/service-areas/BocaRatonPage';
import NewYorkCityPage from './pages/service-areas/NewYorkCityPage';
import LongIslandPage from './pages/service-areas/LongIslandPage';
import NewJerseyPage from './pages/service-areas/NewJerseyPage';
import MiamiPage from './pages/service-areas/MiamiPage';

// Keep lazy loading only for legal pages (Privacy & Terms)
const Privacy = lazy(() => import('./pages/policy/Privacy'));
const Terms = lazy(() => import('./pages/policy/Terms'));

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
      "@type": ["FurnitureStore", "LocalBusiness"],
      "@id": "https://dnddesigncenter.com#business",
      "name": "D&D Design Center",
      "url": "https://dnddesigncenter.com",
      "logo": "https://res.cloudinary.com/designcenter/image/upload/D_D_Logo.avif",
      "image": "https://res.cloudinary.com/designcenter/image/upload/D_D_New_York_Showroom.avif",
      "description": "Italian kitchens, closets, and luxury furniture for NYC homes.",
      "foundingDate": "2006",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2615 East 17th Street",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "postalCode": "11235",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.586662,
        "longitude": -73.953265
      },
      "telephone": "+1 718-934-7100",
      "openingHours": "Mo-Su 10:00-19:00",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "10:00",
          "closes": "19:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "New York City" },
        { "@type": "AdministrativeArea", "name": "Long Island" },
        { "@type": "State", "name": "New Jersey" },
        { "@type": "City", "name": "Boca Raton" },
        { "@type": "City", "name": "Miami" }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 718-934-7100",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": ["English"]
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
                <Route path="/blog/:slug" element={<Navigate to="/blog" replace />} />
                <Route path="/designers" element={<Designers />} />
                <Route path="/crafted-calm" element={<CraftedCalm triggerFooterContact={openContactForm} />} />
                <Route path="/italian-kitchen-cabinets" element={<ItalianKitchenCabinets />} />
                <Route path="/kitchens" element={<Kitchens />} />
                
                {/* Service Area Pages */}
                <Route path="/service-areas" element={<ServiceAreasIndex />} />
                <Route path="/service-areas/boca-raton-florida" element={<BocaRatonPage />} />
                <Route path="/service-areas/new-york-city" element={<NewYorkCityPage />} />
                <Route path="/service-areas/long-island" element={<LongIslandPage />} />
                <Route path="/service-areas/new-jersey" element={<NewJerseyPage />} />
                <Route path="/service-areas/miami-florida" element={<MiamiPage />} />
                
                {/* Legacy redirect */}
                <Route path="/boca-raton-interior-designer" element={<Navigate to="/service-areas/boca-raton-florida" replace />} />
                
                <Route path="/book" element={<BookRedirect openContactForm={openContactForm} />} />
                
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
            
            {/* Contact Form Modal */}
            <ContactFormModal isOpen={isContactFormOpen} onClose={closeContactForm} />
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;