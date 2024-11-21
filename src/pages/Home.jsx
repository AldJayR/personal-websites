import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import Hero from "../components/Hero";
import ServicesSection from "../components/ServiceSection";
import { AboutMe } from "../components/AboutMe";
import ProjectsList from "../components/ProjectsList";
import ContactForm from "../components/ContactForm";

const Home = () => {
    /*
    const today = new Date().toISOString().split("T")[0];

    const presentationDate = "2024-12-04";

    if (today !== presentationDate) {
        return <h1 className="text-center text-4xl font-roboto">It&apos;s not presentation day!</h1>
    }
    */

    useEffect(() => {
        if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            console.error("EmailJS public key is missing!");
        } else {
            emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
            console.log("EmailJS initialized");
        }
    }, []);
    
    
    return (
        <>
            <Hero />
            <AboutMe />
            <ServicesSection />
            <ProjectsList />
            <ContactForm 
                serviceId={import.meta.env.VITE_EMAILJS_SERVICE_ID}
                templateId={import.meta.env.VITE_EMAILJS_TEMPLATE_ID}
            />
        </>
    )
}

export default Home;