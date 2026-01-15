import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Phone, Send, Check } from "lucide-react";

// Helper for form submission conversion
const trackFormSubmitConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-17084982836/P6POCKnJs9QbELTM4NI_',
      'value': 100,
      'currency': 'USD',
      'event_category': 'boca_raton_lead',
      'event_label': 'hero_email_submit'
    });
  }
};

// Countdown end date: January 19, 2026 at midnight EST
const COUNTDOWN_END = new Date('2026-01-19T00:00:00-05:00').getTime();

const PHONE_NUMBER = "tel:+17189347100";

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

const BocaRatonHeroTop = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
        formType: 'Boca Raton Hero Email',
        source: 'Boca Raton Page - Hero Section'
      };

      await fetch('https://hook.us2.make.com/c4yxbfemmbazew2y219wu0m11wtp9unn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      trackFormSubmitConversion();
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
              <h1 className="text-3xl md:text-20xl lg:text-20xl max-w-lg tracking-tight text-left font-bold text-[#1a1a2e]">
                Transform Your Boca Raton Home with Award-Winning Italian Interior Design
              </h1>
              <p className="text-md md:text-xl leading-relaxed text-gray-600 max-w-md text-left">
                We are an Interior Design Firm from New York, with 20 years of experience designing luxury Italian interiors in Boca Raton.
              </p>
            </div>
            {/* Buttons - Desktop only */}
            <div className="hidden md:flex flex-col gap-4">
              <p className="text-sm text-gray-500">
                Before you invest, grab a free professional consultation of your new home risk free. Offer is limited.
              </p>
              <div className="flex flex-col gap-3 max-w-md">
                <Button size="lg" className="gap-3 w-full justify-center" onClick={handleCall}>
                  <Phone className="w-5 h-5" />
                  Call Now and Get a Free Consultation
                </Button>
                {submitStatus === 'success' ? (
                  <div className="flex items-center justify-center gap-2 text-green-600 py-3 border border-green-600">
                    <Check className="w-5 h-5" />
                    <span>Thank you! We'll be in touch soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="flex flex-col gap-2">
                    <div className="flex w-full h-12">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email so we can reach out"
                        className="flex-1 px-4 h-12 border border-gray-300 focus:border-[#C5A267] focus:outline-none text-[#1a1a2e]"
                        required
                      />
                      <Button type="submit" size="lg" className="px-6 h-12" disabled={isSubmitting}>
                        {isSubmitting ? '...' : <Send className="w-5 h-5" />}
                      </Button>
                    </div>
                    {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
                  </form>
                )}
              </div>
              {/* Countdown Timer - Desktop */}
              <div className="flex justify-center gap-4 mt-2">
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
              {/* Testimonial */}
              <div className="mt-10 text-center max-w-md">
                <p className="italic text-gray-700 text-sm leading-relaxed">
                  "We were blown away by the design and service. The space feels like a 5-star resort now — truly world-class experience."
                </p>
                <p className="font-bold text-[#1a1a2e] mt-2 text-sm">
                  – Lisa M., Boca Raton
                </p>
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
          <div className="flex md:hidden flex-col gap-4 order-3 w-full bg-[#1a1a2e] p-6 -mx-6">
            <p className="text-md text-white text-center">
                Before you invest, grab a free professional consultation of your new home risk free.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <Button size="lg" className="gap-3 w-full justify-center" onClick={handleCall}>
                <Phone className="w-5 h-5" />
                ASK FOR A CONSULTATION
              </Button>
              {submitStatus === 'success' ? (
                <div className="flex items-center justify-center gap-2 text-green-400 py-3 border border-green-400 w-full">
                  <Check className="w-5 h-5" />
                  <span>Thank you! We'll be in touch soon.</span>
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="flex flex-col gap-2 w-full">
                  <div className="flex w-full h-12">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email so we can set a time"
                      className="flex-1 px-4 h-12 border border-gray-600 bg-white/10 text-white placeholder-gray-400 focus:border-[#C5A267] focus:outline-none"
                      required
                    />
                    <Button type="submit" size="lg" className="px-6 h-12" disabled={isSubmitting}>
                      {isSubmitting ? '...' : <Send className="w-5 h-5" />}
                    </Button>
                  </div>
                  {emailError && <span className="text-red-400 text-sm">{emailError}</span>}
                </form>
              )}
            </div>
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
            {/* Testimonial */}
            <div className="mt-6 text-center">
              <p className="italic text-gray-300 text-sm leading-relaxed">
                "We were blown away by the design and service. Home feels like a 5-star resort now."
              </p>
              <p className="font-bold text-white mt-2 text-sm">
                – Lisa M., Boca Raton
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BocaRatonHeroTop;