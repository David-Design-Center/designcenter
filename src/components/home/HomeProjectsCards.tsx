import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollManager } from "../../hooks/useScrollManager";
import ImageGallery from "./ImageGallery";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { mainCategories, DisplayItem } from "./Categories";


gsap.registerPlugin(ScrollTrigger);


const HomeProjectsCards = () => {
  // State management
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [showDescription, setShowDescription] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<DisplayItem | null>(null);
  const [displayLevel, setDisplayLevel] = useState<"main" | "sub">("main");
  const [currentParentId, setCurrentParentId] = useState<number | null>(null);
  const [displayItems, setDisplayItems] =
    useState<DisplayItem[]>(mainCategories);
  const [visibleCards, setVisibleCards] = useState<number>(4);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [containerHeight, setContainerHeight] = useState<string>("auto");

  // Timer ref for hover delay
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Refs for animations
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollManager = useScrollManager();
  const backButtonRef = useRef<HTMLButtonElement>(null);
  const hasAnimated = useRef(false);

  // Determine how many cards to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(7);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(7);
      } else {
        setVisibleCards(7);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initial fade-in on scroll (only when in main view)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (displayLevel !== "main") return;
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const isDesktop = window.innerWidth >= 1024;
    const cardsToAnimate = isDesktop
      ? cardRefs.current.slice(0, visibleCards)
      : cardRefs.current.slice(1, visibleCards);

    const ctx = gsap.context(() => {
      // Set the cards to hidden (opacity: 0)
      gsap.set(cardsToAnimate, { opacity: 0 });
      // Create a ScrollTrigger that fades the cards in when the section enters.
      ScrollTrigger.create({
        trigger: cardsContainerRef.current,
        start: "top bottom", // When the top of the container reaches the bottom of the viewport.
        onEnter: () => {
          gsap
            .timeline({ delay: 1, immediateRender: false })
            .to(cardsToAnimate, {
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
            });
        },
        once: true,
      });
    });

    return () => ctx.revert();
  }, [visibleCards, displayLevel]);

  // Animate back button when it appears
  useEffect(() => {
    if (displayLevel === "sub" && backButtonRef.current) {
      gsap.fromTo(
        backButtonRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [displayLevel]);

  // Handle hover with delay for description
  const handleMouseEnter = (itemId: number) => {
    setHoveredId(itemId);
    
    // Clear any existing timer
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    
    // Set timer for description appearance
    hoverTimerRef.current = setTimeout(() => {
      setShowDescription(itemId);
    }, 500); // 0.5 second delay
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setShowDescription(null);
    
    // Clear timer if user leaves before delay
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  const handleOptionClick = (item: DisplayItem) => {
    if (isTransitioning) return;

    const container = cardsContainerRef.current;
    if (container) {
      setContainerHeight(`${container.offsetHeight}px`);
    }

    if (
      "hasSubcategories" in item &&
      item.hasSubcategories &&
      item.subcategories
    ) {
      // Directly navigate to subcategories without requiring active selection first
      if (container) {
        setIsTransitioning(true);
        // Fade out the container completely.
        gsap.to(container, {
          opacity: 0,
          duration: 1.4,
          ease: "power2.inOut",
          onComplete: () => {
            // Update state only after the fade-out is complete.
            setCurrentParentId(item.id);
            if (item.subcategories) {
              setDisplayItems(item.subcategories);
              setDisplayLevel("sub");
              setActiveId(null);
            }
            // Ensure container remains hidden.
            gsap.set(container, { opacity: 0 });
            // Fade the container back in.
            gsap.to(container, {
              opacity: 1,
              duration: 1.4,
              ease: "power2.out",
              onComplete: () => {
                setIsTransitioning(false);
                setContainerHeight("auto");
              },
            });
          },
        });
      }
    } else {
      // Directly open the gallery without requiring active selection first
      setSelectedItem(item);
    }
  };

  const handleBackClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const container = cardsContainerRef.current;
    if (container) {
      setContainerHeight(`${container.offsetHeight}px`);
      gsap.to(container, {
        opacity: 0,
        duration: 1.4,
        ease: "power2.inOut",
        onComplete: () => {
          setDisplayItems(mainCategories);
          setDisplayLevel("main");
          setCurrentParentId(null);
          setActiveId(null);
          gsap.set(container, { opacity: 0 });
          gsap.to(container, {
            opacity: 1,
            duration: 1.4,
            ease: "power2.out",
            onComplete: () => {
              setIsTransitioning(false);
              setContainerHeight("auto");
            },
          });
        },
      });
    }
  };

  const handleClose = () => {
    setSelectedItem(null);
    scrollManager.unlockScroll();
  };

  const triggerFooterContact = () => {
    window.dispatchEvent(new CustomEvent('openContactForm'));
  };

  function normalizeStyle(title: string): string {
    // Trim whitespace, convert to uppercase, replace spaces with underscores,
    // and remove any non-alphanumeric characters (except underscores)
    return title
      .trim()
      .toUpperCase()
      .replace(/\s+/g, "_")
      .replace(/[^A-Z0-9_]/g, "");
  }
  function normalizeRoom(title: string): string {
    return title
      .trim()
      .toUpperCase()
      .replace(/\s+/g, "_")
      .replace(/[^A-Z0-9_]/g, "");
  }

  const getFetchCategory = () => {
    if (!selectedItem) return "";
  
    let fetchCategory = "";
    if (displayLevel === "sub") {
      // Find the parent category
      const parentCategory = mainCategories.find((cat) => cat.id === currentParentId);
      // If the parent is Furniture, use its backendTitle regardless of the subcategory’s backendTitle.
      if (parentCategory && parentCategory.title.toUpperCase() === "FURNITURE") {
        fetchCategory = parentCategory.backendTitle || parentCategory.title;
      } else {
        // Otherwise, fallback to the subcategory's backendTitle, or parent's if not available.
        fetchCategory =
          (selectedItem as any).backendTitle ||
          parentCategory?.backendTitle ||
          parentCategory?.title ||
          "";
      }
    } else {
      // For main category selections, use backendTitle if available, otherwise the title.
      fetchCategory = (selectedItem as any).backendTitle || selectedItem.title;
    }
  
    console.log("Raw fetch category:", fetchCategory, "-> Normalized:", normalizeRoom(fetchCategory));
    return normalizeRoom(fetchCategory);
  };
  
  return (
    <section
      id="HomeProjectsCards"
      className="relative min-h-screen bg-gray-50 py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 mb-2">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif text-center">
          PRODUCT COLLECTION
        </h2>
      </div>
      <div className="max-w-1xl mx-auto px-2">
      <h2 className="text-lg sm:text-xl md:text-2xl font-sans text-[#B49157] text-center custom-pulse">
  {displayLevel === "sub" && currentParentId
    ? mainCategories
        .find((cat) => cat.id === currentParentId)
        ?.title.toUpperCase() === "FURNITURE"
      ? "Pick a Room"
      : "Pick a Style"
    : "Click on the cards to view"}
</h2>
</div>

<div
  ref={cardsContainerRef}
  className={`
    ${
      displayLevel === "sub"
        ? "grid grid-cols-1 sm:grid-cols-2 custom-md:grid-cols-3 gap-4 p-6 custom-md:p-8"
        : "grid grid-cols-2 custom-md:flex custom-md:flex-wrap gap-4 p-6 custom-md:p-8"
    }
    w-full max-w-5xl mx-auto mt-2 relative
  `}
  style={{
    minHeight: containerHeight,
    pointerEvents: isTransitioning ? "none" : "auto",
  }}
>
  {displayItems.slice(0, visibleCards).map((item, index) => (
    <div
      key={item.id}
      ref={(el) => (cardRefs.current[index] = el)}
      onClick={() => handleOptionClick(item)}
      onMouseEnter={() => handleMouseEnter(item.id)}
      onMouseLeave={handleMouseLeave}
      className={`
        group relative
        h-[300px] md:h-[450px]
        overflow-hidden 
        cursor-pointer 
        ease-out 
        duration-500
        will-change-transform 
        transform 
        hover:scale-[1.02]
        ${
          displayLevel === "sub"
            ? "w-full"
            : (hoveredId === item.id || activeId === item.id)
            ? "md:flex-[2.5]"
            : "md:flex-[0.5]"
        }
      `}
    >
      {displayLevel === "sub" &&
        currentParentId &&
        (() => {
          const category = mainCategories.find(
            (cat) => cat.id === currentParentId
          )?.title;
          const label = category === "FURNITURE";
          return (
            <div className="absolute top-2 left-2 z-10 p-1">
              <h2 className="text-sm md:text-base font-serif text-white">
                {label}
              </h2>
            </div>
          );
        })()}

      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-300"
          style={{
            backgroundImage: `url(${item.image})`,
            transform: (hoveredId === item.id || activeId === item.id) ? "scale(1)" : "scale(1.2)",
          }}
        />
      </div>

      <div className="absolute inset-0" />

      {/* Glow edge (appears on hover) */}
      <div
        ref={(el) => (glowRefs.current[index] = el)}
        className="
          absolute 
          top-0 
          bottom-0 
          right-0 
          w-2 
          bg-gradient-to-r 
          from-transparent 
          to-[#FFF] 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-300
        "
      ></div>

      {/* Content gradient */}
<div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end bg-gradient-to-l from-transparent via-black/10 to-black/80">
  {(hoveredId !== item.id && activeId !== item.id) ? (
    <div className="absolute inset-0 flex items-center justify-center p-0.5">
      <h3
        className="text-white text-center font-serif leading-tight line-clamp-2"
        style={{ fontSize: 'clamp(1rem, 5vw, 1rem)' }}
      >
        {item.title}
      </h3>
    </div>
  ) : (
    <>
      <div className="relative">
        {/* Title with delayed fade and slide animation from left */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            (showDescription === item.id || activeId === item.id)
              ? 'max-h-20 opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <h3
            className={`text-white/90 font-bold mb-2 transition-all duration-400 ease-out transform ${
              (showDescription === item.id || activeId === item.id)
                ? 'translate-x-0 opacity-100'
                : '-translate-x-4 opacity-0'
            }`}
            style={{ 
              fontSize: 'clamp(1.25rem, 6vw, 2rem)',
              transitionDelay: (showDescription === item.id || activeId === item.id) ? '50ms' : '0ms'
            }}
          >
            {item.title}
          </h3>
        </div>
        
        {/* Description with delayed fade and slide animation */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            (showDescription === item.id || activeId === item.id)
              ? 'max-h-40 opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <p
            className={`text-white/80 leading-relaxed transition-all duration-400 ease-out transform ${
              (showDescription === item.id || activeId === item.id)
                ? 'translate-x-0 opacity-100'
                : '-translate-x-4 opacity-0'
            }`}
            style={{ 
              fontSize: 'clamp(0.875rem, 3.5vw, 1.25rem)',
              transitionDelay: (showDescription === item.id || activeId === item.id) ? '100ms' : '0ms'
            }}
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* Haptic circle indicator - only show on activeId, not hover */}
      {activeId === item.id && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20">
          <div className="w-full h-full rounded-full bg-white/80 pointer-events-none z-10 opacity-30 animate-pulse-slow transition-opacity duration-300" />
        </div>
      )}
    </>
  )}
</div>

      {/* Always-visible arrow, rotates if expanded */}
      <div
        ref={(el) => (arrowRefs.current[index] = el)}
        className="
          absolute 
          bottom-4 
          right-4 
          flex 
          items-center 
          justify-center 
          transition-transform 
          duration-300 
          group-hover:translate-y-1
          min-w-[44px]
          min-h-[44px]
          z-20
        "
      >
        <ChevronDown
          className={`
            w-6 h-6 sm:w-8 sm:h-8
            text-[#FFD700] 
            opacity-70 
            group-hover:opacity-100 
            transform-gpu 
            transition-all 
            duration-300
            ${(hoveredId === item.id || activeId === item.id) ? "rotate-180" : ""}
          `}
          aria-label="Expand for more details"
        />
      </div>
    </div>
  ))}
</div>

{selectedItem && (
  <ImageGallery
    // ✅ Normalize Room & Style to match Airtable's format
    category={getFetchCategory()}
    style={
      displayLevel === "sub"
        ? ("parentId" in selectedItem && (selectedItem as any).backendTitle
            ? normalizeStyle((selectedItem as any).backendTitle)
            : normalizeStyle(selectedItem.title))
        : "NONE"
    }
    onClose={handleClose}
  />
)}



      {/* Footer buttons */}
      <div className="mt-6 flex flex-row items-center justify-center gap-2 sm:gap-4 px-4">
        {displayLevel === "sub" && (
          <button
            ref={backButtonRef}
            onClick={handleBackClick}
            className="
        flex-1 sm:w-48 h-[44px]
        flex items-center justify-center gap-1 sm:gap-2
        px-2 sm:px-4 py-3
        bg-[#B49157]
        text-white
        text-xs sm:text-sm
        uppercase
        tracking-wider
        hover:bg-[#A38047]
        transition-colors
        duration-200
        min-h-[44px]
      "
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">CATEGORIES</span>
            <span className="sm:hidden">BACK</span>
          </button>
        )}

        <Link to="/productscollection" className="flex-1 sm:w-48">
          <button
            className="
        w-full h-[44px]
        px-2 sm:px-4 py-3
        bg-[#B49157]
        text-white
        text-xs sm:text-sm
        uppercase
        tracking-wider
        hover:bg-[#A38047]
        transition-colors
        duration-200
        min-h-[44px]
      "
          >
            <span className="hidden sm:inline">View all</span>
            <span className="sm:hidden">View All</span>
          </button>
        </Link>

        <button
          onClick={triggerFooterContact}
          className="
      flex-1 sm:w-48 h-[44px]
      px-2 sm:px-4 py-3
      bg-[#B49157]
      text-white
      text-xs sm:text-sm
      uppercase
      tracking-wider
      hover:bg-[#A38047]
      transition-colors
      duration-200
      min-h-[44px]
    "
        >
          <span className="hidden sm:inline">Contact us</span>
          <span className="sm:hidden">Contact</span>
        </button>
      </div>

      {/* Optional custom keyframes for a fancier pulse glow if desired */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.2;
            box-shadow: 0 0 5px 1px #ffd700;
          }
          50% {
            opacity: 0.5;
            box-shadow: 0 0 15px 2px #ffd700;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HomeProjectsCards;