import { memo } from 'react';
import ParticleBackground from './ParticleBackground';
import Header from './Header';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link } from 'react-router-dom';

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
            <div className="text-center font-tilt-warp pt-36 md:pt-44 select-none" id="hero">
                <h1 className="text-6xl md:text-9xl">
                    <span className="text-[#37CAEC]">H</span>
                    ey
                </h1>
                <span className="text-2xl md:text-4xl mt-8 block">
                    I&apos;m Aldwin
                </span>
                <span className="text-xl md:text-2xl mt-4 block">
                    A
                    <span className="text-[#37CAEC]"> {text}</span>
                    <Cursor />
                </span>
                <Link to="#projects" onClick={(e) => handleNavLinkClick(e, '#hero')}>
                    <button className="font-roboto font-semibold mt-6 text-base md:text-lg text-white py-3 px-8 rounded-3xl bg-cyan-400 hover:bg-cyan-600">Get Started</button>
                </Link>
                
            </div>
        </>
    );
};

export default Hero;
