import { ServiceAreaConfig } from './types';

export const longIslandConfig: ServiceAreaConfig = {
  slug: 'long-island',
  cityName: 'Long Island',
  regionName: 'New York',
  formType: 'Long Island',
  underConstruction: true,

  seo: {
    title: 'Long Island Interior Designer | Italian Kitchens & Closets | D&D',
    description: 'Custom Italian kitchens and closets for Long Island homes. From the North Shore to the Hamptons. Free 3D design render.',
    canonicalPath: '/service-areas/long-island',
    ogTitle: 'Long Island Interior Designer | Italian Kitchens & Closets | D&D',
    ogDescription: 'Custom Italian kitchens and closets for Long Island homes. Free 3D design consult.',
    twitterTitle: 'Long Island Interior Designer | Italian Kitchens & Closets | D&D',
    twitterDescription: 'Custom Italian kitchens and closets for Long Island homes. Free 3D design consult.',
  },

  jsonLd: {
    businessName: 'D&D Design Center - Long Island',
    businessDescription: 'Custom Italian kitchens and closets for Long Island homeowners who value precision and long-term value.',
    areaServedName: 'Long Island',
    areaServedType: 'AdministrativeArea',
    containedInPlace: 'New York',
    serviceDescriptions: {
      kitchen: 'Fully custom Italian kitchens designed and installed for Long Island homeowners',
      closet: 'Bespoke Italian closet systems tailored to your lifestyle',
      render: 'See your kitchen in 3D before construction begins',
    },
  },

  hero: {
    heading: 'Award-Winning Italian Interior Designer for Long Island',
    subheading: 'From the North Shore to the Hamptons — over 20 years helping Long Island families create homes that reflect how they actually live.',
    ctaText: 'Get a professional design plan before making a decision.',
    testimonial: {
      quote: '"Our kitchen went from dated to extraordinary. Every neighbor who walks in asks who designed it."',
      author: 'The Andersons',
      location: 'Great Neck, LI',
      image: 'https://res.cloudinary.com/designcenter/image/upload/v1768484605/69f33226-ef89-4ca8-9bcf-741eaa823b27_f42esm.avif',
    },
    images: [
      'https://res.cloudinary.com/designcenter/image/upload/v1767974878/6_q7dwnv.avif',
      'https://res.cloudinary.com/designcenter/image/upload/v1767974874/2_lromdm.avif',
      'https://res.cloudinary.com/designcenter/image/upload/v1767974872/5_c3vyli.avif',
    ],
  },

  galleryImages: [
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974878/6_q7dwnv.avif', alt: 'Luxury Long Island home interior' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974874/2_lromdm.avif', alt: 'Custom Italian kitchen for Long Island' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974874/7_cdmqlu.avif', alt: 'Modern interior design for Long Island homes' },
    { src: 'https://res.cloudinary.com/designcenter/image/upload/v1767974872/5_c3vyli.avif', alt: 'Elegant closet design for Long Island' },
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
    intro: "Long Island homes offer what city apartments can't — space, land, and room to breathe. But that space creates its own design challenges. Large kitchens need thoughtful layouts to avoid wasted square footage. Open floor plans require furniture that anchors the room without overwhelming it.\n\nWe don't impose design trends. We listen to how your family uses each room, then create spaces that work for weeknight dinners and weekend entertaining alike.",
    kitchens: "Kitchens. The command center of Long Island family life. We design islands that seat the whole family, pantries that actually organize, and chef-grade layouts that handle holiday hosting. Italian cabinetry is built for decades of daily use — not just photoshoots.",
    closets: "Closets & Dressing Rooms. Long Island closets have room to be extraordinary. Walk-in configurations with dedicated sections for suits, casual wear, shoes, bags, and seasonal storage. Cedar-lined drawers, integrated lighting, and display shelving for designer pieces.",
    livingDining: "Living & Dining Rooms. Furniture placement that creates warmth in large rooms without cluttering them. Built-ins that showcase collections while managing entertainment systems. Materials chosen for families — beautiful and durable enough for real life.",
    bathrooms: "Bathrooms & Spa Spaces. Primary bathrooms designed as private retreats. Heated floors, dual rain showers, freestanding tubs, and custom vanities with dedicated storage for each person. Guest bathrooms that impress without over-investing.",
    outdoor: "Outdoor Living. Long Island summers deserve outdoor rooms as refined as your interior. Covered patios with full outdoor kitchens, dining areas for twelve, and lounge spaces with weather-resistant Italian furniture. Pool houses and cabanas designed as natural extensions of your home.",
  },

  videoTestimonial: {
    sectionHeading: 'What Industry Experts Say About Our Work',
    videoUrl: 'https://res.cloudinary.com/designcenter/video/upload/v1768213501/jr4vjlqwffwdv1q4q7sp.mp4',
    videoPoster: 'https://res.cloudinary.com/designcenter/video/upload/v1768213501/jr4vjlqwffwdv1q4q7sp.png',
    quote: 'This project is one where our creative vision went far beyond the ordinary and required truly skilled artisans to bring such refined details to life. We were fortunate to collaborate with @dnddesigncenter.nyc, who took on the challenge and delivered outstanding results.',
    authorName: 'Anastasia Kasparyan, Interior Designer',
    projectLabel: 'Long Island Project, 2025',
  },

  accordion: {
    sectionHeading: 'How We Transform Long Island Homes',
    sectionSubheading: 'From kitchens to closets, discover how we create spaces and elevate everyday living.',
    ctaButtonText: 'INCREASE MY HOME VALUE',
    ctaAriaLabel: (title: string) => `Request a luxury ${title.toLowerCase()} design consultation for Long Island`,
    imageAlt: (title: string) => `Custom Italian ${title.toLowerCase()} design for Long Island homes`,
    mainImageAlt: 'Luxury Italian furniture for Long Island homes',
    features: [
      { id: 1, title: 'Kitchen', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Kitchen%20Interiors%20%E2%80%93%20Custom%20Cabinetry%20and%20Marble%20Finishes.avif', description: "**Most kitchen disasters start with a shortcut. Here's how ours avoids them.**\n\nWe begin with a personalized consultation to understand your culinary habits, lifestyle, and aesthetic goals. For Long Island homes, we consider the generous space available and how to make every square foot purposeful rather than wasteful.\n\nOur design team creates a fully customized kitchen layout, focusing on functionality, flow, and visual harmony. We source Italian-made cabinetry, marble surfaces, and premium appliances — materials that endure decades of daily family use.\n\n**Increase resale value** with Italian craftsmanship that discerning Long Island buyers recognize immediately." },
      { id: 2, title: 'Closet', image: 'https://res.cloudinary.com/designcenter/image/upload/Closet_Designed_For_Modern_Homes.avif', description: "**Pride in owning a closet no neighbor can replicate.**\n\nWe start by mapping your wardrobe habits — whether you need expansive walk-in solutions for a growing collection or elegantly organized systems that make mornings effortless.\n\nOur designers create customized layouts using modular Italian systems, emphasizing aesthetic clarity and functional organization. Materials are carefully selected for durability and beauty, with options for integrated lighting and luxurious hardware.\n\n**Eliminate renovation chaos** with one accountable design partner who manages fabrication and installation from start to finish." },
      { id: 3, title: 'Living Room', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Living%20Room%20Design%20%E2%80%93%20Custom%20Sofas%20and%20Decor%20NYC.avif', description: "**Live daily in a space that finally feels intentional.**\n\nWe start by understanding how you live and entertain in your Long Island home — whether you host large family gatherings or prefer quieter evenings in a room that feels warm and personal.\n\nAfter establishing your design vision, we curate a bespoke layout that balances comfort and artistry, specifying custom Italian sofas, built-in cabinetry, and lighting tailored to your lifestyle.\n\n**Control over timeline, budget, and final outcome** — with one partner who handles everything from design to delivery." },
      { id: 4, title: 'Bathroom', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Bathroom%20Design%20%E2%80%93%20Bespoke%20Vanities%20and%20Interiors.avif', description: "**Not all 'Italian' bathrooms are actually Italian. These are.**\n\nWe identify how you want your bathroom to feel — spa-like, sleek, dramatic, or timeless. For Long Island homes, we design primary bathrooms as private retreats with space for luxury finishes.\n\nWe design a bespoke bathroom plan using custom vanities, Italian stone surfaces, premium fixtures, and tailored storage solutions. Throughout production, we maintain rigorous quality checks.\n\n**Relief knowing every detail is handled** without chasing contractors or managing multiple vendors." },
      { id: 5, title: 'Outdoor', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Outdoor%20Furniture%20%E2%80%93%20Custom%20Patio%20and%20Terrace%20Designs.avif', description: "**Long Island living extends beyond four walls.**\n\nWe assess your outdoor lifestyle — whether it's hosting poolside parties, creating an outdoor dining room for twelve, or designing a cabana retreat.\n\nOur team designs layouts that maximize space and visual connection to your interiors, specifying Italian outdoor furniture, weather-resistant materials, and customized landscaping elements.\n\n**Confidence your space is designed right** before construction starts — we handle every detail from furniture sourcing to installation." },
      { id: 6, title: 'Lighting', image: 'https://res.cloudinary.com/designcenter/image/upload/Luxury%20Lighting%20Design%20%E2%80%93%20Modern%20Fixtures%20for%20High-End%20Homes.avif', description: "**What you pay matters less than what mistakes cost you later.**\n\nWe collaborate with you to understand the emotional tone and architectural needs of each space before designing a layered lighting plan that enhances your home's natural light and evening ambiance.\n\nOur specialists source Italian-made chandeliers, sconces, and recessed lighting systems that blend artistry and functionality. We provide detailed lighting schematics and coordinate installation.\n\n**Your home radiates atmosphere, elegance, and warmth** at every hour — from morning sunrise to evening entertaining." },
    ],
  },

  faq: {
    sectionHeading: 'Questions Long Island Homeowners Ask',
    sectionSubheading: "Full home renovation is a considerable investment. Here's what you need to know.",
    seoHeading: 'Frequently Asked Questions About Interior Design on Long Island',
    items: [
      { id: 'faq-1', question: 'What interior design services do you offer for Long Island homes?', answer: "We provide fully custom Italian kitchens, closets, bathrooms, living rooms, outdoor living areas, lighting, and full home renovations. Every piece is designed specifically for your Long Island home and handcrafted by our network of Italian artisans — no catalog items or showroom compromises." },
      { id: 'faq-2', question: 'How long does a full home renovation take on Long Island?', answer: "Individual rooms like kitchens or closets typically take 3–6 months from design approval to installation. Full home renovations range from 6–12 months. We manage every step in-house — from 3D rendering and Italian manufacturing to coordinated shipping and white-glove installation." },
      { id: 'faq-3', question: 'Do you work with historic Long Island homes?', answer: "Yes. We have extensive experience with Long Island's architectural heritage — from colonial and Tudor homes to mid-century modern builds. We preserve original details, moldings, and proportions while seamlessly integrating modern Italian craftsmanship and contemporary conveniences." },
      { id: 'faq-4', question: 'Can you design outdoor living and pool areas?', answer: "Absolutely. We design full outdoor kitchens with weather-resistant cabinetry, covered dining areas, pool houses, and cabanas using Italian fixtures rated for four-season durability. Your outdoor spaces become natural extensions of your Long Island home." },
      { id: 'faq-5', question: 'What makes Italian interior design different from local showrooms?', answer: "Most local showrooms sell pre-configured cabinets with limited customization. We offer fully custom Italian manufacturing through direct relationships with top ateliers like Aster, Visionnaire, and Longhi — plus one accountable partner from design through installation, with materials unavailable at retail." },
      { id: 'faq-6', question: 'Do you offer bathroom and spa design?', answer: "Yes. We design spa-level bathrooms with heated floors, rain showers, freestanding soaking tubs, and custom Italian vanities for Long Island homes. Every fixture is selected to handle hard water and maintain its finish — designed for both daily function and resort-style relaxation." },
      { id: 'faq-7', question: 'What if my past renovation experience was disappointing?', answer: "That's exactly why our process exists. You see everything in 3D before we build, one dedicated project manager owns your timeline, and Italian artisans who specialize in luxury handle the craftsmanship. Planning correctly costs less than fixing mistakes — we've helped many Long Island homeowners recover from previous renovation nightmares." },
      { id: 'faq-8', question: 'How do I get started with a Long Island project?', answer: "Request a free consultation to discuss your project and goals. We'll assess your space, create a 3D render so you can see every room before construction begins, then handcraft your pieces in Italy and deliver with white-glove installation. We accept a limited number of Long Island projects per month." },
    ],
  },

  bottomFormBackgroundImage: '',
  pageBackgroundImage: '',
};
