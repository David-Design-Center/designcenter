import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

interface FloatingContactButtonProps {
  onClick: () => void;
}

const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="hidden lg:block fixed bottom-24 right-8 z-40 bg-[#C5A267] hover:bg-[#B49157] text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
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
      <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      
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
