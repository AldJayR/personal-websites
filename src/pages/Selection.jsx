import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Avatar from '../components/Avatar';
import starsVideo from '../assets/videos/stars-background.mp4';

const Selection = () => {
    const [loading, setLoading] = useState(false); // Loading state
    const [selectedPage, setSelectedPage] = useState(''); // Track selected avatar
    const [fadeOut, setFadeOut] = useState(false); // Fade-out animation state
    const navigate = useNavigate();

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
            setTimeout(() => navigate(`/${page.toLowerCase()}`), 3000); 
        }, 1000); 
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={starsVideo}
                type="video/mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="relative z-10 h-full bg-black bg-opacity-80 p-4 md:p-6 flex flex-col items-center justify-center">

                {loading ? (
                    <div className="flex flex-col items-center justify-center h-full gap-4">
                        <div className="animate-bounce text-6xl">🚀</div>
                        <p className="text-white text-lg font-bold">Launching to {selectedPage}...</p>
                    </div>
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
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                            {avatars.map((avatar, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1 }} 
                                    whileTap={{ scale: 0.9 }} 
                                    onClick={() => handleAvatarClick(avatar.name)}
                                    className="cursor-pointer"
                                >
                                    <Avatar img={avatar.img} name={avatar.name} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Selection;
