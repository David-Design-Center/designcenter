import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Search, ArrowRight } from 'lucide-react';

interface QuizIntroProps {
  startQuiz: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ startQuiz }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Testimonials data
  const testimonials = [
    {
      name: "Vera L.",
      location: "Brooklyn, NY",
      projectType: "European Luxury Project",
      text: "Gorgeous store with even more gorgeous furniture! Almost all European imported. Their kitchens are unimaginably luxurious. David was very helpful and transformed our home into a palace.",
      image: "https://s3-media0.fl.yelpcdn.com/photo/uBRJIW47j0_MVwoWxlf9-w/120s.jpg"
    },
    {
      name: "Vlad B.",
      location: "Brooklyn, NY",
      projectType: "Custom Kitchen Design",
      text: "D&D is a great place for building your dream kitchen! Their selection is exclusive and their showroom is beyond gorgeous. Their Italian furniture arrived fast and the team was professional throughout the project.",
      image: "https://s3-media0.fl.yelpcdn.com/photo/9GubDkCrr1Ok72RN-7vfqA/120s.jpg"
    },
    {
      name: "Ingrid D.",
      location: "Livingston, NJ",
      projectType: "Kitchen & Bathroom Renovation",
      text: "I redid my kitchen and bathroom with D&D Design. Everything looks amazing! Kitchen came from Italy in just 4 weeks, and the installer was quick and accurate. David was very accommodating with all my needs.",
      image: ""
    }
  ];

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, [activeTestimonial, testimonials.length]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(
      [headingRef.current, descRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    ).fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8 },
      "-=0.5"
    ).fromTo(
      benefitsRef.current?.children || [],
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.1 },
      "-=0.3"
    ).fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.2"
    );
    
    return () => {
      tl.kill();
    };
  }, []);

  const handleStartQuiz = (e: React.MouseEvent) => {
    e.preventDefault();
    setTimeout(() => {
      startQuiz();
    }, 10);
  };

  return (
    <div 
      ref={containerRef}
      className="bg-[#1A1A1A] p-8 rounded-xl shadow-xl border border-gray-800 w-full max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transform transition-transform duration-1000">
        {/* Left side: Text and image */}
        <div className="space-y-8">
          <h2 
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-relaxed"
          >
            Discover Your Ideal Interior Style
          </h2>
          <p 
            ref={descRef}
            className="text-xl sm:text-1xl text-white/90"
          >
            In just a few minutes, uncover the design language that reflects your life. Our intelligent quiz delivers tailored ideas to elevate your space, effortlessly.
          </p>
          
          <div className="relative mt-6 aspect-[16/9] max-w-md mx-auto lg:mx-0">
            <img
              ref={imageRef}
              src="https://res.cloudinary.com/designcenter/image/upload/v1747166091/quiz_image.avif"
              alt="Interior Style Quiz"
              className="rounded-lg shadow-xl object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-lg shadow-inner bg-gradient-to-t via-transparent to-transparent"></div>
          </div>

        <div className="mb-8 lg:hidden">
          <button
            onClick={handleStartQuiz}
            className="w-full bg-[#C5A267] hover:bg-[#B49157] text-white px-8 py-4 text-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 min-h-[52px] transform hover:translate-y-[-2px] hover:shadow-lg"
          >
            Begin Your Style Journey
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="mt-2 text-center">
            <p className="text-white/70 text-xs">Join over <span className="text-[#C5A267] font-semibold">100+</span> satisfied clients who found their perfect style</p>
          </div>
        </div>
          
          <div className="hidden lg:block">
            <button
              ref={buttonRef}
              onClick={handleStartQuiz}
              className="bg-[#C5A267] hover:bg-[#B49157] text-white px-8 py-4 text-xl font-medium transition-all flex items-center gap-3 min-h-[52px] transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              <Search className="w-5 h-5" />
              Find your style
            </button>
          </div>
        </div>
        
        {/* Right side: Benefits */}
        <div ref={benefitsRef} className="space-y-8 mt-6 lg:mt-0">

          {/* Reviews Carousel */}
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-serif mb-6">Real People, Real Transformations</h3>
            
            {/* Carousel Container */}
            <div className="relative">
              {/* Testimonials */}
              <div className="overflow-hidden rounded-lg">
                <div 
                  className="transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)`, display: 'flex' }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0 bg-gradient-to-r from-white/10 to-white/5 p-3 sm:p-5 border border-white/10 shadow-lg"
                    >
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="flex text-[#C5A267]">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-white/70 text-xs1 sm:text-sm">{testimonial.projectType}</span>
                      </div>
                      <p className="text-white italic text-sm sm:text-lg font-light leading-relaxed h-24 sm:h-32 overflow-y-auto">"{testimonial.text}"</p>
                      <div className="flex items-center mt-3 sm:mt-4">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-[#C5A267]"
                          />
                        ) : (
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C5A267] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                            {testimonial.name.charAt(0)}
                          </div>
                        )}
                        <p className="text-white/70 text-xs sm:text-sm ml-3">{testimonial.name} <span className="text-white/50">· {testimonial.location}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Dots Indicator */}
              <div className="mt-4 sm:mt-6 flex justify-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === activeTestimonial 
                        ? 'bg-[#C5A267]' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-white/70 text-sm">Join over <span className="text-[#C5A267] font-semibold">100+</span> satisfied clients who found their perfect style</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizIntro;