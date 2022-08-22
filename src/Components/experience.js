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
                <img className="m-5 h-24" src={logo} alt=""/>
            </div>
            <div className="">
                <p className="mb-3 text-lg text-gray-400">{description}</p>
            </div>
        </div>
    );
};

const Experience = function () {
    return (
        <div className="flex">
            <div
                className="grid grid-cols-1 sm:grid-cols-1 sm:p-4 md:grid-cols-2 md:p-6 lg:grid-cols-3 lg:p-8 xl:grid-cols-3 xl:p-10 gap-8 m-auto max-w-6xl">
                <div>
                    <div>
                        <Card
                            company={"Motius"}
                            position={"Software Engineer"}
                            description={
                                "Researching, developing and evaluating advanced technologies such as IOT and driver assistance systems."
                            }
                            logo={motius}
                        />
                    </div>
                    <div>
                        <Card
                            company={"IAV"}
                            position={"Actuator and sensor department"}
                            description={
                                "Programming tools for the evaluation of sensor data and supporting in data interpretation."
                            }
                            logo={iav}
                        />
                    </div>
                </div>
                <div>
                    <Card
                        company={"Virtual Identity"}
                        position={"Junior System Administrator"}
                        description={
                            "Supporting the IT infrastructure and introducing and automating new IT processes."
                        }
                        logo={vi}
                    />
                </div>
            </div>
        </div>
    );
};

export default Experience;
