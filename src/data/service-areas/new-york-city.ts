import { ServiceAreaConfig } from './types';

export const newYorkCityConfig: ServiceAreaConfig = {
  slug: 'new-york-city',
  cityName: 'New York City',
  regionName: 'New York',
  formType: 'NYC',

  seo: {
    title: 'NYC Interior Designer | Luxury Italian Kitchens & Closets | D&D Design Center',
    description: 'Custom Italian kitchens and closets for New York City apartments, townhouses, and brownstones. Free 3D design render. White-glove installation by D&D Design Center.',
    canonicalPath: '/service-areas/new-york-city',
    ogTitle: 'NYC Interior Designer | Luxury Italian Kitchens & Closets',
    ogDescription: 'Bespoke Italian kitchens, closets, and interiors designed for New York City homes. Free 3D design consultation.',
    twitterTitle: 'NYC Interior Designer | Luxury Italian Kitchens & Closets',
    twitterDescription: 'Custom Italian kitchens and closets for NYC apartments and townhouses. Free 3D design render.',
  },

  jsonLd: {
    businessName: 'D&D Design Center - New York City',
    businessDescription: 'Custom Italian kitchens and closets for New York City homeowners who demand precision, quality, and long-term value.',
    areaServedName: 'New York',
    areaServedType: 'City',
    containedInPlace: 'New York',
    serviceDescriptions: {
      kitchen: 'Fully custom Italian kitchens designed and installed for New York City apartments and townhouses',
      closet: 'Bespoke Italian closet systems tailored to NYC living',
      render: 'See your kitchen in 3D before construction begins',
    },
  },

  hero: {
    heading: 'Best interior designer in New York City',
    subheading: '20 years transforming New York homes with Italian craftsmanship.',
    ctaText: 'Receive a design plan before making an investment.',
    testimonial: {
      quote: '"They transformed our old kitchen into a design magazine."',
      author: 'Michael & Sarah',
      location: 'Brooklyn, NY',
      image: 'https://res.cloudinary.com/designcenter/image/upload/v1768484605/69f33226-ef89-4ca8-9bcf-741eaa823b27_f42esm.avif',
    },
    images: [
      '',
      '',
      '',
    ],
  },

  galleryImages: [
    { src: 'https://res.cloudinary.com/designcenter/image/fetch/v1756542711/https://res.cloudinary.com/designcenter/image/upload/v1756487770/imgi_55_2017-VERY-WOOD-ARMADI-pag-34-35_oa8soq.avif', alt: 'Luxury NYC apartment interior design' },
    { src: 'https://res.cloudinary.com/designcenter/image/fetch/v1756488873/https://res.cloudinary.com/designcenter/image/upload/v1756487772/imgi_56_2017-VERY-WOOD-ARMADI-pag-38-39_cz2jok.avif', alt: 'Custom Italian kitchen in Manhattan' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1761038035/A2_dqni7k.avif', alt: 'Modern interior design for NYC homes' },
    { src: 'https://res.cloudinary.com/designcenter/image/fetch/v1748617484/https://download.cattelanitalia.com/WP/2025/02/Craig_Design_Sofa_Cattelan_Italia_2025_Desktop.jpg', alt: 'Brooklyn brownstone closet design' },
    { src: 'https://res.cloudinary.com/designcenter/image/fetch/v1748432663/https://res.cloudinary.com/designcenter/image/upload/v1744033499/Product_2/Light/Light_76.avif', alt: 'High-end NYC residential interior' },
    { src: 'https://res.cloudinary.com/designcenter/image/fetch/v1748432650/https://res.cloudinary.com/designcenter/image/upload/How_We_Design_Your_Luxury_Interior.avif', alt: 'Contemporary NYC living space' },
    { src: 'https://res.cloudinary.com/designcenter/image/fetch/v1748425176/https://res.cloudinary.com/designcenter/image/upload/Product_2/Kitchen/Traditional/Kitchen_Traditional_6.avif', alt: 'Premium NYC home renovation' },
  ],

  midCTA: {
    heading: 'Planning the upgrade in next 6 months?',
    subheading: 'Claim your free consultation + 3D render today to use in following 6 months.',
    buttonText: 'LOCK IN MY RENDER',
    backgroundImage: 'https://images.unsplash.com/photo-1773845596987-212072cf3a72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  textContent: {
    intro: "New York City apartments and townhouses present unique design challenges. Limited square footage demands creative solutions. Pre-war architecture requires respect for original details. Building regulations add complexity that only experienced designers navigate efficiently.\n\nWe don't impose trends on your space. We listen to how you live in the city, then design rooms that maximize every square foot without sacrificing beauty.",
    kitchens: 'Kitchens. The most valuable room per square foot in any NYC home. We design galley kitchens that feel open, eat-in layouts that seat six, and chef-grade setups in surprisingly compact spaces. Italian cabinetry is engineered to millimeter precision — critical when every inch counts.',
    closets: 'Closets & Dressing Rooms. In a city where closet space is currency, we design systems that triple your storage capacity. Custom sections for suits, shoes, bags, and seasonal rotation. Cedar-lined compartments, pull-out drawers, and lighting that makes getting dressed efficient.',
    livingDining: 'Living & Dining Rooms. Furniture placement that creates distinct zones in open-plan apartments. Built-ins that hide radiators and utilities while displaying your collections. Materials chosen to handle temperature swings between overheated winters and humid summers.',
    bathrooms: 'Bathrooms & Spa Spaces. Spa-level luxury in 40 square feet. Frameless glass, heated floors, rain showers, and custom vanities that fit irregular NYC bathroom layouts. Ventilation solutions that prevent moisture damage in older buildings.',
    outdoor: 'Terraces & Outdoor Spaces. Rooftop terraces, balconies, and garden-level patios designed as true extensions of your living space. Weather-resistant Italian furniture that handles four seasons of New York weather.',
  },

  videoTestimonial: {
    sectionHeading: 'What Industry Experts Say About Our Work',
    videoUrl: 'https://res.cloudinary.com/designcenter/video/upload/v1768213501/jr4vjlqwffwdv1q4q7sp.mp4',
    videoPoster: 'https://res.cloudinary.com/designcenter/video/upload/v1768213501/jr4vjlqwffwdv1q4q7sp.png',
    quote: 'This project is one where our creative vision went far beyond the ordinary and required truly skilled artisans to bring such refined details to life. We were fortunate to collaborate with @dnddesigncenter.nyc, who took on the challenge and delivered outstanding results.',
    authorName: 'Anastasia Kasparyan, Interior Designer',
    projectLabel: 'New York City Project, 2025',
  },

  accordion: {
    sectionHeading: 'How We Transform New York City Homes',
    sectionSubheading: 'From kitchens to closets, discover how we create spaces and elevate everyday living.',
    ctaButtonText: 'INCREASE MY HOME VALUE',
    ctaAriaLabel: (title: string) => `Request a luxury ${title.toLowerCase()} design consultation for NYC`,
    imageAlt: (title: string) => `Custom Italian ${title.toLowerCase()} design for NYC homes`,
    mainImageAlt: 'Luxury Italian furniture for New York City homes',
    features: [
      { id: 1, title: 'Kitchen', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Kitchen%20Interiors%20%E2%80%93%20Custom%20Cabinetry%20and%20Marble%20Finishes.avif', description: "**Most kitchen disasters start with a shortcut. Here's how ours avoids them.**\n\nWe begin with a personalized consultation to understand your culinary habits, lifestyle, and aesthetic goals. For New York City homes, we consider the unique constraints of apartment living, building regulations, and how to maximize limited square footage.\n\nOur design team creates a fully customized kitchen layout, focusing on functionality, flow, and visual harmony. We source Italian-made cabinetry, marble surfaces, and premium appliances — materials that endure decades of daily use.\n\n**Increase resale value** with Italian craftsmanship that discerning NYC buyers recognize immediately." },
      { id: 2, title: 'Closet', image: 'https://res.cloudinary.com/designcenter/image/upload/Closet_Designed_For_Modern_Homes.avif', description: "**Pride in owning a closet no neighbor can replicate.**\n\nWe start by mapping your wardrobe habits — whether you need expansive walk-in solutions or cleverly hidden storage that maximizes your NYC apartment's square footage.\n\nOur designers create customized layouts using modular Italian systems, emphasizing aesthetic clarity and functional organization. Materials are carefully selected for durability and beauty, with options for integrated lighting and luxurious hardware.\n\n**Eliminate renovation chaos** with one accountable design partner who manages fabrication and installation from start to finish." },
      { id: 3, title: 'Living Room', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Living%20Room%20Design%20%E2%80%93%20Custom%20Sofas%20and%20Decor%20NYC.avif', description: "**Live daily in a space that finally feels intentional.**\n\nWe start by understanding how you live and entertain in your NYC home — whether you host frequent gatherings or prefer serene, intimate spaces that feel larger than their footprint.\n\nAfter establishing your design vision, we curate a bespoke layout that balances comfort and artistry, specifying custom Italian sofas, built-in cabinetry, and lighting tailored to your lifestyle.\n\n**Control over timeline, budget, and final outcome** — with one partner who handles everything from design to delivery." },
      { id: 4, title: 'Bathroom', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Bathroom%20Design%20%E2%80%93%20Bespoke%20Vanities%20and%20Interiors.avif', description: "**Not all 'Italian' bathrooms are actually Italian. These are.**\n\nWe identify how you want your bathroom to feel — spa-like, sleek, dramatic, or timeless. For NYC apartments, we factor in building codes, plumbing constraints, and how to create luxury in compact layouts.\n\nWe design a bespoke bathroom plan using custom vanities, Italian stone surfaces, premium fixtures, and tailored storage solutions. Throughout production, we maintain rigorous quality checks.\n\n**Relief knowing every detail is handled** without chasing contractors or managing multiple vendors." },
      { id: 5, title: 'Terrace', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Outdoor%20Furniture%20%E2%80%93%20Custom%20Patio%20and%20Terrace%20Designs.avif', description: "**New York City living extends beyond your apartment walls.**\n\nWe assess your outdoor space — whether it's a rooftop terrace, balcony, or garden-level patio — and design it as a true extension of your interior.\n\nOur team specifies Italian outdoor furniture, weather-resistant materials engineered for four-season use, and custom planters that thrive in the city environment.\n\n**Confidence your space is designed right** before construction starts — we handle every detail from furniture sourcing to installation." },
      { id: 6, title: 'Lighting', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Lighting%20Design%20%E2%80%93%20Modern%20Fixtures%20for%20High-End%20Homes.avif', description: "**What you pay matters less than what mistakes cost you later.**\n\nWe collaborate with you to understand the emotional tone and architectural needs of each space before designing a layered lighting plan that works with NYC's mix of natural and artificial light.\n\nOur specialists source Italian-made chandeliers, sconces, and recessed lighting systems that blend artistry and functionality. We provide detailed lighting schematics and coordinate installation.\n\n**Your home radiates atmosphere, elegance, and warmth** at every hour — from morning light through evening entertaining." },
    ],
  },

  faq: {
    sectionHeading: 'Questions NYC Homeowners Ask',
    sectionSubheading: "Full home renovation is a considerable investment. Here's what you need to know.",
    seoHeading: 'Frequently Asked Questions About Interior Design in New York City',
    items: [
      { id: 'faq-1', question: 'What interior design services do you offer for NYC homes?', answer: "We provide fully custom Italian kitchens, closets, bathrooms, living rooms, terraces, lighting, and full home renovations. Every piece is designed specifically for your space and handcrafted by our network of Italian artisans — no catalog items or showroom compromises." },
      { id: 'faq-2', question: 'How long does a full home renovation take in NYC?', answer: "Individual rooms like kitchens or closets typically take 3–6 months from design approval to installation. Full home renovations range from 6–12 months. We manage every step in-house — from 3D rendering and building board submissions to Italian manufacturing and white-glove installation." },
      { id: 'faq-3', question: 'Do you work with co-op and condo building boards?', answer: "Yes. We handle all building board submissions for NYC co-ops and condos, including alteration agreements, architectural drawings, insurance documentation, and noise compliance plans. We've worked with dozens of NYC buildings and know how to prevent costly delays from rejected applications." },
      { id: 'faq-4', question: 'Can you work with pre-war apartment layouts?', answer: "Absolutely. Pre-war apartments are one of our specialties. We preserve original moldings, hardwood floors, and architectural details while integrating modern Italian craftsmanship and contemporary conveniences — without compromising the character that makes these apartments coveted." },
      { id: 'faq-5', question: 'What makes Italian interior design different from local showrooms?', answer: "Most local showrooms sell pre-configured cabinets with limited customization. We offer fully custom Italian manufacturing through direct relationships with top ateliers like Aster, Visionnaire, and Longhi — plus one accountable partner from design through installation, with materials unavailable at retail." },
      { id: 'faq-6', question: 'Do you handle small-space design?', answer: "Yes. Maximizing space is fundamental to our NYC work. We use custom millwork that uses every available inch, integrated storage in unexpected places, multi-functional furniture, and lighting design that expands perceived space. We've transformed 500 sq ft studios and 5,000 sq ft townhouses." },
      { id: 'faq-7', question: 'What if my past renovation experience was disappointing?', answer: "That's exactly why our process exists. You see everything in 3D before we build, one dedicated project manager owns your timeline, and Italian artisans who specialize in luxury handle the craftsmanship. Planning correctly costs less than fixing mistakes — we've helped many NYC homeowners recover from previous renovation nightmares." },
      { id: 'faq-8', question: 'How do I get started with an NYC home project?', answer: "Request a free consultation to discuss your project and goals. We'll assess your space, create a 3D render so you can see every room before construction begins, then handcraft your pieces in Italy and deliver with white-glove installation. We accept a limited number of NYC projects per month." },
    ],
  },

  bottomFormBackgroundImage: '',
  pageBackgroundImage: 'https://res.cloudinary.com/designcenter/image/upload/v1774370185/New_York_agfabc.avif',
};
