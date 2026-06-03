import { ServiceAreaConfig } from './types';

export const bocaRatonConfig: ServiceAreaConfig = {
  slug: 'boca-raton-florida',
  cityName: 'Boca Raton',
  regionName: 'Florida',
  formType: 'Boca Raton',

  seo: {
    title: 'Boca Raton Interior Designer | Italian Kitchens & Closets | D&D',
    description: 'Custom Italian kitchens and closets for Boca Raton homes. Free 3D design render and white-glove installation.',
    canonicalPath: '/service-areas/boca-raton-florida',
    ogTitle: 'Boca Raton Interior Designer | Italian Kitchens & Closets | D&D',
    ogDescription: 'Custom Italian kitchens and closets for Boca Raton homes. Free 3D design consult.',
    twitterTitle: 'Boca Raton Interior Designer | Italian Kitchens & Closets | D&D',
    twitterDescription: 'Custom Italian kitchens and closets for Boca Raton homes. Free 3D design consult.',
  },

  jsonLd: {
    businessName: 'D&D Design Center - Boca Raton',
    businessDescription: 'Custom Italian kitchens and closets for Boca Raton homeowners who value precision and long-term value.',
    areaServedName: 'Boca Raton',
    areaServedType: 'City',
    containedInPlace: 'Florida',
    serviceDescriptions: {
      kitchen: 'Fully custom Italian kitchens designed and installed for Boca Raton homeowners',
      closet: 'Bespoke Italian closet systems tailored to your lifestyle',
      render: 'See your kitchen in 3D before construction begins',
    },
  },

  hero: {
    heading: 'Award-Winning Italian Interior Designer for Boca Raton',
    subheading: 'We love the community of Boca Raton. Over 20 years we help new families grow and share warmth in their new homes.',
    ctaText: 'Get a professional design plan before making a decision.',
    testimonial: {
      quote: '"We were blown away by the design and service. Home feels like a 5-star resort now."',
      author: 'Lisa',
      location: 'Boca Raton',
      image: 'https://res.cloudinary.com/designcenter/image/upload/v1768484605/69f33226-ef89-4ca8-9bcf-741eaa823b27_f42esm.avif',
    },
    images: [
      'https://res.cloudinary.com/designcenter/image/upload/v1767974878/6_q7dwnv.avif',
      'https://res.cloudinary.com/designcenter/image/upload/v1767974874/2_lromdm.avif',
      'https://res.cloudinary.com/designcenter/image/upload/v1767974872/5_c3vyli.avif',
    ],
  },

  galleryImages: [
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974878/6_q7dwnv.avif', alt: 'Luxury interior design project by D&D Design Center' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974874/2_lromdm.avif', alt: 'Custom Italian kitchen design' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974874/7_cdmqlu.avif', alt: 'Modern interior design for Boca Raton homes' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974872/5_c3vyli.avif', alt: 'Elegant closet design and organization' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974872/1_thborc.avif', alt: 'High-end residential interior' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974871/4_jhwvwu.avif', alt: 'Contemporary living space design' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974872/3_i1bod2.avif', alt: 'Premium home renovation' },
  ],

  midCTA: {
    heading: 'Planning the upgrade in next 6 months?',
    subheading: 'Claim your free consultation + 3D render today to use in following 6 months.',
    buttonText: 'LOCK IN MY 3D RENDERING',
    backgroundImage: 'https://res.cloudinary.com/designcenter/image/upload/v1767974874/2_lromdm.avif',
  },

  textContent: {
    intro: "Boca Raton homes demand a different approach. Natural light floods through floor-to-ceiling windows. Open floor plans connect indoor and outdoor living. The aesthetic blends resort-style luxury with everyday functionality.\n\nWe don't impose design trends. We listen to how you live, then create spaces that work specifically for your home and neighborhood.",
    kitchens: 'Kitchens. The heart of Boca Raton entertaining. We design for both casual family meals and catered events. Italian cabinetry handles humidity without warping. Stone countertops resist heat and sun exposure. Islands become focal points with integrated seating, wine storage, and prep zones.',
    closets: 'Closets & Dressing Rooms. Climate-controlled organization for year-round resort wear and seasonal formal attire. Custom sections for shoes, bags, jewelry, and golf gear. Lighting designed for accurate color matching. Glass doors showcase designer pieces while protecting from dust and humidity.',
    livingDining: 'Living & Dining Rooms. Furniture placement that maximizes water views and natural light. Built-ins designed to hide technology while displaying art and collections. Materials chosen for durability against sun exposure and salt air.',
    bathrooms: 'Bathrooms & Spa Spaces. Spa-level luxury with hotel-grade ventilation. Heated floors, rain showers, and soaking tubs with water views. Dual vanities with dedicated storage for each person.',
    outdoor: "Outdoor Living. Seamless transitions between indoor and outdoor spaces. Covered patios with full kitchens and weather-resistant cabinetry. Because in Boca Raton, outdoor spaces aren't seasonal — they're daily living areas.",
  },

  videoTestimonial: {
    sectionHeading: 'What Industry Experts Say About Our Work',
    videoUrl: 'https://res.cloudinary.com/designcenter/video/upload/v1768213501/jr4vjlqwffwdv1q4q7sp.mp4',
    videoPoster: 'https://res.cloudinary.com/designcenter/video/upload/v1768213501/jr4vjlqwffwdv1q4q7sp.png',
    quote: 'This project is one where our creative vision went far beyond the ordinary and required truly skilled artisans to bring such refined details to life. We were fortunate to collaborate with @dnddesigncenter.nyc, who took on the challenge and delivered outstanding results.',
    authorName: 'Anastasia Kasparyan, Interior Designer',
    projectLabel: 'Boca Raton Project, 2025',
  },

  accordion: {
    sectionHeading: 'How We Transform Boca Raton Homes',
    sectionSubheading: 'From kitchens to closets, discover how we create spaces and elevate everyday living.',
    ctaButtonText: 'INCREASE MY HOME VALUE',
    ctaAriaLabel: (title: string) => `Request a luxury ${title.toLowerCase()} design consultation for Boca Raton`,
    imageAlt: (title: string) => `Custom Italian ${title.toLowerCase()} design for Boca Raton homes`,
    mainImageAlt: 'Luxury Italian furniture for Boca Raton homes',
    features: [
      {
        id: 1,
        title: 'Kitchen',
        image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Kitchen%20Interiors%20%E2%80%93%20Custom%20Cabinetry%20and%20Marble%20Finishes.avif',
        description: "**Most kitchen disasters start with a shortcut. Here's how ours avoids them.**\n\nWe begin with a personalized consultation to understand your culinary habits, lifestyle, and aesthetic goals. For Boca Raton homes, we consider Florida's climate, natural light, and how you actually live in your space.\n\nOur design team creates a fully customized kitchen layout, focusing on functionality, flow, and visual harmony. We source Italian-made cabinetry, marble surfaces, and premium appliances — materials that withstand humidity and look stunning for decades.\n\n**Increase resale value** with Italian craftsmanship that discerning Boca Raton buyers recognize immediately.",
      },
      {
        id: 2,
        title: 'Closet',
        image: 'https://res.cloudinary.com/designcenter/image/upload/Closet_Designed_For_Modern_Homes.avif',
        description: "**Pride in owning a closet no neighbor can replicate.**\n\nWe start by mapping your wardrobe habits — whether you need expansive walk-in solutions for a growing collection or elegantly hidden storage that maximizes your Boca Raton home's square footage.\n\nOur designers create customized layouts using modular Italian systems, emphasizing aesthetic clarity and functional organization. Materials are carefully selected for durability and beauty, with options for integrated lighting and luxurious hardware.\n\n**Eliminate renovation chaos** with one accountable design partner who manages fabrication and installation from start to finish.",
      },
      {
        id: 3,
        title: 'Living Room',
        image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Living%20Room%20Design%20%E2%80%93%20Custom%20Sofas%20and%20Decor%20NYC.avif',
        description: "**Live daily in a space that finally feels intentional.**\n\nWe start by understanding how you live and entertain in your Boca Raton home — whether you host frequent gatherings or prefer serene, intimate spaces with Florida's natural light.\n\nAfter establishing your design vision, we curate a bespoke layout that balances comfort and artistry, specifying custom Italian sofas, built-in cabinetry, and lighting tailored to your lifestyle.\n\n**Control over timeline, budget, and final outcome** — with one partner who handles everything from design to delivery.",
      },
      {
        id: 4,
        title: 'Bathroom',
        image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Bathroom%20Design%20%E2%80%93%20Bespoke%20Vanities%20and%20Interiors.avif',
        description: "**Not all 'Italian' bathrooms are actually Italian. These are.**\n\nWe identify how you want your bathroom to feel — spa-like, sleek, dramatic, or timeless. For Boca Raton homes, we factor in humidity, natural light, and how the space connects to your bedroom or pool area.\n\nWe design a bespoke bathroom plan using custom vanities, Italian stone surfaces, premium fixtures, and tailored storage solutions. Throughout production, we maintain rigorous quality checks.\n\n**Relief knowing every detail is handled** without chasing contractors or managing multiple vendors.",
      },
      {
        id: 5,
        title: 'Outdoor',
        image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Outdoor%20Furniture%20%E2%80%93%20Custom%20Patio%20and%20Terrace%20Designs.avif',
        description: "**Boca Raton living extends beyond four walls.**\n\nWe assess your outdoor lifestyle — whether it's hosting poolside dinners or creating a private terrace retreat that captures Florida's year-round sunshine.\n\nOur team designs layouts that maximize space and visual connection to your interiors, specifying Italian outdoor furniture, weather-resistant materials engineered for Florida's climate, and customized planters.\n\n**Confidence your space is designed right** before construction starts — we handle every detail from furniture sourcing to installation.",
      },
      {
        id: 6,
        title: 'Lighting',
        image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Lighting%20Design%20%E2%80%93%20Modern%20Fixtures%20for%20High-End%20Homes.avif',
        description: "**What you pay matters less than what mistakes cost you later.**\n\nWe collaborate with you to understand the emotional tone and architectural needs of each space before designing a layered lighting plan perfect for Boca Raton's abundant natural light.\n\nOur specialists source Italian-made chandeliers, sconces, and recessed lighting systems that blend artistry and functionality. We provide detailed lighting schematics and coordinate installation.\n\n**Your home radiates atmosphere, elegance, and warmth** at every hour — from morning sunrise to evening entertaining.",
      },
    ],
  },

  faq: {
    sectionHeading: 'Questions Boca Raton Homeowners Ask',
    sectionSubheading: "Full home renovation is a considerable investment. Here's what you need to know.",
    seoHeading: 'Frequently Asked Questions About Interior Design in Boca Raton',
    items: [
      { id: 'faq-1', question: 'What interior design services do you offer for Boca Raton homes?', answer: "We provide fully custom Italian kitchens, closets, bathrooms, living rooms, outdoor living spaces, lighting, and full home renovations. Every piece is designed specifically for your Boca Raton home and handcrafted by our network of Italian artisans — no catalog items or showroom compromises." },
      { id: 'faq-2', question: 'How long does a full home renovation take in Boca Raton?', answer: "Individual rooms like kitchens or closets typically take 3–6 months from design approval to installation. Full home renovations range from 6–12 months. We manage every step in-house — from 3D rendering and Italian manufacturing to coordinated shipping and white-glove installation." },
      { id: 'faq-3', question: 'Do you design custom closets and dressing rooms?', answer: "Yes. We design climate-controlled closet systems tailored to Boca Raton's lifestyle — with dedicated sections for resort wear, formal attire, shoes, bags, and accessories. Every closet includes lighting for accurate color matching, glass doors to showcase designer pieces, and materials that handle Florida's humidity." },
      { id: 'faq-4', question: 'Can you design outdoor living spaces for Florida weather?', answer: "Absolutely. We design covered patio kitchens, outdoor dining areas, pool houses, and cabanas using weather-resistant Italian cabinetry and materials rated for humidity, sun, and salt air. Your outdoor spaces become natural extensions of your home, built for year-round Boca Raton living." },
      { id: 'faq-5', question: 'What makes Italian interior design different from local showrooms?', answer: "Most local showrooms sell pre-configured cabinets with limited customization. We offer fully custom Italian manufacturing through direct relationships with top ateliers like Aster, Visionnaire, and Longhi — plus one accountable partner from design through installation, with materials unavailable at retail." },
      { id: 'faq-6', question: 'Do you offer bathroom and spa design?', answer: "Yes. We design spa-level bathrooms with heated floors, rain showers, soaking tubs, and custom Italian vanities for Boca Raton homes. Every fixture is selected to handle hard water and maintain its finish without constant polishing — designed for both daily function and resort-style relaxation." },
      { id: 'faq-7', question: 'What if my past renovation experience was disappointing?', answer: "That's exactly why our process exists. You see everything in 3D before we build, one dedicated project manager owns your timeline, and Italian artisans who specialize in luxury handle the craftsmanship. Planning correctly costs less than fixing mistakes — we've helped many Boca Raton homeowners recover from previous renovation nightmares." },
      { id: 'faq-8', question: 'How do I get started with a Boca Raton home project?', answer: "Request a free consultation to discuss your project and goals. We'll assess your space, create a 3D render so you can see every room before construction begins, then handcraft your pieces in Italy and deliver with white-glove installation. We accept a limited number of Boca Raton projects per month." },
    ],
  },

  bottomFormBackgroundImage: '',
  pageBackgroundImage: '',
};
