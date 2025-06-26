import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { QuizData, QuizImage } from './QuizTypes';
import QuizIntro from './QuizIntro';
import ImageSelectionStep from './ImageSelectionStep';
import RoomSelectionStep from './RoomSelectionStep';
import PriorityRoomStep from './PriorityRoomStep';
import NameCaptureStep from './NameCaptureStep';
import EmailCaptureStep from './EmailCaptureStep';
import ProcessingStep from './ProcessingStep';
import ResultsStep from './ResultsStep';
import ContactFormStep from './ContactFormStep';
import { allRoomImages } from '../../data/quizRoomImages'; // Import our new room images

interface QuizContainerProps {
  triggerFooterContact: () => void;
}

const QuizContainer: React.FC<QuizContainerProps> = ({ triggerFooterContact }) => {
  // State for quiz
  const [quizStep, setQuizStep] = useState(0); // 0 = not started, 1-7 = steps
  const [availableImages, setAvailableImages] = useState<QuizImage[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const quizModalRef = useRef<HTMLDivElement>(null); // Renamed from quizWrapperRef for clarity
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { ref: quizRef, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  
  // Initialize quiz data
  const [quizData, setQuizData] = useState<QuizData>({
    selectedImages: [],
    selectedRooms: [],
    priorityRoom: '',
    name: '',
    email: '',
    results: {
      mainStyle: '',
      subStyles: [],
      recommendedImages: []
    }
  });

  // Function to get random images per room for Step 1
  const getRandomImagesPerRoom = (): QuizImage[] => {
    // Directly use images from the imported room JSONs
    if (!allRoomImages || allRoomImages.length === 0) {
      console.warn(
        'QuizContainer: allRoomImages from quizRoomImages.ts is not available or is empty. ' +
        'Step 1 of the quiz will have no images. Ensure JSON files are correctly loaded.'
      );
      return [];
    }
    return allRoomImages;
  };

  // Initialize quiz images when starting the quiz
  useEffect(() => {
    if (quizStep === 1 && availableImages.length === 0) {
      setAvailableImages(getRandomImagesPerRoom());
    }
  }, [quizStep, availableImages.length]); // Removed quizImages from dependency array as getRandomImagesPerRoom no longer uses it

  // Add fullscreen effect when quiz starts
  useEffect(() => {
    if (quizStep > 0) {
      setIsFullscreen(true);
      document.body.style.overflow = 'hidden';
      // Ensure the modal is scrolled to its top
      if (quizModalRef.current) {
        requestAnimationFrame(() => {
          if (quizModalRef.current) { // Re-check current in case component unmounted
            quizModalRef.current.scrollTop = 0;
          }
        });
      }
    } else {
      setIsFullscreen(false);
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [quizStep]);

  // Fade in animation for quiz container
  useEffect(() => {
    if (inView && containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      );
    }
  }, [inView]);
  
  // Process the quiz data to determine style preferences
  // Update quiz data
  const updateQuizData = (newData: Partial<QuizData>) => {
    setQuizData(prevData => ({
      ...prevData,
      ...newData
    }));
  };

  // Close quiz function to expose if needed
  const closeQuiz = () => {
    resetQuiz();
  };

  // Navigation helpers
  const nextStep = () => setQuizStep(prev => prev + 1);
  const prevStep = () => setQuizStep(prev => prev - 1);
  
  // Reset quiz
  const resetQuiz = () => {
    setQuizStep(0);
    setQuizData({
      selectedImages: [],
      selectedRooms: [],
      priorityRoom: '',
      name: '',
      email: '',
      results: {
        mainStyle: '',
        subStyles: [],
        recommendedImages: []
      }
    });
    setAvailableImages([]);
  };

  // Render different quiz steps
  const renderQuizStep = () => {
    switch (quizStep) {
      case 0:
        return <QuizIntro startQuiz={() => setQuizStep(1)} />; // This case will be handled by quizIntroComponent directly
      case 1:
        return (
          <ImageSelectionStep 
            quizData={quizData}
            updateQuizData={updateQuizData}
            nextStep={nextStep}
            prevStep={resetQuiz}
            availableImages={availableImages}
          />
        );
      case 2:
        return (
          <RoomSelectionStep
            quizData={quizData}
            updateQuizData={updateQuizData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <PriorityRoomStep
            quizData={quizData}
            updateQuizData={updateQuizData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <NameCaptureStep
            quizData={quizData}
            updateQuizData={updateQuizData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 5:
        return (
          <EmailCaptureStep
            quizData={quizData}
            updateQuizData={updateQuizData}
            nextStep={nextStep} // Let EmailCaptureStep handle the next step directly
            prevStep={prevStep}
          />
        );
      case 6:
        return <ProcessingStep />;
      case 7:
        return (
          <ResultsStep
            quizData={quizData}
            updateQuizData={updateQuizData}
            nextStep={() => setQuizStep(8)} // Move to contact form step
            prevStep={() => {}}
            triggerFooterContact={() => {
              triggerFooterContact();
              closeQuiz(); // Ensure the quiz closes when consultation is booked
            }}
          />
        );
      case 8:
        return (
          <ContactFormStep
            quizData={quizData}
            updateQuizData={updateQuizData}
            nextStep={resetQuiz} // Reset quiz after form submission
            prevStep={() => setQuizStep(7)} // Go back to results
            triggerFooterContact={() => {
              triggerFooterContact();
              closeQuiz(); // Ensure the quiz closes when consultation is booked
            }}
          />
        );
      default:
        return null;
    }
  };

  const quizIntroComponent = <QuizIntro startQuiz={() => setQuizStep(1)} />;

  const quizStepsModalComponent = (
    <div
      ref={quizModalRef}
      className="fixed inset-0 z-[100] bg-black/90 overflow-auto flex items-start justify-center py-8 px-4 sm:py-12 md:py-16"
      // Transitions for opacity/scale can be applied to the inner div if desired
    >
      <div
        className="bg-transparent max-w-5xl w-full mx-auto my-auto pt-4 sm:pt-6" 
        // Individual quiz step components should manage their own backgrounds and appearance.
        // Example: ImageSelectionStep uses `bg-white/10 backdrop-blur-md`.
        // Add transition classes here if needed e.g. "transition-opacity duration-500 ease-in-out opacity-100"
      >
        {renderQuizStep()} {/* This will render steps 1 through 7 based on current quizStep */}
      </div>
    </div>
  );

  return (
    <div 
      ref={containerRef} 
      className="quiz-section py-16 sm:py-24"
      id="style-quiz"
    >
      <div ref={quizRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Render QuizIntro directly in the page flow when quiz is not active */}
        {quizStep === 0 && !isFullscreen && quizIntroComponent}
        
        {/* Render the quiz steps modal using a portal when quiz is active and fullscreen */}
        {isFullscreen && quizStep > 0 && typeof document !== 'undefined' &&
          ReactDOM.createPortal(quizStepsModalComponent, document.body)}
      </div>
    </div>
  );
};

export default QuizContainer;