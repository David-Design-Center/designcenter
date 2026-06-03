import { ServiceAreaConfig } from './types';

export const newJerseyConfig: ServiceAreaConfig = {
  slug: 'new-jersey',
  cityName: 'New Jersey',
  regionName: 'New Jersey',
  formType: 'New Jersey',
  underConstruction: true,

  seo: {
    title: 'New Jersey Interior Designer | Italian Kitchens & Closets | D&D',
    description: 'Custom Italian kitchens and closets for New Jersey homes. From Bergen County to the Shore. Free 3D design render.',
    canonicalPath: '/service-areas/new-jersey',
    ogTitle: 'New Jersey Interior Designer | Italian Kitchens & Closets | D&D',
    ogDescription: 'Custom Italian kitchens and closets for New Jersey homes. Free 3D design consult.',
    twitterTitle: 'New Jersey Interior Designer | Italian Kitchens & Closets | D&D',
    twitterDescription: 'Custom Italian kitchens and closets for New Jersey homes. Free 3D design consult.',
  },

  jsonLd: {
    businessName: 'D&D Design Center - New Jersey',
    businessDescription: 'Custom Italian kitchens and closets for New Jersey homeowners who value precision and long-term value.',
    areaServedName: 'New Jersey',
    areaServedType: 'State',
    containedInPlace: 'United States',
    serviceDescriptions: {
      kitchen: 'Fully custom Italian kitchens designed and installed for New Jersey homeowners',
      closet: 'Bespoke Italian closet systems tailored to your lifestyle',
      render: 'See your kitchen in 3D before construction begins',
    },
  },

  hero: {
    heading: 'Award-Winning Italian Interior Designer for New Jersey',
    subheading: 'From Bergen County estates to Shore town retreats — over 20 years helping New Jersey families create homes that feel exactly right.',
    ctaText: 'Get a professional design plan before making a decision.',
    testimonial: {
      quote: '"Finally, a design team that understood our vision and delivered beyond expectations. Worth every penny."',
      author: 'The Kapoors',
      location: 'Alpine, NJ',
      image: 'https://res.cloudinary.com/designcenter/image/upload/v1768484605/69f33226-ef89-4ca8-9bcf-741eaa823b27_f42esm.avif',
    },
    images: [
      'https://res.cloudinary.com/designcenter/image/upload/v1767974878/6_q7dwnv.avif',
      'https://res.cloudinary.com/designcenter/image/upload/v1767974874/2_lromdm.avif',
      'https://res.cloudinary.com/designcenter/image/upload/v1767974872/5_c3vyli.avif',
    ],
  },

  galleryImages: [
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974878/6_q7dwnv.avif', alt: 'Luxury New Jersey home interior' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974874/2_lromdm.avif', alt: 'Custom Italian kitchen for NJ homes' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974874/7_cdmqlu.avif', alt: 'Modern interior design for New Jersey homes' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974872/5_c3vyli.avif', alt: 'Elegant closet design for New Jersey' },
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
    intro: "New Jersey homes bridge the best of suburban living with proximity to New York. Generous kitchens, formal dining rooms, expansive primary suites, and landscaped yards — each demanding design that's both beautiful and built for real family life.\n\nWe don't impose design trends. We listen to how your family uses each space, then create rooms that work for weeknight homework and weekend dinner parties alike.",
    kitchens: "Kitchens. The center of New Jersey family life. We design islands that anchor the room, pantries that actually organize, and layouts that handle holiday hosting for twenty. Italian cabinetry is built for decades of daily use with materials that stay beautiful through years of family meals.",
    closets: "Closets & Dressing Rooms. New Jersey homes have room for truly exceptional closets. Walk-in configurations with dedicated zones for suits, casual wear, shoes, bags, and seasonal storage. Integrated lighting, cedar-lined compartments, and display cases for collections.",
    livingDining: "Living & Dining Rooms. Formal-to-casual flexibility for homes that entertain. Furniture placement that creates intimate conversation areas in large rooms. Built-ins that showcase art and manage technology. Materials chosen for beauty and durability in household with children and pets.",
    bathrooms: "Bathrooms & Spa Spaces. Primary bathrooms designed as private retreats. Heated floors, dual rain showers, freestanding tubs, and custom vanities. Guest and kids' bathrooms that are practical and polished.",
    outdoor: "Outdoor Living. New Jersey summers deserve beautiful outdoor rooms. Covered patios with full kitchens, dining for twelve, fire pit lounges, and pool-adjacent entertaining areas. Italian outdoor furniture rated for four-season durability.",
  },

  videoTestimonial: {
    sectionHeading: 'What Industry Experts Say About Our Work',
    videoUrl: 'https://res.cloudinary.com/designcenter/video/upload/v1768213501/jr4vjlqwffwdv1q4q7sp.mp4',
    videoPoster: 'https://res.cloudinary.com/designcenter/video/upload/v1768213501/jr4vjlqwffwdv1q4q7sp.png',
    quote: 'This project is one where our creative vision went far beyond the ordinary and required truly skilled artisans to bring such refined details to life. We were fortunate to collaborate with @dnddesigncenter.nyc, who took on the challenge and delivered outstanding results.',
    authorName: 'Anastasia Kasparyan, Interior Designer',
    projectLabel: 'New Jersey Project, 2025',
  },

  accordion: {
    sectionHeading: 'How We Transform New Jersey Homes',
    sectionSubheading: 'From kitchens to closets, discover how we create spaces and elevate everyday living.',
    ctaButtonText: 'INCREASE MY HOME VALUE',
    ctaAriaLabel: (title: string) => `Request a luxury ${title.toLowerCase()} design consultation for New Jersey`,
    imageAlt: (title: string) => `Custom Italian ${title.toLowerCase()} design for New Jersey homes`,
    mainImageAlt: 'Luxury Italian furniture for New Jersey homes',
    features: [
      { id: 1, title: 'Kitchen', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Kitchen%20Interiors%20%E2%80%93%20Custom%20Cabinetry%20and%20Marble%20Finishes.avif', description: "**Most kitchen disasters start with a shortcut. Here's how ours avoids them.**\n\nWe begin with a personalized consultation to understand your culinary habits, lifestyle, and aesthetic goals. For New Jersey homes, we consider the generous kitchen footprints and how to make large spaces feel purposeful rather than empty.\n\nOur design team creates a fully customized kitchen layout, focusing on functionality, flow, and visual harmony. We source Italian-made cabinetry, marble surfaces, and premium appliances.\n\n**Increase resale value** with Italian craftsmanship that discerning New Jersey buyers recognize immediately." },
      { id: 2, title: 'Closet', image: 'https://res.cloudinary.com/designcenter/image/upload/Closet_Designed_For_Modern_Homes.avif', description: "**Pride in owning a closet no neighbor can replicate.**\n\nWe start by mapping your wardrobe habits — whether you need expansive walk-in solutions for a growing collection or elegantly organized systems that make mornings effortless in your New Jersey home.\n\nOur designers create customized layouts using modular Italian systems, emphasizing aesthetic clarity and functional organization.\n\n**Eliminate renovation chaos** with one accountable design partner who manages fabrication and installation from start to finish." },
      { id: 3, title: 'Living Room', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Living%20Room%20Design%20%E2%80%93%20Custom%20Sofas%20and%20Decor%20NYC.avif', description: "**Live daily in a space that finally feels intentional.**\n\nWe start by understanding how you live and entertain in your New Jersey home — whether you host frequent gatherings or prefer serene family evenings.\n\nAfter establishing your design vision, we curate a bespoke layout that balances comfort and artistry, specifying custom Italian sofas, built-in cabinetry, and lighting tailored to your lifestyle.\n\n**Control over timeline, budget, and final outcome** — with one partner who handles everything from design to delivery." },
      { id: 4, title: 'Bathroom', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Bathroom%20Design%20%E2%80%93%20Bespoke%20Vanities%20and%20Interiors.avif', description: "**Not all 'Italian' bathrooms are actually Italian. These are.**\n\nWe identify how you want your bathroom to feel — spa-like, sleek, dramatic, or timeless. For New Jersey homes, we design primary bathrooms as true retreats with ample space for luxury finishes.\n\nWe design a bespoke bathroom plan using custom vanities, Italian stone surfaces, premium fixtures, and tailored storage solutions.\n\n**Relief knowing every detail is handled** without chasing contractors or managing multiple vendors." },
      { id: 5, title: 'Outdoor', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Outdoor%20Furniture%20%E2%80%93%20Custom%20Patio%20and%20Terrace%20Designs.avif', description: "**New Jersey living extends beyond four walls.**\n\nWe assess your outdoor lifestyle — whether it's hosting backyard barbecues, creating an outdoor dining room, or designing a poolside retreat for summer entertaining.\n\nOur team designs layouts that maximize space and visual connection to your interiors, specifying Italian outdoor furniture and weather-resistant materials.\n\n**Confidence your space is designed right** before construction starts — we handle every detail from furniture sourcing to installation." },
      { id: 6, title: 'Lighting', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Lighting%20Design%20%E2%80%93%20Modern%20Fixtures%20for%20High-End%20Homes.avif', description: "**What you pay matters less than what mistakes cost you later.**\n\nWe collaborate with you to understand the emotional tone and architectural needs of each space before designing a layered lighting plan.\n\nOur specialists source Italian-made chandeliers, sconces, and recessed lighting systems that blend artistry and functionality. We provide detailed lighting schematics and coordinate installation.\n\n**Your home radiates atmosphere, elegance, and warmth** at every hour — from morning sunrise to evening entertaining." },
    ],
  },

  faq: {
    sectionHeading: 'Questions New Jersey Homeowners Ask',
    sectionSubheading: "Full home renovation is a considerable investment. Here's what you need to know.",
    seoHeading: 'Frequently Asked Questions About Interior Design in New Jersey',
    items: [
      { id: 'faq-1', question: 'What interior design services do you offer for New Jersey homes?', answer: "We provide fully custom Italian kitchens, closets, bathrooms, living rooms, outdoor living areas, lighting, and full home renovations. Every piece is designed specifically for your New Jersey home and handcrafted by our network of Italian artisans." },
      { id: 'faq-2', question: 'How long does a full home renovation take in New Jersey?', answer: "Individual rooms like kitchens or closets typically take 3–6 months from design approval to installation. Full home renovations range from 6–12 months. We manage every step in-house — from 3D rendering and permit coordination to Italian manufacturing and white-glove installation." },
      { id: 'faq-3', question: 'Do you handle NJ building permits?', answer: "Yes. We coordinate with local New Jersey municipalities on all required permits, including building applications, architectural drawings, contractor documentation, and inspection scheduling. Different NJ townships have different requirements — our experience across the state prevents costly delays." },
      { id: 'faq-4', question: 'Can you design outdoor living spaces?', answer: "Absolutely. We design full outdoor kitchens with weather-resistant cabinetry, covered dining areas, pool houses, fire pit lounges, and entertaining areas using Italian fixtures rated for four-season durability. Your outdoor spaces become natural extensions of your New Jersey home." },
      { id: 'faq-5', question: 'What makes Italian interior design different from local showrooms?', answer: "Most local showrooms sell pre-configured cabinets with limited customization. We offer fully custom Italian manufacturing through direct relationships with top ateliers like Aster, Visionnaire, and Longhi — plus one accountable partner from design through installation, with materials unavailable at retail." },
      { id: 'faq-6', question: 'Do you serve all of New Jersey?', answer: "We serve homeowners throughout New Jersey, including Bergen County, Essex County, Morris County, Monmouth County, and Hudson County. Our Brooklyn showroom is easily accessible from most of New Jersey, and we conduct all site visits at your home." },
      { id: 'faq-7', question: 'What if my past renovation experience was disappointing?', answer: "That's exactly why our process exists. You see everything in 3D before we build, one dedicated project manager owns your timeline, and Italian artisans who specialize in luxury handle the craftsmanship. Planning correctly costs less than fixing mistakes." },
      { id: 'faq-8', question: 'How do I get started with a New Jersey project?', answer: "Request a free consultation to discuss your project and goals. We'll assess your space, create a 3D render so you can see every room before construction begins, then handcraft your pieces in Italy and deliver with white-glove installation. We accept a limited number of New Jersey projects per month." },
    ],
  },

  bottomFormBackgroundImage: '',
  pageBackgroundImage: '',
};
