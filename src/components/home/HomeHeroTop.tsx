import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ScrollArrow from "../ui/ScrollArrow";

// Helper function to track GA4 events
const trackEvent = (eventName: string, eventLabel: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      'event_category': 'hero_engagement',
      'event_label': eventLabel,
      'value': 1
    });
  }
};

const HomeHeroTop = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      if (video) {
        video.play().catch((error) => {
          console.log("Autoplay prevented:", error);
          // Optionally, you can show a play button to the user
        });
      }
    };

    // Ensure the video plays after user interaction
    document.addEventListener("click", playVideo, { once: true });

    return () => {
      document.removeEventListener("click", playVideo);
    };
  }, []);



  return (
    <section className="relative h-screen overflow-hidden perspective-1000">
      {" "}
      {/* Background video & overlay */}{" "}
      <div className="absolute inset-0 w-full h-full">
        {" "}
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
          {" "}
          <source
            src="https://res.cloudinary.com/designcenter/video/upload/f_auto,q_auto:low/Hero_Luxury_Decor_Showcase_Slow_Motion.mp4"
            type="video/mp4"
          />{" "}
          Your browser does not support the video tag.{" "}
        </video>{" "}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"
        />{" "}
        {/* Bottom fade to black */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-black pointer-events-none"
        />{" "}
      </div>
      {/* Centered content container */}
      <div className="absolute inset-0 flex items-end sm:items-center justify-center">
        <div className="flex flex-col w-full max-w-4xl mx-auto px-4 pb-24 sm:pb-0">
          {/* Text content positioned at bottom */}
          <div className="text-left sm:text-center mb-8">
            <h1
              className="mb-3 text-7xl sm:text-6xl md:text-8xl lg:text-10xl transform-gpu uppercase text-white/90 leading-tight"
              style={{ perspective: "800px" }}
            >
              <span className="title-word block">D&D Design Center</span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-2 crafted-shine text-shadow break-words text-balance"
              >
                Luxury Interiors for Modern Living
              </span>
            </h1>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=2615+E+17th+St,+Brooklyn,+NY+11235,+United+States"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 text-m sm:text-base md:text-xl lg:text-2xl font-light text-shadow hover:text-[#B49157] transition-colors duration-200 underline"
              onClick={() => trackEvent('click', 'google_maps_showroom')}
            >
              Visit our NYC Showroom 📍
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-row justify-start sm:justify-center gap-3 sm:gap-5">
            <div className="flex flex-col items-center w-full sm:w-auto">
              <button
                type="button"
                className="contact-now-hero-btn w-full sm:w-auto px-6 sm:px-10 py-3 text-white text-sm sm:text-base font-regular shadow border border-[#B49157] hover:bg-[#A38047] transition-colors duration-200 min-h-[44px]"
                onClick={() => {
                  trackEvent('click', 'contact_us_button');
                  window.dispatchEvent(new CustomEvent('openContactForm'));
                }}
              >
                CONTACT US
              </button>
              <span className="text-xs invisible h-0">
                &nbsp;
              </span>
            </div>
            <div className="flex flex-col items-center w-full sm:w-auto">
              <Link
                to="/productscollection"
                className="find-style-btn w-full sm:w-auto px-6 sm:px-10 py-3 text-sm sm:text-base font-regular border border-[#B49157] text-white bg-transparent transition-colors duration-200 hover:bg-[#C5A267] flex items-center justify-center min-h-[44px]"
                onClick={() => trackEvent('click', 'view_products_button')}
              >
                <span role="img" aria-label="palette" className="mr-0"></span>
              VIEW PRODUCTS
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Arrow - Hidden on mobile */}
      <div
        className="hidden sm:block absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        {" "}
        <ScrollArrow
          targetId="HomeProjectsCards"
          className="w-10 h-10 md:w-12 md:h-12 text-white hover:text-[#B49157] transition-colors duration-300 stroke-[2.5]"
        />{" "}
      </div>{" "}
      <style>{`
        @keyframes bounce-smooth {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .animate-bounce {
          animation: bounce-smooth 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default HomeHeroTop;