import ProjectCard from "./ProjectCard";
import { projects } from "../assets/data/projects";
import { motion } from 'framer-motion';

const ProjectsList = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const titleVariants = {
        hidden: { 
            opacity: 0,
            y: -30
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const getItemVariants = (index) => ({
        hidden: { 
            opacity: 0,
            x: index % 2 === 0 ? 200 : -200
        },
        visible: { 
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    });

    return (
        <motion.div 
            className="max-w-7xl mx-auto pt-12 md:pt-32 px-12 md:px-32"
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <motion.h1 
                className="heading-style text-4xl mb-16"
                variants={titleVariants}
            >
                PROJECTS
            </motion.h1>
            <div>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={getItemVariants(index)}
                    >
                        <ProjectCard 
                            project={project}
                            index={index}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectsList;