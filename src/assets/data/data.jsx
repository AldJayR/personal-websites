import { 
    faHtml5, 
    faReact, 
    faCss3Alt, 
    faJava, 
    faJs, 
    faPython 
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export const services = [
    {
        service: (
            <>
                HTML/CSS/<br />JavaScript
            </>
        ),
        description: "Foundational Web Technologies",
        icons: [faHtml5, faCss3Alt, faJs]
    },
    {
        service: "React",
        description: "Powerful UI Library",
        icon: faReact
    },
    {
        service: (
            <>
                Tailwind/<br />Bootstrap
            </>
        ),
        description: "Responsive CSS Frameworks",
        icon: faCss3Alt
    },
    {
        service: "Java",
        description: "Object-Oriented Language with GUI Design",
        icon: faJava
    },
    {
        service: "C/C++",
        description: "Lower-Level Programming Language for Systems",
        icon: faCode
    },
    {
        service: "Python",
        description: "Versatile Scripting Language",
        icon: faPython
    }
];