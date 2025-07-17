import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Clock, Star } from 'lucide-react';

interface QuizBlockProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  buttonText?: string;
  estimatedTime?: string;
  features?: string[];
  onStartQuiz?: () => void;
}

const QuizBlock: React.FC<QuizBlockProps> = ({
  title = "Start Your Quiz",
  description = "Discover your perfect interior style in just 60 seconds!",
  imageUrl = "https://res.cloudinary.com/designcenter/image/upload/v1747166091/quiz_image.avif",
  imageAlt = "Modern Italian Kitchen Design",
  buttonText = "Start Quiz Now",
  estimatedTime = "60 seconds",
  features = ["Personalized Results", "Expert Recommendations", "Style Matching"],
  onStartQuiz
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white/95 backdrop-blur-md p-3 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-gray-200/50 w-full max-w-sm mx-auto lg:mr-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with animated sparkles */}
      <div className="text-center mb-4 relative">
        <motion.div
          className="absolute -top-1 -right-1"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-5 h-5 text-[#C5A267]" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight font-urbanist"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm sm:text-base text-gray-700 leading-relaxed"
        >
          {description}
        </motion.p>
      </div>

      {/* Time indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex items-center justify-center gap-2 mb-3 text-xs text-gray-600"
      >
        <Clock className="w-3 h-3" />
        <span>Takes only {estimatedTime}</span>
      </motion.div>

      {/* Image container with loading animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mb-4 relative overflow-hidden rounded-xl"
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-32 sm:h-36 lg:h-40 object-cover rounded-xl shadow-lg"
          loading="eager"
        />
      </motion.div>

      {/* Features list */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mb-4 space-y-1"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
            className="flex items-center gap-2 text-xs text-gray-600"
          >
            <Star className="w-3 h-3 text-[#C5A267] fill-current" />
            <span>{feature}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStartQuiz}
        className="w-full bg-gradient-to-r from-[#C5A267] to-[#B8955A] hover:from-[#B8955A] hover:to-[#A8854A] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg group relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
        
        <span className="relative flex items-center justify-center gap-2">
          {buttonText}
          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </span>
      </motion.button>

      {/* Progress indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="mt-3 text-center text-xs text-gray-500"
      >
        <div className="flex justify-center gap-1 mb-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#C5A267]/30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        <span>Quick & Easy Setup</span>
      </motion.div>
    </motion.div>
  );
};

export default QuizBlock;
