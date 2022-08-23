import motius from "../Assets/experience/motius.png";
import vi from "../Assets/experience/vi.png";
import iav from "../Assets/experience/iav.png";

const Card = function ({company, position, description, logo}) {
    return (
        <div className="max-w-sm">
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
        <div className="flex-col pt-9">
            <div className="text-center text-white text-4xl pb-6 font-medium">
                Experience
            </div>
            <div
                className="grid grid-cols-1 sm:grid-cols-1 sm:p-4 md:grid-cols-2 md:p-6 lg:grid-cols-3 lg:p-8 xl:grid-cols-3 xl:p-10 gap-8 m-auto max-w-6xl">
                <Card
                    company={"Motius"}
                    position={"Software Engineer (Student)"}
                    description={
                        "Research, develop and evaluate advanced technologies such as driver assistance systems, IOT and distributed microservices"
                    }
                    logo={motius}
                />
                <Card
                    company={"Virtual Identity"}
                    position={"Junior System Administrator (Student)"}
                    description={
                        "Supporting the IT infrastructure and introducing and automating new IT processes."
                    }
                    logo={vi}
                />
                <Card
                    company={"IAV"}
                    position={"Actuator and sensor department (Student)"}
                    description={
                        "Programming tools for the evaluation of sensor data and supporting in data interpretation."
                    }
                    logo={iav}
                />
            </div>
        </div>
    );
};

export default Experience;
