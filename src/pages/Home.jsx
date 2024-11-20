import Hero from "../components/Hero";
import ServicesSection from "../components/ServiceSection";
import { AboutMe } from "../components/AboutMe";

const Home = () => {
    /*
    const today = new Date().toISOString().split("T")[0];

    const presentationDate = "2024-12-04";

    if (today !== presentationDate) {
        return <h1 className="text-center text-4xl font-roboto">It&apos;s not presentation day!</h1>
    }
    */
    

    return (
        <>
            <Hero />
            <AboutMe />
            <ServicesSection />
        </>
    )
}

export default Home;