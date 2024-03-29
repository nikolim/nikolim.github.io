import Image from "next/image";

import profile from "../public/images/person/profile.png";

const About = function () {
    return (
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 p-6 pt-24 md:pt-48">
            <div className={"object-fit max-w-[250px]"}>
                <Image src={profile} alt={""}/>
            </div>
            <div className="flex">
                <div className="default-text m-auto text-lg md:text-xl max-w-3xl">
                    Hi, I am Niko and I am enthusiastic about technology.
                    My passion is to design, program and create.
                    I am working as IT Consultant at Netlight and have background in
                    Computer Science as well as Mechanical Engineering.
                    I have industry experience as a Software Engineer working with backend, distributed microservices, web
                    development and DevOps.
                    In my free time, I enjoy experimenting with different programming languages and exploring new
                    technologies.
                </div>
            </div>
        </div>
    );
};

export default About;
