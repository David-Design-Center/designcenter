const BocaRatonHeroBottom = () => {
  const triggerFooterContact = () => {
    window.dispatchEvent(new CustomEvent('openContactForm'));
  };

  return (
    <section className="relative min-h-[500px] w-full">
      {/* Hidden image for SEO indexing */}
      <div className="hidden">
        <img
          src="https://res.cloudinary.com/designcenter/image/upload/Luxury%20Custom%20Furniture%20and%20Interior%20Design%20%E2%80%93%20DnD%20Design%20Center%20NYC.avif"
          alt="Luxury Italian kitchen designed for Boca Raton homeowners by D&D Design Center"
          loading="lazy"
        />
      </div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/designcenter/image/upload/Luxury%20Custom%20Furniture%20and%20Interior%20Design%20%E2%80%93%20DnD%20Design%20Center%20NYC.avif")',
        }}
        aria-hidden="true"
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white" />

      {/* Content area */}
      <div className="relative h-full min-h-[500px] flex flex-col items-center justify-center text-center px-4 py-16">
        {/* Main headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
          Schedule a Free Call<br />Boca Raton's Best Design Firm
        </h2>
        
        {/* Value proposition */}
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-4 font-light">
          Looking for an interior designer in Boca Raton? Schedule a free design consultation. It's time to refresh your home's look. Start 2026 with a free 3D render.
        </p>

        {/* Timeline disclaimer */}
        <p className="text-white/60 text-sm max-w-xl mb-8">
          Luxury Boca Raton Design. No Pressure Consultation.
        </p>

        {/* Benefits bullets */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 text-white/80 text-sm sm:text-base">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#C5A267]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Increase resale value
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#C5A267]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            One accountable partner
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#C5A267]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Intentional design
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={triggerFooterContact}
            className="px-8 py-4 bg-[#C5A267] text-white font-medium hover:bg-[#B49157] transition-colors duration-200 min-h-[44px]"
          >
            START MY CUSTOM DESIGN
          </button>
          <button
            onClick={triggerFooterContact}
            className="px-8 py-4 border-2 border-white text-white font-medium hover:bg-white/10 transition-colors duration-200 min-h-[44px]"
          >
            SEE MY KITCHEN IN 3D
          </button>
        </div>

        {/* Scarcity note */}
        <p className="text-white/60 text-sm mt-6 max-w-md">
          We accept a limited number of Boca Raton projects per month to maintain quality and timelines.
        </p>

        {/* Hidden description for screen readers */}
        <span className="sr-only">
          D&D Design Center custom Italian kitchens and closets for Boca Raton, Florida homeowners
        </span>
      </div>
    </section>
  );
};

export default BocaRatonHeroBottom;
