import ProjectCard from "./ProjectCard";
import { projects } from "../assets/data/projects";

const ProjectsList = () => {
    return (
        <div className="max-w-7xl mx-auto pt-12 md:pt-32 px-12 md:px-32" id="projects">
           <h1 className="heading-style text-4xl">PROJECTS</h1>
           <div>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
           </div>
        </div>
    )
}

export default ProjectsList;