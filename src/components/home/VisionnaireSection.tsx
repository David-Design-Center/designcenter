import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandsShowcase from '../productcollection/BrandsShowcase';

gsap.registerPlugin(ScrollTrigger);

const VisionnaireSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // Text animations
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      });

      textTl
        .fromTo(titleRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power3.out' })
        .fromTo(taglineRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.7')
        .fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.7')
        .fromTo(ctaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5');

      // Brands showcase animation
      gsap.fromTo(brandsRef.current, { opacity: 0 }, {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: brandsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Brands Showcase */}
          <div ref={brandsRef} className="relative order-2 md:order-1 grayscale">
            <BrandsShowcase 
              showTitle={false} 
              bgColor="bg-transparent"
              textColor="text-white"
              gradientFrom="from-[#1A1A1A]"
              gradientTo="to-transparent"
              invertLogo={true}
            />
          </div>

          {/* Right - Content */}
          <div className="text-white space-y-4 md:space-y-6 order-1 md:order-2">
            <h2 ref={titleRef} className="text-4xl sm:text-5xl md:text-7xl font-serif">
              Why is Italian furniture the superior choice for luxury interiors?
            </h2>
            <p ref={textRef} className="text-white/80 text-base md:text-lg leading-relaxed font-light">
        Italian luxury design stands apart for its balance of beauty and purpose. Our exclusive partnerships with bespoke Italian brands ensure every piece captures that harmony, crafted from the finest materials with meticulous attention to detail.
            </p>
            <Link to="/collaboration" ref={ctaRef} className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-sm hover:bg-[#B49157] transition-colors duration-300 group min-h-[44px]">
              <span>OUR PARTNERS</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionnaireSection;
