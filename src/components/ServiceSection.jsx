import { ServiceCard } from "./ServiceCard";
import { services } from '../assets/data/data';

const ServicesSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 px-20 md:px-28 pt-12" id="services">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    )
}

export default ServicesSection;