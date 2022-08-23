import motius from "../Assets/experience/motius.png";
import vi from "../Assets/experience/vi.png";
import iav from "../Assets/experience/iav.png";

const Card = function ({company, position, description, logo}) {
    return (
        <div
            className="max-w-lg px-5 py-3 transform transition duration-500 hover:scale-105 rounded-lg">
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="mb-2 text-2xl font-bold text-white">{company}</h4>
                    <h5 className="mb-2 text-xl font-medium text-white">{position}</h5>
                </div>
                <img className="h-24" src={logo} alt=""/>
            </div>
            <div className="">
                <p className="text-lg text-gray-400">{description}</p>
            </div>
        </div>
    );
};

const Experience = function () {
    return (
        <div className="flex-col pt-9 pb-6">
            <div className="text-center text-white text-4xl pb-3 font-medium">
                Experience
            </div>
            <div className="flex justify-center pt-6">
                <ol className="border-l border-gray-200">
                    <li className="mb-10 ml-4">
                        <div
                            className="relative w-4 h-4 bg-gray-200 rounded-full -left-6 top-4"/>
                        <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
                            02.2020 - Present
                        </time>
                        <Card
                            company={"Motius"}
                            position={"Software Engineer (Student)"}
                            description={
                                "Research, develop and evaluate advanced technologies such as driver assistance systems, IOT and distributed microservices"
                            }
                            logo={motius}
                        />
                    </li>
                    <li className="mb-10 ml-4">
                        <div
                            className="relative w-4 h-4 bg-gray-200 rounded-full -left-6 top-4"/>
                        <time
                            className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500"> 02.2019
                            - 11.2019
                        </time>
                        <Card
                            company={"Virtual Identity"}
                            position={"Junior System Administrator (Student)"}
                            description={
                                "Supporting the IT infrastructure and introducing and automating new IT processes."
                            }
                            logo={vi}
                        />
                    </li>
                    <li className="ml-4">
                        <div
                            className="relative w-4 h-4 bg-gray-200 rounded-full -left-6 top-4"/>
                        <time
                            className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500"> 10.2017
                            - 03.2018
                        </time>
                        <Card
                            company={"IAV"}
                            position={"Actuator and sensor department (Student)"}
                            description={
                                "Programming tools for the evaluation of sensor data and supporting data interpretation."
                            }
                            logo={iav}
                        /></li>
                </ol>
            </div>
        </div>
    );
};

export default Experience;
