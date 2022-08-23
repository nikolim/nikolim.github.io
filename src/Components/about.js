import profile from "../Assets/person/profile.png";

const About = function () {
    return (
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 p-6">
            <div className={"object-fit max-w-[250px]"}>
                <img src={profile} className="rounded" alt=""/>
            </div>
            <div className="flex">
                <div className="default-text m-auto text-xl max-w-3xl">
                    Hi, I am Nikolai and I am enthusiastic about technology. My passion is
                    to design, program and create. I am currently doing my master in
                    Computer Science at KTH in Stockholm and have bachelor in Computer
                    Science as well as Mechanical Engineering. I am working as a Software
                    Engineer in a R&D company, focusing on AI, IOT and driver assistance
                    systems. In my free time I enjoy to experiment with different
                    programming languages and explore new technologies.
                </div>
            </div>
        </div>
    );
};

export default About;
