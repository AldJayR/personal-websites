/* eslint-disable react/prop-types */
import LanguageBadge from "./LanguageBadge"

const ProjectCard = ({ project }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-6 mb-16 bg-red-400'>
            <div className="w-full h-52">
                <img src={project.url} className="object-cover" />
            </div>
            <div className="p-8 md:py-8 md:pr-8">
                <h3 className="font-open-sans font-bold text-3xl mb-4">{project.project_title}</h3>
                <p className="font-inter mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {Array.isArray(project.language)
                        ? project.language.map((lang, index) => (
                              <LanguageBadge key={index} language={lang} />
                          ))
                        : (
                            <LanguageBadge language={project.language} />
                        )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;