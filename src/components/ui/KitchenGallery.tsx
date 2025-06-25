import { 
  GridBody,
  DraggableContainer,
  GridItem, 
} from "./infinite-drag-scroll";
import { getAllKitchenImages, type KitchenImage } from "../../data/kitchenImages";

const KitchenGallery = () => {
  const kitchenImages = getAllKitchenImages();

  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 text-[#2C3E2D]">
            Our Italian Kitchen Gallery
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-[#D6A85B] mx-auto my-4 sm:my-6"></div>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            Explore our complete collection of Italian kitchen designs. Drag to navigate through dozens of luxury kitchens featuring modern, traditional, and Art Deco styles.
          </p>
          <p className="text-sm text-gray-600 italic">
            Click and drag to explore • Scroll to navigate • Each design available for NYC homes
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-2xl bg-[#141414]">
          <DraggableContainer variant="masonry" className="bg-[#141414]">
            <GridBody>
              {kitchenImages.map((image: KitchenImage) => (
                <GridItem
                  key={image.id}
                  className="relative h-72 w-48 md:h-96 md:w-64"
                >
                  <img
                    src={image.image}
                    alt={image.alt}
                    className="pointer-events-none absolute h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="text-sm font-medium">{image.style} Style</p>
                      <p className="text-xs opacity-90">{image.title}</p>
                    </div>
                  </div>
                </GridItem>
              ))}
            </GridBody>
          </DraggableContainer>
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Ready to bring one of these designs to your NYC home?
          </p>
          <button 
            onClick={() => {
              window.dispatchEvent(new CustomEvent('openContactForm'));
            }}
            className="bg-[#D6A85B] hover:bg-[#B48040] text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-medium transition-colors duration-300 shadow-lg"
          >
            Schedule Your Kitchen Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default KitchenGallery;
