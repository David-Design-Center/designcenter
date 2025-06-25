import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronDown, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormData {
  // Personal Information
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

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  spaces: [],
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
};

const ContactFormPopup: React.FC<ContactFormPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const totalSteps = 3;

  // Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setFormData(initialFormData);
      setCurrentStep(1);
      setSubmitStatus('idle');
      setEmailError('');
      setIsEmailValid(false);
    }
  }, [isOpen]);

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

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
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
        formType: 'Qualifying Questions Form'
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
          onClose();
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

  const isStepValid = () => {
    switch (currentStep) {
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

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif text-gray-900 mb-2">Let's Get Started</h3>
        <p className="text-gray-600">Tell us about yourself and your project</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg transition-all ${
              formData.name.trim().length >= 2 
                ? 'border-green-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                : 'border-gray-200 focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267]'
            }`}
            placeholder="Enter your full name"
            required
            minLength={2}
          />
          {formData.name && formData.name.trim().length < 2 && (
            <p className="mt-1 text-sm text-gray-500">
              Please enter your full name (at least 2 characters)
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg transition-all ${
                emailError 
                  ? 'border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                  : isEmailValid 
                  ? 'border-green-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
                  : 'border-gray-200 focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267]'
              }`}
              placeholder="your@email.com"
              required
            />
            {isEmailValid && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          {emailError && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {emailError}
            </p>
          )}
          {formData.email && !emailError && !isEmailValid && (
            <p className="mt-1 text-sm text-gray-500">
              Please enter a complete email address (e.g., name@domain.com)
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all"
          placeholder="(555) 123-4567"
          maxLength={14}
        />
        <p className="mt-1 text-sm text-gray-500">
          Optional - We'll use this for faster communication about your project
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
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
                  : 'border-gray-200 text-gray-700 hover:border-[#C5A267] hover:text-[#C5A267]'
              }`}
            >
              {space}
            </button>
          ))}
        </div>
        {formData.spaces.length === 0 && (
          <p className="mt-2 text-sm text-gray-500">
            Please select at least one space to continue
          </p>
        )}
        {formData.spaces.length > 0 && (
          <p className="mt-2 text-sm text-green-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {formData.spaces.length} space{formData.spaces.length > 1 ? 's' : ''} selected
          </p>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif text-gray-900 mb-2">Project Vision</h3>
        <p className="text-gray-600">Help us understand your style and timeline</p>
      </div>

      <div>
        <label htmlFor="projectDriver" className="block text-sm font-medium text-gray-700 mb-2">
          What's driving the project right now? *
        </label>
        <select
          id="projectDriver"
          value={formData.projectDriver}
          onChange={(e) => handleInputChange('projectDriver', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all appearance-none"
          required
        >
          <option value="">Select a reason...</option>
          <option value="new-purchase">New Purchase</option>
          <option value="lifestyle-change">Lifestyle Change</option>
          <option value="ready-for-upgrade">Ready for an Upgrade</option>
          <option value="special-event">Special Event</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="idealStyle" className="block text-sm font-medium text-gray-700 mb-2">
          How would you describe your ideal style in three words? *
        </label>
        <input
          type="text"
          id="idealStyle"
          value={formData.idealStyle}
          onChange={(e) => handleInputChange('idealStyle', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all"
          placeholder="e.g., modern Italian luxe, warm minimalist"
          required
        />
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
          When would you like the space to be finished? *
        </label>
        <select
          id="timeline"
          value={formData.timeline}
          onChange={(e) => handleInputChange('timeline', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all appearance-none"
          required
        >
          <option value="">Select timeline...</option>
          <option value="1-3-months">1-3 months</option>
          <option value="3-6-months">3-6 months</option>
          <option value="6-12-months">6-12 months</option>
          <option value="spring">This Spring</option>
          <option value="summer">This Summer</option>
          <option value="fall">This Fall</option>
          <option value="winter">This Winter</option>
          <option value="flexible">Flexible timeline</option>
          <option value="special-date">Before a special date</option>
        </select>
      </div>

      <div>
        <label htmlFor="investmentRange" className="block text-sm font-medium text-gray-700 mb-2">
          Do you have a comfortable investment range in mind?
        </label>
        <select
          id="investmentRange"
          value={formData.investmentRange}
          onChange={(e) => handleInputChange('investmentRange', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all appearance-none"
        >
          <option value="">Select range...</option>
          <option value="under-50k">Under $50K</option>
          <option value="50k-150k">$50K - $150K</option>
          <option value="150k-300k">$150K - $300K</option>
          <option value="300k-500k">$300K - $500K</option>
          <option value="over-500k">Over $500K</option>
          <option value="open-if-value-clear">Open if the value is clear</option>
        </select>
      </div>

      <div>
        <label htmlFor="inspirationLink" className="block text-sm font-medium text-gray-700 mb-2">
          Any inspiration links, Pinterest boards, or mood boards to share?
        </label>
        <input
          type="url"
          id="inspirationLink"
          value={formData.inspirationLink}
          onChange={(e) => handleInputChange('inspirationLink', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all"
          placeholder="https://pinterest.com/your-board or describe your vision"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif text-gray-900 mb-2">Project Details</h3>
        <p className="text-gray-600">A few more details to help us serve you better</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="involvementLevel" className="block text-sm font-medium text-gray-700 mb-2">
            How involved do you want to be?
          </label>
          <select
            id="involvementLevel"
            value={formData.involvementLevel}
            onChange={(e) => handleInputChange('involvementLevel', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all appearance-none"
          >
            <option value="">Select involvement level...</option>
            <option value="hands-on">Hands-on throughout</option>
            <option value="occasional-checkins">Occasional check-ins</option>
            <option value="white-glove">Full white-glove service</option>
          </select>
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
            What matters most to you?
          </label>
          <select
            id="priority"
            value={formData.priority}
            onChange={(e) => handleInputChange('priority', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all appearance-none"
          >
            <option value="">Select priority...</option>
            <option value="timeline">Timeline</option>
            <option value="budget">Budget</option>
            <option value="uniqueness">Uniqueness</option>
            <option value="quality">Quality</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mustHaveItems" className="block text-sm font-medium text-gray-700 mb-2">
          Any must-have pieces, heirlooms, or existing finishes to integrate?
        </label>
        <textarea
          id="mustHaveItems"
          value={formData.mustHaveItems}
          onChange={(e) => handleInputChange('mustHaveItems', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all resize-none"
          rows={3}
          placeholder="Describe any existing pieces or special requirements..."
        />
      </div>

      <div>
        <label htmlFor="decisionMakers" className="block text-sm font-medium text-gray-700 mb-2">
          Who else will weigh in on design approvals and payments?
        </label>
        <input
          type="text"
          id="decisionMakers"
          value={formData.decisionMakers}
          onChange={(e) => handleInputChange('decisionMakers', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all"
          placeholder="e.g., spouse, business partner, etc."
        />
      </div>

      <div>
        <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-700 mb-2">
          Have you worked with an interior designer before?
        </label>
        <textarea
          id="previousExperience"
          value={formData.previousExperience}
          onChange={(e) => handleInputChange('previousExperience', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all resize-none"
          rows={3}
          placeholder="If yes, what worked well and what didn't?"
        />
      </div>

      <div>
        <label htmlFor="spaceUsage" className="block text-sm font-medium text-gray-700 mb-2">
          How do you envision using the finished space on a perfect day?
        </label>
        <textarea
          id="spaceUsage"
          value={formData.spaceUsage}
          onChange={(e) => handleInputChange('spaceUsage', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all resize-none"
          rows={3}
          placeholder="e.g., hosting friends, quiet family time, focused work..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="sustainabilityConcerns" className="block text-sm font-medium text-gray-700 mb-2">
            Sustainability preferences?
          </label>
          <select
            id="sustainabilityConcerns"
            value={formData.sustainabilityConcerns}
            onChange={(e) => handleInputChange('sustainabilityConcerns', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all appearance-none"
          >
            <option value="">Select preference...</option>
            <option value="very-important">Very important</option>
            <option value="somewhat-important">Somewhat important</option>
            <option value="not-a-priority">Not a priority</option>
            <option value="unsure">I'd like to learn more</option>
          </select>
        </div>

        <div>
          <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-2">
            How did you hear about us?
          </label>
          <select
            id="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all appearance-none"
          >
            <option value="">Select source...</option>
            <option value="referral">Referral</option>
            <option value="instagram">Instagram</option>
            <option value="google">Google Search</option>
            <option value="magazine">Magazine Feature</option>
            <option value="walk-in">Walk-in</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="practicalConstraints" className="block text-sm font-medium text-gray-700 mb-2">
          Any practical constraints we should know about?
        </label>
        <textarea
          id="practicalConstraints"
          value={formData.practicalConstraints}
          onChange={(e) => handleInputChange('practicalConstraints', e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all resize-none"
          rows={3}
          placeholder="e.g., building rules, elevator sizes, pets, children, allergies..."
        />
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full mx-4 max-h-[85vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#C5A267] to-[#D6B378] px-6 py-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-serif">Design Consultation</h2>
                <p className="text-white/90 mt-1">Step {currentStep} of {totalSteps}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close form"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 bg-white/20 rounded-full h-2">
              <motion.div
                className="bg-white rounded-full h-2"
                initial={{ width: "33%" }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(85vh-200px)]">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
            </motion.div>
          </div>

          {/* Footer */}
          <div className="border-t bg-gray-50 px-6 py-4">
            <div className="flex justify-between items-center">
              <div></div> {/* Empty div to maintain spacing */}

              <div className="flex items-center space-x-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full transition-all ${
                      step === currentStep
                        ? 'bg-[#C5A267] scale-110'
                        : step < currentStep
                        ? 'bg-[#C5A267]/60'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`px-6 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                    isStepValid()
                      ? 'bg-[#C5A267] text-white hover:bg-[#B49157]'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span>Next</span>
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-6 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                    submitStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : submitStatus === 'error'
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-[#C5A267] text-white hover:bg-[#B49157]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <span>Thank you!</span>
                  ) : submitStatus === 'error' ? (
                    <span>Try Again</span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactFormPopup;
