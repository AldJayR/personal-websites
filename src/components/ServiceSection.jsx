import { motion } from 'framer-motion';
import { ServiceCard } from "./ServiceCard";
import { services } from '../assets/data/data';

const ServicesSection = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="py-16"
        >
            <motion.h1 
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                            duration: 0.5,
                            ease: "easeOut"
                        }
                    }
                }}
                className="font-tilt-warp text-4xl leading-[45px] text-center tracking-[0.22em] text-[#262222]"
            >
                SERVICES
            </motion.h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-28 max-w-7xl mx-auto pt-6" id="services">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} index={index} />
                ))}
            </div>
        </motion.section>
    );
};

export default ServicesSection;