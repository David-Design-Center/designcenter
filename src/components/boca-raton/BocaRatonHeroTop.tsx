import { useEffect, useRef } from "react";
import ScrollArrow from "../ui/ScrollArrow";

// Helper function to track GA4 events
const trackEvent = (eventName: string, eventLabel: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      'event_category': 'boca_raton_hero_engagement',
      'event_label': eventLabel,
      'value': 1
    });
  }
};

const BocaRatonHeroTop = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      if (video) {
        video.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    };

    document.addEventListener("click", playVideo, { once: true });

    return () => {
      document.removeEventListener("click", playVideo);
    };
  }, []);

  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-visible">
      {/* Background video & overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif"
        >
          <source
            src="https://res.cloudinary.com/designcenter/video/upload/v1765740067/txk6exbm9h3kwpggzlmj.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Two-column layout */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 py-20 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            
            {/* Left Column - Value and Outcome */}
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-white leading-tight mb-4">
                <span className="block">Boca Raton</span>
                <span className="block text-[#C5A267]">Interior Designer</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-4">
                Specialist Interior Designer - Get Free 3D Design
              </p>
              
              <p className="text-sm sm:text-base text-white/80 font-light mb-2 max-w-md">
                Looking for an interior designer in Boca Raton? Schedule a design consultation. <br />No Pressure Consultation. Not a Sales Call.
              </p>
              <p className="text-xs text-white/50 font-light mb-6 max-w-md">
                Typical timeline: 3-6 months depending on project.
              </p>

              {/* Benefit bullets */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C5A267] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90 text-sm">Increase resale value with Italian craftsmanship</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C5A267] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90 text-sm">Remove renovation chaos with one partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C5A267] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90 text-sm">Live daily in a space that feels intentional</span>
                </div>
              </div>

              {/* Social proof */}
              <div className="border-l-2 border-[#C5A267] pl-3">
                <p className="text-white/80 italic text-xs sm:text-sm">
                  "Our renovation finally feels worth the investment."
                </p>
                <p className="text-[#C5A267] text-xs mt-1">Verified Boca Raton Homeowner</p>
              </div>
            </div>

            {/* Right Column - Calendly Scheduling */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl w-full lg:max-w-sm mx-auto lg:mx-0">
              {/* Header above Calendly */}
              <div className="bg-[#1A1A1A] px-3 py-2 text-center rounded-t-lg">
                <h2 className="text-base sm:text-lg font-serif text-white mb-0.5">
                  Schedule a Private Design Consultation
                </h2>
                <p className="text-white/70 text-xs">
                  No obligation. No sales pressure. 15 minutes.
                </p>
              </div>
              
              {/* Calendly Widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/dnddesigncenter-info/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=c5a267"
                style={{ minWidth: '280px', height: '500px', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BocaRatonHeroTop;

