import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
}

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
};

const ContactFormPopup: React.FC<ContactFormPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setFormData(initialFormData);
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

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Validate email on change
    if (field === 'email') {
      validateEmail(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format the data for submission
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        formType: 'Simple Contact Form',
        source: 'Schedule Consultation'
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

  const isFormValid = () => {
    return formData.name.trim().length >= 2 && 
           formData.email.trim() && 
           isEmailValid;
  };

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
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[85vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#C5A267] to-[#D6B378] px-6 py-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-serif">Schedule Free Consultation</h2>
                <p className="text-white/90 mt-1">Get started with your design journey</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close form"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
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

              {/* Email Field */}
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
                        <Check className="w-3 h-3 text-white" />
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
              </div>

              {/* Call Option */}
              <div className="text-center py-4">
                <div className="flex items-center justify-center space-x-2 text-gray-600 mb-3">
                  <div className="h-px bg-gray-300 flex-1"></div>
                  <span className="text-sm font-medium">OR</span>
                  <div className="h-px bg-gray-300 flex-1"></div>
                </div>
                <p className="text-sm text-gray-600 mb-3">Prefer to talk directly?</p>
                <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 space-y-2 sm:space-y-0">
                  <a 
                    href="tel:+17189347100" 
                    className="inline-flex items-center justify-center space-x-2 text-[#C5A267] hover:text-[#B49157] font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(718) 934-7100</span>
                  </a>
                  <a 
                    href="mailto:info@dnddesigncenter.com" 
                    className="inline-flex items-center justify-center space-x-2 text-[#C5A267] hover:text-[#B49157] font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@dnddesigncenter.com</span>
                  </a>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                <p>
                  By submitting this form, you agree to be contacted by our team to schedule your consultation. 
                  We respect your privacy and will never share your information with third parties.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className={`w-full py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2 ${
                  submitStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : isFormValid()
                    ? 'bg-[#C5A267] text-white hover:bg-[#B49157]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Thank you!</span>
                  </>
                ) : submitStatus === 'error' ? (
                  <span>Try Again</span>
                ) : (
                  <>
                    <span>Schedule Consultation</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactFormPopup;