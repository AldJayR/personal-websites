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

    // Extracted scroll animation function
    const scrollToPosition = (targetPosition) => {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 0; // ms
        let start = null;

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);

            // Improved easing function
            const easeInOutQuad = t => t < 0.5 
                ? 2 * t * t 
                : 1 - Math.pow(-2 * t + 2, 2) / 2;

            window.scrollTo({
                top: startPosition + (distance * easeInOutQuad(progress)),
                behavior: 'auto' // We're handling the smooth scroll manually
            });

            if (progress < 1) {
                requestAnimationFrame(animation);
            } else {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'auto'
                });
                setTimeout(() => {
                    isScrollingTo.current = false;
                }, 100);
            }
        };

        requestAnimationFrame(animation);
    };

    const executeScroll = (targetId) => {
        const targetElement = document.getElementById(targetId.replace('#', ''));
        if (!targetElement) return;

        isScrollingTo.current = true;
        
        // Get the header height and add a small offset
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const offset = 16; // Additional offset in pixels
        
        // Calculate the target position with offset
        const targetRect = targetElement.getBoundingClientRect();
        const targetPosition = window.scrollY + targetRect.top - headerHeight - offset;
        
        scrollToPosition(targetPosition);
    };

    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        
        if (isMenuOpen) {
            setIsMenuOpen(false);
            // Wait for menu animation to complete before scrolling
            setTimeout(() => executeScroll(targetId), 0);
        } else {
            executeScroll(targetId);
        }
    };

    const getLinkClass = (section) => {
        return `hover:text-cyan-400 transition-colors duration-200 ${
            activeSection === section ? 'text-cyan-600' : 'text-gray-800'
        }`;
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