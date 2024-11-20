import { ServiceCard } from "./ServiceCard";
import { services } from '../assets/data/data';

const ServicesSection = () => {
    return (
        <>
            <h1 className="font-tilt-warp text-4xl leading-[45px] text-center tracking-[0.22em] text-[#262222] ">SERVICES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-28 max-w-7xl mx-auto pt-6" id="services">
           
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
        </>
        
    )
}

export default ServicesSection;