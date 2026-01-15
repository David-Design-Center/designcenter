import { useState } from 'react';
import { Send, Check, X, User, Mail, MessageSquare, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  projectType: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  message: '',
  projectType: '',
};

interface BocaRatonFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Helper for form submission conversion
const trackFormSubmitConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-17084982836/P6POCKnJs9QbELTM4NI_',
      'value': 100,
      'currency': 'USD',
      'event_category': 'boca_raton_lead',
      'event_label': 'form_submit_modal'
    });
  }
};

// Helper function to track phone call clicks with Google Ads conversion
const trackPhoneClick = (location: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    // GA4 event
    (window as any).gtag('event', 'click', {
      'event_category': 'phone_call',
      'event_label': location,
      'value': 25
    });
    // Google Ads conversion for phone clicks
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-17084982836/LZqdCPeO_eUbELTM4NI_',
      'value': 25,
      'currency': 'USD',
      'event_category': 'phone_lead',
      'event_label': location
    });
    console.log(`Phone click tracked: ${location}`);
  }
};

const BocaRatonFormModal = ({ isOpen, onClose }: BocaRatonFormModalProps) => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

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

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'email') validateEmail(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        formType: 'Boca Raton Modal Form',
        source: 'Boca Raton Page - Mid CTA'
      };

      const response = await fetch(
        'https://hook.us2.make.com/c4yxbfemmbazew2y219wu0m11wtp9unn',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionData),
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        trackFormSubmitConversion();
        setFormData(initialFormData);
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 3000);
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
           isEmailValid &&
           formData.message.trim().length >= 10 &&
           formData.projectType !== '';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[75vh] overflow-hidden grid grid-cols-1 md:grid-cols-2" 
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Section - Shows on top on mobile, right on desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative h-32 md:h-auto md:order-2"
          >
            <img
              src="https://res.cloudinary.com/designcenter/image/upload/v1768484605/69f33226-ef89-4ca8-9bcf-741eaa823b27_f42esm.avif"
              alt="boca raton interior designer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 to-transparent"></div>
          </motion.div>

          {/* Form Section - Shows below image on mobile, left on desktop */}
          <motion.div 
            className="p-3 sm:p-5 md:p-7 overflow-y-auto md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.h2 variants={itemVariants} className="text-xl sm:text-1xl font-regular text-[#1a1a2e] mb-4">
              FREE RENDER & CONSULTATION FOR NEXT 6 MONTHS
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-base text-gray-600 mb-5">
              No obligation. No commitment.
            </motion.p>

            {submitStatus === 'success' ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1a1a2e] mb-2">Thank You!</h3>
                <p className="text-base text-gray-600">We'll be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                {/* Project Type */}
                <motion.div variants={itemVariants} className="relative bg-black/10 rounded-lg p-2.5 sm:p-3.5">
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-full border border-gray-200">
                      <Home className="h-4 w-4 text-[#C5A267]" />
                    </div>
                    <select
                      value={formData.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                      className="w-full pl-3 py-2 text-base bg-transparent text-[#1a1a2e] focus:outline-none cursor-pointer"
                      required
                    >
                      <option value="">What area(s) need redesigning?</option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Bathroom">Bathroom</option>
                      <option value="Closet/Dressing Room">Closet/Dressing Room</option>
                      <option value="Outdoor Living Space">Outdoor Living Space</option>
                      <option value="Full Home">Full Home</option>
                    </select>
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants} className="relative bg-black/10 rounded-lg p-2.5 sm:p-3.5">
                  <div className="flex items-start">
                    <div className="bg-white p-2 rounded-full border border-gray-200">
                      <MessageSquare className="h-4 w-4 text-[#C5A267]" />
                    </div>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full pl-3 py-2 text-black bg-transparent text-[#1a1a2e] focus:outline-none resize-none placeholder:text-black"
                      placeholder="Tell us about your project (10+ characters)"
                      rows={2}
                      required
                      minLength={10}
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants} className="relative bg-black/10 rounded-lg p-2.5 sm:p-3.5">
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-full border border-gray-200">
                      <Mail className="h-4 w-4 text-[#C5A267]" />
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full pl-3 py-2 text-base bg-transparent text-[#1a1a2e] focus:outline-none placeholder:text-black"
                      placeholder="Email Address"
                      required
                    />
                    {isEmailValid && (
                      <div className="bg-green-500 p-1 rounded-full">
                        <Check className="w-3 h-3 text-black" />
                      </div>
                    )}
                  </div>
                  {emailError && (
                    <p className="mt-2 text-sm text-red-600 ml-12">{emailError}</p>
                  )}
                </motion.div>

                {/* Name Field */}
                <motion.div variants={itemVariants} className="relative bg-black/10 rounded-lg p-2.5 sm:p-3.5">
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-full border border-gray-200">
                      <User className="h-4 w-4 text-[#C5A267]" />
                    </div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full pl-3 py-2 text-base bg-transparent text-[#1a1a2e] focus:outline-none placeholder:text-black"
                      placeholder="Full Name"
                      required
                      minLength={2}
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className={`w-full py-2.5 sm:py-3 rounded-lg flex items-center justify-center gap-2 text-[#C5A267] text-sm sm:text-base font-semibold ${
                    isFormValid() && !isSubmitting
                      ? 'bg-black/15 hover:bg-black/5 shadow-lg hover:shadow-xl'
                      : 'bg-black/5 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Recieve Gift
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Phone Option */}
                <div className="text-center py-2">
                  <div className="flex items-center justify-center space-x-2 text-gray-600 mb-2">
                    <div className="h-px bg-gray-300 flex-1"></div>
                  </div>
                  <a 
                    href="tel:+17189347100" 
                    className="inline-flex items-center justify-center space-x-2 text-[#C5A267] hover:text-[#B49157] font-semibold transition-colors text-base"
                    onClick={() => trackPhoneClick('form_modal_phone')}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(718) 934-7100</span>
                  </a>
                </div>

                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BocaRatonFormModal;
