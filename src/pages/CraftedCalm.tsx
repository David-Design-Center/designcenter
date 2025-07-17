import { useState } from 'react';
import HeroSection from '../components/quiz/HeroSection';
import DiscoverSection from '../components/quiz/DiscoverSection';
import HowItWorksSection from '../components/quiz/HowItWorksSection';
import PersonalizedReportSection from '../components/quiz/PersonalizedReportSection';
import ReadyToPinpointSection from '../components/quiz/ReadyToPinpointSection';
import QuizContainer from '../components/quiz/QuizContainer';

interface CraftedCalmProps {
  triggerFooterContact?: () => void;
}

const CraftedCalm: React.FC<CraftedCalmProps> = ({ triggerFooterContact = () => {} }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  
  const startQuiz = () => {
    setShowQuiz(true);
    // Prevent body scroll when quiz is open
    document.body.style.overflow = 'hidden';
  };

  const closeQuiz = () => {
    setShowQuiz(false);
    // Restore body scroll
    document.body.style.overflow = '';
  };

  return (
    <div className="relative min-h-screen bg-white">
      <HeroSection onStartQuiz={startQuiz} />
      <DiscoverSection onStartQuiz={startQuiz} />
      <HowItWorksSection onStartQuiz={startQuiz} />
      <PersonalizedReportSection onStartQuiz={startQuiz} />
      <ReadyToPinpointSection onStartQuiz={startQuiz} />
      
      {/* Quiz Modal - Portal to body */}
      {showQuiz && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 overflow-auto flex items-start justify-center py-8 px-4"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="bg-transparent max-w-5xl w-full mx-auto my-auto relative">
            {/* Close button */}
            <button 
              onClick={closeQuiz}
              className="absolute -top-2 -right-2 text-white hover:text-gray-300 text-3xl z-[101] bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>
            {/* Quiz Container with auto-start */}
            <div className="quiz-modal-content">
              <QuizContainer triggerFooterContact={triggerFooterContact} autoStart={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CraftedCalm;