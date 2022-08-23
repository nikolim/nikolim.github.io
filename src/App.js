import Header from "./Components/header";
import About from "./Components/about";
import Experience from "./Components/experience";
import Education from "./Components/education";
import Projects from "./Components/projects";
import Skills from "./Components/skills";
import Person from "./Components/person";
import Footer from "./Components/footer";

export default function App() {
    return (
        <div className="bg-gray-900">
            <Header/>
            <About/>
            <Projects/>
            <Experience/>
            <Education/>
            <Skills/>
            <Person/>
            <Footer/>
        </div>
    );
}