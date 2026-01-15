import { useState } from "react";
import { Button } from "../ui/button";
import BocaRatonFormModal from "./BocaRatonFormModal";

const BocaRatonMidCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="w-full py-16 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://res.cloudinary.com/designcenter/image/upload/v1767974874/2_lromdm.avif)' }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl text-white mb-4">
            Planning the upgrade in next 6 months?
          </h3>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Claim your free consultation + 3D render today to use in following 6 months.
          </p>
          <Button 
            size="lg" 
            className="gap-3 text-lg px-8"
            onClick={openModal}
          >
            LOCK IN MY 3D RENDERING
          </Button>
        </div>
      </section>
      
      <BocaRatonFormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default BocaRatonMidCTA;
