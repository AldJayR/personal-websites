import { useState, useRef } from 'react';
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
    
    return (
        <header className={`font-tilt-warp fixed top-0 left-0 w-screen z-50 transition-all duration-300 ${
            isScrolled || isMenuOpen ? 'bg-white/30 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}>
            <nav className="md:flex md:justify-center items-center w-[92%] mx-auto">
                <div className="md:hidden self-start pt-3 w-full">
                    <MenuButton onClick={toggleMenu} />
                </div>

                <NavItems 
                    isMobile={false} 
                    getLinkClass={getLinkClass} 
                    handleNavLinkClick={handleNavLinkClick} 
                />

                {isMenuOpen && (
                    <NavItems 
                        isMobile={true} 
                        getLinkClass={getLinkClass} 
                        handleNavLinkClick={handleNavLinkClick} 
                    />
                )}
            </nav>
        </header>
    );
};

export default Header;