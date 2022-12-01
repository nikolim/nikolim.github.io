import Image from "next/image";

import python from "../public/images/skills/python.png"
import javascript from "../public/images/skills/js.png"
import golang from "../public/images/skills/go.png"
import linux from "../public/images/skills/linux.png"
import gitlab from "../public/images/skills/gitlab.png"
import k8s from "../public/images/skills/k8s.png"

const Skills = function () {
    const iconStyle = "h-12 w-12 grayscale m-3 transition duration-500 hover:grayscale-0";
    return (
        <div className="flex-col p-6">
            <div className="text-center text-white text-4xl pb-3 font-medium">
                Skills
            </div>
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center p-3">
                    <Image src={python} alt={""} className={iconStyle}/>
                    <Image src={javascript} alt={""} className={iconStyle}/>
                    <Image src={golang} alt={""} className={iconStyle}/>
                    <Image src={linux} alt={""} className={iconStyle}/>
                    <Image src={k8s} alt={""} className={iconStyle}/>
                    <Image src={gitlab} alt={""} className={iconStyle}/>
                </div>
            </div>
            <div className="flex justify-center">
                <ul className="list-disc text-white text-lg">
                    <li className="pt-1">Advanced programming-skills with project-experience (Python, JavaScript, Go)
                    </li>
                    <li className="pt-1">Experience with CI/CD pipelines, cloud and tooling</li>
                    <li className="pt-1">Practiced handling of Git and project management tools</li>
                    <li className="pt-1">Advanced Linux knowledge</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;
