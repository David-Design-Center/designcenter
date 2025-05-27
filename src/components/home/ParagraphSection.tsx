import React from 'react';

const ParagraphSection: React.FC = () => {
    return (
        <section 
            className="relative py-12 sm:py-24 px-6 md:px-12 overflow-hidden" 
            style={{ 
                background: 'linear-gradient(to bottom, #FDFBF7, #F7F3EE)' 
            }}
        >
            {/* Marble texture background */}
            <div className="absolute inset-0 opacity-100 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558346648-9757f2fa4474?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-30" />
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
                        <span className="uppercase font-light block mb-3">New York City's Premier Furniture Design Center</span>
                        <span className="normal-case text-lg sm:text-xl md:text-2xl text-[#9E7F43] font-light block mt-3" 
                              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            Timeless Italian Craftsmanship for the Modern Home
                        </span>
                    </h2>
                </div>

                {/* Right Column – Supporting Paragraph with soft shadow */}
                <div className="pr-4 md:pr-10">
                    <div className="relative">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-light">
                            At D&D Design Center, we curate a world of bespoke kitchens, cabinetry, and custom furnishings. 
                            All handcrafted in Italy, within an inspiring design center in the heart of Manhattan. 
                            Here, discerning homeowners discover more than furniture. 
                            They uncover a canvas for personal storytelling.
                        </p>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-radial from-[#C5A267]/10 to-transparent opacity-50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParagraphSection;