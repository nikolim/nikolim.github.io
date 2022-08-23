import python from "../Assets/skills/python.png"
import javascript from "../Assets/skills/js.png"
import golang from "../Assets/skills/go.png"
import linux from "../Assets/skills/linux.png"
import gitlab from "../Assets/skills/gitlab.png"
import k8s from "../Assets/skills/k8s.png"

const Skills = function () {
    const iconStyle = "h-12 grayscale m-3 transition duration-500 hover:scale-125 hover:grayscale-0";
    return (
        <div className="flex-col py-3">
            <div className="text-center text-white text-4xl pb-3 font-medium">
                Skills
            </div>
            <div className="flex justify-center">
                <div className="flex flex-wrap p-3">
                    <img src={python} className={iconStyle} alt=""/>
                    <img src={javascript} className={iconStyle} alt=""/>
                    <img src={golang} className={iconStyle} alt=""/>
                    <img src={linux} className={iconStyle} alt=""/>
                    <img src={k8s} className={iconStyle} alt=""/>
                    <img src={gitlab} className={iconStyle} alt=""/>
                </div>
            </div>
            <div className="flex justify-center">
                <ul className="list-disc text-white text-lg">
                    <li className="pt-1">Advanced programming-skills with project-experience (Python, JavaScript, Go)</li>
                    <li className="pt-1">Practiced handling of Git, CI/CD and project management tools</li>
                    <li className="pt-1">Expertise in Machine Learning and Reinforcement Learning</li>
                    <li className="pt-1">Advanced Linux knowledge</li>
                </ul>
            </div>
        </div>
);
};

export default Skills;
