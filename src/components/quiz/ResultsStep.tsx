import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Check } from 'lucide-react';
import { StepProps } from './QuizTypes';

interface ResultsStepProps extends StepProps {
  triggerFooterContact: () => void;
}

// Testimonial type definition
interface Testimonial {
  initial: string;
  name: string;
  subtitle: string;
  text: string;
}

// Extracted TestimonialCarousel component
const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      initial: "S",
      name: "Sarah L.",
      subtitle: "Modern Apartment Project",
      text: "David helped me translate my quiz results into a cohesive design plan for my living room. He suggested specific pieces that worked with my existing furniture and within my budget. What would have taken me months to figure out, he solved in one consultation.",
    },
    {
      initial: "M",
      name: "Michael J.",
      subtitle: "Contemporary Condo Redesign",
      text: "The value I received from my consultation with David far exceeded my expectations. He identified functional issues in my layout I hadn't even noticed and provided solutions that made my space feel twice as large. His expertise saved me from making costly renovation mistakes.",
    },
    {
      initial: "E",
      name: "Elena R.",
      subtitle: "Transitional Villa Makeover",
      text: "After my consultation with David, I finally understood how to combine my traditional furnishings with modern elements. He created a custom color palette based on my quiz results and helped me select statement pieces that transformed my villa. The complimentary consultation was the best decision I made for my renovation.",
    },
  ];
  
  const [carouselIndex, setCarouselIndex] = useState(0);
  const total = testimonials.length;
  
  // Auto-advance every 7s
  useEffect(() => {
    const timer = setTimeout(() => {
      setCarouselIndex((i) => (i + 1) % total);
    }, 7000);
    return () => clearTimeout(timer);
  }, [carouselIndex, total]);
  
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-lg mx-auto">
          <div className="transition-all duration-500">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/15 hover:translate-y-[-5px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#C5A267] rounded-full flex items-center justify-center text-white font-serif text-xl shadow-md">
                  {testimonials[carouselIndex].initial}
                </div>
                <div>
                  <h4 className="text-white font-medium">{testimonials[carouselIndex].name}</h4>
                  <p className="text-white/60 text-sm">{testimonials[carouselIndex].subtitle}</p>
                </div>
              </div>
              <p className="text-white/90 mb-3 text-sm sm:text-base">
                "{testimonials[carouselIndex].text}"
              </p>
              <div className="flex text-[#C5A267]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          {/* Carousel controls */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === carouselIndex
                    ? 'bg-[#C5A267]'
                    : 'bg-white/30 hover:bg-[#C5A267]/60'
                }`}
                onClick={() => setCarouselIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ResultsStep: React.FC<ResultsStepProps> = ({ 
  quizData, 
  nextStep,
  triggerFooterContact 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mainStyleRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // State to track if elements are ready for interaction
  const [, setElementsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState<any>(null);
  
  // Restart the quiz
  const restartQuiz = () => {
    nextStep(); // This will reset the quiz in the parent component
  };

  // Initial loading animation and data check
  useEffect(() => {
    console.log("ResultsStep mounted with quizData:", quizData);
    
    // Debug the actual data received
    setDebugInfo({
      hasResults: Boolean(quizData?.results),
      mainStyle: quizData?.results?.mainStyle,
      title: quizData?.results?.title,
      hasDesc: Boolean(quizData?.results?.description),
      descLength: quizData?.results?.description?.length,
      subStylesLength: quizData?.results?.subStyles?.length,
      recommendedImagesLength: quizData?.results?.recommendedImages?.length,
      firstImage: quizData?.results?.recommendedImages?.[0],
      fullResults: quizData?.results
    });

    // Check if we have valid results
    const hasValidResults = Boolean(
      quizData?.results?.mainStyle || 
      quizData?.results?.title ||
      (quizData?.results?.recommendedImages && quizData?.results?.recommendedImages.length > 0)
    );
    
    console.log("Has valid results:", hasValidResults);

    // Simulate loading the results for a better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Short delay to show loading animation
    
    return () => clearTimeout(timer);
  }, [quizData]);

  // Animations with staggered entrance
  useEffect(() => {
    if (isLoading) return; // Don't start animations until loading is complete
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // For reduced motion, just show everything immediately
      setElementsReady(true);
      if (titleRef.current) titleRef.current.style.opacity = '1';
      if (mainStyleRef.current) mainStyleRef.current.style.opacity = '1';
      if (profileRef.current) profileRef.current.style.opacity = '1';
      if (galleryRef.current) galleryRef.current.style.opacity = '1';
      if (testimonialsRef.current) testimonialsRef.current.style.opacity = '1';
      if (ctaRef.current) ctaRef.current.style.opacity = '1';
      return;
    }
    
    const tl = gsap.timeline({ 
      defaults: { ease: "power3.out" },
      onComplete: () => setElementsReady(true)
    });
    
    // Entrance animations
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8 }
    ).fromTo(
      mainStyleRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
      "-=0.4"
    ).fromTo(
      profileRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5 },
      "-=0.3"
    ).fromTo(
      profileRef.current?.children || [],
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
      "<"
    ).fromTo(
      galleryRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 },
      "-=0.2"
    ).fromTo(
      galleryRef.current?.children || [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" },
      "<"
    ).fromTo(
      testimonialsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.3"
    ).fromTo(
      testimonialsRef.current?.children || [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" },
      "<"
    ).fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.1"
    );
    
    // Add subtle animation to main style label
    gsap.to(mainStyleRef.current, {
      boxShadow: "0 0 30px rgba(197, 162, 103, 0.6)",
      repeat: -1,
      yoyo: true,
      duration: 2
    });
    
    return () => {
      tl.kill();
    };
  }, [isLoading]);

  // Safely check if we have valid results data
  const hasResults = quizData && 
    quizData.results && 
    (quizData.results.mainStyle || quizData.results.title);
    
  const hasImages = quizData?.results?.recommendedImages && 
    Array.isArray(quizData.results.recommendedImages) && 
    quizData.results.recommendedImages.length > 0;

  return (
    <div 
      ref={containerRef}
      className="max-h-[80vh] overflow-y-auto custom-scrollbar pr-2 py-6 max-w-2xl sm:max-w-3xl mx-auto"
    >
      {/* Header - smaller, less padding, more elegant */}
      <div
        ref={titleRef}
        className="opacity-0 bg-[#C5A267]/90 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow mb-4 sm:mb-6 text-center"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white tracking-wide leading-tight">
          {quizData.results.title || quizData.results.mainStyle || "Your Perfect Style"}
        </h2>
      </div>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <div className="w-16 h-16 border-4 border-[#C5A267] border-t-transparent rounded-full animate-spin mb-6"></div>
          <h3 className="text-2xl font-serif text-white text-center mb-3">Finalizing Your Results</h3>
          <p className="text-base text-white/70 text-center max-w-sm">
            We're putting the finishing touches on your personalized design profile...
          </p>
          {/* Debug information - only in development */}
          {process.env.NODE_ENV === 'development' && debugInfo && (
            <div className="mt-8 p-4 bg-black/30 text-xs text-white/70 max-w-lg mx-auto rounded">
              <h4 className="font-mono mb-2">Debug Info:</h4>
              <pre className="overflow-auto">{JSON.stringify(debugInfo, null, 2)}</pre>
            </div>
          )}
        </div>
      ) : !hasResults ? (
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <div className="w-16 h-16 bg-red-500/20 text-red-300 flex items-center justify-center rounded-full mb-6">
            <span className="text-4xl">!</span>
          </div>
          <h3 className="text-2xl font-serif text-white text-center mb-3">Something Went Wrong</h3>
          <p className="text-base text-white/70 text-center max-w-sm mb-6">
            We're having trouble loading your design profile results. Please try again.
          </p>
          <button
            onClick={restartQuiz}
            className="px-5 py-2 bg-white/10 border border-white/30 text-white text-base rounded-md hover:bg-white/20 transition-colors duration-300"
          >
            Restart Quiz
          </button>
          {/* Debug information - only in development */}
          {process.env.NODE_ENV === 'development' && debugInfo && (
            <div className="mt-8 p-4 bg-black/30 text-xs text-white/70 max-w-lg mx-auto rounded">
              <h4 className="font-mono mb-2">Debug Info:</h4>
              <pre className="overflow-auto">{JSON.stringify(debugInfo, null, 2)}</pre>
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-2xl sm:max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
            {/* Profile Section */}
            <div>
              <div 
                ref={profileRef}
                className="opacity-0 bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/10"
              >
                <h3 className="text-lg sm:text-xl font-serif mb-3 text-white text-center">
                  {quizData.name || "Your"} design profile revealed:
                </h3>
                <ul className="space-y-4 sm:space-y-5">
                  {quizData.results.description ? (
                    <li className="flex flex-col items-center text-center gap-2">
                      <div className="bg-[#C5A267] rounded-full p-1 shadow-md mb-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-sm sm:text-base md:text-lg text-white/90">
                        {quizData.results.description.includes('<p>') || quizData.results.description.includes('<br>') ? (
                          <div dangerouslySetInnerHTML={{ __html: quizData.results.description }} />
                        ) : (
                          <p>{quizData.results.description}</p>
                        )}
                      </div>
                    </li>
                  ) : (
                    <>
                      <li className="flex flex-col items-center text-center gap-2">
                        <div className="bg-[#C5A267] rounded-full p-1 shadow-md mb-1">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-white/90">
                          You're drawn to <span className="text-white font-medium">{quizData.results.mainStyle || "sophisticated"}</span> spaces that feel both elegant and inviting
                        </p>
                      </li>
                      <li className="flex flex-col items-center text-center gap-2">
                        <div className="bg-[#C5A267] rounded-full p-1 shadow-md mb-1">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-white/90">
                          Your priority room, the <span className="text-white font-medium">{quizData.priorityRoom || "Living Room"}</span>, should incorporate elements of {quizData.results.subStyles?.[0]?.toLowerCase() || 'warmth'} and {quizData.results.subStyles?.[1]?.toLowerCase() || 'texture'}
                        </p>
                      </li>
                      <li className="flex flex-col items-center text-center gap-2">
                        <div className="bg-[#C5A267] rounded-full p-1 shadow-md mb-1">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-sm sm:text-base md:text-lg text-white/90">
                          <p className="mb-2">Your complementary style elements include:</p>
                          <div className="flex flex-wrap justify-center gap-2">
                            {quizData.results.subStyles && quizData.results.subStyles.length > 0 ? (
                              quizData.results.subStyles.map((style, index) => (
                                <span key={`${style}-${index}`} className="inline-block bg-white/10 px-3 py-1 rounded-full">
                                  {style}
                                </span>
                              ))
                            ) : (
                              <span className="inline-block bg-white/10 px-3 py-1 rounded-full">
                                Contemporary
                              </span>
                            )}
                          </div>
                        </div>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            {/* Gallery Section with recommended images or CTA */}
            <div 
              ref={galleryRef}
              className="opacity-0 flex flex-col h-full w-full gap-4"
            >
              {hasImages ? (
                <>
                  {/* Mobile-only CTA button before styles */}
                  <div className="block sm:hidden mb-4">
                    <button
                      onClick={() => {
                        triggerFooterContact();
                        restartQuiz();
                      }}
                      className="w-full px-6 py-4 bg-[#C5A267] text-white text-base rounded-md hover:bg-[#B49157] transition-all duration-300 flex items-center justify-center gap-2 shadow hover:shadow-xl"
                    >
                      Let’s Design Your Space
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <div className="text-xs text-white/70 mt-2 text-center">
                      Trusted by<span className="font-semibold text-white"> NYC's </span>most design-forward homeowners.
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-serif mb-4 text-white text-center">
                    Your Complementary Styles
                  </h3>
                  <div className="flex flex-col gap-6 md:flex-row md:gap-6">
                    {quizData.results.recommendedImages.map((image, index) => (
                      <div
                        key={image.id || `image-${index}`}
                        className="bg-white/10 rounded-lg border border-white/10 shadow-sm overflow-hidden hover:bg-white/20 transition-colors duration-300 flex flex-col md:flex-1"
                      >
                        <div className="w-full aspect-[16/9] bg-gray-800 flex items-center justify-center overflow-hidden">
                          {image.url ? (
                            <img 
                              src={image.url} 
                              alt={image.title || 'Style inspiration'} 
                              className="w-full h-full object-cover object-center"
                              loading="lazy"
                              style={{ aspectRatio: '16/9' }}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = "https://placehold.co/640x360/404040/CCCCCC?text=Style+Image";
                              }}
                            />
                          ) : (
                            <span className="text-white/60 text-xs px-2">{image.title || 'Style inspiration'}</span>
                          )}
                        </div>
                        <div className="p-4 flex flex-col justify-center">
                          <h4 className="text-lg sm:text-xl font-serif text-white mb-2 font-semibold">{image.title || "Design Element"}</h4>
                          {image.description ? (
                            <p className="text-white/80 text-sm sm:text-base">
                              {image.description.includes('<p>') || image.description.includes('<br>') ? (
                                <span dangerouslySetInnerHTML={{ __html: image.description }} />
                              ) : (
                                image.description
                              )}
                            </p>
                          ) : (
                            <p className="text-white/80 text-sm sm:text-base">
                              A perfect complement to your main style. Incorporate elements of this style into your {quizData.priorityRoom || "space"} for a truly personalized space.
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-serif mb-6 text-white text-center">
                    The next step: Book your complimentary call
                  </h3>
                  <p className="text-lg text-white/90 mb-8 text-center max-w-xl">
                    Our designers will help you bring your {quizData.results.title || quizData.results.mainStyle || "design"} vision to life, tailored to your space and needs. On your call, you'll get expert advice, answers to your questions, and a clear path to your dream home.
                  </p>
                  <div className="bg-white/10 border border-white/10 rounded-xl p-6 max-w-md mx-auto mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl text-white">"</span>
                      <span className="text-white font-serif text-lg italic">Next step to get on a call was the smartest choice I made</span>
                    </div>
                    <div className="text-right text-white/70 text-sm">— Donald B.</div>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Testimonials Section - Carousel for reviews about consulting with David */}
          <div 
            className="opacity-0 mt-10 mb-8"
            ref={testimonialsRef}
          >
            <h3 className="text-center text-xl sm:text-2xl font-serif text-white mb-8 relative">
              <span className="relative inline-block">
                What clients say about their consultation with David
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#C5A267] rounded-full"></span>
              </span>
            </h3>
            
            {/* Carousel */}
            <div className="relative w-full">
              <TestimonialCarousel />
            </div>
          </div>
          
          {/* CTA Section - more balanced, less vertical space, subtle border */}
          <div 
            ref={ctaRef}
            className="opacity-0 text-center border-t border-white/10 pt-6 pb-2 mt-2"
          >
            <p className="text-lg sm:text-xl font-sans text-white mb-4">
              <span className="text-[#C5A267] font-semibold">Only 3 new clients</span> accepted this month to maintain our boutique service standard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={nextStep} // This will now go to the contact form step
                className="px-8 py-4 bg-[#C5A267] text-white text-base rounded-md text-l hover:bg-[#B49157] transition-all duration-300 flex items-center gap-3 min-h-[54px] hover:shadow-xl transform hover:-translate-y-1"
              >
                Let’s Design Your Signature Space
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="text-xs text-white/70 mt-2 text-center">
                  Trusted by<span className="font-semibold text-white"> NYC's </span>most design-forward homeowners.
              </div>
              <button
                onClick={restartQuiz}
                className="px-6 py-3 bg-white/10 border border-white/30 text-white text-m rounded-md hover:bg-white/20 transition-colors duration-300"
              >
                Restart Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsStep;