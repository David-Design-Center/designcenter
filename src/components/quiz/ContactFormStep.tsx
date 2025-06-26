import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ArrowLeft, Send, Check } from 'lucide-react';
import { StepProps } from './QuizTypes';

interface ContactFormStepProps extends StepProps {
  triggerFooterContact: () => void;
}

// Contact form data interface to match the popup form
interface ContactFormData {
  // Personal Information (already have from quiz)
  name: string;
  email: string;
  phone: string;
  
  // Project Details
  spaces: string[];
  projectDriver: string;
  idealStyle: string;
  timeline: string;
  investmentRange: string;
  inspirationLink: string;
  involvementLevel: string;
  mustHaveItems: string;
  priority: string;
  decisionMakers: string;
  previousExperience: string;
  spaceUsage: string;
  sustainabilityConcerns: string;
  practicalConstraints: string;
  hearAboutUs: string;
}

const ContactFormStep: React.FC<ContactFormStepProps> = ({ 
  quizData,
  nextStep,
  prevStep,
  triggerFooterContact 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFormStep, setCurrentFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true); // Start as true since we have email from quiz
  
  const totalFormSteps = 3;

  // Initialize form data with quiz data
  const [formData, setFormData] = useState<ContactFormData>({
    name: quizData.name || '',
    email: quizData.email || '',
    phone: '',
    spaces: quizData.selectedRooms || [],
    projectDriver: '',
    idealStyle: '',
    timeline: '',
    investmentRange: '',
    inspirationLink: '',
    involvementLevel: '',
    mustHaveItems: '',
    priority: '',
    decisionMakers: '',
    previousExperience: '',
    spaceUsage: '',
    sustainabilityConcerns: '',
    practicalConstraints: '',
    hearAboutUs: '',
  });

  // Animation on mount
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    );
  }, []);

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    
    if (!email) {
      setEmailError('');
      setIsEmailValid(false);
    } else if (!isValid) {
      setEmailError('Please enter a valid email address');
      setIsEmailValid(false);
    } else {
      setEmailError('');
      setIsEmailValid(true);
    }
    
    return isValid;
  };

  // Phone number formatting function
  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string | string[]) => {
    let processedValue = value;
    
    // Format phone number
    if (field === 'phone' && typeof value === 'string') {
      processedValue = formatPhoneNumber(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: processedValue
    }));

    // Validate email on change
    if (field === 'email' && typeof value === 'string') {
      validateEmail(value);
    }
  };

  const handleSpaceToggle = (space: string) => {
    setFormData(prev => ({
      ...prev,
      spaces: prev.spaces.includes(space)
        ? prev.spaces.filter(s => s !== space)
        : [...prev.spaces, space]
    }));
  };

  const nextFormStep = () => {
    if (currentFormStep < totalFormSteps) {
      setCurrentFormStep(prev => prev + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format the data for submission
      const submissionData = {
        ...formData,
        spaces: formData.spaces.join(', '),
        timestamp: new Date().toISOString(),
        formType: 'Quiz Contact Form',
        // Include quiz results for context
        quizMainStyle: quizData.results?.mainStyle,
        quizSubStyles: quizData.results?.subStyles?.join(', '),
        priorityRoom: quizData.priorityRoom,
      };

      const response = await fetch(
        'https://hook.us2.make.com/c4yxbfemmbazew2y219wu0m11wtp9unn',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          triggerFooterContact();
          nextStep(); // This will close the quiz by resetting it
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormStepValid = () => {
    switch (currentFormStep) {
      case 1:
        return formData.name.trim().length >= 2 && 
               formData.email.trim() && 
               isEmailValid && 
               formData.spaces.length > 0;
      case 2:
        return formData.projectDriver.trim() && formData.idealStyle.trim() && formData.timeline.trim();
      case 3:
        return true; // All fields in step 3 are optional
      default:
        return false;
    }
  };

  const renderFormStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif text-white mb-2">Let's Connect</h3>
        <p className="text-white/80">A few details to help us serve you better</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full px-4 py-3 border bg-white/10 backdrop-blur-sm rounded-lg transition-all text-white placeholder-white/50 ${
              formData.name.trim().length >= 2 
                ? 'border-green-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                : 'border-white/30 focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267]'
            }`}
            placeholder="Enter your full name"
            required
            minLength={2}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 border bg-white/10 backdrop-blur-sm rounded-lg transition-all text-white placeholder-white/50 ${
                emailError 
                  ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                  : isEmailValid 
                  ? 'border-green-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                  : 'border-white/30 focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267]'
              }`}
              placeholder="your@email.com"
              required
            />
            {isEmailValid && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              </div>
            )}
          </div>
          {emailError && (
            <p className="mt-1 text-sm text-red-400 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {emailError}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all text-white placeholder-white/50"
          placeholder="(555) 123-4567"
          maxLength={14}
        />
        <p className="mt-1 text-sm text-white/60">
          Optional - We'll use this for faster communication about your project
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-3">
          Which spaces are you thinking about refreshing first? *
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {['Living Room', 'Kitchen', 'Bedroom', 'Bathroom', 'Office', 'Dining Room', 'Full Home', 'Other'].map((space) => (
            <button
              key={space}
              type="button"
              onClick={() => handleSpaceToggle(space)}
              className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium ${
                formData.spaces.includes(space)
                  ? 'border-[#C5A267] bg-[#C5A267] text-white'
                  : 'border-white/30 text-white hover:border-[#C5A267] hover:text-[#C5A267]'
              }`}
            >
              {space}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFormStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif text-white mb-2">Project Vision</h3>
        <p className="text-white/80">Help us understand your style and timeline</p>
      </div>

      <div>
        <label htmlFor="projectDriver" className="block text-sm font-medium text-white mb-2">
          What's driving the project right now? *
        </label>
        <select
          id="projectDriver"
          value={formData.projectDriver}
          onChange={(e) => handleInputChange('projectDriver', e.target.value)}
          className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all text-white appearance-none"
          required
        >
          <option value="" className="text-gray-900">Select a reason...</option>
          <option value="new-purchase" className="text-gray-900">New Purchase</option>
          <option value="lifestyle-change" className="text-gray-900">Lifestyle Change</option>
          <option value="ready-for-upgrade" className="text-gray-900">Ready for an Upgrade</option>
          <option value="special-event" className="text-gray-900">Special Event</option>
          <option value="other" className="text-gray-900">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="idealStyle" className="block text-sm font-medium text-white mb-2">
          How would you describe your ideal style in three words? *
        </label>
        <input
          type="text"
          id="idealStyle"
          value={formData.idealStyle}
          onChange={(e) => handleInputChange('idealStyle', e.target.value)}
          className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all text-white placeholder-white/50"
          placeholder="e.g., modern Italian luxe, warm minimalist"
          required
        />
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
          When would you like the space to be finished? *
        </label>
        <select
          id="timeline"
          value={formData.timeline}
          onChange={(e) => handleInputChange('timeline', e.target.value)}
          className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all text-white appearance-none"
          required
        >
          <option value="" className="text-gray-900">Select timeline...</option>
          <option value="1-3-months" className="text-gray-900">1-3 months</option>
          <option value="3-6-months" className="text-gray-900">3-6 months</option>
          <option value="6-12-months" className="text-gray-900">6-12 months</option>
          <option value="spring" className="text-gray-900">This Spring</option>
          <option value="summer" className="text-gray-900">This Summer</option>
          <option value="fall" className="text-gray-900">This Fall</option>
          <option value="winter" className="text-gray-900">This Winter</option>
          <option value="flexible" className="text-gray-900">Flexible timeline</option>
          <option value="special-date" className="text-gray-900">Before a special date</option>
        </select>
      </div>

      <div>
        <label htmlFor="investmentRange" className="block text-sm font-medium text-white mb-2">
          Do you have a comfortable investment range in mind?
        </label>
        <select
          id="investmentRange"
          value={formData.investmentRange}
          onChange={(e) => handleInputChange('investmentRange', e.target.value)}
          className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all text-white appearance-none"
        >
          <option value="" className="text-gray-900">Select range...</option>
          <option value="under-50k" className="text-gray-900">Under $50K</option>
          <option value="50k-150k" className="text-gray-900">$50K - $150K</option>
          <option value="150k-300k" className="text-gray-900">$150K - $300K</option>
          <option value="300k-500k" className="text-gray-900">$300K - $500K</option>
          <option value="over-500k" className="text-gray-900">Over $500K</option>
          <option value="open-if-value-clear" className="text-gray-900">Open if the value is clear</option>
        </select>
      </div>

      <div>
        <label htmlFor="inspirationLink" className="block text-sm font-medium text-white mb-2">
          Any inspiration links, Pinterest boards, or mood boards to share?
        </label>
        <input
          type="url"
          id="inspirationLink"
          value={formData.inspirationLink}
          onChange={(e) => handleInputChange('inspirationLink', e.target.value)}
          className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all text-white placeholder-white/50"
          placeholder="https://pinterest.com/your-board or describe your vision"
        />
      </div>
    </div>
  );

  const renderFormStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif text-white mb-2">Project Details</h3>
        <p className="text-white/80">A few more details to help us serve you better</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="involvementLevel" className="block text-sm font-medium text-white mb-2">
            How involved do you want to be?
          </label>
          <select
            id="involvementLevel"
            value={formData.involvementLevel}
            onChange={(e) => handleInputChange('involvementLevel', e.target.value)}
            className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all text-white appearance-none"
          >
            <option value="" className="text-gray-900">Select involvement level...</option>
            <option value="hands-on" className="text-gray-900">Hands-on throughout</option>
            <option value="occasional-checkins" className="text-gray-900">Occasional check-ins</option>
            <option value="white-glove" className="text-gray-900">Full white-glove service</option>
          </select>
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-white mb-2">
            What matters most to you?
          </label>
          <select
            id="priority"
            value={formData.priority}
            onChange={(e) => handleInputChange('priority', e.target.value)}
            className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all text-white appearance-none"
          >
            <option value="" className="text-gray-900">Select priority...</option>
            <option value="timeline" className="text-gray-900">Timeline</option>
            <option value="budget" className="text-gray-900">Budget</option>
            <option value="uniqueness" className="text-gray-900">Uniqueness</option>
            <option value="quality" className="text-gray-900">Quality</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mustHaveItems" className="block text-sm font-medium text-white mb-2">
          Any must-have pieces, heirlooms, or existing finishes to integrate?
        </label>
        <textarea
          id="mustHaveItems"
          value={formData.mustHaveItems}
          onChange={(e) => handleInputChange('mustHaveItems', e.target.value)}
          className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all resize-none text-white placeholder-white/50"
          rows={3}
          placeholder="Describe any existing pieces or special requirements..."
        />
      </div>

      <div>
        <label htmlFor="spaceUsage" className="block text-sm font-medium text-white mb-2">
          How do you envision using the finished space on a perfect day?
        </label>
        <textarea
          id="spaceUsage"
          value={formData.spaceUsage}
          onChange={(e) => handleInputChange('spaceUsage', e.target.value)}
          className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all resize-none text-white placeholder-white/50"
          rows={3}
          placeholder="e.g., hosting friends, quiet family time, focused work..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="sustainabilityConcerns" className="block text-sm font-medium text-white mb-2">
            Sustainability preferences?
          </label>
          <select
            id="sustainabilityConcerns"
            value={formData.sustainabilityConcerns}
            onChange={(e) => handleInputChange('sustainabilityConcerns', e.target.value)}
            className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all text-white appearance-none"
          >
            <option value="" className="text-gray-900">Select preference...</option>
            <option value="very-important" className="text-gray-900">Very important</option>
            <option value="somewhat-important" className="text-gray-900">Somewhat important</option>
            <option value="not-a-priority" className="text-gray-900">Not a priority</option>
            <option value="unsure" className="text-gray-900">I'd like to learn more</option>
          </select>
        </div>

        <div>
          <label htmlFor="hearAboutUs" className="block text-sm font-medium text-white mb-2">
            How did you hear about us?
          </label>
          <select
            id="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
            className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all text-white appearance-none"
          >
            <option value="" className="text-gray-900">Select source...</option>
            <option value="referral" className="text-gray-900">Referral</option>
            <option value="instagram" className="text-gray-900">Instagram</option>
            <option value="google" className="text-gray-900">Google Search</option>
            <option value="magazine" className="text-gray-900">Magazine Feature</option>
            <option value="walk-in" className="text-gray-900">Walk-in</option>
            <option value="other" className="text-gray-900">Other</option>
          </select>
        </div>
      </div>
    </div>
  );

  // Show success state
  if (submitStatus === 'success') {
    return (
      <div 
        ref={containerRef}
        className="max-h-[80vh] overflow-y-auto custom-scrollbar pr-2 py-6 max-w-2xl mx-auto"
      >
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">Thank You!</h2>
          <p className="text-lg text-white/90 mb-6">
            Your information has been submitted successfully. Our team will reach out to you soon to schedule your consultation.
          </p>
          <p className="text-white/70">
            You'll be redirected shortly...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="max-h-[80vh] overflow-y-auto custom-scrollbar pr-2 py-6 max-w-2xl mx-auto"
    >
      {/* Header */}
      <div className="bg-[#C5A267]/90 px-4 py-3 rounded-lg shadow mb-6 text-center">
        <h2 className="text-xl sm:text-2xl font-serif text-white tracking-wide">
          Let's Plan Your Consultation
        </h2>
        <p className="text-white/90 mt-1">Step {currentFormStep} of {totalFormSteps}</p>
        
        {/* Progress Bar */}
        <div className="mt-3 bg-white/20 rounded-full h-2">
          <div
            className="bg-white rounded-full h-2 transition-all duration-300"
            style={{ width: `${(currentFormStep / totalFormSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 mb-6">
        {currentFormStep === 1 && renderFormStep1()}
        {currentFormStep === 2 && renderFormStep2()}
        {currentFormStep === 3 && renderFormStep3()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center relative">
        <button
          onClick={prevStep}
          className="px-6 py-3 bg-white/10 border border-white/30 text-white rounded-md hover:bg-white/20 transition-colors duration-300 flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Results
        </button>

        {currentFormStep < totalFormSteps ? (
          <button
            onClick={nextFormStep}
            disabled={!isFormStepValid()}
            className="px-6 py-3 bg-[#C5A267] text-white rounded-md hover:bg-[#B49157] transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-6 py-3 bg-[#C5A267] text-white rounded-md hover:bg-[#B49157] transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                Submitting...
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </>
            ) : (
              <>
                Book Consultation
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        )}

        {/* Add back button for form steps */}
        {currentFormStep > 1 && (
          <button
            onClick={() => setCurrentFormStep(prev => prev - 1)}
            className="absolute left-0 px-4 py-2 bg-white/10 border border-white/30 text-white text-sm rounded-md hover:bg-white/20 transition-colors duration-300"
          >
            Previous
          </button>
        )}
      </div>

      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
          <p className="text-red-200 text-center">
            There was an error submitting your information. Please try again.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactFormStep;
