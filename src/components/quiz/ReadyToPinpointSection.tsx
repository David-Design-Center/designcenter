interface ReadyToPinpointSectionProps {
  onStartQuiz?: () => void;
}

const ReadyToPinpointSection: React.FC<ReadyToPinpointSectionProps> = ({ onStartQuiz }) => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-3 md:mb-4 font-urbanist">
            Ready to Pinpoint Your Perfect Style?
          </h2>
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
            Stop wondering "<span className="font-semibold text-[#C5A267]">what is my home decor style quiz</span>" and get your custom style profile now.
          </p>
        </div>
        
        <div className="grid grid-cols-[1fr_0.2fr_1fr] md:grid-cols-[1fr_0.3fr_1fr] gap-2 mb-6 md:mb-8 max-w-2xl mx-auto items-center">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/designcenter/image/upload/v1752749355/quiz_4_a1setv.avif"
              alt="Interior design style quiz results"
              className="w-full max-w-xs h-48 object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
          <div className="flex justify-center">
            <svg className="w-16 h-16 md:w-26 md:h-26 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/designcenter/image/upload/v1752749355/quiz_5_sjlags.avif"
              alt="Interior design style quiz process"
              className="w-full max-w-xs h-48 object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={onStartQuiz}
            className="bg-gradient-to-r from-[#C5A267] to-[#B8955A] hover:from-[#B8955A] hover:to-[#A8854A] text-white font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
          >
            Find your style
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToPinpointSection;