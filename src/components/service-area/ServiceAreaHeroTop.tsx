import { useState, useEffect } from "react";
import { Button } from "../shared/button";
import { Phone, Send, Check } from "lucide-react";
import { ServiceAreaHero } from "../../data/service-areas/types";

interface ServiceAreaHeroTopProps {
  hero: ServiceAreaHero;
  formType: string;
  backgroundImage?: string;
}

const PHONE_NUMBER = "tel:+17189347100";

// Countdown end date: January 19, 2026 at midnight EST
const COUNTDOWN_END = new Date('2026-01-19T00:00:00-05:00').getTime();

// Helper for form submission conversion
const trackFormSubmitConversion = (eventCategory: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-17084982836/P6POCKnJs9QbELTM4NI_',
      'value': 100,
      'currency': 'USD',
      'event_category': eventCategory,
      'event_label': 'hero_email_submit'
    });
  }
};

// Helper function to track phone call clicks with Google Ads conversion
const trackPhoneClick = (location: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'click', {
      'event_category': 'phone_call',
      'event_label': location,
      'value': 25
    });
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-17084982836/LZqdCPeO_eUbELTM4NI_',
      'value': 25,
      'currency': 'USD',
      'event_category': 'phone_lead',
      'event_label': location
    });
  }
};

const ServiceAreaHeroTop = ({ hero, formType, backgroundImage }: ServiceAreaHeroTopProps) => {
  const [_timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');

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

  const validateEmail = (emailValue: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      setEmailError('');
      return false;
    } else if (!emailRegex.test(emailValue)) {
      setEmailError('Please enter a valid email');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) return;

    setIsSubmitting(true);
    try {
      const submissionData = {
        email,
        timestamp: new Date().toISOString(),
        formType: `${formType} Hero Email`,
        source: `${formType} Page - Hero Section`
      };

      await fetch('https://hook.us2.make.com/c4yxbfemmbazew2y219wu0m11wtp9unn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      trackFormSubmitConversion(`${formType.toLowerCase().replace(/\s+/g, '_')}_lead`);
      setSubmitStatus('success');
      setEmail('');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCall = () => {
    trackPhoneClick('hero_call_now_button');
    window.location.href = PHONE_NUMBER;
  };

  const testimonialText = `${hero.testimonial.quote} – ${hero.testimonial.author}, ${hero.testimonial.location}`;

  return (
    <section
      className="relative w-full py-4 lg:py-10 bg-[#1a1a2e] pt-20 lg:pt-32 bg-cover bg-center bg-no-repeat"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/60" />}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="flex gap-6 flex-col order-1">
            <div className="flex gap-4 flex-col">
              <h1 className="text-3xl md:text-20xl lg:text-20xl max-w-lg tracking-tight text-left font-bold text-white">
                {hero.heading}
              </h1>
              <p className="text-md md:text-xl leading-relaxed text-gray-100 max-w-md text-left">
                {hero.subheading}
              </p>
            </div>
            {/* Buttons - Desktop only */}
            <div className="hidden md:flex flex-col gap-4 bg-white/10 border border-white/15 p-6 max-w-md">
              <p className="text-md text-white text-center">
                {hero.ctaText}
              </p>
              <div className="flex flex-col gap-3">
                <Button size="lg" className="gap-3 w-full justify-center" onClick={handleCall}>
                  <Phone className="w-5 h-5" />
                  CALL NOW
                </Button>
              </div>
              {/* Testimonial */}
              <div className="flex gap-3 items-center text-left mt-4">
                <img 
                  src={hero.testimonial.image} 
                  alt="Interior Designer"
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="italic text-gray-300 text-sm leading-relaxed text-left">
                    {testimonialText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons - Mobile only, below images */}
          <div className="flex md:hidden flex-col gap-4 order-3 w-full bg-black/50 border border-white/15 p-6">
            <p className="text-md text-white text-center">
              {hero.ctaText}
            </p>
            <div className="flex flex-col gap-3 w-full">
              <Button size="lg" className="gap-3 w-full justify-center" onClick={handleCall}>
                <Phone className="w-5 h-5" />
                CALL NOW
              </Button>    
            </div>
            {/* Testimonial */}
            <div className="flex gap-3 items-center text-left">
              <img 
                src={hero.testimonial.image} 
                alt="Interior Designer"
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="italic text-gray-300 text-sm leading-relaxed">
                  {testimonialText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaHeroTop;
