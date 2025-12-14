import React from 'react';

const BocaRatonTextSection: React.FC = () => {
    const triggerFooterContact = () => {
        window.dispatchEvent(new CustomEvent('openContactForm'));
    };

    return (
        <section 
            className="relative py-12 sm:py-24 px-6 md:px-12 overflow-hidden" 
            style={{ 
                background: 'linear-gradient(to bottom, #FDFBF7, #F7F3EE)' 
            }}
        >
            {/* Marble texture background */}
            <div className="absolute inset-0 opacity-100 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/100 to-white/50" />
            </div>
            
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center relative z-10">
                {/* Left Column with enhanced gold accent line */}
                <div className="relative pl-12 flex-shrink-0 w-full lg:w-auto max-w-md">
                    {/* Brushed gold vertical line with subtle glow */}
                    <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#D4B77B] via-[#C5A267] to-[#9E7F43]">
                        <div className="absolute -left-[2px] top-0 h-full w-[7px] bg-[#C5A267] opacity-40 blur-sm"></div>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight tracking-wide" 
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        <span className="uppercase font-light block mb-3">Boca Raton Kitchens That Actually Increase Home Value</span>
                        <span className="normal-case text-lg sm:text-xl md:text-2xl text-[#9E7F43] font-light block mt-3" 
                              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            Where Boca Raton Homes Get Their Statement Kitchens
                        </span>
                    </h2>
                </div>

                {/* Right Column – Supporting Paragraph with soft shadow */}
                <div className="pr-4 md:pr-10">
                    <div className="relative">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-light mb-6">
                            "D&D Design Center creates custom Italian kitchens and closets for Boca Raton homeowners who refuse generic design. From concept to installation, everything is handled in-house with precision and accountability. It matters because shortcuts in luxury renovations are expensive and permanent."
                        </p>
                        
                        {/* Emotional Benefits */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3">
                                <span className="text-[#C5A267] mt-1">✓</span>
                                <span className="text-gray-600">Confidence your space is designed right before construction starts</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#C5A267] mt-1">✓</span>
                                <span className="text-gray-600">Relief knowing every detail is handled without chasing contractors</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#C5A267] mt-1">✓</span>
                                <span className="text-gray-600">Pride in owning a kitchen no neighbor can replicate</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#C5A267] mt-1">✓</span>
                                <span className="text-gray-600">Control over timeline, budget, and final outcome</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={triggerFooterContact}
                            className="inline-flex items-center justify-center px-6 py-3 bg-[#C5A267] text-white font-medium rounded-sm hover:bg-[#B49157] transition-colors duration-200"
                        >
                            ACCESS PRIVATE DESIGN CONSULT
                        </button>

                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-radial from-[#C5A267]/10 to-transparent opacity-50"></div>
                    </div>
                </div>
            </div>

            {/* Guarantee Statement */}
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#C5A267]/20">
                <p className="text-center text-gray-600 italic">
                    "If your 3D design doesn't meet your expectations, we revise it until it does — before construction begins."
                </p>
            </div>
        </section>
    );
};

export default BocaRatonTextSection;
