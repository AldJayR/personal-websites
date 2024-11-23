/* eslint-disable react/prop-types */
import { CustomNavLink } from './CustomNavLink';

export const NavItems = ({ isMobile, getLinkClass, handleNavLinkClick }) => {
    const navItems = [
        { to: '#hero', text: 'Home', section: 'hero' },
        { to: '#about', text: 'About', section: 'about' },
        { to: '#services', text: 'Services', section: 'services' },
        { to: '#projects', text: 'Projects', section: 'projects' },
        { to: '#contact', text: 'Contact', section: 'contact' }
    ];

    return (
        <ul className={isMobile ? "flex-col md:hidden text-lg" : "hidden md:flex items-center gap-[7vw] p-5 text-2xl"}>
            {navItems.map(({ to, text, section }) => (
                <li key={section} className={isMobile ? "py-2" : ""}>
                    <CustomNavLink
                        to={to}
                        onClick={(e) => handleNavLinkClick(e, to)}
                        className={getLinkClass(section)}
                    >
                        {text}
                    </CustomNavLink>
                </li>
            ))}
        </ul>
    );
};