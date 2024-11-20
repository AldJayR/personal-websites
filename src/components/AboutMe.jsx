import myImage from '../assets/images/IMG_0684.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const AboutMe = () => {
    return (
        <section className="lg:p-36 md:p-24 p-6" id="about">
            <div className="bg-neutral-100 lg:px-12 md:px-8 px-12 py-8 rounded-[45px] shadow-lg">
                <h1 className="font-tilt-warp text-2xl md:text-4xl leading-[45px] text-center tracking-[0.22em] text-[#262222] mb-4 md:mb-9">
                    ABOUT ME
                </h1>
                <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="font-tilt-warp text-xl md:text-4xl mb-4 mt-[-36px]">
                            Aldwin Jairo Sarte
                        </h2>
                        <p className="font-inter font-semibold text-base leading-[30px] md:text-[20px] md:leading-[36px] tracking-[0.01em]">
                            I am a 2nd year BSIT student from{' '}
                            <span className="text-[#FF9D00]">
                                Nueva Ecija University of Science and Technology.
                            </span>{' '}
                            I&apos;m currently focusing on Web Development and Software Development, with my end goal in Cybersecurity.
                        </p>
                        {/* Social Icons for larger screens */}
                        <div className="hidden md:flex gap-6 mt-12">
                            <a href="https://facebook.com/aldwinjzs" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="text-3xl text-[#1877F2] cursor-pointer hover:opacity-80" />
                            </a>
                            <a href="mailto:aldwinjzs3@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-[#EA4335] cursor-pointer hover:opacity-80" />
                            </a>
                            <a href="https://github.com/AldJayR" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="text-3xl text-[#171515] cursor-pointer hover:opacity-80" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex-shrink-0 w-full md:w-[300px] flex justify-center">
                            <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-[#FF9D00] shadow-xl">
                                <img 
                                    src={myImage} 
                                    className="w-full h-full object-cover object-center"
                                    alt="Side view of aldwin on a grassy field" 
                                />
                            </div>
                        </div>
                        {/* Social Icons for mobile screens */}
                        <div className="md:hidden flex justify-center gap-6 my-6">
                            <a href="https://facebook.com/aldwinjzs" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="text-xl md:text-3xl text-[#1877F2] cursor-pointer hover:opacity-80" />
                            </a>
                            <a href="mailto:aldwinjzs3@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} className="text-xl md:text-3xl text-[#EA4335] cursor-pointer hover:opacity-80" />
                            </a>
                            <a href="https://github.com/AldJayR" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="text-xl md:text-3xl text-[#171515] cursor-pointer hover:opacity-80" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}