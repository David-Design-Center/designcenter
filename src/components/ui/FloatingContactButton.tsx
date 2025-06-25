import React from 'react';
import { motion } from 'framer-motion';

// Custom House Plus icon component
const HousePlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="30" 
    height="30" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12.662 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v2.475"/>
    <path d="M14.959 12.717A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8"/>
    <path d="M15 18h6"/>
    <path d="M18 15v6"/>
  </svg>
);

interface FloatingContactButtonProps {
  onClick: () => void;
}

const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-24 right-8 z-40 bg-[#C5A267] hover:bg-[#B49157] text-white p-4 rounded-full shadow-lg transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring", 
        damping: 15, 
        stiffness: 300,
        delay: 1 // Appear after page load
      }}
      aria-label="Start design consultation"
    >
      <HousePlusIcon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-[#C5A267] animate-ping opacity-20" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Start Your Design Journey
          <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </div>
      </div>
    </motion.button>
  );
};

export default FloatingContactButton;
