import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

interface BookRedirectProps {
  openContactForm: () => void;
}

const BookRedirect: React.FC<BookRedirectProps> = ({ openContactForm }) => {
  useEffect(() => {
    // Open the contact form when this component mounts
    openContactForm();
  }, [openContactForm]);

  // Redirect to home page
  return <Navigate to="/" replace />;
};

export default BookRedirect;
