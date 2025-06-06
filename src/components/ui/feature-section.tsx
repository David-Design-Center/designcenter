"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../../lib/utils"

interface Feature {
  step: string;
  title: string;
  content: React.ReactNode;
  image: string;
  alt: string;
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
  titleClassName?: string
  isDarkBackground?: boolean // Add this new prop
}

export function FeatureSteps({
  features,
  className,
  autoPlayInterval = 3000,
  imageHeight = "h-[250px]",
  titleClassName,
  isDarkBackground = true, // Default to dark background
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isSignificantSwipe = Math.abs(distance) > 50

    if (isSignificantSwipe) {
      if (distance > 0) {
        // Swipe left - next feature
        setCurrentFeature((prev) => (prev + 1) % features.length)
      } else {
        // Swipe right - previous feature
        setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)
      }
      setProgress(0)
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div className={cn("p-4 sm:p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 text-center",
          isDarkBackground ? "text-white" : "text-gray-900", 
          titleClassName
        )}>
        </h2>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-10 items-center"> {/* Changed flex-col to flex-col-reverse */}
          <div className="order-2 md:order-1 space-y-6 sm:space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 sm:gap-6 md:gap-8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground scale-110"
                      : "bg-muted border-muted-foreground",
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-base sm:text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-base sm:text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className={cn(
                    "text-lg sm:text-xl md:text-2xl font-semibold pb-4",
                    isDarkBackground ? "text-white" : "text-gray-900"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className={cn(
                    "text-sm sm:text-base md:text-lg leading-relaxed text-justify",
                    isDarkBackground ? "text-muted-foreground" : "text-gray-700"
                  )}>
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "w-full md:order-2 relative", 
              "aspect-[16/9] h-[200px] md:h-auto md:aspect-auto", // Reduced height for mobile and kept aspect ratio
              "rounded-lg overflow-hidden", 
              imageHeight ? `md:${imageHeight}` : "" // Apply imageHeight prop only for md and above
            )}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="w-full h-full">
              <AnimatePresence mode="sync">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`absolute inset-0 overflow-hidden ${index === currentFeature ? "block" : "hidden"}`}
                    initial={{ y: 100, opacity: 0, rotateX: -20 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -100, opacity: 0, rotateX: 20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.step}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}