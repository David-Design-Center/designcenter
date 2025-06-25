import { useState, useCallback } from 'react';

export const useContactForm = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = useCallback(() => {
    setIsContactFormOpen(true);
  }, []);

  const closeContactForm = useCallback(() => {
    setIsContactFormOpen(false);
  }, []);

  return {
    isContactFormOpen,
    openContactForm,
    closeContactForm,
  };
};
