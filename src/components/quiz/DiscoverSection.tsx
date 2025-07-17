interface DiscoverSectionProps {
  onStartQuiz?: () => void;
}

const DiscoverSection: React.FC<DiscoverSectionProps> = ({ onStartQuiz }) => {
  return (
    <section className="py-8 pt-0 md:py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-8">
          {/* Text Content - Left Column */}
          <div className="space-y-3 md:space-y-4 text-left md:text-center lg:text-left md:ml-20 order-2 lg:order-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight font-urbanist">
              Discover Your Signature Look
            </h2>
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
              Our quiz uses three simple steps:
            </p>
            <div className="space-y-2 md:space-y-3">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Behind the scenes, each answer is scored against eight hallmark 
                archetypes (Scandinavian, Bohemian, Modern Farmhouse, etc.) so you 
                get an ultra-precise <span className="font-semibold text-[#C5A267]">find your home style</span> result.
              </p>
            </div>
            <button 
              onClick={onStartQuiz}
              className="inline-flex items-center bg-[#C5A267] text-white font-semibold py-2 md:py-2.5 px-4 md:px-6 rounded-xl hover:bg-[#B8955A] transition-colors duration-300 text-sm md:text-base"
            >
              Find your style
              <svg className="ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Image - Right Column */}
          <div className="flex justify-center order-1 lg:order-2">
            <img
              src="https://res.cloudinary.com/designcenter/image/upload/v1752749355/quiz_2_tu1xfn.avif"
              alt="Modern Interior Design Style"
              className="w-full max-w-xs h-64 object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;