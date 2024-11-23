import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
        if (targetElement) {
            const section = targetId.replace('#', '');
            isScrollingTo.current = true;
            setActiveSection(section);
            
            targetElement.scrollIntoView({ behavior: 'smooth' });
            
            setTimeout(() => {
                isScrollingTo.current = false;
            }, 1000); 
        }
        if (isMenuOpen) setIsMenuOpen(false);
    };

    const getLinkClass = (section) => {
        return `hover:text-cyan-400 ${activeSection === section ? 'text-cyan-600' : ''}`;
    };

    // Header animation variants
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

    // Nav items animation variants
    const navItemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    // Mobile menu animation variants
    const mobileMenuVariants = {
        hidden: { 
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
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

    // Background animation variants
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
                                className="md:hidden"
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