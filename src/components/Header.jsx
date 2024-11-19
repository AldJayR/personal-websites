import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className={`font-tilt-warp fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled || isMenuOpen
                ? 'bg-white/30 backdrop-blur-md shadow-md'
                : 'bg-transparent'
        }`}>
            <nav className="md:flex md:justify-center items-center w-[92%] mx-auto ">

                {/* Mobile */}

                <div className="md:hidden self-start pt-3 w-full">
                    <button className="text-black" onClick={toggleMenu}>
                        <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            viewBox='0 0 24 24'
                            className='w-6 h-6'
                        >
                            <path d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                </div>

                

                <ul className="hidden md:flex items-center gap-[7vw] p-5 text-2xl">
                    <li>
                        <NavLink to="#hero" className="hover:text-cyan-400">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="#about" className="hover:text-cyan-400">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="#services" className="hover:text-cyan-400">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="#projects" className="hover:text-cyan-400">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="#certificates" className="hover:text-cyan-400">Certificates</NavLink>
                    </li>
                    <li>
                        <NavLink to="#contact" className="hover:text-cyan-400">Contact</NavLink>
                    </li>
                </ul>

                {/* Mobile Menu */}

                {isMenuOpen && <ul className="flex-col md:hidden text-lg">
                    <li className="py-2">
                        <NavLink to="#hero" className="hover:text-cyan-400">Home</NavLink>
                    </li>
                    <li className="py-2">
                        <NavLink to="#about" className="hover:text-cyan-400">About</NavLink>
                    </li>
                    <li className="py-2"> 
                        <NavLink to="#services" className="hover:text-cyan-400">Services</NavLink>
                    </li>
                    <li className="py-2">
                        <NavLink to="#projects" className="hover:text-cyan-400">Projects</NavLink>
                    </li>
                    <li className="py-2">
                        <NavLink to="#certificates" className="hover:text-cyan-400">Certificates</NavLink>
                    </li>
                    <li className="py-2">
                        <NavLink to="#contact" className="hover:text-cyan-400">Contact</NavLink>
                    </li>
                </ul>}
            </nav>
        </header>
    )
}

export default Header;