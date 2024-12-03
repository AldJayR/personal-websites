import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackgroundVideo from '../components/BackgroundVideo';
import LoadingScreen from '../components/LoadingScreen';
import AvatarGrid from '../components/AvatarGrid';
import starsVideo from '../assets/videos/stars-background.mp4';

const Selection = () => {
    const [loading, setLoading] = useState(false); 
    const [selectedPage, setSelectedPage] = useState(''); 
    const [fadeOut, setFadeOut] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Welcome! Select your website";
    }, [])

    const avatars = [
        { img: "https://robohash.org/Justine", name: "Justine" },
        { img: "https://robohash.org/Ardee", name: "Ardee" },
        { img: "https://robohash.org/Russel", name: "Russel" },
        { img: "https://robohash.org/Aldwin", name: "Aldwin" },
        { img: "https://robohash.org/Piolo", name: "Piolo" }
    ];

    const handleAvatarClick = (page) => {
        setFadeOut(true);
        setSelectedPage(page);
    
        setTimeout(() => {
            setLoading(true);
            setTimeout(() => {
                if (page.toLowerCase() === 'aldwin') {
                    navigate(`/${page.toLowerCase()}`);
                } else {
                    const externalLinks = {
                        justine: 'https://external-site-for-justine.com',
                        ardee: 'https://aaards.github.io/ardsweb/',
                        russel: 'https://external-site-for-russel.com',
                        piolo: 'https://external-site-for-piolo.com',
                    };
                    window.location.href = externalLinks[page.toLowerCase()];
                }
            }, 3000);
        }, 1000);
    };
    

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <BackgroundVideo src={starsVideo}/>
            <div className="relative z-10 h-full bg-black bg-opacity-80 p-4 md:p-6 flex flex-col items-center justify-center">

                {loading ? (
                    <LoadingScreen page={selectedPage} />
                ) : (
                    <motion.div
                        className="flex flex-col items-center justify-center h-full gap-4 md:gap-6 w-full"
                        initial={{ opacity: 1 }}
                        animate={fadeOut ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-base sm:text-lg md:text-xl font-roboto font-semibold text-cyan-200">
                            Choose Your Web Page
                        </h2>
                       <AvatarGrid avatars={avatars} chooseAvatar={handleAvatarClick}/>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Selection;
