import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import QuizBlock from './QuizBlock';

interface HeroSectionProps {
  onStartQuiz?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartQuiz }) => {
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
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video - Desktop */}
      <div className="hidden md:block absolute inset-0 z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: 'scale(1.1)',
            transformOrigin: 'center center'
          }}
        >
          <source src="https://res.cloudinary.com/designcenter/video/upload/v1/1.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col min-h-screen">
        {/* Video Section - Mobile Top */}
        <div className="h-48 relative bg-black overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: 'scale(1.3)',
              transformOrigin: 'center center'
            }}
          >
            <source src="https://res.cloudinary.com/designcenter/video/upload/v1/1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          
          {/* Mobile Title Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-2 leading-tight font-urbanist">
                Find your interior design style
              </h1>
              <p className="text-sm text-white/90">
                Take our quiz to discover your unique home style
              </p>
            </div>
          </div>
        </div>

        {/* Content Section - Mobile */}
        <div className="flex-1 bg-gray-50 p-4 space-y-6">
          {/* Quiz Block */}
          <div className="w-full">
            <QuizBlock 
              title="Start Your Quiz"
              description="Discover your perfect interior style in just 60 seconds!"
              imageUrl="https://res.cloudinary.com/designcenter/image/upload/v1747166091/quiz_image.avif"
              imageAlt="Modern Italian Kitchen Design"
              buttonText="Start Quiz Now"
              estimatedTime="60 seconds"
              features={["Personalized Results", "Expert Recommendations", "Style Matching"]}
              onStartQuiz={onStartQuiz}
            />
          </div>
          
          {/* Mobile Testimonials - Separate Section */}
          <div className="w-full">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <h3 className="text-gray-800 text-base font-medium mb-3 text-center">
                Over 150 people found their style
              </h3>
              
              <div className="overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out flex" 
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0 px-2"
                    >
                      {/* Stars */}
                      <div className="flex justify-center items-center mb-2">
                        <div className="flex text-[#C5A267]">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      
                      {/* Review Text */}
                      <p className="text-gray-700 text-xs leading-relaxed mb-3 text-center line-clamp-3">
                        "{testimonial.text.substring(0, 120)}..."
                      </p>
                      
                      {/* User Info */}
                      <div className="flex items-center justify-center">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-6 h-6 rounded-full object-cover border border-[#C5A267]"
                          />
                        ) : (
                          <div className="w-6 h-6 bg-[#C5A267] rounded-full flex items-center justify-center text-white font-bold text-xs">
                            {testimonial.name.charAt(0)}
                          </div>
                        )}
                        <div className="ml-2 text-center">
                          <p className="text-gray-600 text-xs font-medium">{testimonial.name}</p>
                          <p className="text-gray-500 text-xs">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Dots Indicator */}
              <div className="mt-4 flex justify-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === activeTestimonial 
                        ? 'bg-[#C5A267]' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements - Desktop only */}
      <div className="hidden md:block absolute inset-0 z-5">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-[#C5A267]/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-[#B8955A]/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Quiz Component positioned on the right - Desktop only */}
      <div className="hidden md:flex absolute inset-0 items-center justify-between z-10 p-4 sm:p-8 lg:p-16">
        {/* Left Column Text */}
        <div className="flex-1 max-w-lg mr-8">
          <div className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
            <h1 className="text-4xl lg:text-8xl font-bold mb-4 leading-tight font-urbanist">
              Find your interior design style
            </h1>
            <p className="text-xl lg:text-2xl font-medium mb-6">
              Take our interior design style quiz to discover your unique home style.
            </p>
          </div>

          <div className="flex items-center mt-6">
            <svg className="w-12 h-12 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          {/* Testimonials Section */}
          <div className="mt-8 space-y-4">
            <h3 className="text-white text-lg font-urbanist font-medium mb-4">Over 150 people have found their style</h3>
            
            {/* Testimonial Carousel */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
              <div className="overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out flex" 
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="w-full flex-shrink-0"
                    >
                      <div className="flex items-center mb-2">
                        <div className="flex text-[#C5A267]">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-white/70 text-sm">{testimonial.projectType}</span>
                      </div>
                      <p className="text-white text-sm leading-relaxed mb-3">"{testimonial.text}"</p>
                      <div className="flex items-center">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-8 h-8 rounded-full object-cover border-2 border-[#C5A267]"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-[#C5A267] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {testimonial.name.charAt(0)}
                          </div>
                        )}
                        <p className="text-white/70 text-sm ml-3">{testimonial.name} <span className="text-white/50">· {testimonial.location}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Dots Indicator */}
              <div className="mt-3 flex justify-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === activeTestimonial 
                        ? 'bg-[#C5A267]' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Quiz Block */}
        <QuizBlock 
          title="Start Your Quiz"
          description="Discover your perfect interior style in just 60 seconds!"
          imageUrl="https://res.cloudinary.com/designcenter/image/upload/v1747166091/quiz_image.avif"
          imageAlt="Modern Italian Kitchen Design"
          buttonText="Start Quiz Now"
          estimatedTime="60 seconds"
          features={["Personalized Results", "Expert Recommendations", "Style Matching"]}
          onStartQuiz={onStartQuiz}
        />
      </div>
    </section>
  );
};

export default HeroSection;