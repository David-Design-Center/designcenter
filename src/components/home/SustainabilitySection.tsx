import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);



const SustainabilitySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    // Only apply parallax on desktop
    if (window.innerWidth < 768) return;
    
    const ctx = gsap.context(() => {
      // Desktop: Position parallax effect (shift up/down)
      gsap.fromTo(
        sectionRef.current,
        { backgroundPositionY: '0%' },
        {
          backgroundPositionY: '20%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        }
      );
      
      // Text animations
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
      
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
      
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-32 relative bg-cover bg-center text-white"
      style={{ 
        backgroundImage: 'url("https://res.cloudinary.com/designcenter/image/upload/v1761045417/Eco-Friendly%20Luxury%20Furniture%20-%20Sustainable%20Design%20Collection.avif")',
        backgroundAttachment: window.innerWidth >= 768 ? 'fixed' : 'scroll',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* ✅ SEO-Optimized Hidden Image for Indexing */}
      <div className="hidden">
        <img 
            src="https://res.cloudinary.com/designcenter/image/upload/v1761045417/Eco-Friendly%20Luxury%20Furniture%20-%20Sustainable%20Design%20Collection.avif" 
          alt="Sustainable furniture design featuring sculptural eco-friendly materials for luxury interiors."
          title="Eco-Friendly Luxury Furniture – Sustainable Design Collection"
          loading="lazy"
        />
      </div>

      {/* ✅ Open Graph & SEO Meta Tags */}
      <meta property="og:image" content="https://res.cloudinary.com/designcenter/image/upload/v1761045417/Eco-Friendly%20Luxury%20Furniture%20-%20Sustainable%20Design%20Collection.avif" />
      <meta property="og:title" content="Eco-Friendly Luxury Furniture – Sustainable Design Collection" />
      <meta property="og:description" content="Sustainable furniture design featuring sculptural eco-friendly materials for luxury interiors." />
      <meta name="keywords" content="sustainable design, eco-friendly furniture, luxury ESG, high-end green interiors" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl mb-2 font-light tracking-wide"
          >
            We Love Nature as Much as Design
          </h2>
          
          <p 
                ref={descriptionRef}
                className="text-lg md:text-xl text-white/80 font-light tracking-wide mb-6"
              >
                Our sustainable collections use responsibly sourced materials from green energy.<br />Luxury made to last without costing the earth.
              </p>
        </div>

        <div className="text-center">
          <Link 
            to="/sustainability"
            ref={ctaRef}
            className="inline-flex items-center gap-2 px-6 py-4 text-white font-medium rounded-sm hover:bg-[#B49157] transition-colors duration-300 group min-h-[44px]"
          >
            <span className="font-regular tracking-wide">OUR ECO-JOURNEY</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;