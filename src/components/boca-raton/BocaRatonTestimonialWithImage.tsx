const BocaRatonTestimonialWithImage = () => {
  return (
    <section className="w-full py-16 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-8 lg:px-64">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] text-center mb-16">
          What Industry Experts Say About Our Work
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Video */}
          <div className="w-full lg:w-2/5 max-w-xs">
            <video 
              className="w-full h-auto rounded-lg shadow-lg" 
              controls 
              poster="https://res.cloudinary.com/designcenter/video/upload/v1768213501/jr4vjlqwffwdv1q4q7sp.png"
            >
              <source 
                src="https://res.cloudinary.com/designcenter/video/upload/v1768213501/jr4vjlqwffwdv1q4q7sp.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Testimonial content */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            {/* Large quotation mark */}
            <div className="text-[#C5A267] text-7xl font-serif leading-none">"</div>
            
            <p className="text-xl md:text-2xl italic text-gray-600 leading-relaxed -mt-8">
              This project is one where our creative vision went far beyond the ordinary and required truly skilled artisans to bring such refined details to life. We were fortunate to collaborate with @dnddesigncenter.nyc, who took on the challenge and delivered outstanding results.
            </p>
            
            <div className="mt-4">
              <p className="font-bold text-[#1a1a2e] text-lg">— Anastasia Kasparyan, Interior Designer</p>
              <p className="text-base text-gray-500 mt-1">Boca Raton Project, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BocaRatonTestimonialWithImage;
