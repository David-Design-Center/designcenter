import { useEffect, useState } from "react";
import { GridMotion } from "../ui/grid-motion";

export function GridMotionDemo() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile screens
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Reduce number of items for mobile
const getItems = () => {
  // Base images array - all the images
  const baseItems = [
    // Images 1-4
    "https://res.cloudinary.com/designcenter/image/upload/v1756486309/30_azcjb5.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1756486310/31_y8yrgt.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1756486308/29_hmyiyt.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1756486308/27_nmhefm.avif",
    // Quote 1
    "Design Shapes The Future",
    // Images 5-8
    "https://res.cloudinary.com/designcenter/image/upload/v1756486308/28_qsd1hf.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1756486274/8_olxf5y.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1756486273/18_qohp7u.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1756486274/17_uhbnbi.avif",
    // Quote 2
    "Design and Designers move outside the traditional boundaries.",
    // Images 9-12
    "https://res.cloudinary.com/designcenter/image/upload/v1756486273/16_w3xknu.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1756486272/14_ia907f.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1756486271/12_s8ekk8.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1756486272/15_kjdifu.avif",
    // Quote 3
    "Designers have the tacit permission to play outside the box.",
    // Images 13-16
    "https://res.cloudinary.com/designcenter/image/upload/v1756486270/11_dquuxu.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1756486271/10_btj1f2.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1756486269/5_oozfx9.avif",
    "https://res.cloudinary.com/designcenter/image/upload/v1756486269/9_o1sc8c.avif",
    // Image 17
    "https://res.cloudinary.com/designcenter/image/upload/v1756486268/4_leulnm.avif",
    // Quote 4
    "A good design acknowledges the past.",
    // Image 18
    "https://res.cloudinary.com/designcenter/image/upload/v1756486268/7_e9fptj.avif",
    // Quote 5
    "A good design shapes uniqueness.",
    // Quote 6
    "A good design frames future."
  ];
    return baseItems;
  };

  return (
    <section className="relative h-screen sm:h-screen w-full bg-white font-serif overflow-hidden">
      <div className="absolute inset-0 z-0">
      <GridMotion 
          items={getItems().filter(item => 
            typeof item === 'string' ? item.trim() !== '' : Boolean(item)
          )}
          gradientColor="#C0A960"
          className="relative z-10"
        />
      </div>
      
      {/* Mobile overlay guidance text */}
      {isMobile && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 px-4">
          <div className="bg-white/80 backdrop-blur-sm text-center py-3 px-6 rounded-lg shadow-md">
            <p className="text-[#C0A960] text-sm">Scroll to explore our design philosophy</p>
          </div>
        </div>
      )}
    </section>
  );
}