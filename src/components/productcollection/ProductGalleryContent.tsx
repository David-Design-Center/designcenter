import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import galleryData from '../../data/product-galleries/index';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  room: string;
  style: string;
  imageUrl: string;
  styleName?: string;
  additionalImages?: string[];
}

const ITEMS_PER_PAGE = 4;
const ITEMS_PER_ROW = 2;

const ProductGalleryContent: React.FC = () => {
  // Data state
  const [projects, setProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<string>('Kitchen');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [fullscreenProject, setFullscreenProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'categories' | 'styles'>('categories');

  // Refs for categories & styles (still used for minor animations or references)
  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const styleRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const rooms = [
    'Kitchen',
    'Furniture',
    'Light',
    'Bath',
    'Outdoor',
    'Office',
    'Closet'
  ];

  // Handle URL parameters for direct category linking
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam && rooms.map(r => r.toLowerCase()).includes(categoryParam.toLowerCase())) {
      const roomName = rooms.find(r => r.toLowerCase() === categoryParam.toLowerCase());
      if (roomName) {
        setSelectedRoom(roomName);
        setActiveTab('categories');
      }
    }
  }, []);

  const kitchenStyles = ['Modern', 'Traditional', 'Art_Deco'];
  const furnitureTypes = ['Living', 'Dining', 'Bedroom'];

  // Helper to convert raw names to display names.
  // This will only change certain values (e.g., Living -> Living Room, Dining -> Dining Room, Light -> Lighting)
  function getDisplayName(raw: string): string {
    const mapping: Record<string, string> = {
      Living: "Living Room",
      Dining: "Dining Room",
      Light: "Lighting",
    };
    return mapping[raw] || raw;
  }
  
  // 1) Basic GSAP for categories (unchanged)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      categoryRefs.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );

    if ((selectedRoom === 'Kitchen' || selectedRoom === 'Furniture') && activeTab === 'styles') {
      gsap.fromTo(
        styleRefs.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }
  }, [selectedRoom, activeTab]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Map galleryData to Project type
        const fetchedProjects = (galleryData as any[]).map((item, index) => ({
          id: item.id || `${item.room}-${item.style}-${index}`,
          title: item.title || item.style || item.room || `Project ${index + 1}`,
          room: item.room,
          style: item.style || '',
          imageUrl: item.image,
          styleName: undefined, // Don't assign fake names
        }));
        setProjects(fetchedProjects);
        setVisibleProjects(fetchedProjects.slice(0, ITEMS_PER_PAGE));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // 3) Update visible projects on filter changes
  useEffect(() => {
    let filtered = [...projects];
    if (selectedRoom !== 'all') {
      filtered = filtered.filter((p) => p.room === selectedRoom);
    }
    if ((selectedRoom === 'Kitchen' || selectedRoom === 'Furniture') && selectedStyle !== 'all') {
      filtered = filtered.filter((p) => p.style === selectedStyle);
    }
    setVisibleProjects(filtered.slice(0, ITEMS_PER_PAGE));
  }, [projects, selectedRoom, selectedStyle]);

  // 4) handleCardLoad -> Animate card once image is loaded
  const handleCardLoad = (index: number) => {
    const cardEl = cardRefs.current[index];
    if (!cardEl) return;

    // GSAP fade/lift once image loaded
    gsap.fromTo(
      cardEl,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      }
    );
  };

  // 5) Load More
  const loadMore = () => {
    const currentLength = visibleProjects.length;
    let filtered = [...projects];

    if (selectedRoom !== 'all') {
      filtered = filtered.filter((p) => p.room === selectedRoom);
    }
    if ((selectedRoom === 'Kitchen' || selectedRoom === 'Furniture') && selectedStyle !== 'all') {
      filtered = filtered.filter((p) => p.style === selectedStyle);
    }

    setVisibleProjects(filtered.slice(0, currentLength + ITEMS_PER_PAGE));
  };

  const handleProjectClick = (project: Project) => {
    setFullscreenProject(project);
    document.body.style.overflow = 'hidden';
  };

  // Navigate to next image in fullscreen
  const handleNextImage = () => {
    if (!fullscreenProject) return;
    
    const currentIndex = visibleProjects.findIndex(p => p.id === fullscreenProject.id);
    if (currentIndex === -1) return;
    
    // If we're at the last image and there are more images to load, load them
    if (currentIndex === visibleProjects.length - 1) {
      const currentLength = visibleProjects.length;
      let filtered = [...projects];
      
      if (selectedRoom !== 'all') {
        filtered = filtered.filter((p) => p.room === selectedRoom);
      }
      if ((selectedRoom === 'Kitchen' || selectedRoom === 'Furniture') && selectedStyle !== 'all') {
        filtered = filtered.filter((p) => p.style === selectedStyle);
      }
      
      if (currentLength < filtered.length) {
        setVisibleProjects(filtered.slice(0, currentLength + ITEMS_PER_PAGE));
      }
    }
    
    // Move to next image
    if (currentIndex < visibleProjects.length - 1) {
      setFullscreenProject(visibleProjects[currentIndex + 1]);
    }
  };

  // Navigate to previous image in fullscreen
  const handlePreviousImage = () => {
    if (!fullscreenProject) return;
    
    const currentIndex = visibleProjects.findIndex(p => p.id === fullscreenProject.id);
    if (currentIndex > 0) {
      setFullscreenProject(visibleProjects[currentIndex - 1]);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!fullscreenProject) return;
      
      if (e.key === 'Escape') {
        setFullscreenProject(null);
        document.body.style.overflow = 'unset';
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePreviousImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenProject, visibleProjects]);

  // Get next category
  const getNextCategory = () => {
    const currentIndex = rooms.findIndex(r => r === selectedRoom);
    if (currentIndex < rooms.length - 1) {
      return rooms[currentIndex + 1];
    }
    return null;
  };

  // Switch to next category
  const handleSwitchCategory = () => {
    const nextRoom = getNextCategory();
    if (nextRoom) {
      setSelectedRoom(nextRoom);
      setSelectedStyle('all');
      setFullscreenProject(null);
      document.body.style.overflow = 'unset';
    }
  };

  // Toggle between categories and styles tabs (mobile-friendly)
  const toggleTab = (tab: 'categories' | 'styles') => {
    setActiveTab(tab);
  };

  // 6) renderProjectRows with cardRefs & onLoad
  const renderProjectRows = () => {
    const rows = [];
    for (let i = 0; i < visibleProjects.length; i += ITEMS_PER_ROW) {
      const rowProjects = visibleProjects.slice(i, i + ITEMS_PER_ROW);

      rows.push(
        <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12">
          {rowProjects.map((project, index) => {
            const cardIndex = i + index;

            return (
              <div
                key={project.id}
                ref={(el) => (cardRefs.current[cardIndex] = el)}
                className="group relative overflow-hidden cursor-pointer bg-white shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => handleProjectClick(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleProjectClick(project);
                  }
                }}
                aria-expanded={false}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onLoad={() => handleCardLoad(cardIndex)}
                  onError={() => {
                    setVisibleProjects(prev => prev.filter((_, idx) => idx !== cardIndex));
                  }}
                />
                </div>

                {/* Title, style, etc. */}
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <span className="block text-sm uppercase tracking-wider text-gray-500">
                      {project.style
                        ? `${getDisplayName(project.room)} / ${project.style}`
                        : getDisplayName(project.room)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    return rows;
  };

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div id="product-gallery" className="bg-white">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Selection */}
        <div className="mb-12 md:mb-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-2 md:mb-4">
              EXPLORE OUR PRODUCTS
            </h2>
            <p className="text-gray-600 text-xl font-thin max-w-xl mx-auto">
            Our collection includes handcrafted Italian furniture products for bedrooms, kitchens, living rooms, and beyond.
            </p>
          </div>

          {/* Mobile Tab Selector */}
          <div className="flex border-b border-gray-200 mb-6 md:hidden">
            <button
              onClick={() => toggleTab('categories')}
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === 'categories'
                  ? 'text-[#C5A267] border-b-2 border-[#C5A267]'
                  : 'text-gray-500'
              }`}
            >
              Categories
            </button>
            {(selectedRoom === 'Kitchen' || selectedRoom === 'Furniture') && (
              <button
                onClick={() => toggleTab('styles')}
                className={`flex-1 py-3 text-center font-medium ${
                  activeTab === 'styles'
                    ? 'text-[#C5A267] border-b-2 border-[#C5A267]'
                    : 'text-gray-500'
                }`}
              >
                {selectedRoom === 'Kitchen' ? 'Styles' : 'Room Types'}
              </button>
            )}
          </div>

          {/* Categories - Always visible on desktop, conditionally on mobile */}
          <div className={`md:block ${activeTab === 'categories' ? 'block' : 'hidden'}`}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {rooms.map((room, index) => (
                <button
                  key={room}
                  ref={(el) => (categoryRefs.current[index] = el)}
                  onClick={() => {
                    setSelectedRoom(room);
                    setSelectedStyle('all');
                    if (room === 'Kitchen' || room === 'Furniture') {
                      setActiveTab('styles');
                    }
                  }}
                  className={`text-base md:text-lg transition-colors duration-300 px-3 py-2 ${
                    selectedRoom === room
                      ? 'bg-[#C5A267] text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {getDisplayName(room)}
                </button>
              ))}
            </div>
          </div>

          {/* Style Filter - Always visible on desktop when applicable, conditionally on mobile */}
          {(selectedRoom === 'Kitchen' || selectedRoom === 'Furniture') && (
            <div className={`mt-6 md:block ${activeTab === 'styles' ? 'block' : 'hidden'}`}>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  ref={(el) => (styleRefs.current[0] = el)}
                  onClick={() => setSelectedStyle('all')}
                  className={`text-sm md:text-base transition-colors duration-300 px-3 py-2 ${
                    selectedStyle === 'all'
                      ? 'bg-[#C5A267] text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  All {selectedRoom === 'Kitchen' ? 'Styles' : 'Rooms'}
                </button>

                {(selectedRoom === 'Kitchen' ? kitchenStyles : furnitureTypes).map((style, idx) => (
                  <button
                    key={style}
                    ref={(el) => (styleRefs.current[idx + 1] = el)}
                    onClick={() => setSelectedStyle(style)}
                    className={`text-sm md:text-base transition-colors duration-300 px-3 py-2 ${
                      selectedStyle === style
                        ? 'bg-[#C5A267] text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {selectedRoom === 'Furniture' ? getDisplayName(style) : style}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Projects Grid or Loading Spinner */}
        {loading ? (
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#B49157] border-t-transparent"></div>
          </div>
        ) : (
          <>
            {/* Render the rows */}
            {renderProjectRows()}

            {/* Fullscreen Image Modal */}
            {fullscreenProject && (
              <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4">
                {/* Header with category info */}
                <div className="absolute top-0 left-0 right-0 text-white p-6 text-center">
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
                    {fullscreenProject.style
                      ? `${getDisplayName(fullscreenProject.room)} / ${fullscreenProject.style}`
                      : getDisplayName(fullscreenProject.room)}
                  </p>
                </div>

                {/* Close button */}
                <button
                  onClick={() => {
                    setFullscreenProject(null);
                    document.body.style.overflow = 'unset';
                  }}
                  className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
                  aria-label="Close fullscreen image (Press ESC)"
                  title="Close (ESC)"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Main image */}
                <img
                  src={fullscreenProject.imageUrl}
                  alt={fullscreenProject.title}
                  className="max-w-full max-h-[80vh] object-contain"
                />

                {/* Navigation arrows and image counter */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6">
                  {/* Previous button */}
                  <button
                    onClick={handlePreviousImage}
                    disabled={visibleProjects.findIndex(p => p.id === fullscreenProject.id) === 0}
                    className="text-white hover:text-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
                    aria-label="Previous image (Arrow Left)"
                    title="Previous (← Arrow)"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Image counter and end message */}
                  <div className="text-center text-white">
                    {(() => {
                      const currentIndex = visibleProjects.findIndex(p => p.id === fullscreenProject.id);
                      let filtered = [...projects];
                      
                      if (selectedRoom !== 'all') {
                        filtered = filtered.filter((p) => p.room === selectedRoom);
                      }
                      if ((selectedRoom === 'Kitchen' || selectedRoom === 'Furniture') && selectedStyle !== 'all') {
                        filtered = filtered.filter((p) => p.style === selectedStyle);
                      }

                      const isLastImage = currentIndex === visibleProjects.length - 1;
                      const hasMoreImages = visibleProjects.length < filtered.length;
                      const nextCategory = getNextCategory();

                      if (isLastImage && !hasMoreImages) {
                        return (
                          <div className="flex flex-col items-center gap-4">
                            <p className="text-sm text-gray-400">
                              {currentIndex + 1} / {visibleProjects.length}
                            </p>
                            <p className="text-lg font-light">No more photos in this category</p>
                            {nextCategory && (
                              <button
                                onClick={handleSwitchCategory}
                                className="mt-2 px-6 py-2 bg-[#C5A267] text-white text-sm font-medium rounded-sm hover:bg-[#B49157] transition-colors"
                              >
                                View {getDisplayName(nextCategory)} →
                              </button>
                            )}
                          </div>
                        );
                      } else {
                      }
                    })()}
                  </div>

                  {/* Next button */}
                  <button
                    onClick={handleNextImage}
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="Next image (Arrow Right)"
                    title="Next (→ Arrow)"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Load More Button */}
            {visibleProjects.length < projects.length && (
              <div className="mt-8 md:mt-16 text-center">
                <button
                  onClick={loadMore}
                  className="px-6 py-3 bg-[#B49157] text-white text-base font-medium rounded-sm hover:bg-[#A38047] transition-colors duration-300 min-h-[44px]"
                >
                  View More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductGalleryContent;