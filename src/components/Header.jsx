import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuButton } from './MenuButton';
import { NavItems } from './NavItems';
import { useScroll } from './hooks/useScroll';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const isScrollingTo = useRef(false);

    useScroll(setIsScrolled, setActiveSection, isScrollingTo);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        // First close the menu if it's open
        if (isMenuOpen) {
            setIsMenuOpen(false);
            // Give the menu time to start closing
            setTimeout(executeScroll, 500)
        } else {
            executeScroll();
        }

        const executeScroll = () => {
            const section = targetId.replace('#', '');
            isScrollingTo.current = true;
            setActiveSection(section);

            // Get the header height
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            
            // Calculate the target position with offset
            const targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top - headerHeight;

            // Create smooth scroll animation
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000; // ms
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);

                // Easing function
                const easeInOutQuad = t => t < 0.5 
                    ? 2 * t * t 
                    : 1 - Math.pow(-2 * t + 2, 2) / 2;

                window.scrollTo(0, startPosition + (distance * easeInOutQuad(progress)));

                if (progress < 1) {
                    requestAnimationFrame(animation);
                } else {
                    // Ensure we're exactly at the right position
                    window.scrollTo(0, targetPosition);
                    isScrollingTo.current = false;
                }
            }

            requestAnimationFrame(animation);
        }
    };

    const getLinkClass = (section) => {
        return `hover:text-cyan-400 ${activeSection === section ? 'text-cyan-600' : ''}`;
    };

    const headerVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const navItemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const mobileMenuVariants = {
        hidden: { 
            opacity: 0,
            height: 0,
            transition: { duration: 0.2, ease: "easeInOut" }
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.05
            }
        }
    };

    const backgroundVariants = {
        transparent: {
            backgroundColor: "rgba(255, 255, 255, 0)",
            backdropFilter: "blur(0px)",
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
        },
        solid: {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
        }
    };
    
    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            className="font-tilt-warp fixed top-0 left-0 w-full z-50"
        >
            <motion.div
                initial="transparent"
                animate={isScrolled || isMenuOpen ? "solid" : "transparent"}
                variants={backgroundVariants}
                transition={{ duration: 0.3 }}
                className="w-full"
            >
                <nav className="md:flex md:justify-center items-center w-[92%] mx-auto">
                    <motion.div 
                        variants={navItemVariants}
                        className="md:hidden self-start pt-3 w-full"
                    >
                        <MenuButton onClick={toggleMenu} />
                    </motion.div>

                    <motion.div
                        variants={navItemVariants}
                        className="hidden md:block"
                    >
                        <NavItems 
                            isMobile={false} 
                            getLinkClass={getLinkClass} 
                            handleNavLinkClick={handleNavLinkClick} 
                        />
                    </motion.div>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={mobileMenuVariants}
                                className="md:hidden w-full"
                            >
                                <NavItems 
                                    isMobile={true} 
                                    getLinkClass={getLinkClass} 
                                    handleNavLinkClick={handleNavLinkClick} 
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </motion.div>
        </motion.header>
    );
};

export default Header;