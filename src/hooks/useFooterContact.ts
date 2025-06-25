export const useFooterContact = () => {
  const triggerFooterContact = () => {
    // Dispatch a custom event to open the contact form
    window.dispatchEvent(new CustomEvent('openContactForm'));
  };

  return { triggerFooterContact };
};
