import { useState } from "react";
import { Button } from "../shared/button";
import ContactFormModal from "./ContactFormModal";
import { ServiceAreaMidCTA as MidCTAConfig } from "../../data/service-areas/types";

interface ServiceAreaMidCTAProps {
  midCTA: MidCTAConfig;
  formType: string;
}

const ServiceAreaMidCTA = ({ midCTA, formType }: ServiceAreaMidCTAProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full py-16 relative bg-cover bg-center " style={{ backgroundImage: `url(${midCTA.backgroundImage})` }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl text-white mb-4">
            {midCTA.heading}
          </h3>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            {midCTA.subheading}
          </p>
          <Button 
            size="lg" 
            className="gap-3 text-lg px-8"
            onClick={() => setIsModalOpen(true)}
          >
            {midCTA.buttonText}
          </Button>
        </div>
      </section>
      
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        formType={formType}
        source={`${formType} Page`}
      />
    </>
  );
};

export default ServiceAreaMidCTA;
