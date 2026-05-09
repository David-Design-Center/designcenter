import React from 'react';
import { ScrollableBlurContainer } from '../animations/progressive-blur';
import { ServiceAreaTextBlock } from '../../data/service-areas/types';

interface ServiceAreaTextSectionProps {
  textContent: ServiceAreaTextBlock;
}

const ServiceAreaTextSection: React.FC<ServiceAreaTextSectionProps> = ({ textContent }) => {
  const introParts = textContent.intro.split('\n\n');

  return (
    <ScrollableBlurContainer 
      backgroundColor="#f5f4f3" 
      height="80vh" 
      blurHeight="120px"
    >
      {/* Scroll indicator */}
      <div className="pt-20 pb-4 grid content-start justify-items-center text-center text-black">
        <span className="relative text-[10px] uppercase tracking-widest opacity-30 after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:mt-2 after:h-10 after:w-px after:bg-gradient-to-b after:from-black/30 after:to-transparent after:content-['']">
          Scroll to explore
        </span>
      </div>

      {/* Main content - tight article style */}
      <div className="w-full max-w-md space-y-8 px-14 pb-20 text-justify">
        {/* Article content */}
        <div className="text-xl text-black/50 leading-relaxed space-y-4">
          {introParts.map((part, index) => (
            <p key={index}>{part}</p>
          ))}
        </div>

        {/* Kitchens */}
        <div>
          <p className="text-xl text-black/50 leading-relaxed">
            {textContent.kitchens}
          </p>
        </div>

        {/* Closets */}
        <div>
          <p className="text-xl text-black/50 leading-relaxed">
            {textContent.closets}
          </p>
        </div>

        {/* Living Spaces */}
        <div>
          <p className="text-xl text-black/50 leading-relaxed">
            {textContent.livingDining}
          </p>
        </div>

        {/* Bathrooms */}
        <div>
          <p className="text-xl text-black/50 leading-relaxed">
            {textContent.bathrooms}
          </p>
        </div>

        {/* Outdoor */}
        <div>
          <p className="text-xl text-black/50 leading-relaxed">
            {textContent.outdoor}
          </p>
        </div>
      </div>
    </ScrollableBlurContainer>
  );
};

export default ServiceAreaTextSection;
