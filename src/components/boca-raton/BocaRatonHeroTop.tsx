import { useCallback, useState, useEffect } from "react";
import { Button } from "../ui/button";

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

// Countdown end date: January 11, 2026 at midnight EST
const COUNTDOWN_END = new Date('2026-01-11T00:00:00-05:00').getTime();

const BocaRatonHeroTop = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = COUNTDOWN_END - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const triggerFooterContact = useCallback(() => {
    trackEvent('contact_form_opened', 'hero_phone_click');
    window.dispatchEvent(new CustomEvent('openContactForm'));
  }, []);

  const images = [
    "https://res.cloudinary.com/designcenter/image/upload/v1767974878/6_q7dwnv.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1767974874/2_lromdm.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1767974872/5_c3vyli.avif"
  ];

  return (
    <section className="w-full py-4 lg:py-10 bg-white pt-20 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex gap-6 flex-col order-1">
            <div className="flex gap-4 flex-col">
              <h1 className="text-8xl md:text-20xl lg:text-20xl max-w-lg tracking-tight text-left font-bold text-[#1a1a2e]">
                BOCA RATON <br></br>INTERIOR DESIGNER
              </h1>
              <p className="text-md md:text-xl leading-relaxed text-gray-600 max-w-md text-left">
                We are an Interior Design Firm from New York, with 20 years of experience designing luxury Italian interiors in Boca Raton.
              </p>
            </div>
            {/* Buttons - Desktop only */}
            <div className="hidden md:flex flex-col gap-3">
              <p className="text-sm text-gray-500">
                Before you invest, grab a free visualization of your new home risk free. Offer is limited.
              </p>
              <Button size="lg" className="gap-3 w-fit" onClick={triggerFooterContact}>
                CALL US TO RECEIVE A FREE RENDER
              </Button>
              {/* Countdown Timer - Desktop */}
              <div className="flex gap-4 mt-2">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-[#1a1a2e] tabular-nums">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Days</span>
                </div>
                <span className="text-2xl font-bold text-[#C5A267]">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-[#1a1a2e] tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Hours</span>
                </div>
                <span className="text-2xl font-bold text-[#C5A267]">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-[#1a1a2e] tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Min</span>
                </div>
                <span className="text-2xl font-bold text-[#C5A267]">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-[#1a1a2e] tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Sec</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4 order-2">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img 
                src={images[0]} 
                alt="Luxury Italian kitchen design" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="row-span-2 overflow-hidden bg-gray-100">
              <img 
                src={images[1]} 
                alt="Custom interior design project" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img 
                src={images[2]} 
                alt="Modern living space design" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Buttons - Mobile only, below images */}
          <div className="flex md:hidden flex-col gap-3 order-3 w-full bg-[#1a1a2e] p-6 -mx-6">
            <p className="text-md text-white text-center">
              Before you invest, get a free visualization of your new home risk free
            </p>
            <Button size="lg" className="gap-3 w-full" onClick={triggerFooterContact}>
              CALL US TO RECIEVE A FREE RENDER
            </Button>
            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mt-4">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white tabular-nums">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Days</span>
              </div>
              <span className="text-3xl font-bold text-[#C5A267]">:</span>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Hours</span>
              </div>
              <span className="text-3xl font-bold text-[#C5A267]">:</span>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Min</span>
              </div>
              <span className="text-3xl font-bold text-[#C5A267]">:</span>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BocaRatonHeroTop;