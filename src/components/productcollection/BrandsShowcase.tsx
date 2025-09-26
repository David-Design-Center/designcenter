import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Brand = {
  slug: string;
  name: string;
  logo: string;
  website: string;
  description: string;
  showcaseImage?: string;
  displayOrder?: number;
};  

const BrandsShowcase = () => {
  const [, setIsMobile] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const brandCarouselRef = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused] = useState(false);
  const [brandPartners, setBrandPartners] = useState<Brand[]>([]);

  // Use two copies for a seamless loop

  useEffect(() => {
    const loadBrands = async () => {
      const modules = import.meta.glob("/src/data/brands/*.json");
      const imports = await Promise.all(
        Object.values(modules).map((load) => load())
      );
      // Sort brands by displayOrder if available, otherwise keep same order
      const brands = imports.map((mod: any) => mod.default || mod);
      const sortedBrands = brands.sort((a, b) => {
        // If both have displayOrder, sort by it
        if (a.displayOrder !== undefined && b.displayOrder !== undefined) {
          return a.displayOrder - b.displayOrder;
        }
        // If only a has displayOrder, it comes first
        if (a.displayOrder !== undefined) return -1;
        // If only b has displayOrder, it comes first
        if (b.displayOrder !== undefined) return 1;
        // If neither has displayOrder, maintain original order
        return 0;
      });
      setBrandPartners(sortedBrands);
    };
  
    loadBrands();
  }, []);
  
  const extendedBrandPartners = [...brandPartners, ...brandPartners];

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animate header, content, button, and carousel entrance (unchanged)
  useEffect(() => {
    if (!inView || !headerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      headerRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
      );
    }

    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: "power2.out" }
      );
    }

    if (brandCarouselRef.current) {
      gsap.fromTo(
        brandCarouselRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.9, ease: "power2.out" }
      );
    }
  }, [inView]);

  // Animate the carousel continuously with a seamless loop
  useEffect(() => {
    if (carouselRef.current && !isPaused) {
      const carousel = carouselRef.current;
      const oneSetWidth = carousel.scrollWidth / 2;
      const speed = 120; // pixels per second (increase for faster movement)
      const duration = oneSetWidth / speed;

      gsap.to(carousel, {
        x: -oneSetWidth,
        ease: "linear",
        duration,
        repeat: -1,
        modifiers: {
          x: (x) => {
            return parseFloat(x) % oneSetWidth + "px";
          },
        },
      });
    }
  }, [isPaused, brandPartners]);

  return (
    <section className="py-6 sm:py-4 md:py-10 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-5">
        <div ref={brandCarouselRef} className="mt-12 mb-10">
          <h3 className="text-xl sm:text-2xl font-serif text-black text-center">
            OUR LUXURY PARTNERS
          </h3>
          <div className="relative overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 before:z-10 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 after:z-10 after:bg-gradient-to-l after:from-white after:to-transparent">
            <div ref={carouselRef} className="flex items-center gap-8">
              {extendedBrandPartners.map((brand, index) => (
                <div
                  key={`${brand.slug}-${index}`}
                  className="flex flex-col items-center gap-3 flex-shrink-0"
                >
                  <div className="h-36 sm:h-40 md:h-48 w-40 sm:w-52 md:w-64 relative flex items-center justify-center p-2">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsShowcase;