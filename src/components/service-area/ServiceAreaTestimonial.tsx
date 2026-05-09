import { ServiceAreaVideoTestimonial } from '../../data/service-areas/types';

interface ServiceAreaTestimonialProps {
  videoTestimonial: ServiceAreaVideoTestimonial;
}

const ServiceAreaTestimonial = ({ videoTestimonial }: ServiceAreaTestimonialProps) => {
  return (
    <section className="w-full py-16 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-8 lg:px-64">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] text-center mb-16">
          {videoTestimonial.sectionHeading}
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Video */}
          <div className="w-full lg:w-2/5 max-w-xs">
            <video 
              className="w-full h-auto rounded-lg shadow-lg" 
              controls 
              poster={videoTestimonial.videoPoster}
            >
              <source 
                src={videoTestimonial.videoUrl} 
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
              {videoTestimonial.quote}
            </p>
            
            <div className="mt-4">
              <p className="font-bold text-[#1a1a2e] text-lg">— {videoTestimonial.authorName}</p>
              <p className="text-base text-gray-500 mt-1">{videoTestimonial.projectLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaTestimonial;
