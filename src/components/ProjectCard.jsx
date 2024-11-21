/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import LanguageBadge from './LanguageBadge';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            {/* Image Section */}
            <div className="w-full h-72">
                <img 
                    src={project.media_url} 
                    className="object-cover object-top w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none" 
                    alt={`screenshot of ${project.project_title}`} 
                />
            </div>

            {/* Content Section */}
            <div className="relative flex flex-col justify-between p-6 md:py-8 md:px-8 h-full bg-white md:rounded-r-lg md:rounded-bl-none">
                {/* Title */}
                <h3 className="font-sans font-bold text-2xl md:text-3xl mb-4 text-cyan-500 leading-tight tracking-tight">
                    {project.project_title}
                </h3>
                
                {/* Description */}
                <p className="font-inter text-sm md:text-base mb-6 leading-relaxed text-gray-600 tracking-normal">
                    {project.description}
                </p>
                
                {/* Languages/Technologies */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {Array.isArray(project.language)
                        ? project.language.map((lang, index) => (
                              <LanguageBadge key={index} language={lang} />
                          ))
                        : (
                            <LanguageBadge language={project.language} />
                        )}
                </div>

                {/* GitHub Link */}
                {project.github_url && (
                    <a 
                        href={project.github_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="absolute bottom-4 right-4 text-gray-600 hover:text-cyan-500 transition-colors text-xl"
                        aria-label="View project on GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
