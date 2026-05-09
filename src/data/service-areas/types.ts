// Shared types for all service-area landing pages

export interface ServiceAreaTestimonial {
  quote: string;
  author: string;
  location: string;
  image: string;
}

export interface ServiceAreaVideoTestimonial {
  sectionHeading: string;
  videoUrl: string;
  videoPoster: string;
  quote: string;
  authorName: string;
  projectLabel: string;
}

export interface ServiceAreaFeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceAreaImage {
  src: string;
  alt: string;
}

export interface ServiceAreaTextBlock {
  intro: string;
  kitchens: string;
  closets: string;
  livingDining: string;
  bathrooms: string;
  outdoor: string;
}

export interface ServiceAreaSEO {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export interface ServiceAreaJsonLd {
  businessName: string;
  businessDescription: string;
  areaServedName: string;
  areaServedType: 'City' | 'State' | 'AdministrativeArea';
  containedInPlace: string;
  serviceDescriptions: {
    kitchen: string;
    closet: string;
    render: string;
  };
}

export interface ServiceAreaHero {
  heading: string;
  subheading: string;
  ctaText: string;
  testimonial: ServiceAreaTestimonial;
  images: string[];
}

export interface ServiceAreaAccordion {
  sectionHeading: string;
  sectionSubheading: string;
  ctaButtonText: string;
  features: ServiceAreaFeatureItem[];
  ctaAriaLabel: (title: string) => string;
  imageAlt: (title: string) => string;
  mainImageAlt: string;
}

export interface ServiceAreaFAQConfig {
  sectionHeading: string;
  sectionSubheading: string;
  seoHeading: string;
  items: FAQItem[];
}

export interface ServiceAreaMidCTA {
  heading: string;
  subheading: string;
  buttonText: string;
  backgroundImage: string;
}

export interface ServiceAreaConfig {
  slug: string;
  cityName: string;
  regionName: string;
  formType: string; // e.g. "NYC", "Boca Raton" — used in webhook payloads
  underConstruction?: boolean;
  seo: ServiceAreaSEO;
  jsonLd: ServiceAreaJsonLd;
  hero: ServiceAreaHero;
  galleryImages: ServiceAreaImage[];
  midCTA: ServiceAreaMidCTA;
  textContent: ServiceAreaTextBlock;
  videoTestimonial: ServiceAreaVideoTestimonial;
  accordion: ServiceAreaAccordion;
  faq: ServiceAreaFAQConfig;
  bottomFormBackgroundImage: string;
  pageBackgroundImage: string;
}
