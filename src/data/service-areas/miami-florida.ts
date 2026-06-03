import { ServiceAreaConfig } from './types';

export const miamiFloridaConfig: ServiceAreaConfig = {
  slug: 'miami-florida',
  cityName: 'Miami',
  regionName: 'Florida',
  formType: 'Miami',
  underConstruction: true,

  seo: {
    title: 'Miami Interior Designer | Italian Kitchens & Closets | D&D',
    description: 'Custom Italian kitchens and closets for Miami homes. From Coral Gables to Miami Beach. Free 3D design render.',
    canonicalPath: '/service-areas/miami-florida',
    ogTitle: 'Miami Interior Designer | Italian Kitchens & Closets | D&D',
    ogDescription: 'Custom Italian kitchens and closets for Miami homes. Free 3D design consult.',
    twitterTitle: 'Miami Interior Designer | Italian Kitchens & Closets | D&D',
    twitterDescription: 'Custom Italian kitchens and closets for Miami homes. Free 3D design consult.',
  },

  jsonLd: {
    businessName: 'D&D Design Center - Miami',
    businessDescription: 'Custom Italian kitchens and closets for Miami homeowners who value precision and long-term value.',
    areaServedName: 'Miami',
    areaServedType: 'City',
    containedInPlace: 'Florida',
    serviceDescriptions: {
      kitchen: 'Fully custom Italian kitchens designed and installed for Miami homeowners',
      closet: 'Bespoke Italian closet systems tailored to your lifestyle',
      render: 'See your kitchen in 3D before construction begins',
    },
  },

  hero: {
    heading: 'Award-Winning Italian Interior Designer for Miami',
    subheading: 'From Coral Gables estates to Brickell condos — over 20 years of Italian craftsmanship designed for the way Miami lives.',
    ctaText: 'Get a professional design plan before making a decision.',
    testimonial: {
      quote: '"They understood the Miami lifestyle perfectly — indoor-outdoor flow, light, and materials that handle the climate beautifully."',
      author: 'Sofia & Carlos',
      location: 'Coral Gables, FL',
      image: 'https://res.cloudinary.com/designcenter/image/upload/v1768484605/69f33226-ef89-4ca8-9bcf-741eaa823b27_f42esm.avif',
    },
    images: [
      'https://res.cloudinary.com/designcenter/image/upload/v1767974878/6_q7dwnv.avif',
      'https://res.cloudinary.com/designcenter/image/upload/v1767974874/2_lromdm.avif',
      'https://res.cloudinary.com/designcenter/image/upload/v1767974872/5_c3vyli.avif',
    ],
  },

  galleryImages: [
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974878/6_q7dwnv.avif', alt: 'Luxury Miami home interior design' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974874/2_lromdm.avif', alt: 'Custom Italian kitchen for Miami' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974874/7_cdmqlu.avif', alt: 'Modern interior design for Miami homes' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974872/5_c3vyli.avif', alt: 'Elegant closet design for Miami' },
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
    intro: "Miami homes are defined by light, openness, and a seamless connection between indoors and outdoors. Floor-to-ceiling windows, waterfront views, and year-round tropical living demand materials and designs that perform under constant sun, humidity, and salt air.\n\nWe don't impose design trends. We listen to how you live in Miami's unique climate, then create spaces that look stunning and last.",
    kitchens: "Kitchens. The heart of Miami entertaining — from casual family breakfasts to catered soirées. We design for both open-plan living and enclosed chef kitchens. Italian cabinetry handles humidity without warping. Stone countertops resist heat. Islands become the social focal point with integrated seating, bar prep, and wine storage.",
    closets: "Closets & Dressing Rooms. Climate-controlled organization for a lifestyle that moves between resort wear, business attire, and evening collections. Custom sections for shoes, bags, jewelry, and seasonal items. Glass doors protect designer pieces from humidity while keeping everything visible.",
    livingDining: "Living & Dining Rooms. Furniture placement that frames ocean views and maximizes natural light. Built-ins designed to hide technology while displaying art. Materials chosen specifically for resistance to UV fading and salt-air corrosion.",
    bathrooms: "Bathrooms & Spa Spaces. Spa-level luxury with hotel-grade ventilation designed for Miami's humidity. Heated floors, rain showers, soaking tubs with water views. Italian fixtures engineered for hard water and salt air.",
    outdoor: "Outdoor Living. In Miami, outdoor spaces are daily living areas, not seasonal bonuses. Covered terraces with full outdoor kitchens, weather-resistant Italian cabinetry, dining for twelve, and lounge areas designed for year-round tropical living.",
  },

  videoTestimonial: {
    sectionHeading: 'What Industry Experts Say About Our Work',
    videoUrl: 'https://res.cloudinary.com/designcenter/video/upload/v1768213501/jr4vjlqwffwdv1q4q7sp.mp4',
    videoPoster: 'https://res.cloudinary.com/designcenter/video/upload/v1768213501/jr4vjlqwffwdv1q4q7sp.png',
    quote: 'This project is one where our creative vision went far beyond the ordinary and required truly skilled artisans to bring such refined details to life. We were fortunate to collaborate with @dnddesigncenter.nyc, who took on the challenge and delivered outstanding results.',
    authorName: 'Anastasia Kasparyan, Interior Designer',
    projectLabel: 'Miami Project, 2025',
  },

  accordion: {
    sectionHeading: 'How We Transform Miami Homes',
    sectionSubheading: 'From kitchens to closets, discover how we create spaces and elevate everyday living.',
    ctaButtonText: 'INCREASE MY HOME VALUE',
    ctaAriaLabel: (title: string) => `Request a luxury ${title.toLowerCase()} design consultation for Miami`,
    imageAlt: (title: string) => `Custom Italian ${title.toLowerCase()} design for Miami homes`,
    mainImageAlt: 'Luxury Italian furniture for Miami homes',
    features: [
      { id: 1, title: 'Kitchen', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Kitchen%20Interiors%20%E2%80%93%20Custom%20Cabinetry%20and%20Marble%20Finishes.avif', description: "**Most kitchen disasters start with a shortcut. Here's how ours avoids them.**\n\nWe begin with a personalized consultation to understand your culinary habits, lifestyle, and aesthetic goals. For Miami homes, we consider the tropical climate, abundant natural light, and how you entertain in your space.\n\nOur design team creates a fully customized kitchen layout, focusing on functionality, flow, and visual harmony. We source Italian-made cabinetry, marble surfaces, and premium appliances — materials that withstand humidity and look stunning for decades.\n\n**Increase resale value** with Italian craftsmanship that discerning Miami buyers recognize immediately." },
      { id: 2, title: 'Closet', image: 'https://res.cloudinary.com/designcenter/image/upload/Closet_Designed_For_Modern_Homes.avif', description: "**Pride in owning a closet no neighbor can replicate.**\n\nWe start by mapping your wardrobe habits — whether you need expansive walk-in solutions for a growing collection or elegantly climate-controlled storage that protects designer pieces from Miami's humidity.\n\nOur designers create customized layouts using modular Italian systems, emphasizing aesthetic clarity and functional organization.\n\n**Eliminate renovation chaos** with one accountable design partner who manages fabrication and installation from start to finish." },
      { id: 3, title: 'Living Room', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Living%20Room%20Design%20%E2%80%93%20Custom%20Sofas%20and%20Decor%20NYC.avif', description: "**Live daily in a space that finally feels intentional.**\n\nWe start by understanding how you live and entertain in your Miami home — whether you host large gatherings with ocean views or prefer serene spaces that capture tropical light.\n\nAfter establishing your design vision, we curate a bespoke layout that balances comfort and artistry with materials that resist UV fading and humidity.\n\n**Control over timeline, budget, and final outcome** — with one partner who handles everything from design to delivery." },
      { id: 4, title: 'Bathroom', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Bathroom%20Design%20%E2%80%93%20Bespoke%20Vanities%20and%20Interiors.avif', description: "**Not all 'Italian' bathrooms are actually Italian. These are.**\n\nWe identify how you want your bathroom to feel — spa-like, sleek, dramatic, or timeless. For Miami homes, we factor in humidity, ventilation needs, and how the space connects to your pool or terrace.\n\nWe design a bespoke bathroom plan using custom vanities, Italian stone surfaces, premium fixtures, and tailored storage solutions.\n\n**Relief knowing every detail is handled** without chasing contractors or managing multiple vendors." },
      { id: 5, title: 'Outdoor', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Outdoor%20Furniture%20%E2%80%93%20Custom%20Patio%20and%20Terrace%20Designs.avif', description: "**Miami living extends beyond four walls.**\n\nWe assess your outdoor lifestyle — whether it's hosting poolside dinners, creating a waterfront terrace retreat, or designing a cabana that serves as a second living room year-round.\n\nOur team specifies Italian outdoor furniture, weather-resistant materials engineered for tropical climates, and customized planters.\n\n**Confidence your space is designed right** before construction starts — we handle every detail from furniture sourcing to installation." },
      { id: 6, title: 'Lighting', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Lighting%20Design%20%E2%80%93%20Modern%20Fixtures%20for%20High-End%20Homes.avif', description: "**What you pay matters less than what mistakes cost you later.**\n\nWe collaborate with you to understand the emotional tone and architectural needs of each space before designing a layered lighting plan that complements Miami's abundant natural light.\n\nOur specialists source Italian-made chandeliers, sconces, and recessed lighting systems. We provide detailed schematics and coordinate installation.\n\n**Your home radiates atmosphere, elegance, and warmth** at every hour — from morning sunrise to evening entertaining." },
    ],
  },

  faq: {
    sectionHeading: 'Questions Miami Homeowners Ask',
    sectionSubheading: "Full home renovation is a considerable investment. Here's what you need to know.",
    seoHeading: 'Frequently Asked Questions About Interior Design in Miami',
    items: [
      { id: 'faq-1', question: 'What interior design services do you offer for Miami homes?', answer: "We provide fully custom Italian kitchens, closets, bathrooms, living rooms, outdoor living spaces, lighting, and full home renovations. Every piece is designed specifically for your Miami home and handcrafted by our network of Italian artisans." },
      { id: 'faq-2', question: 'How long does a full home renovation take in Miami?', answer: "Individual rooms like kitchens or closets typically take 3–6 months from design approval to installation. Full home renovations range from 6–12 months. We manage every step in-house — from 3D rendering and Miami-Dade permit coordination to Italian manufacturing and white-glove installation." },
      { id: 'faq-3', question: 'Do your materials handle Miami humidity and salt air?', answer: "Yes. Every material we specify is tested for humidity resistance, UV stability, salt-air corrosion resistance, and mold prevention. Italian manufacturers we work with have decades of experience engineering for Mediterranean and tropical climates — very similar demands to South Florida." },
      { id: 'faq-4', question: 'Can you design outdoor living spaces for year-round use?', answer: "Absolutely. We design covered terrace kitchens, poolside dining areas, cabanas, and pool houses using weather-resistant Italian cabinetry and materials rated for humidity, sun, and salt air. Your outdoor spaces become daily living areas built for year-round tropical enjoyment." },
      { id: 'faq-5', question: 'What makes Italian interior design different from local showrooms?', answer: "Most local showrooms sell pre-configured cabinets with limited customization. We offer fully custom Italian manufacturing through direct relationships with top ateliers like Aster, Visionnaire, and Longhi — plus one accountable partner from design through installation, with materials unavailable at retail." },
      { id: 'faq-6', question: 'Do you work with Miami condo buildings?', answer: "Yes. We handle building management approvals, elevator reservation logistics, noise restriction compliance, insurance documentation, and building design guidelines. From Brickell high-rises to Key Biscayne towers, we manage the logistics so you can focus on design choices." },
      { id: 'faq-7', question: 'What if my past renovation experience was disappointing?', answer: "That's exactly why our process exists. You see everything in 3D before we build, one dedicated project manager owns your timeline, and Italian artisans who specialize in luxury handle the craftsmanship. Planning correctly costs less than fixing mistakes." },
      { id: 'faq-8', question: 'How do I get started with a Miami home project?', answer: "Request a free consultation to discuss your project and goals. We'll assess your space, create a 3D render so you can see every room before construction begins, then handcraft your pieces in Italy and deliver with white-glove installation. We accept a limited number of Miami projects per month." },
    ],
  },

  bottomFormBackgroundImage: '',
  pageBackgroundImage: '',
};
