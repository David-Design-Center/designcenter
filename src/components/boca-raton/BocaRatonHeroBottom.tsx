import { useState } from 'react';
import { Send, Check } from 'lucide-react';

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

// Helper for form submission conversion
const trackFormSubmitConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-17084982836/P6POCKnJs9QbELTM4NI_',
      'value': 100,
      'currency': 'USD',
      'event_category': 'boca_raton_lead',
      'event_label': 'form_submit_qualified'
    });
    (window as any).gtag('event', 'form_submit', {
      'event_category': 'boca_raton_conversion',
      'event_label': 'contact_form_submitted',
      'value': 100,
      'page_location': window.location.href
    });
  }
};

const BocaRatonHeroBottom = () => {
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
        formType: 'Boca Raton Bottom Form',
        source: 'Boca Raton Page'
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

  return (
    <section className="w-full relative bg-cover bg-center py-16 lg:py-24" style={{ backgroundImage: 'url(https://res.cloudinary.com/designcenter/image/upload/v1767974872/5_c3vyli.avif)' }}>
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/95"></div>
      
      {/* Content */}
      <div className="max-w-xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Tell us about your project. No obligation.
          </p>
        </div>

        {/* Success State */}
        {submitStatus === 'success' ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1a1a2e] mb-2">Thank You!</h3>
            <p className="text-gray-600">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          /* Contact Form */
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label htmlFor="bottom-name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="bottom-name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all bg-white"
                placeholder="Your name"
                required
                minLength={2}
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="bottom-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="bottom-email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border transition-all bg-white ${
                    emailError 
                      ? 'border-red-300 focus:ring-2 focus:ring-red-500' 
                      : isEmailValid 
                      ? 'border-green-300 focus:ring-2 focus:ring-green-500'
                      : 'border-gray-200 focus:ring-2 focus:ring-[#C5A267]'
                  }`}
                  placeholder="you@email.com"
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
                <p className="mt-1 text-sm text-red-600">{emailError}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="bottom-message" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your project * (10+ characters)
              </label>
              <textarea
                id="bottom-message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all bg-white resize-none"
                placeholder="What rooms are you looking to redesign?"
                rows={4}
                required
                minLength={10}
              />
            </div>

            {/* Project Type Dropdown */}
            <div>
              <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-2">
                What area(s) are you looking to redesign? *
              </label>
              <select
                id="project-type"
                name="project-type"
                value={formData.projectType}
                onChange={(e) => handleInputChange('projectType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 focus:ring-2 focus:ring-[#C5A267] focus:border-[#C5A267] transition-all bg-white"
                required
              >
                <option value="">-- Select an Option --</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Closet/Dressing Room">Closet/Dressing Room</option>
                <option value="Outdoor Living Space">Outdoor Living Space</option>
                <option value="Full Home">Full Home</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className={`w-full py-4 flex items-center justify-center gap-2 text-white font-medium transition-all ${
                isFormValid() && !isSubmitting
                  ? 'bg-[#C5A267] hover:bg-[#B49157]'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === 'error' && (
              <p className="text-red-600 text-center text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default BocaRatonHeroBottom;
