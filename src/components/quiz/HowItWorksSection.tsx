interface HowItWorksSectionProps {
  onStartQuiz?: () => void;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onStartQuiz }) => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-8">
          {/* Image - Left Column */}
          <div className="flex justify-center order-1 lg:order-first">
            <img
              src="https://res.cloudinary.com/designcenter/image/upload/v1752749355/quiz_1_st06ra.avif"
              alt="How the interior design quiz works"
              className="w-full max-w-xs h-64 object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
          
          {/* Text Content - Right Column */}
          <div className="space-y-3 md:space-y-4 text-left md:text-center lg:text-left md:mr-20 order-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight font-urbanist">
              How the Quiz Works
            </h2>
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
              Our quiz uses three simple steps:
            </p>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start space-x-2 md:space-x-3">
                <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-[#C5A267] text-white rounded-full flex items-center justify-center font-semibold text-xs md:text-sm">
                  1
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Answer questions about your preferences and lifestyle
                </p>
              </div>
              <div className="flex items-start space-x-2 md:space-x-3">
                <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-[#C5A267] text-white rounded-full flex items-center justify-center font-semibold text-xs md:text-sm">
                  2
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Our AI analyzes your responses against design archetypes
                </p>
              </div>
              <div className="flex items-start space-x-2 md:space-x-3">
                <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-[#C5A267] text-white rounded-full flex items-center justify-center font-semibold text-xs md:text-sm">
                  3
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Get your personalized style report and mood board
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Behind the scenes, each answer is scored against eight hallmark 
              archetypes (Scandinavian, Bohemian, Modern Farmhouse, etc.) so you 
              get an ultra-precise <span className="font-semibold text-[#C5A267]">find your home style</span> result.
            </p>
            <button 
              onClick={onStartQuiz}
              className="inline-flex items-center bg-[#C5A267] text-white font-semibold py-2 md:py-2.5 px-4 md:px-6 rounded-xl hover:bg-[#B8955A] transition-colors duration-300 text-sm md:text-base"
            >
              Save hours of research
              <svg className="ml-2 w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
