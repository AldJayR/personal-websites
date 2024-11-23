/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const getIconColor = (icon) => {
    const iconColors = {
        html5: 'text-[#E34F26]',
        'css3-alt': 'text-[#264DE4]',
        js: 'text-[#F7DF1E]',
        react: 'text-[#61DAFB]',
        java: 'text-[#007396]',
        python: 'text-[#3776AB]',
    };
    return iconColors[icon.iconName] || 'text-gray-700';
};

const getServiceColor = (service) => {
    if (service.includes('HTML')) {
        return 'bg-gradient-to-r from-[#E34F26] via-[#264DE4] to-[#F7DF1E] text-transparent bg-clip-text';
    }
    const serviceColors = {
        React: 'text-[#61DAFB]',
        Tailwind: 'text-[#38BDF8]',
        Java: 'text-[#007396]',
        'C/C++': 'text-[#00599C]',
        Python: 'text-[#3776AB]',
    };
    return serviceColors[service] || 'text-gray-700';
};

export const ServiceCard = ({ service, description, icon, icons, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });

    useEffect(() => {
        const card = cardRef.current;

        const updateMousePosition = (e) => {
            const { left, top } = card.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        };

        card.addEventListener('mousemove', updateMousePosition);
        return () => card.removeEventListener('mousemove', updateMousePosition);
    }, []);

    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: { 
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            ref={cardRef}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="group p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center bg-white/30 backdrop-blur-md w-[250px] max-w-[350px] mx-auto h-56 md:h-auto overflow-hidden relative"
        >
            {/* Radial Hover Effect */}
            <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: `radial-gradient(
                        circle 250px at var(--mouse-x) var(--mouse-y),
                        rgba(55, 202, 236, 0.3),
                        transparent 50%
                    )`,
                }}
            />
            <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: `radial-gradient(
                        circle 80px at var(--mouse-x) var(--mouse-y),
                        rgba(55, 202, 236, 0.3),
                        transparent 40%
                    )`,
                    border: '2px solid transparent',
                    borderImage: `radial-gradient(
                        400px circle at var(--mouse-x) var(--mouse-y),
                        rgba(55, 202, 236, 0.7),
                        transparent 40%
                    ) 1`,
                }}
            />

            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`relative z-10 text-xl font-poppins font-bold mb-4 ${getServiceColor(
                    typeof service === 'string' ? service : 'default'
                )}`}
            >
                {service}
            </motion.h3>

            <motion.div 
                className="flex justify-center gap-4 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 + 0.3 }}
            >
                {(icons || [icon]).map((icn, idx) => (
                    <FontAwesomeIcon
                        key={idx}
                        icon={icn}
                        className={`text-3xl ${icn === faReact ? "animate-spin" : ""} ${getIconColor(icn)}`}
                    />
                ))}
            </motion.div>

            <motion.p 
                className="text-gray-600 text-base font-poppins"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 + 0.4 }}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};