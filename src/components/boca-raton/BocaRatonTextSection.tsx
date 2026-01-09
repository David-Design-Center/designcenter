import React from 'react';
import { ScrollableBlurContainer } from '../ui/progressive-blur';

const BocaRatonTextSection: React.FC = () => {
    const triggerFooterContact = () => {
        window.dispatchEvent(new CustomEvent('openContactForm'));
    };

    return (
        <ScrollableBlurContainer 
            backgroundColor="#f5f4f3" 
            height="80vh" 
            blurHeight="120px"
        >
            {/* Scroll indicator */}
            <div className="pt-20 pb-4 grid content-start justify-items-center text-center text-black">
                <span className="relative text-[10px] uppercase tracking-widest opacity-30 after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:mt-2 after:h-10 after:w-px after:bg-gradient-to-b after:from-black/30 after:to-transparent after:content-['']">
                    Scroll to explore
                </span>
            </div>

            {/* Main content - tight article style */}
            <div className="w-full max-w-md space-y-8 px-14 pb-20 text-justify">

                {/* Article content */}
                <div className="text-xl text-black/50 leading-relaxed space-y-4">
                    <p>
                        Boca Raton homes demand a different approach. Natural light floods through floor-to-ceiling windows. Open floor plans connect indoor and outdoor living. The aesthetic blends resort-style luxury with everyday functionality.
                    </p>
                    <p>
                        We don't impose design trends. We listen to how you live, then create spaces that work specifically for your home and neighborhood.
                    </p>
                </div>

                {/* Kitchens */}
                <div>
                    <p className="text-xl text-black/50">Kitchens</p>
                    <p className="text-xl text-black/50 leading-relaxed">
                        The heart of Boca Raton entertaining. We design for both casual family meals and catered events. Italian cabinetry handles humidity without warping. Stone countertops resist heat and sun exposure. Islands become focal points with integrated seating, wine storage, and prep zones.
                    </p>
                </div>

                {/* Closets */}
                <div>
                    <p className="text-xl text-black/50">Closets & Dressing Rooms</p>
                    <p className="text-xl text-black/50 leading-relaxed">
                        Climate-controlled organization for year-round resort wear and seasonal formal attire. Custom sections for shoes, bags, jewelry, and golf gear. Lighting designed for accurate color matching. Glass doors showcase designer pieces while protecting from dust and humidity.
                    </p>
                </div>

                {/* Living Spaces */}
                <div>
                    <p className="text-xl text-black/50">Living & Dining Rooms</p>
                    <p className="text-xl text-black/50 leading-relaxed">
                        Furniture placement that maximizes water views and natural light. Built-ins designed to hide technology while displaying art and collections. Materials chosen for durability against sun exposure and salt air.
                    </p>
                </div>

                {/* Bathrooms */}
                <div>
                    <p className="text-xl text-black/50">Bathrooms & Spa Spaces</p>
                    <p className="text-xl text-black/50 leading-relaxed">
                        Spa-level luxury with hotel-grade ventilation. Heated floors, rain showers, and soaking tubs with water views. Dual vanities with dedicated storage for each person.
                    </p>
                </div>

                {/* Outdoor */}
                <div>
                    <p className="text-xl text-black/50">Outdoor Living</p>
                    <p className="text-xl text-black/50 leading-relaxed">
                        Seamless transitions between indoor and outdoor spaces. Covered patios with full kitchens and weather-resistant cabinetry. Because in Boca Raton, outdoor spaces aren't seasonal—they're daily living areas.
                    </p>
                </div>
            </div>
        </ScrollableBlurContainer>
    );
};

export default BocaRatonTextSection;
