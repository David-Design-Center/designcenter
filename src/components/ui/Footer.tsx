import { useState, useEffect, forwardRef } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Helper function to track phone call clicks with Google Ads conversion
const trackPhoneClick = (location: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    // GA4 event
    (window as any).gtag('event', 'click', {
      'event_category': 'phone_call',
      'event_label': location,
      'value': 25
    });
    // Google Ads conversion for phone clicks
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-17084982836/LZqdCPeO_eUbELTM4NI_',
      'value': 25,
      'currency': 'USD',
      'event_category': 'phone_lead',
      'event_label': location
    });
    console.log(`Phone click tracked: ${location}`);
  }
};

interface FooterProps {
  id?: string;
  onExpandChange?: (expanded: boolean) => void;  // Add this new prop
}

const ContactInfo = ({ isMobile }: { isMobile: boolean }) => (
  <div className="space-y-3">
    <h3 className="text-lg font-medium text-gray-900">
      Contact Information
    </h3>
    <div className="space-y-3">
      <div className={`flex items-center space-x-3 ${isMobile ? 'text-base' : 'text-sm'} font-medium text-gray-900`}>
        <span>D&amp;D Design Center</span>
      </div>
      <a
        href="tel:+17189347100"
        className={`flex items-center space-x-3 ${isMobile ? 'text-base' : 'text-sm'} text-gray-600 min-h-[44px]`}
        onClick={() => trackPhoneClick('footer_phone_link')}
      >
        <Phone className="w-4 h-4 text-[#C5A267] flex-shrink-0" />
        <span>+1 718-934-7100</span>
      </a>
      <a
        href="mailto:info@dnddesigncenter.com"
        className={`flex items-center space-x-3 ${isMobile ? 'text-base' : 'text-sm'} text-gray-600 min-h-[44px]`}
      >
        <Mail className="w-4 h-4 text-[#C5A267] flex-shrink-0" />
        <span>info@dnddesigncenter.com</span>
      </a>
      <div className={`flex items-center space-x-3 ${isMobile ? 'text-base' : 'text-sm'} text-gray-600`}>
        <MapPin className="w-4 h-4 text-[#C5A267] flex-shrink-0" />
        <span>
          2615 E 17th St, Brooklyn, NY 11235, United States
        </span>
      </div>
    </div>
  </div>
);

const NavigationLinks = ({ isMobile }: { isMobile: boolean }) => {
  const links = [
    { to: "/", label: "Home", external: false },
    { to: "/productscollection", label: "Product Collection", external: false },
    { to: "/collaboration", label: "Collaboration", external: false },
    { to: "/sustainability", label: "Sustainability", external: false },
    { to: "/how-we-work", label: "How We Design", external: false },
    { to: "/blog", label: "Blog", external: false },
    { to: "/admin/index.html", label: "Admin", external: true }
  ];

  if (isMobile) {
    return (
      <div className="border-t border-gray-200 pt-4">
        <details className="group">
          <summary className="flex justify-between items-center cursor-pointer min-h-[44px]">
            <h3 className="text-lg font-medium text-gray-900">
              Navigation
            </h3>
            <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300" />
          </summary>
          <nav className="mt-3 grid grid-cols-2 gap-y-2 gap-x-4">
            {links.map((link, index) =>
              link.external ? (
                <a
                  key={index}
                  href={link.to}
                  className="text-left text-base text-gray-600 hover:text-[#C5A267] transition-colors duration-200 min-h-[44px] flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.to}
                  className="text-left text-base text-gray-600 hover:text-[#C5A267] transition-colors duration-200 min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </details>
      </div>
    );
  }
  
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Navigation
      </h3>
      <nav className="grid grid-cols-2 gap-4">
        {links.map((link, index) =>
          link.external ? (
            <a
              key={index}
              href={link.to}
              className="text-left text-sm text-gray-600 hover:text-[#C5A267] transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={index}
              to={link.to}
              className="text-left text-sm text-gray-600 hover:text-[#C5A267] transition-colors duration-200"
            >
              {link.label}
            </Link>
          )
        )}
      </nav>
    </div>
  );
};

const MapComponent = ({ isMobile, isExpanded }: { isMobile: boolean, isExpanded: boolean }) => {
  if (!isExpanded) return null;
  
  return (
    <div className={`${isMobile ? "space-y-2" : "h-[300px] rounded-lg overflow-hidden"}`}>
      {isMobile && (
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Location</h3>
          <a
            href="https://maps.google.com/?q=2615+East+17th+Street+Brooklyn,+New+York+11235,+USA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A267] text-sm flex items-center gap-1"
          >
            View on Google Maps <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
      <div className={`${isMobile ? "h-[200px] md:h-[250px]" : "h-[300px]"} rounded-lg overflow-hidden`}>
        <iframe
          title="D&D Design Center Location"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="/map-locator.html"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const Footer = forwardRef<HTMLElement, FooterProps>((_props, ref) => {
  // Detect mobile vs. desktop
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer
      id="footer"
      ref={ref}
      className="w-full bg-[#fafafa] border-t border-gray-200"
    >
      <div
        className={`max-w-[1200px] mx-auto ${
          isMobile ? 'px-4 py-6' : 'px-6 py-8'
        }`}
      >
          {isMobile ? (
            <div className="grid grid-cols-1 gap-6">
              {/* Contact Form Button */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Get in Touch</h3>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
                  className="w-full py-3 px-4 rounded-lg text-white text-base font-medium transition-all duration-200 min-h-[44px] bg-[#C5A267] hover:bg-[#B49157] flex items-center justify-center space-x-2"
                >
                  <span>Get Free Quote & Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <p className="text-sm text-gray-500 text-center">Complete the form and our team will contact you shortly</p>
              </div>
              <ContactInfo isMobile={isMobile} />
              <NavigationLinks isMobile={isMobile} />
              <MapComponent isMobile={isMobile} isExpanded={true} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Contact Form Button */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Get in Touch</h3>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
                  className="w-full py-3 px-4 rounded-lg text-white text-sm font-medium transition-all duration-200 min-h-[44px] bg-[#C5A267] hover:bg-[#B49157] flex items-center justify-center space-x-2"
                >
                  <span>Get Free Quote & Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <p className="text-sm text-gray-500 text-center">Complete the form and our team will contact you shortly</p>
              </div>
              <div className="space-y-6">
                <NavigationLinks isMobile={isMobile} />
                <ContactInfo isMobile={isMobile} />
              </div>
              <MapComponent isMobile={isMobile} isExpanded={true} />
            </div>
          )}

          {/* Footer bottom row */}
          <div className={`${isMobile ? 'mt-6 pt-4' : 'mt-8 pt-6'} border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0`}>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} D&D Design Center. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>
        </div>
    </footer>
  );
});

export default Footer;
