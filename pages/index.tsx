import type {NextPage} from 'next'
import Head from 'next/head'

import Header from "../components/header";
import About from "../components/about";
import Experience from "../components/experience";
import Education from "../components/education";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Person from "../components/person";
import Footer from "../components/footer";

const Home: NextPage = () => {
    return (
        <div className="bg-gray-900">
            <Head>
                <title>Niko Limbrunner</title>
                <meta name='description' content='Nikolai Limbrunner'/>
            </Head>
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

export default Home
