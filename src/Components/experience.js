import motius from "../Assets/experience/motius.png";
import vi from "../Assets/experience/vi.png";
import iav from "../Assets/experience/iav.png";

const Card = function ({ company, position, description, logo }) {
  return (
    <div className="p-16 max-w-xl">
      <div className="px-5 flex items-center justify-between">
        <div>
          <h4 className="mb-2 text-2xl font-bold text-white">{company}</h4>
          <h5 className="mb-2 text-xl font-medium text-white">{position}</h5>
        </div>
        <img className="m-5 h-24" src={logo} alt="" />
      </div>
      <div className="px-5">
        <p className="mb-3 text-lg text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const Experience = function () {
  return (
    <div className="flex h-screen justify-center align-middle pt-32">
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
  );
};

export default Experience;
