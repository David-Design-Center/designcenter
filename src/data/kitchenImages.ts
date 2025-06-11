// Helper function to load all kitchen images from product galleries
export interface KitchenImage {
  id: string;
  image: string;
  title: string;
  style: string;
  alt: string;
}

// Import all kitchen gallery JSON files
const importKitchenGalleries = () => {
  const galleries: KitchenImage[] = [];
  
  // Art Deco Kitchens
  const artDecoKitchens = [
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_1", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046401/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_1.avif", title: "Kitchen_Art_Deco_1", style: "Art_Deco", alt: "Luxury Art Deco kitchen design with elegant finishes" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_2", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046393/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_2.avif", title: "Kitchen_Art_Deco_2", style: "Art_Deco", alt: "Art Deco kitchen with marble backsplash and bold geometry" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_3", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046395/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_3.avif", title: "Kitchen_Art_Deco_3", style: "Art_Deco", alt: "Sophisticated Art Deco kitchen with premium materials" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_4", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046396/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_4.avif", title: "Kitchen_Art_Deco_4", style: "Art_Deco", alt: "Art Deco kitchen featuring Italian craftsmanship" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_5", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046397/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_5.avif", title: "Kitchen_Art_Deco_5", style: "Art_Deco", alt: "Elegant Art Deco kitchen with custom cabinetry" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_6", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046398/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_6.avif", title: "Kitchen_Art_Deco_6", style: "Art_Deco", alt: "Art Deco kitchen design with luxury finishes" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_7", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046390/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_7.avif", title: "Kitchen_Art_Deco_7", style: "Art_Deco", alt: "Premium Art Deco kitchen with Italian materials" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_8", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046391/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_8.avif", title: "Kitchen_Art_Deco_8", style: "Art_Deco", alt: "Art Deco kitchen with geometric patterns" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_9", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046392/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_9.avif", title: "Kitchen_Art_Deco_9", style: "Art_Deco", alt: "Luxurious Art Deco kitchen design" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_10", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046394/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_10.avif", title: "Kitchen_Art_Deco_10", style: "Art_Deco", alt: "Art Deco kitchen with premium hardware" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_11", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046389/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_11.avif", title: "Kitchen_Art_Deco_11", style: "Art_Deco", alt: "Elegant Art Deco kitchen with marble countertops" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_12", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046399/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_12.avif", title: "Kitchen_Art_Deco_12", style: "Art_Deco", alt: "Art Deco kitchen with sophisticated lighting" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_13", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046400/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_13.avif", title: "Kitchen_Art_Deco_13", style: "Art_Deco", alt: "Premium Art Deco kitchen design" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_14", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046387/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_14.avif", title: "Kitchen_Art_Deco_14", style: "Art_Deco", alt: "Art Deco kitchen with custom Italian cabinets" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_15", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046388/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_15.avif", title: "Kitchen_Art_Deco_15", style: "Art_Deco", alt: "Luxurious Art Deco kitchen with premium finishes" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_16", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046385/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_16.avif", title: "Kitchen_Art_Deco_16", style: "Art_Deco", alt: "Art Deco kitchen design with bold architectural elements" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_17", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046386/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_17.avif", title: "Kitchen_Art_Deco_17", style: "Art_Deco", alt: "Sophisticated Art Deco kitchen with luxury materials" },
    { id: "Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_18", image: "https://res.cloudinary.com/designcenter/image/upload/v1744046383/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_18.avif", title: "Kitchen_Art_Deco_18", style: "Art_Deco", alt: "Art Deco kitchen with custom Italian design" }
  ];

  // Modern Kitchens
  const modernKitchens = [
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_2", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048183/Product_2/Kitchen/Modern/Kitchen_Modern_2.avif", title: "Kitchen_Modern_2", style: "Modern", alt: "Modern Italian kitchen with sleek design" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_3", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048193/Product_2/Kitchen/Modern/Kitchen_Modern_3.avif", title: "Kitchen_Modern_3", style: "Modern", alt: "Contemporary kitchen with premium Italian cabinets" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_4", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048195/Product_2/Kitchen/Modern/Kitchen_Modern_4.avif", title: "Kitchen_Modern_4", style: "Modern", alt: "Modern kitchen design with clean lines" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_5", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048196/Product_2/Kitchen/Modern/Kitchen_Modern_5.avif", title: "Kitchen_Modern_5", style: "Modern", alt: "Sleek modern kitchen with Italian craftsmanship" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_6", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048197/Product_2/Kitchen/Modern/Kitchen_Modern_6.avif", title: "Kitchen_Modern_6", style: "Modern", alt: "Modern Italian kitchen with efficient storage" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_7", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048198/Product_2/Kitchen/Modern/Kitchen_Modern_7.avif", title: "Kitchen_Modern_7", style: "Modern", alt: "Contemporary kitchen with open layout" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_8", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048199/Product_2/Kitchen/Modern/Kitchen_Modern_8.avif", title: "Kitchen_Modern_8", style: "Modern", alt: "Modern kitchen with custom walnut cabinets" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_12", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048176/Product_2/Kitchen/Modern/Kitchen_Modern_12.avif", title: "Kitchen_Modern_12", style: "Modern", alt: "Modern Italian kitchen with integrated appliances" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_13", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048177/Product_2/Kitchen/Modern/Kitchen_Modern_13.avif", title: "Kitchen_Modern_13", style: "Modern", alt: "Contemporary kitchen with smart features" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_14", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048178/Product_2/Kitchen/Modern/Kitchen_Modern_14.avif", title: "Kitchen_Modern_14", style: "Modern", alt: "Modern kitchen design with luxury finishes" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_15", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048179/Product_2/Kitchen/Modern/Kitchen_Modern_15.avif", title: "Kitchen_Modern_15", style: "Modern", alt: "Sleek modern kitchen with Italian materials" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_16", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048180/Product_2/Kitchen/Modern/Kitchen_Modern_16.avif", title: "Kitchen_Modern_16", style: "Modern", alt: "Modern kitchen with innovative storage solutions" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_17", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048181/Product_2/Kitchen/Modern/Kitchen_Modern_17.avif", title: "Kitchen_Modern_17", style: "Modern", alt: "Contemporary kitchen with elegant lighting" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_18", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048182/Product_2/Kitchen/Modern/Kitchen_Modern_18.avif", title: "Kitchen_Modern_18", style: "Modern", alt: "Modern Italian kitchen with premium appliances" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_19", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048184/Product_2/Kitchen/Modern/Kitchen_Modern_19.avif", title: "Kitchen_Modern_19", style: "Modern", alt: "Sleek modern kitchen design" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_20", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048185/Product_2/Kitchen/Modern/Kitchen_Modern_20.avif", title: "Kitchen_Modern_20", style: "Modern", alt: "Contemporary kitchen with custom Italian cabinets" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_21", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048186/Product_2/Kitchen/Modern/Kitchen_Modern_21.avif", title: "Kitchen_Modern_21", style: "Modern", alt: "Modern kitchen with professional team design" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_22", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048187/Product_2/Kitchen/Modern/Kitchen_Modern_22.avif", title: "Kitchen_Modern_22", style: "Modern", alt: "Contemporary Italian kitchen design" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_23", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048188/Product_2/Kitchen/Modern/Kitchen_Modern_23.avif", title: "Kitchen_Modern_23", style: "Modern", alt: "Modern kitchen with luxury materials" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_25", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048189/Product_2/Kitchen/Modern/Kitchen_Modern_25.avif", title: "Kitchen_Modern_25", style: "Modern", alt: "Modern kitchen renovation transformation" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_28", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048190/Product_2/Kitchen/Modern/Kitchen_Modern_28.avif", title: "Kitchen_Modern_28", style: "Modern", alt: "Contemporary kitchen with Italian craftsmanship" },
    { id: "Product_2/Kitchen/Modern/Kitchen_Modern_29", image: "https://res.cloudinary.com/designcenter/image/upload/v1744048192/Product_2/Kitchen/Modern/Kitchen_Modern_29.avif", title: "Kitchen_Modern_29", style: "Modern", alt: "Beautiful completed modern kitchen transformation" }
  ];

  // Traditional Kitchens
  const traditionalKitchens = [
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_1", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045922/Product_2/Kitchen/Traditional/Kitchen_Traditional_1.avif", title: "Kitchen_Traditional_1", style: "Traditional", alt: "Traditional Italian kitchen with sustainable materials" },
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_2", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045912/Product_2/Kitchen/Traditional/Kitchen_Traditional_2.avif", title: "Kitchen_Traditional_2", style: "Traditional", alt: "Traditional kitchen design with classic elements" },
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_3", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045913/Product_2/Kitchen/Traditional/Kitchen_Traditional_3.avif", title: "Kitchen_Traditional_3", style: "Traditional", alt: "Classic traditional kitchen with luxury finishes" },
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_4", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045911/Product_2/Kitchen/Traditional/Kitchen_Traditional_4.avif", title: "Kitchen_Traditional_4", style: "Traditional", alt: "Traditional kitchen planning with vision board" },
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_5", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045914/Product_2/Kitchen/Traditional/Kitchen_Traditional_5.avif", title: "Kitchen_Traditional_5", style: "Traditional", alt: "Traditional Italian kitchen with handcrafted details" },
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_6", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045915/Product_2/Kitchen/Traditional/Kitchen_Traditional_6.avif", title: "Kitchen_Traditional_6", style: "Traditional", alt: "Classic traditional kitchen design" },
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_7", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045916/Product_2/Kitchen/Traditional/Kitchen_Traditional_7.avif", title: "Kitchen_Traditional_7", style: "Traditional", alt: "Traditional kitchen with premium cabinetry" },
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_8", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045917/Product_2/Kitchen/Traditional/Kitchen_Traditional_8.avif", title: "Kitchen_Traditional_8", style: "Traditional", alt: "Traditional Italian kitchen for brownstone home" },
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_9", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045918/Product_2/Kitchen/Traditional/Kitchen_Traditional_9.avif", title: "Kitchen_Traditional_9", style: "Traditional", alt: "Classic traditional kitchen with detailed craftsmanship" },
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_10", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045919/Product_2/Kitchen/Traditional/Kitchen_Traditional_10.avif", title: "Kitchen_Traditional_10", style: "Traditional", alt: "Traditional kitchen with luxury materials" },
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_11", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045920/Product_2/Kitchen/Traditional/Kitchen_Traditional_11.avif", title: "Kitchen_Traditional_11", style: "Traditional", alt: "Traditional Italian kitchen design" },
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_12", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045921/Product_2/Kitchen/Traditional/Kitchen_Traditional_12.avif", title: "Kitchen_Traditional_12", style: "Traditional", alt: "Classic traditional kitchen with premium finishes" },
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_16", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045923/Product_2/Kitchen/Traditional/Kitchen_Traditional_16.avif", title: "Kitchen_Traditional_16", style: "Traditional", alt: "Traditional kitchen with timeless design" },
    { id: "Product_2/Kitchen/Traditional/Kitchen_Traditional_17", image: "https://res.cloudinary.com/designcenter/image/upload/v1744045924/Product_2/Kitchen/Traditional/Kitchen_Traditional_17.avif", title: "Kitchen_Traditional_17", style: "Traditional", alt: "Traditional Italian kitchen with heritage craftsmanship" }
  ];

  galleries.push(...artDecoKitchens, ...modernKitchens, ...traditionalKitchens);
  return galleries;
};

export const getAllKitchenImages = (): KitchenImage[] => {
  return importKitchenGalleries();
};
