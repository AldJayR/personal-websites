import { motion } from 'framer-motion';
import myImage from '/assets/images/IMG_0684.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { containerVariants, itemVariants, imageVariants, socialIconVariants } from './animation-variants/about-me-variants';

const AboutMe = () => {

    return (
        <section className="lg:p-36 md:p-24 pt-32 pb-16 px-6" id="about">
            <motion.div 
                className="bg-neutral-100 lg:px-12 md:px-8 px-12 py-8 rounded-[45px] shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <motion.h1 
                    className="heading-style"
                    variants={itemVariants}
                >
                    ABOUT ME
                </motion.h1>
                
                <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                    <motion.div 
                        className="flex-1 text-center md:text-left"
                        variants={itemVariants}
                    >
                        <motion.h2 
                            className="font-tilt-warp text-xl md:text-4xl mb-4 mt-[-36px]"
                            variants={itemVariants}
                        >
                            Aldwin Jairo Sarte
                        </motion.h2>
                        
                        <motion.p 
                            className="font-inter font-semibold text-base leading-[30px] md:text-[20px] md:leading-[36px] tracking-[0.01em]"
                            variants={itemVariants}
                        >
                            I am a 20-year-old second-year BSIT student at{' '}
                            <span className="text-[#FF9D00]">
                                Nueva Ecija University of Science and Technology.
                            </span>{' '}
                            My current focus is on Web Development and Software Development, with a long-term goal of building a career in Cybersecurity.
                        </motion.p>

                        {/* Social Icons for larger screens */}
                        <motion.div 
                            className="hidden md:flex gap-6 mt-12"
                            variants={itemVariants}
                        >
                            <motion.a 
                                href="https://facebook.com/aldwinjzs" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                variants={socialIconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <FontAwesomeIcon 
                                    icon={faFacebook} 
                                    className="text-3xl text-[#1877F2] cursor-pointer hover:opacity-80" 
                                />
                            </motion.a>
                            <motion.a 
                                href="mailto:aldwinjzs3@gmail.com"
                                variants={socialIconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <FontAwesomeIcon 
                                    icon={faEnvelope} 
                                    className="text-3xl text-[#EA4335] cursor-pointer hover:opacity-80" 
                                />
                            </motion.a>
                            <motion.a 
                                href="https://github.com/AldJayR" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                variants={socialIconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <FontAwesomeIcon 
                                    icon={faGithub} 
                                    className="text-3xl text-[#171515] cursor-pointer hover:opacity-80" 
                                />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="flex flex-col items-center"
                        variants={imageVariants}
                    >
                        <div className="flex-shrink-0 w-full md:w-[300px] flex justify-center">
                            <motion.div 
                                className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-[#FF9D00] shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img 
                                    src={myImage} 
                                    className="w-full h-full object-cover object-center"
                                    alt="Side view of aldwin on a grassy field" 
                                />
                            </motion.div>
                        </div>

                        {/* Social Icons for mobile screens */}
                        <motion.div 
                            className="md:hidden flex justify-center gap-6 my-6"
                            variants={itemVariants}
                        >
                            <motion.a 
                                href="https://facebook.com/aldwinjzs" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                variants={socialIconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <FontAwesomeIcon 
                                    icon={faFacebook} 
                                    className="text-xl md:text-3xl text-[#1877F2] cursor-pointer hover:opacity-80" 
                                />
                            </motion.a>
                            <motion.a 
                                href="mailto:aldwinjzs3@gmail.com"
                                variants={socialIconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <FontAwesomeIcon 
                                    icon={faEnvelope} 
                                    className="text-xl md:text-3xl text-[#EA4335] cursor-pointer hover:opacity-80" 
                                />
                            </motion.a>
                            <motion.a 
                                href="https://github.com/AldJayR" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                variants={socialIconVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <FontAwesomeIcon 
                                    icon={faGithub} 
                                    className="text-xl md:text-3xl text-[#171515] cursor-pointer hover:opacity-80" 
                                />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMe;