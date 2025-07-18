import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Factory, Recycle } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

interface CallToActionProps {
  triggerFooterContact: () => void;
  scrollToProjects: () => void;
}

gsap.registerPlugin(ScrollTrigger);

interface PillarCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const PillarCard: React.FC<PillarCardProps> = ({
  icon: Icon,
  title,
  description,
  index,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const iconRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!inView) return;
    
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!prefersReducedMotion && iconRef.current) {
      gsap.fromTo(
        iconRef.current,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.2,
          ease: 'back.out(1.7)',
        }
      );
    }
  }, [inView, index]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <div
      ref={ref}
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      <div
        className="flex flex-col items-center text-center p-6 sm:p-8 rounded-xl transition-all duration-300 hover:scale-105"
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <div
          ref={iconRef}
          className="mb-4 sm:mb-6 transition-all duration-300"
          style={{
            filter: isHovered
              ? 'drop-shadow(0 0 20px rgba(74, 107, 71, 0.5))'
              : 'none',
          }}
        >
          <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-[#4A6B47]" />
        </div>
        <h3 className="text-lg sm:text-xl font-sans mb-3 sm:mb-4 text-[#2C3E2B] transform transition-all duration-300 group-hover:translate-y-[-5px]">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-800">
          {description}
        </p>
      </div>
    </div>
  );
};

const SustainabilityHighlights: React.FC<CallToActionProps> = ({  }) => {
  // Implement the proper footer contact trigger functionality
  const handleConsultationClick = () => {
    window.dispatchEvent(new CustomEvent('openContactForm'));
  };

  return (
  <section id="sustainability-highlights" className="relative py-16 sm:py-20 md:py-24 px-4">
    {/* Top container with heading */}
    <div className="max-w-5xl mx-auto text-center mt-2 sm:mt-12 md:mt-16 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-10">
        Our Commitment to Sustainable Design
      </h1>
    </div> {/* <-- Close the div here */}
      
    {/* Particle background and PillarCards grid */}
    <ParticleBackground containerId="pillars-particles" />
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
      <PillarCard
        index={0}
        icon={Leaf}
        title="Sustainably Sourced Furniture"
        description="Responsibly sourced materials from certified suppliers, ensuring environmental preservation"
      />
      <PillarCard
        index={1}
        icon={Factory}
        title="Zero Waste Manufacturing"
        description="Innovative production processes that minimize waste and maximize resource efficiency"
      />
      <PillarCard
        index={2}
        icon={Recycle}
        title="Circular Design"
        description="Products designed for longevity, repair, and eventual recycling"
      />
    </div>

<div className="flex justify-center relative z-10 mt-10 sm:mt-12 md:mt-16">
  <div className="max-w-lg text-center px-6 space-y-10">
    {/* 2. Responsible Sourcing */}
    <div className="space-y-3">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-sans text-[#3e533c]">
        Responsible Sourcing
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light tracking-wide text-justify">
      We partner with certified suppliers to deliver environmentally friendly products using responsibly harvested woods and ethical materials. Every handcrafted piece is rooted in sustainability—from source to installation.
      </p>
    </div>

    {/* 3. Zero-Waste Manufacturing */}
    <div className="space-y-3">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-sans text-[#3e533c]">
        Zero-Waste Manufacturing
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light tracking-wide text-justify">
      Our approach maximizes efficiency while minimizing production waste. This energy-conscious model supports our mission of delivering sustainability products that honor both tradition and innovation.
      </p>
    </div>

    {/* 4. Circular Design */}
    <div className="space-y-3">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-sans text-[#3e533c]">
        Circular Design
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light tracking-wide text-justify">
      Our collections reflect a commitment to modern sustainable furniture. Each product is made to last—repurposable, recyclable, and rooted in low-impact production cycles.
      </p>
    </div>
{/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleConsultationClick}
              className="w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#C5A267] text-white font-medium rounded-sm hover:bg-[#D6B378] transition-colors duration-300 group min-h-[44px]"
            >
              CONTACT US
            </button>
            <Link
              to="/productscollection"
              className="w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#C5A267] text-white font-medium rounded-sm hover:bg-[#D6B378] transition-colors duration-300 group min-h-[44px]"
            >
              VIEW SUSTAINABLE COLLECTIONS
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityHighlights;