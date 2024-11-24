import { memo } from 'react';
import { motion } from 'motion/react';
import ParticleBackground from './ParticleBackground';
import Header from './Header';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link } from 'react-router-dom';
import { containerVariants,
         itemVariants,
         nameVariants,
         roleVariants,
         buttonVariants
    } from './animation-variants/hero-variants';
const MemoizedParticleBackground = memo(ParticleBackground);

const Hero = () => {
    const [text] = useTypewriter({
        words: ['Front-End Developer', 'Software Developer'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 120,
    });

    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

 

    return (
        <>
            <Header />
            <MemoizedParticleBackground />
            <motion.div
                className="text-center font-tilt-warp pt-48 md:pt-44 select-none h-screen"
                id="hero"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 
                    className="text-6xl md:text-9xl"
                    variants={itemVariants}
                >
                    <motion.span 
                        className="text-[#37CAEC]"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        H
                    </motion.span>
                    ey
                </motion.h1>

                <motion.span 
                    className="text-2xl md:text-4xl mt-8 block"
                    variants={nameVariants}
                >
                    I&apos;m Aldwin
                </motion.span>

                <motion.span 
                    className="text-xl md:text-2xl mt-4 block"
                    variants={roleVariants}
                >
                    A
                    <span className="text-[#37CAEC]"> {text}</span>
                    <Cursor />
                </motion.span>

                <Link to="#projects" onClick={(e) => handleNavLinkClick(e, '#projects')}>
                    <motion.button 
                        className="font-roboto font-semibold mt-6 text-base md:text-lg text-white py-3 px-8 rounded-3xl bg-cyan-400 hover:bg-cyan-600"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Get Started
                    </motion.button>
                </Link>
            </motion.div>
        </>
    );
};

export default Hero;