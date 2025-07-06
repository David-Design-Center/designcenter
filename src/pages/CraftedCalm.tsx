import { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Lightbulb, Star, Eye } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import QuizContainer from '../components/quiz/QuizContainer';
import ContactFormPopup from '../components/ui/ContactFormPopup';
import { useContactForm } from '../hooks/useContactForm';
import '../components/quiz/QuizStyles.css';

gsap.registerPlugin(ScrollTrigger);

const CraftedCalm = () => {
  const { isContactFormOpen, openContactForm, closeContactForm } = useContactForm();
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonRef = useRef<HTMLButtonElement>(null);
  const quizSectionRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null); // Added for benefits section
  
  // State variables
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Intersection observers for animations
  const { inView: featuresInView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  // Video loading and playing logic
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlayThrough = () => {
        setVideoLoaded(true);
      };

      const playVideo = () => {
        if (video) {
          video.play().catch((error) => {
            console.log("Autoplay prevented:", error);
          });
        }
      };

      video.addEventListener('canplaythrough', handleCanPlayThrough);
      document.addEventListener("click", playVideo, { once: true });

      return () => {
        video.removeEventListener('canplaythrough', handleCanPlayThrough);
        document.removeEventListener("click", playVideo);
      };
    }
  }, []);

  // GSAP animations for hero section
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.5 });

    if (videoLoaded) {
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      ).fromTo(
        [headlineRef.current, subheadRef.current, ctaButtonRef.current],
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.3,
          ease: "power2.out" 
        },
        "-=0.5"
      );
    }

    return () => {
      tl.kill();
    };
  }, [videoLoaded]);

  // GSAP animations for features section
  useEffect(() => {
    if (!featuresInView || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const featureItems = document.querySelectorAll('.feature-item');
    
    gsap.fromTo(
      featureItems,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2, 
        duration: 0.8,
        ease: "power2.out"
      }
    );
  }, [featuresInView]);

  // Scroll to quiz section

  // Trigger footer contact form
  const triggerFooterContact = () => {
    openContactForm();
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Helmet>
        {/* ----- Primary SEO tags ----- */}
        <title>Interior Design Style Quiz | Italian Luxury in 60 Seconds</title>
        <meta name="description"
              content="Free 60-sec quiz reveals your perfect Italian interior style and instantly makes a custom mood-board. Try it now - no sign-up until results." />
        <link rel="canonical" href="https://dnddesigncenter.com/crafted-calm" />
        <meta name="robots"
              content="index,follow,max-snippet:200,max-image-preview:large" />

        {/* ----- Open Graph / Twitter for shareability ----- */}
        <meta property="og:title"
              content="Italian Interior Design Style Quiz – Instant Results" />
        <meta property="og:description"
              content="Modern Milan or Classic Tuscan? Take our free 60-sec quiz and get a personalised mood-board from D&D's Italian designers." />
        <meta property="og:image"
              content="https://download.cattelanitalia.com/multimedia/ld/7a204c94-54c5-480e-8a75-6f7c010cdd2c.jpg" />
        <meta property="og:url"
              content="https://dnddesigncenter.com/crafted-calm" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title"
              content="Interior Design Style Quiz | Italian Luxury in 60 Seconds" />
        <meta name="twitter:description"
              content="Find your style and get a custom mood-board - free, in under a minute." />
        <meta name="twitter:image"
              content="https://download.cattelanitalia.com/multimedia/ld/7a204c94-54c5-480e-8a75-6f7c010cdd2c.jpg" />

        {/* ----- Optional: favicon stays the same ----- */}
        <link rel="icon"
              href="https://res.cloudinary.com/designcenter/image/upload/Favicon_DnD.avif" />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative h-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://download.cattelanitalia.com/multimedia/ld/7a204c94-54c5-480e-8a75-6f7c010cdd2c.jpg?t=1691588886')" }}
      >
        <div className="absolute inset-0 w-full h-full">
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6">
          <h1 
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 sm:mb-8 tracking-wide"
          >
            Discover Your Luxury Interior Design Style
          </h1>
          <p 
            ref={subheadRef}
            className="text-lg sm:text-xl md:text-2xl font-light mb-10 sm:mb-12 max-w-4xl tracking-wide"
          >
            Take our free quiz and get personalized design recommendations from top Italian designers in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => quizSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#C5A267] hover:bg-[#B49157] text-white px-10 py-5 text-xl font-medium transition-colors duration-300 flex items-center justify-center gap-3 min-h-[52px] tracking-wide shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]"
              ref={ctaButtonRef}
            >
              Start with Quiz
              <ArrowRight className="w-6 h-6" />
            </button>
            <button
              onClick={() => window.location.href = '/productscollection'}
              className="bg-transparent hover:bg-white/20 border border-white text-white px-10 py-5 text-xl font-medium transition-colors duration-300 flex items-center justify-center gap-3 min-h-[52px] tracking-wide"
            >
              Explore Our Portfolio
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#C5A267] via-[#606061] to-[#222]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          {/* Right side: Benefits */}
          <div 
            ref={benefitsRef}
            className="bg-white/10 backdrop-blur-sm p-10 rounded-xl shadow-xl border border-white/20"
          >
            <h3 className="text-3xl mb-10 text-white font-bold text-center tracking-wide">
              Unlock Your Dream Home: Discover Your Unique Design Style
            </h3>
            <ul className="flex flex-col gap-7">
              {/* Benefit 1 */}
              <li className="flex flex-col sm:flex-row sm:items-start gap-4 bg-white/5 rounded-lg p-5 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#C5A267] rounded-full flex items-center justify-center shadow-md border-4 border-white/20 mx-auto sm:mx-0 mb-2 sm:mb-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg sm:text-xl font-serif text-white font-semibold mb-1 leading-snug tracking-wide">Stop Guessing, Start Designing</h4>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed">Finally understand your personal style and create a home you'll love.</p>
                </div>
              </li>
              {/* Benefit 2 */}
              <li className="flex flex-col sm:flex-row sm:items-start gap-4 bg-white/5 rounded-lg p-5 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#C5A267] rounded-full flex items-center justify-center shadow-md border-4 border-white/20 mx-auto sm:mx-0 mb-2 sm:mb-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg sm:text-xl font-serif text-white font-semibold mb-1 leading-snug tracking-wide">Get Expert Advice, Without the High Cost</h4>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed">Receive personalized recommendations from experienced interior designers.</p>
                </div>
              </li>
              {/* Benefit 3 */}
              <li className="flex flex-col sm:flex-row sm:items-start gap-4 bg-white/5 rounded-lg p-5 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#C5A267] rounded-full flex items-center justify-center shadow-md border-4 border-white/20 mx-auto sm:mx-0 mb-2 sm:mb-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg sm:text-xl font-serif text-white font-semibold mb-1 leading-snug tracking-wide">Visualize Your Dream Home</h4>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed">See how different styles can transform your space before you invest a dime.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section
        ref={quizSectionRef}
        id="quiz-section"
        className="relative z-20 bg-white"
      >
        <QuizContainer triggerFooterContact={triggerFooterContact} />
      </section>
      
      {/* Contact Form Popup */}
      <ContactFormPopup isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};

export default CraftedCalm;