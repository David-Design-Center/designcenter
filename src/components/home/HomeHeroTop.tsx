import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollArrow from "../ui/ScrollArrow";

const HomeHeroTop = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const craftedTitleRef = useRef<HTMLHeadingElement>(null); // "Crafted Interiors"
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      if (video) {
        video.play().catch((error) => {
          console.log("Autoplay prevented:", error);
          // Optionally, you can show a play button to the user
        });
      }
    };

    // Ensure the video plays after user interaction
    document.addEventListener("click", playVideo, { once: true });

    return () => {
      document.removeEventListener("click", playVideo);
    };
  }, []);

  useEffect(() => {
    // Optimized GSAP animation without expensive per-letter transformations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.5 });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 } // Reduced from 1.2
    )
      .fromTo(
        craftedTitleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 }, // Reduced from 1.8
        "-=0.4"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30, filter: "blur(5px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 }, // Reduced from 1.5
        "-=1.0"
      )
      .fromTo(
        ".contact-now-hero-btn",
        { opacity: 0, y: 30, filter: "blur(5px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }, // Reduced from 1.2
        "-=0.5"
      )
      .fromTo(
        ".find-style-btn",
        { opacity: 0, y: 30, filter: "blur(5px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }, // Reduced from 1.2
        "-=0.7"
      )
      .fromTo(
        ".find-style-subtitle", // Add animation for the subtitle
        { opacity: 0, y: 30, filter: "blur(5px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
        "-=0.8" // Sync with the button
      );

    // Create a separate timeline for the arrow animation to prevent affecting other elements
    const arrowTl = gsap.timeline();
    arrowTl.to(arrowRef.current, {
      y: 10,
      duration: 1.0, // Reduced from 1.5
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Removed per-letter animation and video/overlay animations for improved rendering.
    return () => {
      tl.kill();
      arrowTl.kill(); // Clean up arrow animation as well
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden perspective-1000">
      {" "}
      {/* Background video & overlay */}{" "}
      <div className="absolute inset-0 w-full h-full">
        {" "}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          poster="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif"
        >
          {" "}
          <source
            src="https://res.cloudinary.com/designcenter/video/upload/f_auto,q_auto:low/Hero_Luxury_Decor_Showcase_Slow_Motion.mp4"
            type="video/mp4"
          />{" "}
          Your browser does not support the video tag.{" "}
        </video>{" "}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"
        />{" "}
      </div>
      {/* Centered content container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {" "}
        <div className="text-center mx-auto px-4">
          <h1
            ref={titleRef}
            className="mb-3 text-7xl sm:text-6xl md:text-8xl lg:text-10xl transform-gpu uppercase text-white/90 leading-tight"
            style={{ perspective: "800px" }}
          >
            <span className="title-word block">Luxury <span className="inline">Italian</span></span>
            <span
              ref={craftedTitleRef}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-2 crafted-shine text-shadow break-words text-balance"
            >
              Crafted Interiors for Modern Living
            </span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-white/90 text-m sm:text-base md:text-xl lg:text-2xl font-light text-shadow mb-8"
            style={{ willChange: "transform, opacity, filter" }}
          >
            Handcrafted Italian luxury interiors designed for timeless elegance
            and contemporary lifestyles.
          </p>
          
          {/* CTA Buttons - Redesigned to match reference image exactly */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 max-w-4xl mx-auto">
            <div className="flex flex-col items-center w-full sm:w-auto">
              <button
                type="button"
                className="contact-now-hero-btn w-full sm:w-auto px-10 py-3 bg-[#C5A267] text-white text-base font-regular shadow hover:bg-[#B49157] transition-colors duration-200 min-h-[44px]"
                style={{ opacity: 0, transform: 'translateY(30px) scale(1)', filter: 'blur(5px)' }}
                onClick={() => {
                  const footer = document.getElementById('footer');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => {
                      const btn = document.querySelector('[data-footer-contact]') as HTMLButtonElement;
                      if (btn) btn.click();
                    }, 800);
                  }
                }}
              >
                Complimentary Consultation
              </button>
              <span className="text-xs invisible h-0">
                &nbsp;
              </span>
            </div>
            <div className="flex flex-col items-center w-full sm:w-auto">
              <a
                href="https://dnddesigncenter.com/crafted-calm"
                target="_blank"
                rel="noopener noreferrer"
                className="find-style-btn w-full sm:w-auto px-10 py-3 text-base font-regular border border-[#C5A267] text-white bg-transparent transition-colors duration-200 hover:bg-[#C5A267] flex items-center justify-center min-h-[44px]"
                style={{ opacity: 0, transform: 'translateY(30px) scale(1)', filter: 'blur(5px)' }}
              >
                <span role="img" aria-label="palette" className="mr-2"></span>
                Find Your Interior Style
              </a>
              <span
                className="find-style-subtitle text-xs text-white/70 font-regular text-center mt-2"
                style={{ opacity: 0, transform: 'translateY(30px)', filter: 'blur(5px)' }}
              >
                Over 100+ found their perfect style
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Arrow */}
      <div
        ref={arrowRef}
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer scroll-arrow"
      >
        {" "}
        <ScrollArrow
          targetId="HomeProjectsCards"
          className="w-10 h-10 md:w-12 md:h-12 text-white hover:text-[#C5A267] transition-colors duration-300"
        />{" "}
      </div>{" "}
      <style>{` .perspective-1000 { perspective: 1000px; } .transform-gpu { transform: translateZ(0); backface-visibility: hidden; -webkit-font-smoothing: antialiased; } /* Subtle text shadow for better readability */ .text-shadow { text-shadow: 0 2px 15px rgba(0, 0, 0, 0.6); } /* Crafted Interiors: animated golden shine */ .crafted-shine { position: relative; background: linear-gradient( 130deg, white 80%, rgba(197, 162, 103, 1) 80%, rgba(197, 162, 103, 1) 82%, white 82%, white 100% ); background-size: 200% 100%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shine 4s linear infinite; } @keyframes shine { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } } /* Hide scroll arrow when in landscape mode on short screens */ @media (orientation: landscape) and (max-height: 500px) { .scroll-arrow { display: none; } } /* CTA Buttons Responsive Layout */ .cta-buttons { gap: 1rem; } @media (min-width: 640px) { .cta-buttons { flex-direction: row; } } @media (max-width: 639px) { .cta-buttons { flex-direction: column; } } .find-style-btn { border: 1.5px solid #C5A267; color: #fff; background: transparent; transition: background 0.2s, color 0.2s, border-color 0.2s; } .find-style-btn:hover, .find-style-btn:focus { background: #C5A267; color: #fff; border-color: #C5A267; animation: fadeGold 0.4s; } @keyframes fadeGold { from { background: transparent; } to { background: #C5A267; } } .find-style-btn .mr-2 { margin-right: 0.5rem; } `}</style>{" "}
    </section>
  );
};

export default HomeHeroTop;