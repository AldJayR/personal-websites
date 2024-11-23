import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuButton } from './MenuButton';
import { NavItems } from './NavItems';
import { useScroll } from './hooks/useScroll';
import { headerVariants, navItemVariants, mobileMenuVariants, backgroundVariants } from './animation-variants/header-variants';

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