import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import { CSSPlugin } from 'gsap/CSSPlugin';

// Register ALL necessary plugins
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

interface StatisticCardProps {
  value: string;
  label: string;
  index: number;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ value, label, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const numberRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement | null>;
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!inView || hasAnimated || !numberRef.current) return;
    
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!prefersReducedMotion) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));

      // Animate the number counting up
      gsap.fromTo(
        numberRef.current,
        { innerText: '0' },
        {
          innerText: numericValue,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          onComplete: () => setHasAnimated(true),
        }
      );

      // Use DOM element directly instead of React ref for gsap animations
      const cardElement = cardRef.current;
      if (cardElement) {
        gsap.fromTo(
          cardElement,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power2.out',
          }
        );
      }
    } else {
      // For reduced motion preference, just set the value without animation
      if (numberRef.current) {
        numberRef.current.innerText = value;
      }
      setHasAnimated(true);
    }
  }, [inView, value, hasAnimated, index]);

  return (
    <div
      ref={(element) => {
        // Pass the ref to both react-intersection-observer and our local ref
        if (typeof ref === 'function') ref(element);
        cardRef.current = element;
      }}
      className="text-center transform hover:scale-105 transition-all duration-300 p-6 sm:p-8 rounded-xl hover:shadow-lg relative z-10"
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        opacity: 0, // Start with 0 opacity for GSAP to animate
        position: 'relative', // Add non-static position
      }}
    >
      <div
        ref={numberRef}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A6B47] mb-2"
        style={{
          textShadow: '0 0 20px rgba(74, 107, 71, 0.2)',
        }}
      >
        0
      </div>
      <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const AnimatedGraph = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!inView || hasAnimated || !pathRef.current) return;
    
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!prefersReducedMotion) {
      const path = pathRef.current;
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0, // Start with 0 opacity
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        opacity: 1, // Animate to fully visible
        duration: 3,
        ease: 'power2.out',
        onComplete: () => setHasAnimated(true),
      });
    } else {
      // For reduced motion preference, just show the path
      if (pathRef.current) {
        pathRef.current.style.opacity = '1';
      }
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{ position: 'absolute' }} // Ensure non-static position
    >
      <svg
        ref={(element) => {
          // Handle both refs
          if (typeof ref === 'function') ref(element);
        }}
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 400"
      >
        <path
          ref={pathRef}
          d="M0,300 Q250,280 500,200 T1000,100"
          fill="none"
          stroke="#E8F5E9"
          strokeWidth="4"
          opacity="0"
        />
      </svg>
    </div>
  );
};

const SustainabilityStats: React.FC = () => {
  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden"
      style={{ position: 'relative' }} // Ensure non-static position
    >
      <AnimatedGraph />
      <div 
        className="max-w-6xl mx-auto px-4 relative z-10"
        style={{ position: 'relative' }} // Ensure non-static position
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          <StatisticCard value="47,893+" label="Trees Saved" index={0} />
          <StatisticCard value="75%" label="Waste Reduction" index={1} />
          <StatisticCard
            value="603,782"
            label="Liters of Water Conserved"
            index={2}
          />
          <p className="col-span-1 sm:col-span-2 md:col-span-3 text-center text-lg sm:text-xl font-thin text-gray-700 mt-8">
            Our commitment to sustainability is not just a trend; it's a core value that drives our design philosophy.
            <br />
            We believe in creating spaces that are not only beautiful but also environmentally responsible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityStats;