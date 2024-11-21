import { useEffect } from "react";

export const useScroll = (setIsScrolled, setActiveSection, isScrollingTo) => {
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            if (isScrollingTo.current) return;

            const sections = ['hero', 'about', 'services', 'projects', 'contact'];
            for (const section of sections) {
                const element = document.querySelector(`#${section}`);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [setIsScrolled, setActiveSection, isScrollingTo]);
};